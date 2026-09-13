# OLP/26 V5.5 — Supabase setup

1. Tạo project Supabase.
2. Mở **SQL Editor** → chạy toàn bộ `supabase-schema.sql`.
3. Trong **Authentication → URL Configuration**, thêm URL đang host app vào Redirect URLs.
4. Nếu muốn Google Login: bật Google provider trong **Authentication → Providers** và cấu hình OAuth credentials theo hướng dẫn Supabase.
5. Bật **Anonymous Sign-ins** trong **Authentication → Sign In / Providers** nếu muốn app tự kết nối mà không bắt đăng nhập. App sẽ tạo phiên khách ẩn danh và giữ phiên đó trên thiết bị.
6. Cách tiện nhất: mở `supabase-config.js`, điền **Project URL** và **publishable/anon key** một lần. App sẽ tự kết nối trên các lần mở sau. Không dùng `service_role` key.
   Nếu không muốn lưu config trong file public, vẫn có thể nhập thủ công trong Settings như trước.
6. Đăng nhập bằng magic link hoặc Google. Từ đó app lưu local trước và tự đồng bộ lên `user_states` khi có mạng.

## Cơ chế conflict

- `sessions`, `mocks`, `errors`: hợp nhất theo `id`.
- `topics`: giữ `solved/confidence` cao hơn và trạng thái complete nếu một thiết bị đã đạt.
- `reviews`: giữ lần ôn mới nhất.
- App vẫn chạy hoàn toàn local nếu chưa cấu hình Supabase hoặc mất mạng.

## Class mode

- Giáo viên đăng nhập → chuyển **Giáo viên** → **Tạo lớp cloud**.
- Gửi mã lớp cho học sinh.
- Học sinh đăng nhập trên thiết bị của mình → vào phần Giáo viên tạm thời hoặc dùng nút **Tham gia lớp** → nhập mã.
- Giáo viên có thể xem readiness/số buổi của thành viên đã đồng bộ.

> Bản này dùng RLS để học sinh chỉ ghi state của chính mình. Giáo viên chỉ đọc được state của thành viên thuộc lớp do mình sở hữu.
