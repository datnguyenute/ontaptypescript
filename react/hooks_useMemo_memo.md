# React.memo (khác với useMemo)
- memo() -> là một Higher Order Component (`HOC`), có thể bọc được các component khác.
- Hay sử dụng với `useCallback` 
- 

# Vì sao sử dụng
- Dùng để ghi nhớ một componennt, giúp tránh render không cần thiết khi props không thay đổi


# Sử dụng:
- sử dụng `useMemo` để cố định các giá trị 

# Hoạt động:
- Khi component cha re-render:
  - React so sánh props mới và props cũ của component hiện tại (`===`)
  - Nếu giống thì component mà được bọc mới `memo()` sẽ không re-render
  - Nếu khác thì render bình thường
- React.memo chỉ ngăn re-render do `props`

# Sử dụng với useMemo và useCallback:
- sử dụng `useMemo` để cố định các giá trị là Object (Function / Array/ Object) vì có thể nó không thay đổi thật nhưng do nó là giá trị tham chiếu, nên Component vẫn sẽ bị render



----------------------------------
# useMemo
- Giúp ghi nhớ một giá trị đã tính toán, để React không phải tính lại mỗi lần render (trừ khi dependencies thay đổi)
- Tránh thực hiện một logic nào đó không cần thiết

## Cú pháp
`const value = useMemo(() => doSomthing(), [deps])`

## Dùng đề làm gì?
- Tối ưu hoá các tính toán nặng
```
const result = useMemo(() => expensiveCalculate(data), [data]);
```

- Tránh tạo object/array gây re-render cho Child-component đã được React.memo
```
const options = useMemo(() => ({ dark: true }), []);
<Child options={options} />;
```

-  Tối ưu trong deps của useEffect
```
useEffect(() => {
  console.log("run");
}, [filters]);
```
>Nếu filters là object tạo mới → effect chạy hoài.

```
// Giải quết
const filters = useMemo(() => ({ status: "active" }), []);

useEffect(() => {
  console.log("run");
}, [filters]);
```