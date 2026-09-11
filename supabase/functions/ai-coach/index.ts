import { createClient } from 'npm:@supabase/supabase-js@2'

type Task = 'daily_coach' | 'mistake_analysis' | 'weekly_report' | 'problem_review' | 'solution_reasoning'

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { ...cors, 'Content-Type': 'application/json; charset=utf-8' },
})

const SYSTEM = `Bạn là OLP AI Coach cho học sinh Competitive Programming. Hãy huấn luyện theo Socratic Method, ưu tiên tư duy thay vì làm hộ.
Quy tắc:
- Không đưa lời giải C++ hoàn chỉnh trừ khi đầu vào nói rõ người học yêu cầu code hoàn chỉnh.
- Hint theo tầng: (1) tính chất/constraint cần nhận ra, (2) kỹ thuật hoặc cấu trúc dữ liệu, (3) complexity mục tiêu.
- Khi phân tích WA/TLE, ưu tiên invariant, edge case, overflow, indexing, disconnected graph, all-negative, N=1 và complexity trước khi chỉ thẳng dòng lỗi.
- Không bịa verdict/test case đã chạy. Nếu thiếu dữ liệu, nói rõ đó là giả thuyết.
- Viết tiếng Việt ngắn gọn, thực dụng cho học sinh Chuyên Tin.
- Luôn trả JSON hợp lệ, không markdown.`

const TASK_PROMPTS: Record<Task, string> = {
  daily_coach: 'Tạo kế hoạch học hôm nay từ dữ liệu tracker. Ưu tiên 1 topic chính, 1 review ngắn, 1 mục tiêu đo được.',
  mistake_analysis: 'Phân tích mistake log. Tìm pattern lặp, root cause có khả năng nhất, edge case nên tự test, và bước sửa thói quen.',
  weekly_report: 'Tạo báo cáo tuần: điểm mạnh, điểm yếu, pattern lỗi, thay đổi mastery, và 3 hành động tuần tới.',
  problem_review: 'Đánh giá submission Competitive Programming. Xác định giả thuyết root cause cho verdict, invariant cần kiểm tra, edge case tự test, complexity mục tiêu và đúng 3 tầng hint từ mơ hồ đến cụ thể. Không đưa full code/solution.',
  solution_reasoning: 'Đánh giá HƯỚNG LÀM bằng lời, không yêu cầu code. Kiểm tra tính đúng, invariant, chứng minh/điều kiện cần, complexity và liệt kê các trường hợp có thể xảy ra mà người học chưa xét. Sau đó tạo 1 dry-run challenge nhỏ để người học tự mô phỏng. Không thay thế hướng làm bằng editorial ngay.',
}

async function sha256(text: string) {
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return Array.from(new Uint8Array(bytes)).map(b => b.toString(16).padStart(2, '0')).join('')
}

function parseModelJson(text: string) {
  const cleaned = text.trim().replace(/^```json\s*/i, '').replace(/```$/, '').trim()
  try { return JSON.parse(cleaned) } catch { return { summary: cleaned } }
}

async function callOpenAICompatible(system: string, user: string) {
  const baseURL = (Deno.env.get('AI_BASE_URL') || 'https://api.groq.com/openai/v1').replace(/\/$/, '')
  const apiKey = Deno.env.get('AI_API_KEY') || Deno.env.get('GROQ_API_KEY')
  const model = Deno.env.get('AI_MODEL') || 'openai/gpt-oss-20b'
  if (!apiKey) throw new Error('AI_API_KEY/GROQ_API_KEY chưa được cấu hình')
  const res = await fetch(`${baseURL}/chat/completions`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      temperature: 0.25,
      response_format: { type: 'json_object' },
      messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
    }),
  })
  if (!res.ok) throw new Error(`Primary AI ${res.status}: ${await res.text()}`)
  const data = await res.json()
  return { provider: 'primary', model, text: data.choices?.[0]?.message?.content || '{}', usage: data.usage || null }
}

