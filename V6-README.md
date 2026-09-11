# OLP/26 V6 — Multi-device AI Coach

V6 kế thừa V5.5 và bổ sung AI Provider Layer phía sau Supabase Edge Function.

## Kiến trúc

Cloudflare/static frontend → Supabase Auth/RLS → Edge Function `ai-coach` → Groq/OpenAI-compatible provider → Gemini fallback (optional).

## Mới trong V6

- AI Weekly Coach ngay trong Smart Coach.
- Provider cấu hình bằng environment variables; không khóa vào Groq.
- JWT bắt buộc cho Edge Function.
- Rate limit theo user / 24 giờ.
- Response cache theo user.
- Socratic Competitive Programming prompt.
- API tasks sẵn có: weekly report, daily coach, mistake analysis, problem review.

Đọc `SETUP-SUPABASE.md` trước, sau đó `SETUP-AI-COACH.md`.
