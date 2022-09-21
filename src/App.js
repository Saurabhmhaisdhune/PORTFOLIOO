import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import Sidebar from "./Components/Sidebar";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavBar setShow={setShow} />
      <div className="flex-item">
        <div>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <div className="sidebar">
          <Sidebar show={show} setShow={setShow} />
        </div>
      </div>
    </>
  );
}

export default App;
