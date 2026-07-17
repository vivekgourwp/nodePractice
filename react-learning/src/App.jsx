import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
import Counter from "./tasks/counter/Counter";
import { Footer1, Footer2 } from "./components/Footer";

function App() {
  

  return (
    <>
      <Navbar />
      <Counter/>
      <Footer1 />
      <Footer2 />
    </>
  );
}

export default App;
