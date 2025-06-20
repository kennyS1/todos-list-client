// src/pages/Todos.tsx
import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState("");

  const fetchTodos = async () => {
    const res = await axios.get("/todos");
    setTodos(res.data);
  };

  const addTodo = async () => {
    await axios.post("/todos", { content });
    setContent("");
    fetchTodos();
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    await axios.put(`/todos/${id}`, { completed: !completed });
    fetchTodos();
  };

  const deleteTodo = async (id: string) => {
    await axios.delete(`/todos/${id}`);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>我的Todos</h2>
      <input value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={addTodo}>添加</button>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo._id}>
            <span
              onClick={() => toggleTodo(todo._id, todo.completed)}
              style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
            >
              {todo.content}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>删除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
