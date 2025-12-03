# Hoisting - Kéo lên/Đưa lên
- Đề cập tới việc khai báo được đưa lên đầu phạm vi của chúng

## Hoisting với "var", "function declaration"
- Đưa các khai báo "var" và khai báo hàm lên đầu phạm vi được khai báo (đầu block)

- Ví dụ var:
```
console.log(age) // undefined
console.log(fullName) // Lỗi fullName is not defined
var age = 16;
```
tương tự với
```
var age;
console.log(age) // undefined
console.log(fullName) // Lỗi fullName is not defined
age = 16;
```

- Ví dụ về Function Declaration:
```
console.log(sum(1,2)); // 3
function sum(a, b) {return a + b}
```
> Lưu ý: Phần khai báo được đưa lên trên, phần gán giá trị không được đưa lên.<br>

> Lưu ý 2: Tất cả var a đều thuộc CÙNG MỘT scope 
```
{
  var a = 1;
  {
    var a = 2;
    {
      console.log(a);
      var a = 3;
    }
  }
}
// Output: 2 (không phải là undefined)
```
## Hoisting với "let", "const"

- Ví dụ:
```
console.log(fullName); // script.js:1 Uncaught ReferenceError: Cannot access 'fullName' before initialization
let fullName = "Dat";
```
  - Lưu ý: Khai báo biến với "let", "const" khi được hoisted không được tạo giá trị và đưa vào vùng "Temporal Dead Zone" (Vẫn được hoisted để tránh lấy biến đó ngoài phạm vi)



## Bonus
- Ví dụ:
```
const counter1 = makeCounter();
console.log(counter1());
function makeCounter() {
  let counter = 0;

  return increase;

  function increase() {
    return ++counter;
  }
}
```
> Output: 1 (đối với function vẫn được hoisted trước khi return nên không bị lỗi)