import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Footer from "./components/Footer";
import { Footer1, Footer2 } from "./components/Footer";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1>{count}</h1>
      <h4>{count % 2 === 0 ? "Count is Even": "Count is Odd"}</h4>
      <h4>{count > 10 ? "Maximum reached":""}</h4>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button disabled = {count< 1} onClick={() => {if(count> 0){ setCount((prev) => prev - 1) }} }>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <Footer1 />
      <Footer2 />
    </>
  );
}

export default App;
