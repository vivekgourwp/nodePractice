import { useState,useEffect } from "react";

function Counter2() {
  const [count2, setCount2] = useState(0);

  useEffect(()=>{
    alert("Use Effect is working now In counter 2",count2);
  },[count2]);

  useEffect(() => {
    document.title = `Counter: ${count2}`;

    return () => {
        document.title = `React App`
    }
  },[count2]);

  return (
    <>
      <h1>{count2}</h1>

      <h4>{count2 % 2 === 0 ? "Count2!! is Even" : "Count2 is Odd"}</h4>

      <h4>{count2 > 10 ? "Maximum reached" : ""}</h4>

      <button onClick={() => setCount2(prev => prev + 1)}>+</button>

      <button
        disabled={count2 < 1}
        onClick={() => setCount2(prev => prev - 1)}
      >
        -
      </button>

      <button onClick={() => setCount2(0)}>Reset</button>
    </>
  );
}

export default Counter2;