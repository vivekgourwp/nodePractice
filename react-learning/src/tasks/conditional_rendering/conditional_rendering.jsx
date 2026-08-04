import { useState } from "react";

function TodoList({ todos }) {
  const [filter, setFilter] = useState("all");

  // Conditional logic — filtered list banate hain
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // 'all'
  });

  const [sortAZ, setSortAZ] = useState(false);

  const sortedTodos = sortAZ
    ? [...filteredTodos].sort((a, b) => a.text.localeCompare(b.text))
    : filteredTodos;

  return (
    <div>
      {/* Filter buttons */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <button onClick={() => setSortAZ(true)}>Sort A-Z</button>

      {/* Conditional rendering: agar list empty hai toh message dikhao */}
      {filteredTodos.length === 0 ? (
        <p>No todos found!</p>
      ) : (
        <ul>
          

          {sortedTodos.map((todo) => (
            <li key={todo.id}>
              {todo.completed===true ? <s>{todo.text}</s> : <span>{todo.text}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
