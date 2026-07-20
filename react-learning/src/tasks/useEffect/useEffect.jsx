import { useState,useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    alert("Use Effect is working now");
  });

  return (
    <>
      <h1>{count}</h1>

      <h4>{count % 2 === 0 ? "Count is Even" : "Count is Odd"}</h4>

      <h4>{count > 10 ? "Maximum reached" : ""}</h4>

      <button onClick={() => setCount(prev => prev + 1)}>+</button>

      <button
        disabled={count < 1}
        onClick={() => setCount(prev => prev - 1)}
      >
        -
      </button>

      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;