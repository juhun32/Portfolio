import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__title">About Me</h2>
      <div className="about__div"></div>
      <ul className="about__description">
        <li>
          Studying <strong>AI / ML</strong> and{" "}
          <strong>Software Development</strong>
        </li>
        <li>
          From Seoul, South Korea ; located in <strong>Chantilly, VA</strong>
        </li>
        <li>
          Currently studying in{" "}
          <strong>Northern Virginia Community College</strong>, soon will be
          transfering to <strong>George Mason University</strong>
        </li>
        <li>Esports player for NOVA Nighthawks Rainbow Six: Siege team</li>
        <li>Beautiful girlfriend from Bolivia, happy family in South Korea and the United States</li>
      </ul>
    </section>
  );
};

export default About;
