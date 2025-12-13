# useCallback
- Giúp ghi nhớ một hàm, để react không tạo lại hàm mới mỗi lần re-render

## Cú pháp
```
const fn = useCallback(() => {
  // code here
}, [deps]);
```

## Tại sao sử dụng useCallback
- Vì mỗi lần re-render, tất cả hàm trong component đều được tạo mới (với địa chỉ mới)
- Gặp 2 trường hợp:
  - Truyền function xuống child Component (đã sử dụng React.memo) thì lúc nào Child cũng bị render
  - Nếu hàm được sử dụng là dependencies của useEffect/useMemo
```
useEffect(() => { ... }, [handleClick]);
// effect luôn chạy vô hạn
=>
const handleClick = useCallback(() => {...}, []);
```

>useCallback + React.memo: bộ đôi tối ưu hiệu suất

➡️ Parent re-render → Child không re-render<br>
➡️ Callback ổn định → React.memo phát huy tác dụng