import { actions } from "./store";
import { useGlobalStore } from "./store";

function App() {
  const [state, dispatch] = useGlobalStore();
  const { todo, todos, edit } = state;

  return (
    <div>
      <h1>React hooks: UseContext + Reducer</h1>
      <input value={todo} onChange={(e) => dispatch(actions.todoInput(e.target.value))} />
      <button onClick={() => dispatch(actions.todoAdd(todo))}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div>
              {edit.index !== index ? (
                <span>
                  <span onClick={() => dispatch(actions.todoEditChange({index, value: todo}))}>{todo}</span>
                  <span onClick={() => dispatch(actions.todoRemove(index))}>&times;</span>
                </span>
              ) : (
                <input
                  value={edit.value}
                  onBlur={(e) => {
                    dispatch(
                      actions.todoEdit({
                        index,
                        value: e.target.value,
                      })
                    );
                  }}
                  onChange={(e) => dispatch(actions.todoEditChange({index, value: e.target.value}))}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
