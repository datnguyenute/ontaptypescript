# useReducer
- là một hook giúp quản lý state theo dạng reducer patter giống Redux:
  - Có state
  - Có action
  - Có reducer
  - Có dispacth
- Phù hợp tình huống mà dữ liệu phức tạp hơn
- Logic dễ hiểu hơn
## Cú pháp
`const [state, dispatch] = useReducer(reducer, initialState);`

## Khi nào dùng?
- Nhiều state phức tạp
- Nhiều logic chuyển đổi state
- Nhiều action khác nhau cập nhật cùng 1 state hoặc nhiều state
- Muốn tác logic update ra khỏi component (tách ra các file reducer, action, constant)

## Ưu điểm
- Tập trung logic → code gọn
- Dễ test
- Dễ dàng trong dự án lớn


# Ứng dụng TODO APP với Reducer

1. Layout
2. InitState
3. Create action
4. Create reducer
5. Apply to JSX

```
// todo/constants.js
export const INPUT_TODO = "input_todo";
export const ADD_TODO = "add_todo";
export const REMOVE_TODO = "remove_todo";

// todo/actions.js
import { ADD_TODO, INPUT_TODO, REMOVE_TODO } from "./constants";

export const inputTodo = (payload) => {
  return {
    type: INPUT_TODO,
    payload,
  };
};
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

//  reducer.js
import { ADD_TODO, INPUT_TODO, REMOVE_TODO } from "./constants";

// initial state
export const initialState = {
  todo: "",
  todos: [],
};

// reducer
const reducer = (state, action) => {
  switch (action.type) {
    case INPUT_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);

      return {
        ...state,
        todos: newTodos,
      };
    default:
      return new Error("Invalid action");
  }
};

export default reducer;

// Todo/logger.js
function logger(reducer) {
  return (state, action) => {
    console.group(action.type);
    console.log('Prev state: ', state);
    console.log('Action: ', action);
    const newState = reducer(state, action);
    console.log('Next state: ', newState);
    console.groupEnd();
    return newState;
  };
}

export default logger;

// Todo/index.js
import { useReducer, useRef } from "react";
import reducer, { initialState } from "./reducer";
import { addTodo, inputTodo, removeTodo } from "./actions";
import logger from './logger';

function App() {
  const [state, dispacth] = useReducer(logger(reducer), initialState);
  const { todo, todos } = state;

  const inputRef = useRef();

  const handleKeyup = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    dispacth(addTodo(todo));
    dispacth(inputTodo(""));
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>TODO APP</h1>
      <div style={{ display: "flex", gap: 5 }}>
        <input
          ref={inputRef}
          value={todo}
          onInput={(e) => dispacth(inputTodo(e.target.value))}
          onKeyUp={handleKeyup}
          placeholder="Enter todo..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ width: 200 }}>
            <span>{todo}</span>
            <span onClick={() => dispacth(removeTodo(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

```
