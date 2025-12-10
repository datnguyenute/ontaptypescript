# NPM NPX là gì?
NPM: Node Package Manager and Installer

- NPM: có 2 cách cài
  - Project scope: Chỉ cài thư viện của chính dự án đang chạy, tại thư mục đang đứng
    - npm install react react-dom --save => dependencies  (hoặc để trống)
    - npm install react react-dom --save-dev => devDependencies (hoặc -D)
  - Global scope: Cài vào thư mục user (-g)
    - Thư viện thực thi
    - npm i --global create-react-app 
- NPX: Node => NPM => NPX
  - Tại sao dùng NPX?
    -  Hỗ trợ để thực thi các file trong thư mục bin (của node_modules), nếu không thấy thì tìm ở global, không có thì install (install xong thực thi xong xoá bỏ)
  - Gặp lỗi khi: npx create-react-app tiktok
    - Do đặt tên thư mục có dấu,...
- Khác nhau yarn và npm
  - Đều là package manager
  - NPM: là kho lưu trự, là website quản lý, là một command line interface (CLI)
    - package.json
  - YARN: của Facebook, update về bảo mật,...
    - yarn.lock
  - file .lock:
    - Install lại nhanh hơn (đọc file lock)
    - Các thư viện trùng dependencies thì không cài nữa
# Phỏng vấn
  - Nắm được cơ chế tạo ra sự khác biệt về performances
    - Yarn: Cài các thư viện cùng lúc (có thể nhanh hơn, nhưng chưa chắc)
    - Npm: Cài lần lượt 
  - Cơ chế cache:
    - Yarn: Dành ra 1 phân vùng để cache các thư viện.
        - Lần sau nhanh hơn, nhưng lại tốn nhiều dung lượng lưu trữ
    - Npm: 
        - Không cache, 
  - Một số cái mà yarn có