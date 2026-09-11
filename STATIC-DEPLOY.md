# OLP 2026 V5.5 — Static/PWA build

Thư mục `dist/` là bản chạy trực tiếp trên static hosting/preview. Không cần Node.js.

- PWA: `manifest.webmanifest` + `service-worker.js`, có thể Add to Home Screen.
- Offline-first: thao tác luôn ghi vào localStorage trước; mất mạng vẫn học/ghi log bình thường.
- Supabase: tùy chọn. Chạy `supabase-schema.sql`, sau đó nhập Project URL + publishable/anon key trong nút ⚙.
- Đồng bộ: nút cloud ↥ ép sync ngay; khi có mạng app cũng tự sync sau thay đổi.
- Quick Review/flashcard tối ưu cho điện thoại.
- Spaced repetition 1–3–7–14–30 ngày và export lịch `.ics`.
- Teacher Cloud Mode: tạo lớp, mã tham gia, xem readiness thành viên đã sync.
- Export/import JSON vẫn giữ làm phương án backup thủ công.

Xem `SETUP-SUPABASE.md` để cấu hình cloud.
