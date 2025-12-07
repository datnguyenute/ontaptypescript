# Arrow function
- Là hàm mũi tên
- Ngắn gọn
## Các sử dụng
> const sum = (a, b) => a + b;

## Đặc tính
- Không thể sử dụng để làm function constructor
- Không có context

# Module
- Import và export (nó là module thì mới import/export)
> import logger from './logger.js'

- Export default: mỗi module chỉ export được 1 default
  - Tạo file index.js để export default cũng được: Export ra một module khác


# Enhanced object
- Định nghĩa key: value cho object  ngắn gọn hơn
```
var name = 'Javascript'
var price = 1000;

var course  = {
  name, price
}
```
- Định nghĩa method cho object
```
var name = 'Javascript'
var price = 1000;


var course  = {
  name, price,
  getName() {
    return name;
  }
}
```
- Định nghĩa key cho object dưới dạng biến

```
var fieldName = 'name';
var fieldPrice = 'price';

const course = {
  [fieldName]: 'Javascript',
  [fieldPrice]: 1000,
}
```


# Destructuring: Bóc tách giá trị từ array hoặc object và gán chúng vào các biến
```
// Array:
const arr = [1, 2, 3];
const [a, b, c] = arr;
// Object:
const user = {name: "Dat", age: 25 }
const {name, age} = user;
```
- Khai báo được default value, đổi tên được  khi destructuring 
```
var course = {
  name: "JS",
  child: {
    name: "React",
  },
};

var {
  child: { name: childName },
  name: parentName,
  description = "default description",
} = course;
console.log(description);
console.log(childName);
console.log(parentName);
```

# Toán tử rest `(...)`
Rest operator gom các phần còn lại và một biến dạng mảng hoặc object
```
// Array
const [a, ...b] = [1, 2, 3, 4];
console.log(a); // 1
console.log(b); // 2,3,4
// Object
const {id , ...info} = {id: 1, name: "Dat", age: 18}
console.log(a); // 1
console.log(info); // { name: "Dat", age: 18 }
```

# Toán tử Spread `(...)`
Toán tử giải để trải (expand) các phần tử của mảng, đối tượng, hoặc iterable vào nơi cần danh sách các phần tử riêng lẻ.
Ngược lại với toán tử `rest` (gom lại)
- Bỏ đi cặp ngoặc `[]`, và lấy cách giá trị bên trong
- Có tính override để hợp nhất
```
const a = [1, 2, 3];
const b = [...a];

console.log(b); // [1, 2, 3];

// Gộp mảng
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b]; // [1, 2, 3, 4];

// Trong object
// copy object
const user = {name: "Dat", age: 25 }
const clone = {...user}; // clone = {name: "Dat", age: 25 }
```

- Khác nhau `rest` và `spread`
  - rest: gom các phần còn lại
  - spread: trải ra thành danh sách