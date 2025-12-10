# React hooks
- Từ khi có hooks thì function comoponent xịn xò hơn, làm đầy đủ
- Hooks là khái niệm, là hàm/method được cung cấp bới ReactJS
- Mỗi hook có một tính năng cụ thể để giải quyết từng vấn đề
- Sài cái gì gắn cái đó
- Hook: gắn vào component

## Hooks được thêm vào từ phiên bản 16.8.0
- Muốn sử dụng phải import

```
import {useState} from 'react'
```
- List hook:
```
useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo, useReducer, useContext, useImperativeHandle, useDebugValue
React19:
  useState
  useActionState
  useCallback
  useContext
  useDebugValue
  useDeferredValue
  useEffect
  useEffectEvent
  useId
  useImperativeHandle
  useInsertionEffect
  useLayoutEffect
  useMemo
  useOptimistic
  useReducer
  useRef
  useSyncExternalStore
  useTransition
```

## Hooks sumary
CallAPI, ...

- Chỉ dùng cho function component
- Component đơn giản cú pháp và trở nên dễ hiểu
  - Không bị chia logic ra như methods trong `lifecycle` của Class Component
  - Không cần sử dụng `this`
- Sử dụng Hooks khi nào?
  - Dự án mới => Hooks
  - Dự án cũ:
    - Component mới => Function comonent + Hooks
    - Component cũ => Giữ nguyên, có thời gian tối ưu.
  - Logic nghiệp vụ cần sử dụng các tích chất của OOP => `Class component`
- Người mới nên bắt đầu với Function hay Class?
  - => Function component
- Kết hợp function component & class hay không??
  - Được, thằng Babel đều phân tích ra thành cấu trúc của REact ra

## Note
Babel: chỉ lo chuyển cú pháp JSX → JavaScript mà trình duyệt hiểu.

React: tạo Virtual DOM.

ReactDOM: nhận Virtual DOM → tạo/chỉnh sửa DOM thực trong trang.