async function callGemini(system: string, user: string) {
  const key = Deno.env.get('GEMINI_API_KEY')
  if (!key) throw new Error('Gemini fallback chưa cấu hình')
  const model = Deno.env.get('GEMINI_MODEL') || 'gemini-2.5-flash'
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ role: 'user', parts: [{ text: user }] }],
      generationConfig: { responseMimeType: 'application/json', temperature: 0.25 },
    }),
  })
  if (!res.ok) throw new Error(`Gemini ${res.status}: ${await res.text()}`)
  const data = await res.json()
  return { provider: 'gemini', model, text: data.candidates?.[0]?.content?.parts?.[0]?.text || '{}', usage: data.usageMetadata || null }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const auth = req.headers.get('Authorization')
  if (!auth?.startsWith('Bearer ')) return json({ error: 'Bạn cần đăng nhập Supabase' }, 401)

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? Deno.env.get('SUPABASE_PUBLISHABLE_KEY') ?? '',
    { global: { headers: { Authorization: auth } } },
  )
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) return json({ error: 'JWT không hợp lệ' }, 401)

  const body = await req.json().catch(() => ({}))
  const task = body.task as Task
  if (!TASK_PROMPTS[task]) return json({ error: 'Task không hợp lệ' }, 400)

  const rawInput = body.input || null
  if ((task === 'problem_review' || task === 'solution_reasoning') && rawInput) {
    const code = String(rawInput.code || '')
    const problem = String(rawInput.problem || '')
    const idea = String(rawInput.idea || '')
    if (code.length > 24000 || problem.length > 5000 || idea.length > 7000) return json({ error: 'Input AI Coach vượt giới hạn an toàn' }, 413)
  }
  const payload = { task, context: body.context || {}, input: rawInput }
  const cacheKey = await sha256(JSON.stringify(payload))
  if (body.useCache !== false) {
    const { data: cached } = await supabase.from('ai_cache').select('response,created_at').eq('cache_key', cacheKey).maybeSingle()
    if (cached) return json({ ok: true, cached: true, result: cached.response })
  }

  const maxPerDay = Number(Deno.env.get('AI_DAILY_LIMIT') || 20)
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  const { count } = await supabase.from('ai_requests').select('*', { count: 'exact', head: true }).gte('created_at', since)
  if ((count || 0) >= maxPerDay) return json({ error: `Đã đạt giới hạn ${maxPerDay} lượt AI / 24 giờ` }, 429)

  const schema = task === 'solution_reasoning' ? '{"summary":"...","score":8,"correctness":"đúng/có điều kiện/chưa đúng","strengths":["..."],"gaps":["..."],"cases_to_check":["case + vì sao quan trọng"],"complexity_assessment":"...","questions":["1 câu Socratic quan trọng nhất"],"dry_run":{"input":"test nhỏ cụ thể","question":"yêu cầu mô phỏng từng bước","check":"điểm cần tự đối chiếu sau khi làm"},"next_actions":["..."],"confidence":0.0}' : '{"summary":"...","observations":["..."],"hints":[{"level":1,"text":"gợi ý về constraint/invariant"},{"level":2,"text":"gợi ý kỹ thuật/vùng code cần soi"},{"level":3,"text":"gợi ý cụ thể nhưng không full solution"}],"root_causes":["..."],"edge_cases":["test cần tự chạy + lý do"],"complexity_target":"O(...) time · O(...) memory","next_actions":["..."],"review_in_days":3,"confidence":0.0}';
  const prompt = `${TASK_PROMPTS[task]}\n\nDỮ LIỆU TRACKER:\n${JSON.stringify(payload, null, 2)}\n\nJSON schema bắt buộc ưu tiên: ${schema}`
  let response
  try { response = await callOpenAICompatible(SYSTEM, prompt) }
  catch (primaryError) {
    try { response = await callGemini(SYSTEM, prompt) }
    catch (fallbackError) {
      console.error(primaryError, fallbackError)
      return json({ error: 'Các AI provider đều lỗi hoặc chưa cấu hình' }, 502)
    }
  }

  const result = { ...parseModelJson(response.text), _meta: { provider: response.provider, model: response.model, usage: response.usage } }
  await supabase.from('ai_requests').insert({ task, provider: response.provider, model: response.model })
  await supabase.from('ai_cache').upsert({ cache_key: cacheKey, task, response: result, updated_at: new Date().toISOString() }, { onConflict: 'user_id,cache_key' })
  return json({ ok: true, cached: false, result })
})
