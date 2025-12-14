# useImperativeHandle
- Cho phép component con chủ động expose (mở ra) API cho component cha thông qua `ref`.
- Bình thường:
  - `ref` trở thẳng vào DOM
  - với `useImperativeHandle -> kiểm soát cha được gọi gì

## Vì sao sử dụng useImperativeHandle
- Để component cha cần điều khiển component con

## Sử dụng
- Component con phải dùng `forwardRef`
```
import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
    clear() {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} />;
});
```
- Component cha
```
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
      <button onClick={() => inputRef.current.clear()}>
        Clear
      </button>
    </>
  );
}
```
- Component cha không truy cập trực tiếp vào DOM
- DOM đóng kín trong component con
- Sử dụng để Component cha chỉ thực hiện những gì component con expose ra ngoài. ngoài ra không được làm gì khác

## Ví dụ thực tế sử dụng với modal
```
const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setOpen(true),
    close: () => setOpen(false),
  }));

  if (!open) return null;
  return <div className="modal">Modal</div>;
});
```
- Ở cha:
```
const modalRef = useRef();

<button onClick={() => modalRef.current.open()}>
  Open Modal
</button>
```
