import { useEffect } from "react";
import { useState } from "react";

const baseApi = "https://testcookie.com:3000/api";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const setFieldValues = ({ target: { name, value } }) => {
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch(`${baseApi}/auth/me`, {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw res;
      })
      .then((me) => {
        console.log()
        setUser(me);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    fetch(`${baseApi}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(fields),
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw res;
      })
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        if (error.status === 401) {
          setError("Email hoặc mật khẩu không chính xác!");
        } else {
          setError("Lỗi không xác định!!!");
        }
      });
  };

  return (
    <div className="container">
      {user ? (
        <p>Xin chào {user.name}</p>
      ) : (
        <>
          <h1>Login</h1>
          <form className="form-login">
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={fields.email} onChange={setFieldValues} id="email" />
            </div>
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={fields.password} onChange={setFieldValues} id="password" />
            </div>
            <button onClick={handleLogin}>Submit</button>
          </form>
          {!!error && <p style={{ color: "red" }}>{error}</p>}{" "}
        </>
      )}
    </div>
  );
}

export default App;
