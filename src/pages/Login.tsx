// src/pages/Login.tsx
import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("/auth/login", { username, password });
      localStorage.setItem("token", res.data.token);
      navigate("/todos");
      console.log(`登錄成功...${res.data.token}`);
    } catch (err) {
      alert("登录失败");
    }
  };

  return (
    <div>
      <h2>登录</h2>
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="用戶名" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="密码" type="password" />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
}
