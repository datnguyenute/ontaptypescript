# This keyword
Từ khoá this trong Javascript đề cập đến đối tượng mà nó thuộc về.
- Trong các ngôn ngữ khác, chỉ để ý tới `this` nằm trong một function.
```
const phone = {
  name: 'iphone 6',
  color: 'pink',
  weight: 30,

  takePhoto() {
    console.log('Take a photo: ', this);
  },

  childPhone: {
    nameChild: 'camera',
    childMethod() {
      console.log('child method: ', this);
    }
  }
}

phone.takePhoto();
phone.childPhone.childMethod();
```
>Take a photo:  
{name: 'iphone 6', color: 'pink', weight: 30, childPhone: {…}, takePhoto: ƒ}
childPhone
: 
{nameChild: 'camera', childMethod: ƒ}
color
: 
"pink"
name
: 
"iphone 6"
takePhoto
: 
ƒ takePhoto()
weight
: 
30
[[Prototype]]
: 
Object <br>
child method:  
{nameChild: 'camera', childMethod: ƒ}
childMethod
: 
ƒ childMethod()
nameChild
: 
"camera"
[[Prototype]]
: 
Object

## Đặc tính
1. Trong một phương thức, `this` tham chiếu tới đối tượng truy cập phương thức (đối tượng trước dấu `.`, tức đối tượng mà đang gọi tới phương  thức)
- Ví dụ về hàm tạo trong Javascript:
```
function Car(name, color) {
  this.name = name;
  this.color = color;
  this.run = function() {
    console.log(this);
  }
}

const honda = new Car('Honda', 'pink');
honda.run();
```
>Car {name: 'Honda', color: 'pink', run: ƒ}

2. Đứng ngoài phương thức, `this` tham chiếu tới đối tượng `global`
- Tức là nó không đứng trong phương tức
```
console.log(this);
```

## Lưu ý
- `this` trong hàm là dại diện cho đối tượng sẽ được tạo.
  - `this`
- `this` trong một hàm là `undefined` khi ở `strict mode`;
  ```
  'use strict'
  function myFunc() {
    console.log(this);
  }
  myFunc();
  // undefined
  ```
- Các phương thức `bind(), call(), apply()` có thể  tham chiếu `this` tới đối tượng khác.
```
```
- `Arrow function` không có `this`, nó không có `context`, nên this ở trong `arrow function` nó sẽ lấy `this` ở phạm vi gần nó nhất.
```
```
- Khi thực thi từ khoá `this` mới biết đang trỏ về đâu, tuỳ vào ngữ cảnh (`context`)