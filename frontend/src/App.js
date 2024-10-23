import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    // fetch("/api/data")
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Header />

      <Intro />

      {/* <div className="contact__div">
        <ul class="dir_btns">
          <li class="dir_btn">
            <a href="#experience" class="btn">
              Experience
            </a>
          </li>
          <li class="dir_btn">
            <a href="#projects" class="btn">
              Projects
            </a>
          </li>
        </ul>
      </div> */}

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
      <Footer />
    </div>
  );
}

export default App;
