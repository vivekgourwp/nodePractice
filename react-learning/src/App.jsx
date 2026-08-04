// import { useState } from 'react';

import { useEffect, useState, useRef } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const isFirstRender = useRef(true);

  const addTodo = () => {
    if (!todo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
    setTodo("");
  };

  const clearTodo = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };

  // ✅ Load effect (declaration order se koi farak nahi padta ab, guard ki wajah se)
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // ✅ Save effect — pehli render pe SKIP karega
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;   // pehli baar save mat karo, sirf load hone do
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h2>Hello world</h2>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodo}>Clear Todo</button>

      {/* {todos.length === 0 && <p>No todos yet. Add one!</p>}
      {todos.length === 1 && <p>You have 1 todo</p>}
      {todos.length > 1 && <p>You have {todos.length} todos </p>} */}
      <p>
        {todos.length === 0
          ? "No todos yet. Add one!"
          : todos.length === 1
          ? "You have 1 todo"
          : `You have ${todos.length} todos`}
      </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;


