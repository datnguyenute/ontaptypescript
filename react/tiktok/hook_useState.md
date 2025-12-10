# useState

- Giúp đơn giản hoá quá trình thay đổi của dữ liệu ra giao diện người dùng.

## Dùng khi nào?

- Khi muốn dự liệu thay đổi thì giao diện người dùng tự động được cập nhật (render theo dữ liệu)

## Cách dùng:

```
const [state, setState] = useState(initState)
```

- Vì sao là hooks => Vì import nó ra và gắn lại component
- Khi `setState` thì thằng React gọi lại hàm App 1 lần nữa. (nhưng không lấy lại giá trị khởi tạo)

## Lưu ý

- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Cú pháp quy ước: state + `set`State
- Set state với callback?
  - setState có thể truyền giá trị callback
  ```
    const handleIncrease = () => {
      setCounter((prev) => prev + 1);
      setCounter((prev) => prev + 1);
    }
  ```
- InitialState với callback?

  - Truyền hàm vào thì nó không sử dụng hàm làm init và là kết quả `return` của hàm

  ```
  let [counter, setCounter] = useState(orders.reduce((acc, curr) => acc + curr))

  ```

- Set state là thay thế state bằng giá trị mới.
```
  const [info, setInfo] = useState({
    name: "ABC",
    age: 11,
    address: "HCM",
  });

  const handleUpdate = () => {
    setInfo((prev) => {
      return {
        ...info,
        bio: "Hello",
      };
    });
  };
```
