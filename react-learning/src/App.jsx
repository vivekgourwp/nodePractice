import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
import Counter from "./tasks/useEffect/useEffect";
import Todo from "./tasks/Todos/Todo";
import { Footer1, Footer2 } from "./components/Footer";

function App() {
  

  return (
    <>
      <Navbar />
      <Counter/>
      <Todo />
      <Footer1 />
      <Footer2 />
    </>
  );
}

export default App;
