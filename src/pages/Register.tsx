import { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleRegister = async () => {
      try {
        await axios.post("/auth/register", { username, password });
        navigate("/auth/login");
        console.log(`注冊成功...`);
      } catch (err) {
        alert("注冊失败");
      }
    };
  
    return (
      <div>
        <h2>注冊</h2>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="用戶名" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="密码" type="password" />
        <button onClick={handleRegister}>注冊</button>
      </div>
    );
}
