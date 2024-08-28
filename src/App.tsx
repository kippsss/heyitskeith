import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/Hero/Hero";
import Journey from "./components/Journey/Journey";
import Skills from "./components/Skills/Skills";
import Interview from "./components/Interview/Interview";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className="bg-background-primary"
      data-theme={isDark ? "dark" : "light"}
    >
      <div className="appBody">
        <div className="appLeft">
          {/* <AppBar isDark={isDark} setIsDark={setIsDark} /> */}
          <Hero />
        </div>
        <div className="appRight">
          <About />
          <Experience />
          {/* <Journey /> */}
        </div>
        {/* <Skills /> */}
        {/* <Interview /> */}
      </div>
    </div>
  );
}

export default App;
