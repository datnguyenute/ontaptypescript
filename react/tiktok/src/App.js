import { useState } from "react";
import "./App.css";
function App() {
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

  console.log(`re-render`);
  return (
    <div className="App">
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
