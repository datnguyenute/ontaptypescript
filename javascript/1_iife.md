# 1. IIFE (Immediately Invoked Function Expression)

(Ngay lập tức - Gọi - Hàm - Biểu thức)
Tức là một function Expression được gọi ngay lập tức - Hay còn gọi là biểu thức tạo ra một hàm - và hàm được gọi ngay lập tức

> Self-Invoked Function: Một hàm tự gọi

## IIFE trông như nào?

- Example:

```
(function () {
  console.log("NOW");
})();
```

```
((message) => {
  console.log(message);
})("Dat");

```

## Dùng dấu ; trước IIFE

Ở javascript, bị lỗi `is not a function` khi sử dụng toán tử gọi hàm `()` trên một giá trị không phải là hàm

- Example:

```
let name = 'Dat'
(() => {
  console.log('NOW')
})()
```

Để xử lý thì chỉ cần thêm `;` ở trước function trong trường hợp dự án không sử dụng `;` ở cuối

```
let name = 'Dat'
;(() => {
  console.log('NOW')
})()
```

## IIFE là private

Không thể truy cập ở ngoài phạm vi

```
(function myFunc() {
  console.log("NOW");
})();
myFunc();
```

Bên trong vẫn truy cập được

```
let i = 0;
(function myFunc() {
  i++;
  console.log(i);
  if (i < 10) {
    myFunc();
  }
})();
```

## Sử dụng IIFE khi nào?

Mục đích: Chạy ngay 1 lần không cần sử dụng lại <br>
Dự án to, tên trùng nhiều => cần IIFE để tránh đặt trùng tên.<br>
Muốn không ảnh hưởng phạm vi bên ngoài.<br>
Muốn các biến không thể truy cập từ bên ngoài.<br>

Ví dụ: Thư viện Carosel các kiểu được add vào thì các biến không ảnh hưởng gì tới dự án người khác khi đặt trùng tên

> Hầu hết các thư viện đều là IIFE

## Các cách tạo ra một IIFE

Đơn giản là bọc function lại và gọi `()`

> (function () {})()<br>
> !function(){}()<br>
> +function(){}()

## Ví dụ sử dụng IIFE
> Khi muốn viết thư viện, khi muốn tính toàn vẹn dữ liệu

```
const app = {
  cars: [],

  add(car) {
    this.cars.push(car);
  },
  edit(index, car) {
    this.cars[index] = car;
  },
  remove(index) {
    this.cars.splice(index, 1);
  },
};
```
Không có tính toàn vẹn dữ liệu
>Biến thành IIFE toàn vẹn
```
const app = (function () {
  const cars = [];
  return {
    list() {
      return cars;
    },
    get(index) {
      return cars[index];
    },
    add(car) {
      cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    remove(index) {
      cars.splice(index, 1);
    },
  };
})();
```
