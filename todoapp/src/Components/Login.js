import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../users.json";
import './Login.css'
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      navigate("./TodoMain", { replace: true });
    }
  };
  return (
    <div>
      <form className="login_form" onSubmit={submitHandler}>
        <span>Giriş Yapın</span>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="İsiminizi Giriniz"
          type="text"
        ></input>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Şifrenizi Giriniz"
          type="password"
        ></input>
        <button type="submit">Oturum Aç</button>
      </form>
    </div>
  );
};

export default Login;
