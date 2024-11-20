import React from "react";
import "../css/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="project__title">{">"} Projects</p>
      <div className="project__div"></div>
      <div className="project">
        <h3>Project 1</h3>
        <p>
          A brief description of the project. What technology did you use? What
          problem does it solve?
        </p>
        <a href="#" target="_blank">
          View Project
        </a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>
          A brief description of the project. What technology did you use? What
          problem does it solve?
        </p>
        <a href="#" target="_blank">
          View Project
        </a>
      </div>
    </section>

    
  );
}

export default Projects;
