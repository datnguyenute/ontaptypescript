import { TODO_ADD, TODO_EDIT, TODO_EDIT_CHANGE, TODO_INPUT, TODO_REMOVE } from "./constants";

const initialState = {
  todo: "",
  edit: {index: null, value: ''},
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case TODO_INPUT:
      return {
        ...state,
        todo: action.payload,
      };
    case TODO_ADD:
      return {
        ...state,
        todo: "",
        todos: [...state.todos, action.payload],
      };
    case TODO_EDIT:
      // payload: {index, value}
      const editTodos = [...state.todos];
      editTodos.splice(action.payload.index, 1, action.payload.value);
      return {
        ...state,
        edit: {index: null, value: ''},
        todos: editTodos,
      };
    case TODO_EDIT_CHANGE:
      console.log(action.payload);
      return {
        ...state,
        edit: {
          index: action.payload.index,
          value: action.payload.value
        },
      };
    case TODO_REMOVE:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);
      return {
        ...state,
        edit: {index: null, value: ''},
        todos: newTodos,
      };
    default:
      return new Error("Invalid action.");
  }
};

export { initialState };
export default reducer;
