import React from "react";

const Skills = () => {
  return (
    <section class="skills" id="skills">
      <h2 className="skills__title">Skills</h2>
      <ul class="skills__list">
        <li class="skills__list-item">AI / ML, Data Science, Full-stack development</li>
        <li class="skills__list-item">Programming Languages : Python, Java, SQL, HTML, CSS, JavaScript</li>
        <li class="skills__list-item">Full-stack: Pandas, React, Flask, PostgreSQL</li>
        {/* <li class="skills__list-item">TensorFlow, PyTorch</li> */}
        <li class="skills__list-item">Data Visualization</li>
        {/* <li class="skills__list-item">Cloud Computing</li> */}
        <li class="skills__list-item">Git, Anaconda3, VS Code, LaTeX, Eclipse, MS Office</li>
      </ul>
    </section>
  );
};

export default Skills;