import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import { server } from "../server.js";

function request(path, options = {}) {
  return new Promise((resolve, reject) => {
    const port = server.address().port;
    const req = http.request({
      hostname: "127.0.0.1",
      port,
      path,
      method: options.method || "GET",
      headers: options.headers || {}
    }, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    });
    req.on("error", reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

test("server health check returns 200", async () => {
  await new Promise(resolve => server.listen(0, resolve));
  try {
    const res = await request("/api/health");
    assert.equal(res.status, 200);
    const json = JSON.parse(res.body);
    assert.equal(json.ok, true);
    assert.equal(json.version, "v5");
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});

test("server serves index.html for root path", async () => {
  await new Promise(resolve => server.listen(0, resolve));
  try {
    const res = await request("/");
    assert.equal(res.status, 200);
    assert.ok(res.headers["content-type"].includes("text/html"));
    assert.ok(res.body.includes("OLP Coach") || res.body.includes("html"));
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});

test("server blocks path traversal attempts", async () => {
  await new Promise(resolve => server.listen(0, resolve));
  try {
    // Attempt standard ../
    const res1 = await request("/..%2fpackage.json");
    assert.equal(res1.status, 404);

    // Attempt traversal to parent directory
    const res2 = await request("/%2e%2e/%2e%2e/secret.txt");
    assert.equal(res2.status, 404);

    // Attempt sibling prefix traversal
    const res3 = await request("/../algo-coach-fake/secret.txt");
    assert.equal(res3.status, 404);

    // Accessing a directory should return 404
    const res4 = await request("/icons");
    assert.equal(res4.status, 404);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});

test("server handles malformed percent encoding gracefully (HTTP 400)", async () => {
  await new Promise(resolve => server.listen(0, resolve));
  try {
    const res = await request("/%c0%af");
    assert.equal(res.status, 400);
    assert.ok(res.body.includes("malformed URI"));
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
