# Primitive Types & Reference Types trong Javascript
Primitive Types: Kiểu dữ liệu nguyên thủy, (đơn giản) <br>
Reference Types: Kiểu dữ liệu không nguyên thủy (phức tạp)
## 1. Value types (Primitive data types)
- String
- Number
- Boolean
- BigInt
- Symbol
- undefined
- null
> Khi gán cho nó 1 giá trị thì nó sẽ lưu giá trị đó <br>
> Tại 1 thời điểm thì chỉ lưu 1 giá trị <br>
> Là cách mà `tham trị` hoạt động
```
let a = 1;
let b = a;
a = 2;
console.log(b); // 1
```
>Lưu giá trị khi mà đã gán cho biến đó.
## 2. Reference types (Non-primitive data types)
- Object
- Array
- Function
> Array và function cũng là 1 Object
 - Tham chiếu, gán địa chỉ
 - Khi gán lại object thì vùng nhớ mới được tạo ra
 - Khi Object lồng nhau, thì cứ một object mới được tạo ra thì một vùng nhớ được tạo ra

## Data type with function 
- Value type: Lưu giá trị
- Reference types: Lưu địa chỉ trỏ đến -> giá trị đang lưu trong vùng nhớ