import React from "react";
import email from "../img/email.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import resume from "../img/resume.png";
import "../css/Header.css";

const Header = () => {
  return (
    <header>
      {/* <h1>My Simple Website</h1> */}
      <nav>
        <ul className="nav__title">
            {">>> "} {" "} Juhun Park
        </ul>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
