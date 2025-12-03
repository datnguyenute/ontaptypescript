# Bind function - Ràng buộc
- Giúp ràng buộc đối tượng trong hàm, trong phương thức
- Ràng buộc `this` nào cũng được.

- Ví dụ:
```
this.fName = 'Vuong';
this.lName = 'Thao';

const teacher = {
  fName: 'Dat',
  lName: 'Nguyen',
  getFullName() {
    return `${this.fName} ${this.lName}`;
  }
}

const student = {
  fName: 'Long',
  lName: 'Nguyen',
}

const getFull = teacher.getFullName;
console.log(teacher.getFullName()); // Dat Nguyen
console.log(getFull()); // Vuong Thao
const getFull2 = teacher.getFullName.bind(teacher);
console.log(getFull2()); // Dat Nguyen
const getFull3 = teacher.getFullName.bind(student);
console.log(getFull3()); // Long Nguyen
```

- Phương thức `bind()` sẽ trả về một hàm mới.
- Có thể nhận được các đối số như hàm ban đầu.
  - Tức là vẫn sử dụng các đối số `parameter`
  ```
    teacher.getFullName.bind(teacher, ... đối số);
    // hoặc khi sử dụng
    console.log(getFull3(... đối số)); // Long Nguyen
  ```