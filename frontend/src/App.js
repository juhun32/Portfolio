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
      <section class="about">
        <div class="about__title">
          <h2>About Me</h2>
        </div>
        <div class="about__subtitle">
          <p>
            Hello! I'm a passionate web developer with experience in creating
            dynamic and responsive websites. I specialize in both front-end and
            back-end development, using modern technologies to build web
            applications that solve real-world problems.
          </p>
        </div>
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
