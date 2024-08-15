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
        {/* <p class="section__subtitle section__subtitle--intro">
          Hello! My name is Juhun Park.
        </p> */}
        <img src={require("./img/intro2.jpg")} alt="a picture of yourself" class="intro__img" />
      </section>

      <section class="projects">
        <h2>Projects</h2>
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

      <section class="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me via the following channels:</p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/yourprofile" target="_blank">
              Your LinkedIn
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/yourusername" target="_blank">
              Your GitHub
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
