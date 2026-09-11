# OLP/26 V5.5 — Multi-device Learning

Bản này nâng V5 thành một app học cá nhân đa thiết bị, vẫn chạy static và offline-first.

## Đã có

- Smart Coach / mastery / topic priority hoạt động thật trong `app.js`.
- Error Notebook + spaced repetition 1–3–7–14–30 ngày.
- Daily Training Generator.
- Quick Review / flashcard tối ưu cho điện thoại.
- Export lịch ôn `.ics`.
- PWA (`manifest.webmanifest`, `service-worker.js`) để Add to Home Screen và dùng app shell khi offline.
- Supabase Auth: magic link + Google OAuth.
- Local-first cloud sync: ghi local trước, tự sync khi online, merge sessions/mocks/errors theo ID.
- Teacher Cloud Mode: tạo lớp, mã tham gia, xem readiness và số buổi của thành viên đã sync.
- Backup JSON import/export vẫn giữ lại.

## Chạy static

Mở bằng một static server (hoặc dùng hosting/preview có sẵn). `.openai/hosting.json` đã trỏ đến `dist/`.

## Bật Supabase

Xem `SETUP-SUPABASE.md` và chạy `supabase-schema.sql` trong Supabase SQL Editor.

Không đưa `service_role` key vào frontend. Chỉ dùng publishable/anon key cùng RLS.
