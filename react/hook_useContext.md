# useContext

- Cho phép component con lấy dữ liệu trực tiếp từ component cha (`Provider`) mà không cần truyền props theo từng cấp. ( tránh props `drilling`)

## Bản chất:

- `createContext`: tạo context
- `Provider`: nơi cung cấp context
  = `useContext`: Nơi nhận context

## Khi nào sử dụng useContext
- Theme (dark/light)
- Auth user
- Language / i18n
- Global config
- Store nhỏ, đơn giản


## Example

```
import { createContext } from "react";

export const ThemeContext = createContext();
```

Bọc component cha

```
function App() {
  const theme = "dark";

  return (
    <ThemeContext.Provider value={theme}>
      <Layout />
    </ThemeContext.Provider>
  );
}
```

Lấy ở thằng component con

```
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}
```


# Redux với React-context
## Ưu điểm của Redux
1. Debugging capabilities
  - Có thể debug được
2. Middleware
  - Có sẵn kiến trúc middleware
3. Addons and extensibility
  - Có add on và dễ mở rộng hơn
4. Cross-platform and cross-framework useage
  - Đa nền tảng, sử dụng tất cả các dự án viết bằng JS, còn Context thì chỉ cho React
5. Depending on your app's setup, much better performance than working with just Context
  - Redux có performance hơn hẳn, nếu Provider nó bọc hết thì các component dễ bị thay đổi. 
  - Ở Redux thì ở component nào thay đổi thì nó mới render thôi.

> Yếu điểm của Context:
- Do nó render lại component nhiều. Nên sử dụng trong một số trường hợp ít thay đổi state (làm global state), ngược lại thì dùng Redux tối ưu hơn