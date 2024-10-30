import React, { useState } from "react";
import email from "../img/email.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import resume from "../img/resume.png";
import moon from "../img/moon.png";
import sun from "../img/sun.png";
import "../css/Header.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    console.log("clicked");
  };

  return (
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
  );
};

export default Header;
