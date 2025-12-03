# Bind function - Ràng buộc
- Là phương thức trong prototype của Function constructor
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

```
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
$('button').onclick = function() {
  console.log('Clicking');
}

```
## Tóm tắt
- Phương thức `bind()` cho phép ràng buộc `this` cho một phương thức (function).
- Phương thức `bind()` sẽ trả về một hàm mới với context mới được bind.
- Hàm được trả về từ `bind()` vẫn có thể nhận được các đối số của hàm gốc.


## Ví dụ ứng dụng quản lý ô tô
```
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const app = (function() {
  const cars = [];

  cars.push('BMW');

  const root = $('#root');
  const input = $('#input');
  const button = $('#add');

  return { // <= Closure
    add(car) {
      cars.push(car);
      this.render();
    },
    delete(index) {
      cars.splice(index, 1);
    },
    render() {
      const htmlRender = cars.map((car, index) => `
        <li>
          ${car}
          <span class="delete" data-index=${index}>&times</span>
        </li>
        `).join('');
      root.innerHTML = htmlRender;
    },
    handleDelete(e) {
      const deleteBtn =  e.target.closest('.delete');
      if (deleteBtn) {
        const index = deleteBtn.dataset.index;
        this.delete(index);
        this.render();
      }
    },
    init: function() {
      // Handle DOM event
      button.onclick = () => {
        const car = input.value;
        this.add(car);
        this.render();

        input.value = null;
        input.focus();
      }

      root.onclick = this.handleDelete.bind(this);

      this.render();
    }
  }
})(); // <= IIFE

app.init();
```
