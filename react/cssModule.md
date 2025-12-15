# Css module
CSS Module là cách viết CSS mà class name được scope cục bộ cho từng component.

👉 Tránh:
- trùng class
- ghi đè CSS không mong muốn
- CSS “toàn cục” khó kiểm soát
# Sử dụng
- Đổi tên file css thành `.module.css`
- Ex: `button.css` => `Button.module.css`
- khi build React tự đổi tên: `.button { ... }` thành `Button_button__3Xk9a`

```
import styles from "./Button.module.css";

function Button() {
  return (
    <button className={styles.button}>
      Click
    </button>
  );
}
```

- Dùng nhiều class
```<button className={`${styles.button} ${styles.primary}`}>Click</button>```

# Thư viện clsx và classnames
- Là thư viện để ghép className nhẹ
  - Giúp  condition class dễ đọc
  - gọn hơn cách sử dụng template string

## Ví dụ:
`<div className={clsx("box", isActive && "active")} />`
```
<div
  className={clsx({
    box: true,
    active: isActive,
    disabled: isDisabled,
  })}
/>
```
- Làm việc với CSS Module
```
import styles from "./Button.module.css";
import clsx from "clsx";

<button
  className={clsx(
    styles.button,
    isPrimary && styles.primary,
    isDisabled && styles.disabled
  )}
>
```

# SASS để dùng SCSS
- Lồng css (nesting)
```
.card {
  padding: 12px;
  .title {
    font-weight: bold;
  }
  &:hover {
    background: #eee;
  }
}
```
- Khai báo biến: `$primary: #2563eb;`
- Chia files
```
  styles/
 ├─ _variables.scss
 ├─ _mixins.scss
 └─ main.scss

 @use "variables" as *;
 @use "mixins";

```
- Sử dụng lại logic (mixin, function)
```
 @mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  @include flex-center;
}
```
- Extend
  - @extend cho phép một selector “kế thừa” toàn bộ rule của selector khác.
  ```
  .btn {
    padding: 8px 16px;
    border-radius: 6px;
  }

  .btn-primary {
    @extend .btn;
    background: blue;
  }
  ```
- Code clean hơn, dễ maintain hơn
