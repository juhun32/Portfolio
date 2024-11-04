import React, { useEffect, useState } from "react";
import email from "./img/email.png";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import resume from "./img/resume.png";
import moon from "./img/moon.png";
import sun from "./img/sun.png";
import intro2 from "./img/intro2.jpg";

// import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    console.log("clicked");
  };

  return (
    <div className="App">
      <header className={isDarkMode ? "dark-mode" : ""}>
        <nav>
          <ul className="nav__title">{">>>"} Juhun Park</ul>
          <ul>
            <li class="contact__link">
              <a href="mailto:juhunpark32@email.com">
                <img class="contact__img" src={email} alt="email" />
              </a>
            </li>
            <li class="contact__link">
              <a href="https://linkedin.com/in/juhun-park">
                <img class="contact__img" src={linkedin} alt="linkedin" />
              </a>
            </li>
            <li class="contact__link">
              <a href="https://github.com/juhun32">
                <img class="contact__img" src={github} alt="github" />
              </a>
            </li>
            <li class="contact__link">
              <a href="https://drive.google.com/file/d/1GOL3TfRUiBxAQegLr2nGjRZiHB1W6D2X/view?usp=sharing">
                <img class="contact__img" src={resume} alt="resume" />
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

      <div className={isDarkMode ? "dark-mode" : ""}>
        <section class="intro">
          <h1 class="section__title section__title--intro">
            Hi, I am <strong>Juhun Park</strong>
          </h1>
          <img
            className="intro__img"
            src={intro2}
            alt="a picture of yourself"
            class="intro__img"
          />
        </section>

        <About />

        <Skills />

        <Experience />

        <Education />

        <section class="projects" id="projects">
          <p className="project__title">Projects</p>
          <div className="project__div"></div>
          <div class="project">
            <h3>Project 1</h3>
            <p>
              A brief description of the project. What technology did you use?
              What problem does it solve?
            </p>
            <a href="#" target="_blank">
              View Project
            </a>
          </div>
          <div class="project">
            <h3>Project 2</h3>
            <p>
              A brief description of the project. What technology did you use?
              What problem does it solve?
            </p>
            <a href="#" target="_blank">
              View Project
            </a>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
