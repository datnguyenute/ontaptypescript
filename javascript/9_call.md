# Call method
- Gọi hàm
- Là phương thức trong prototype của Function constructor, phương thức này được dùng để gọi hàm và cũng có thể `bind  this` cho hàm.
- `bind` thì bind `this` để tạo ra phương thức mới với đối tượng mới (chỉ ràng buộc thôi) còn `call` thì cũng bind `this` nhưng thực thi hàm luôn.

## Ví dụ
- Gọi hàm sử dụng `call` tương tự như sử dụng `()`
> random() hoặc random.call();
- Gọi hàm và `bind` this, lưu ý trong strict mode vẫn có `this` nếu được bind.
```
'use strict'
this.firstName = "Dat"
this.lastName = "Nguyen"
function showFullName() {
  console.log(`${this.firstName} ${this.lastName}`);
}
showFullName.call(this);
```

- Thể hiện được tính extends trong lập trình hướng đối tượng `OOP`
```
function Animals(name, weight) {
  this.name = name;
  this.weight = weight;
}
function Chicken(name, weight, legs) {
  Animals.call(this, name, weight); // <= Kế thừa
  this.legs = legs
}
const datnb = new Chicken("Dat", 70, 2);
console.log(datnb);
```
- Mượn hàm (function borrowing), thêm ví dụ với arguments
```
function logger() {
  const arr = Array.prototype.slice.call(arguments);
  //const arr = Array.from(arguments); //ES6
  //const arr = [...arguments];
  arr.forEach(item => console.log(item))
  console.log(arr);
}
logger(1,2,3,4,5);

```