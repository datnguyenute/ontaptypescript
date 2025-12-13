# useLayoutEffect
- Giống với useEffect
- Thời điểm callback của useLayoutEffect được chạy là sau khi DOM được cập nhật, nhưng trước khi trình duyệt render UI (vẽ lại giao diện)
- Khác với UseEffect là callback được gọi sau khi render UI.
> Được dùng để chỉnh sửa layout tránh nhấp nháy giao diện 

## Khác biệt với UseEffect
| Use Effect    | Use Layout Effect |
| -------- | ------- |
| 1. Cập nhật state  | 1. Cập nhật lại state    |
| 2. Cập nhật lại DOM  | 2. Cập nhật lại DOM    |
| 3. Render UI | 3. Cleanup chạy (sync)      |
| 4. Cleanup chạy    | 4. useLayoutEffect Callback chạy (sync)    |
| 5. useEffect Callback nếu deps thay đổi    | 5. Render UI    |

## Sử dụng:
- Lấy kích thước, vị trị phần tử DOM.
- Căn chỉnh layout trước khi render

## Ví dụ:
- Cuộn đến cuối page ngay lập tức
```
useLayoutEffect(() => {
  containerRef.current.scrollTop = containerRef.current.scrollHeight;
});
```