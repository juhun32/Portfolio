import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <section class="intro">
        <h1 class="section__title section__title--intro">
          Hi, I am <strong>Juhun Park</strong>
        </h1>
        <img
          className="intro__img"
          src={require("./img/intro2.jpg")}
          alt="a picture of yourself"
          class="intro__img"
        />
      </section>

      <div className="intro__div"></div>
      {/* <p className="intro__div--subtitle">Hi! My name is Juhun Park.</p> */}

      <section class="contact">
        <h3 className="contact__title">My Contacts :</h3>
        <ul class="contact__links">
          <li class="contact__link">
            <a href="mailto:juhunpark32@email.com">
              <img
                class="contact__img"
                src={require("./img/email.png")}
                alt="email"
              />
            </a>
          </li>
          <li class="contact__link">
            <a href="https://linkedin.com/in/juhun-park">
              <img
                class="contact__img"
                src={require("./img/linkedin.png")}
                alt="linkedin"
              />
            </a>
          </li>
          <li class="contact__link">
            <a href="https://github.com/juhun32">
              <img
                class="contact__img"
                src={require("./img/github.png")}
                alt="github"
              />
            </a>
          </li>
        </ul>
      </section>

      <div className="contact__div">
        
        <ul class="dir_btns">
          <li class="dir_btn">
          <a href="#projects" class="btn">
          Projects
        </a>
          </li>
          <li class="dir_btn">
          <a href="#projects" class="btn">
          Projects
        </a>
          </li>
          <li class="dir_btn">
          <a href="#projects" class="btn">
          Projects
        </a>
          </li>
        </ul>
      </div>

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
  );
}

export default App;
