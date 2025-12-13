import Content from "./Content";
import { ThemeContext } from "./ThemeContext";
import "./App.css";
import { useContext } from "react";

function App() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Content />
    </div>
  );
}

export default App;
