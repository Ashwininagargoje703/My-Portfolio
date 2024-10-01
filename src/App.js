import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Github from "./Components/Github";

import Contacts from "./Components/Contacts";
import AnimatedCursor from "react-animated-cursor";
import Education from "./Components/Education";
function App() {
  return (
    <div className="App">
       <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#4189b4",
          cursor: "auto",
          zIndex: 999999,
        }}
        outerStyle={{
          border: "1px solid #4189b4",
          zIndex: 999999,
        }}
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <MiniPro /> */}
      <Education />
      <Github />
      <Contacts />
    </div>
  );
}

export default App;
