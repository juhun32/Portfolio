import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Skills</h2>
      <ul className="skills__list">
        <li className="skills__list-item">AI / ML, Data Science, Full-stack development</li>
        <li className="skills__list-item">Programming Languages : Python, Java, SQL, HTML, CSS, JavaScript</li>
        <li className="skills__list-item">Full-stack: Pandas, React, Flask, PostgreSQL</li>
        {/* <li className="skills__list-item">TensorFlow, PyTorch</li> */}
        <li className="skills__list-item">Data Visualization</li>
        {/* <li className="skills__list-item">Cloud Computing</li> */}
        <li className="skills__list-item">Git, Anaconda3, VS Code, LaTeX, Eclipse, MS Office</li>
      </ul>
    </section>
  );
};

export default Skills;