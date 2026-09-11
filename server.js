/**
 * OLP/26 optional V5 sync backend.
 * Node 18+ only, no external dependencies.
 * This is a small personal/classroom sync service, not a production auth server.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const STORE_FILE = path.join(DATA_DIR, 'store.json');
const PORT = Number(process.env.PORT || 4173);
const MIME = { '.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml' };
fs.mkdirSync(DATA_DIR,{recursive:true});
if(!fs.existsSync(STORE_FILE)) fs.writeFileSync(STORE_FILE, JSON.stringify({profiles:{},classes:{}},null,2));

function readStore(){ try{return JSON.parse(fs.readFileSync(STORE_FILE,'utf8'));}catch{return {profiles:{},classes:{}};} }
function writeStore(data){ fs.writeFileSync(STORE_FILE, JSON.stringify(data,null,2)); }
function send(res,status,body,type='application/json; charset=utf-8'){ res.writeHead(status,{'Content-Type':type,'Cache-Control':'no-store'}); res.end(type.startsWith('application/json')?JSON.stringify(body):body); }
function bodyJSON(req){ return new Promise((resolve,reject)=>{let raw='';req.on('data',c=>{raw+=c;if(raw.length>2_000_000) reject(new Error('too large'));});req.on('end',()=>{try{resolve(raw?JSON.parse(raw):{});}catch(e){reject(e);}});}); }

const server=http.createServer(async(req,res)=>{
  const url=new URL(req.url,`http://${req.headers.host||'localhost'}`);
  if(url.pathname==='/api/health') return send(res,200,{ok:true,version:'v5',time:new Date().toISOString()});
  const syncMatch=url.pathname.match(/^\/api\/sync\/([A-Za-z0-9_-]+)$/);
  if(syncMatch){
    const id=syncMatch[1]; const store=readStore();
    if(req.method==='GET') return send(res,200,{profileId:id,state:store.profiles[id]||null});
    if(req.method==='PUT'){
      try{ const payload=await bodyJSON(req); store.profiles[id]={...payload,serverUpdatedAt:new Date().toISOString()}; writeStore(store); return send(res,200,{ok:true,profileId:id,serverUpdatedAt:store.profiles[id].serverUpdatedAt}); }
      catch(e){ return send(res,400,{ok:false,error:'invalid_payload'}); }
    }
    return send(res,405,{ok:false,error:'method_not_allowed'});
  }
  if(url.pathname==='/api/profile/new' && req.method==='POST'){
    const id=crypto.randomUUID().slice(0,8); const store=readStore(); store.profiles[id]={createdAt:new Date().toISOString()}; writeStore(store); return send(res,201,{profileId:id});
  }
  let filePath=path.join(ROOT, url.pathname==='/'?'index.html':decodeURIComponent(url.pathname).replace(/^\//,''));
  if(!filePath.startsWith(ROOT) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) return send(res,404,'Not found','text/plain; charset=utf-8');
  res.writeHead(200,{'Content-Type':MIME[path.extname(filePath)]||'application/octet-stream'}); fs.createReadStream(filePath).pipe(res);
});
server.listen(PORT,()=>console.log(`OLP/26 V5 running at http://localhost:${PORT}`));
