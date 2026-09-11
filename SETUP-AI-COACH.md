# OLP/26 V6 — AI Coach setup

V6 giữ API key hoàn toàn ở Supabase Edge Function. Frontend chỉ gọi `supabase.functions.invoke('ai-coach')` bằng session JWT của người dùng.

## 1. Cập nhật database

Chạy lại file `supabase-schema.sql` trong Supabase SQL Editor. Phần cuối file tạo `ai_requests` và `ai_cache`, kèm RLS theo `auth.uid()`.

## 2. Deploy Edge Function

Cài Supabase CLI, login/link project, sau đó từ thư mục project:

```bash
supabase functions deploy ai-coach
```

`supabase/config.toml` đã bật `verify_jwt = true`.

## 3. Chọn AI provider

### Groq — mặc định

```bash
supabase secrets set AI_BASE_URL=https://api.groq.com/openai/v1
supabase secrets set AI_API_KEY=YOUR_GROQ_KEY
supabase secrets set AI_MODEL=openai/gpt-oss-20b
supabase secrets set AI_DAILY_LIMIT=20
```

### Chuyển sang OpenAI sau này

Không sửa frontend/Edge Function. Chỉ đổi secret:

```bash
supabase secrets set AI_BASE_URL=https://api.openai.com/v1
supabase secrets set AI_API_KEY=YOUR_OPENAI_KEY
supabase secrets set AI_MODEL=YOUR_OPENAI_MODEL
```

### Gemini fallback — tùy chọn

Nếu primary provider lỗi/rate-limit, function có thể fallback sang Gemini nếu có:

```bash
supabase secrets set GEMINI_API_KEY=YOUR_GEMINI_KEY
supabase secrets set GEMINI_MODEL=gemini-2.5-flash
```

Nếu không đặt `GEMINI_API_KEY`, fallback sẽ tự bỏ qua.

## 4. Cách V6 dùng AI

- `weekly_report`: nút **AI phân tích tuần** trên Smart Coach.
- `daily_coach`: endpoint đã hỗ trợ để sinh kế hoạch ngày.
- `mistake_analysis`: endpoint đã hỗ trợ phân tích WA/TLE/mistake log.
- `problem_review`: workspace V6.1 gửi statement + C++ + verdict; UI mở Hint 1 → 2 → 3 theo Socratic Method.

System prompt không mặc định đưa code C++ hoàn chỉnh. Nó ưu tiên hint theo tầng, invariant, edge case và complexity.

## 5. Quota và cache

- Mặc định 20 lượt AI / user / 24 giờ, chỉnh bằng `AI_DAILY_LIMIT`.
- Request giống hệt được cache theo SHA-256 của task + context.
- Cache thuộc từng user và bị RLS bảo vệ.
- Cache được kiểm tra trước rate limit; kết quả cache vẫn xem lại được khi đã hết quota và không tính thêm lượt provider.

## 6. Bảo mật

Không đưa `AI_API_KEY`, `GROQ_API_KEY`, `GEMINI_API_KEY` hoặc Supabase `service_role` vào `app.js`/HTML.
