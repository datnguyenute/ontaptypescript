# Strict-mode - Chế độ nghiêm ngặt
- Báo lỗi hoặc ngăn chặn khi sử dụng những đoạn mã không an toàn hay dễ gây nhầm lẫn
- Ra mắt từ es6+
- Ví dụ kinh điển: Quên khai báo sử dụng let, var, const để khai báo biến và có thể gây các lỗi tiềm ẩn và rò rỉ bộ nhớ.


## Cách sử dụng:
1. Thêm "use strict" vào đầu file .js (Nó phải đứng ở đầu file)
2. Thêm "use strict" vào ngay sau thẻ mở `<script>`
3. Thêm "use strict" vào đầu phạm vi hàm (chỉ hoạt đồng đầu phạm vi)

## Ứng dụng:
- Quên khai báo let, var
- Trường hợp vẫn ghi gán lại giá trị cho thuộc tính trong Object có `writable : false`
- Báo lỗi khi hàm có tham số trùng tên.
```
function sum(a, a) {
 return a + a;
}
console.log(sum(2,3));
```
- Khai bao hàm trong `code block` thì hàm sẽ thuộc phạm vi của `code block`
```
{
 function sum(a, b) {return a + b}
}
console.log(sum(2,3));
```
- Tránh đặt tên biến, hàm bằng một s61 từ khóa "nhạy cảm" của ngôn ngữ. Ví dụ: `private`, `protected`,...

## Công dụng:
1. Tránh quên từ khóa khai bao biến.
2. Trành trùng tên biến dẫn tới lỗi logic.
3. Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global.
