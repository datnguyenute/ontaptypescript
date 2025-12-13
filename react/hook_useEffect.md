# UseEffect

## Sử dụng để
- Update DOM
  - Set state, xử lý DOM event
- Call API
- Listen DOM event
  - Scroll, Resize
- Cleanup
  - Remove Listener/ Unsubscribe
  - Clear timer

## Các trường hợp sử dụng
### 1. useEffect(callback) Không có dependencies (ít dùng)
  - Gọi callback mỗi khi component re-render
  - Gọi callback sau khi component thêm element vào DOM
> Dòng code useEffect vẫn chạy nhưng callback chưa chạy, sau khi DOM render thì mới chạy<br>
> useEffect sinh ra để xử lý side effect => Đúng mặc nguyên tắc
> Nếu logic phức tạp, thì phải ưu tiên tạo ra giao diện người dùng, SIDE EFFECT là hành động bên cạnh hoạt động chính => Đẩy ra phần sau là hợp lý
### 2. useEffect(callback,[]) Có dependencies nhưng rỗng
  - Chỉ gọi callback 1 lần sau khi component mounted
> Sử dụng trong tình huống chạy 1 lần thôi, hoặc call API 1 lần
### 3. Có dependencies
  - Call back được gọi lại mỗi khi dependencies thay đổi (kiểm tra trước và sau ===)
> dependencies đơn giản là 1 biến
## Trong 3 trường hợp thì:
- Callback luôn được gọi sau khi component mount
- Cleanup function luôn được gọi trước khi component unmounted
- Cleanup function luôn được gọi trước khi callback được gọi (trừ trường hợp mounted đầu tiên)