// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Login from "./pages/Login";
import Register from "./pages/register"
import Todos from "./pages/Todos";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}
