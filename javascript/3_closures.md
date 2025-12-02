# 3. Closure - Tính chất sự khép kín được khái niệm hoá thành closures
<strong>Là một hàm có thể ghi nhớ nơi nó được tạo</strong> và <strong>truy cập đươc biến ở bên ngoài phạm vi của nó.</strong>
- Mỗi function là một Closure rồi
- Mỗi hàm khi nó được gọi thì nó tạo ra được môi trường riêng biệt thực thi cho nó.
- Ví dụ:
```
function createCounter() {
  let count = 0;
  function increase() {
    return ++count;
  }

  return increase
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
```

## Ứng dụng
- Viết code ngắn gọn hơn, tránh lặp đi lặp lại
  ```
  function createLogger(namespace) {
    function logger(message) {
      console.log(`[${namespace}] ${message}`);
    }
    return logger;
  }

  const logInfo = createLogger('Info');
  logInfo('Bắt đầu gửi mail');
  logInfo('Gửi mail lỗi lần 1, thử lại');
  logInfo('Gửi mail thành công');

  const logError = createLogger('Error');
  logError('Email không tồn tại');

  ```
  >[Info] Bắt đầu gửi mail<br>
   [Info] Gửi mail lỗi lần 1, thử lại<br>
   [Info] Gửi mail thành công<br>
   [Error] Email không tồn tại


   ```
   // Save localStorage setting
  const createStorage = function (key) {
    const storage = JSON.parse(localStorage.getItem(key)) ?? {};
    const save = function () {
      localStorage.setItem(key, JSON.stringify(storage));
    };
    return {
      get() {
        return storage[key];
      },
      set(key, value) {
        storage[key] = value;
        save();
      },
      remove(key) {
        delete storage[key];
        save();
      },
    };
  };

  // Profile.js
  const profileStorage1 = createStorage("profile_setting");
  profileStorage1.set("fullName", "Dat Nguyen");
  profileStorage1.set("age", 18);
  profileStorage1.set("address", "HCM");
   ```
- Biểu diễn, ứng dựng tính Private trong OOP
  - Không cho phép bên ngoài truy cập được
  - Đảm bảo tính toàn vẹn dữ liệu
## Lưu ý
- Biến được tham chiếu (refer) trong closure sẽ không được xoá khỏi bộ nhớ khi hàm cha thực thi xong
- Các khai niệm Javascript nâng cao rất dễ gây nhầm lẫn