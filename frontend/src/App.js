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
      <section class="about" id="about">
        <p className="about__title">About Me</p>
        <div className="about__div"></div>
        <p className="about__description">
          A brief description about yourself. What are your skills? What are
          you passionate about? What are you looking for?
        </p>
      </section>
      <section class="skills" id="skills">
        <p className="skills__title">Skills</p>
        <div className="skills__div"></div>
        <ul class="skills__list">
          <li class="skills__list-item">Skill 1</li>
          <li class="skills__list-item">Skill 2</li>
          <li class="skills__list-item">Skill 3</li>
          <li class="skills__list-item">Skill 4</li>
        </ul>
      </section>
      <section class="experience" id="experience">
        <p className="experience__title">Experience</p>
        <div className="experience__div"></div>
        <div class="experience
        ">
          <h3>Company 1</h3>
          <p>Position</p>
          <p>Date</p>
          <p>
            A brief description of your role. What did you do? What did you
            learn?
          </p>
        </div>
        <div class="experience">
          <h3>Company 2</h3>
          <p>Position</p>
          <p>Date</p>
          <p>
            A brief description of your role. What did you do? What did you
            learn?
          </p>
        </div>
      </section>
      <section class="education" id="education">
        <p className="education__title">Education</p>
        <div className="education__div"></div>
        <div class="education">
          <h3>University 1</h3>
          <p>Degree</p>
          <p>Date</p>
          <p>A brief description of your studies. What did you learn?</p>
        </div>
        <div class="education">
          <h3>University 2</h3>
          <p>Degree</p>
          <p>Date</p>
          <p>A brief description of your studies. What did you learn?</p>
        </div>
      </section>
      <section class="contact" id="contact">
        <p className="contact__title">Contact Me</p>
        <div className="contact__div"></div>
        <ul class="contact__links">
          <li class="contact__link">
            <a href="mailto:
            ">
              Email
            </a>
          </li>
          <li class="contact__link">
            <a href="https://linkedin.com/in/juhun-park">
              LinkedIn
            </a>
          </li>
          <li class="contact__link">
            <a href="
            ">
              Phone
            </a>
          </li>
        </ul>
      </section>
      <section class="resume" id="resume">
        <p className="resume__title">Resume</p>
        <div className="resume__div"></div>
        <a href="#" target="_blank">
          View Resume
        </a>
      </section>
      

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
