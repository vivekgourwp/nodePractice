import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  //   setTodos([...todos, input]);

  function deleteTodo(indexToDelete) {
    const updatedTodos = todos.filter((todo, index) => index !== indexToDelete);
     setTodos(updatedTodos);
  }

  return (
    <>
      <h1>Todo App </h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={() => {
          setTodos([...todos, input]);
          setInput("");
        }}
      >
        Add
      </button>

      {todos.length === 0 ? (
        <p>No Todos</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo} <button onClick={() => deleteTodo(index)}>
  Delete
</button></li>
            
          ))}
        </ul>
      )}
    </>
  );
}

export default Todo;
