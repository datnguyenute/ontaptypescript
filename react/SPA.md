# SPA - Single Page Application
- ReatJS là 1 trong nhựng thư viện tạo ra SPA
- Các ông lớn sử dụng SPA: Facebook, google, Twitter
- Các SPA khác: Shoppee, 30shine, chotot,...

## Cách triển khai
- SPA: Single Page Application
- MPA: Multiple Page Application

## Sự khác biệc
## SPA
  - Chỉ có 1 trang duy nhất (index.html)
  - Cách tiếp cận hiện đại
  - Không tải lại trang
## MPA
  - Cổ điển
  - Tải lại trang

## So sánh
  - SPA:
    - Có trải nghiệm nhanh do phần lớn được tải từ lần đầu. (Tối ưu thì lúc đầu tải ít, sau đó tải về từ từ)
  - MPA:
    - Chậm hơn khi sử dụng
## Bóc tách
  - SPA có phần Frontend riêng biệt
  - MPA FE và BE phụ thuộc nhau nhiều hơn
## SEO
  - SPA không thân thiện với SEO
  - SPA trải nghiệm di động tốt hơn

## UX
  - SPA mang trải nghiệm tốt (nhất là mobile)

## Quá trình phát triển
  - SPA dễ tái sử dụng trong code (component)
  - SPA bóc tách FE và BE:
    - Chia team phát triển song song
    - Phát triển mobile dễ hơn
## Phụ thuộc Javascipt
  - SPA phụ thuộc vào Javascript
  - MPA có thể không cần Javascript

## Chọn SPA hay MPA?
- Tuỳ vào trường hợp: 
- Nếu quan tâm vào trải nghiệm người dùng
- SPA có chi phí cao hơn
- MPA nhiều request thì có thể tăng tải cho server nhiều hơn

## CSR và SSR
- CRS - Client Side Rendering (SPA)
  - Tất cả giao diện được render ở phía Client (trình duyệt, mobile) thực hiện việc render giao diện
- SSR - Server Side Rendering
  - Máy chủ trả về đầy đủ giao diện, khi trình duyệt request lên thì server trả về tất cả về để hiển thị