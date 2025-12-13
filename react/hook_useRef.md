# useRef (References)
- Lưu giá trị bất kỳ qua một tham số bên ngoài function component
- Giúp giữ lại giá trị qua nhiều lần render và cũng không gây re-render


## Sử dụng
- Nó là một hàm, nhận đối số là một `initialValue`, chỉ sử dụng giá trị `initialValue` lúc component được mounted. Sau khi re-render thì không sử dụng nữa
`const ref = useRef(initialValue)`
và truy cập bằng `ref.current`

## Dùng để làm gì
- Lấy và điều khiểm DOM element
```
const inputRef = useRef();

function App() {
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </>
  );
}
```

- Lưu giá trị 'trung gian' giữa các effect
```
const prevValue = useRef();

useEffect(() => {
  prevValue.current = value;
});
```

- Lưu timeout, intervalue, animation id
```
const timer = useRef();

function start() {
  timer.current = setTimeout(() => {
    console.log("done");
  }, 1000);
}

function stop() {
  clearTimeout(timer.current);
}
```