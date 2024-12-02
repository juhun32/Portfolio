import React, { useState } from "react";
import email from "./img/email.png";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
// import resume from "./img/resume.png";
import moon from "./img/moon.png";
import sun from "./img/sun.png";
import resume from "./resume.pdf";

// import Footer from "./components/Footer";
import Intro from "./components/Intro";
// import About from "./components/About";
// import Skills from "./components/Skills";
import Experience from "./components/Experience";
// import Education from "./components/Education";
import Spotify from "./components/Spotify";

import "./App.css";
import Projects from "./components/Projects";

function App() {
  // dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    console.log("clicked");
  };

  // page button
  const [activePage, setActivePage] = useState("Page1");

  const handleSlide = () => {
    setActivePage((prev) => (prev === "Page1" ? "Page2" : "Page1"));
  };

  return (
    <div className="App">
      <header className={isDarkMode ? "header-dark-mode" : ""}>
      
        <nav>
          <ul className="nav__title">{">>>"} Juhun Park</ul>
          <ul>
            <li className="contact__link">
              <a href="mailto:juhunpark32@email.com">
                <img className="contact__img" src={email} alt="email" />
              </a>
            </li>
            <li className="contact__link">
              <a href="https://linkedin.com/in/juhun-park">
                <img className="contact__img" src={linkedin} alt="linkedin" />
              </a>
            </li>
            <li className="contact__link">
              <a href="https://github.com/juhun32">
                <img className="contact__img" src={github} alt="github" />
              </a>
            </li>
            <div className="button-container">
              <button className="header-button" onClick={toggleDarkMode}>
                <img
                  src={isDarkMode ? sun : moon}
                  alt={isDarkMode ? "Sun" : "Moon"}
                  className={isDarkMode ? "sun" : "moon"}
                />
              </button>
            </div>
          </ul>
        </nav>
      </header>

      <Spotify/>

      <div className={isDarkMode ? "dark-mode" : ""}>
        <Intro />
        <div className="slider-div">
          <button className="slider-button" onClick={handleSlide}>
            {activePage === "Page1" ? "View Resume" : "View Portfolio"}
          </button>
        </div>
        <div className="page-display">
          {activePage === "Page1" ? <Page1 /> : <Page2 />}
        </div>
      </div>
    </div>
  );
}

function Page1() {
  return (
    <div className="page">
      <Experience />
      <Projects />
    </div>
  );
}

function Page2() {
  return (
    <div className="pdf">
      <embed
        src={resume}
        title="PDF Viewer"
        width="900"
        height="1200"
        style={{ border: "none", borderRadius: "20px" }}
      ></embed>
    </div>
  );
}

export default App;
