import React, { useEffect, useState } from "react";
import email from "./img/email.png";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import resume from "./img/resume.png";
import moon from "./img/moon.png";
import sun from "./img/sun.png";
import intro2 from "./img/intro2.jpg";

// import Footer from "./components/Footer";
// import Intro from "./components/Intro";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Education from "./components/Education";

import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    console.log("clicked");
  };

  const experiences = [
    {
      role: "Participant",
      company: "PatriotHacks 2024",
      duration: "October 2024",
      description:
        "Participated in a 36-hour hackathon event, collaborated with 3 team members to develop a React web application that provides information about government spending of tax revenue on incarceration, and solutions to reduce spending.",
    },
    {
      role: "Student",
      company:
        "CodePath Technical Interview Prep Course | TIP102; Intermediate Level",
      duration: "May 2024 – August 2024",
      description:
        "Improved problem-solving skills and understanding of data structures and algorithms, including heaps, trees, linked lists, and hashmaps through practicing 60+ datastructure problems.",
      description2:
        "Enhanced soft skills in communication and analytical thinking by collaborating with 5 team members from various cultural and programming backgrounds.",
    },
    {
      role: "English Instructor",
      company: "21Cen. English / Math Academy, Incheon, South Korea",
      duration: "July 2024 – August 2024",
      description:
        "Provided one-on-one tutoring sessions to 14 high school students, helped students improve their grades by 30% and understanding of English concepts and structures. Developed customized 10 lesson plans by addressing the specific needs and learning objectives of 14 individual students, resulting in total of 20% time saved each tutoring sessions.",
    },
    {
      role: "Student",
      company: "Himedia Academy Backend Developer Course",
      duration: "January 2023 – April 2023",
      description:
        "Backend development training course consisted of 10 participants, focused learning of Java development and practical workspace training based on 8-hours per session curriculum. Developed foundational skills in Java development, object-oriented programming, data structures, and Oracle DBMS through one-to-one focused learning sessions. Managed team projects by utilizing Git and Notion to enhance collaboration and track progress, resulting in improved workflow efficiency and successful project completion.",
    },
    {
      role: "Club President",
      company: "Software Developer Student Club of Gimpo Highschool",
      duration: "August 2020 – March 2022",
      description:
        "Managed 36 club members ensuring smooth progress of their personal projects while ensuring their academic success in highschool, received positive feedback from peers and club mentors. Organized two successful project demonstration event for 5 club members by coordinating logistics, presentations, and attendee engagement whilst securing Covid-19 pandemic safety. Invited a published author in artificial intelligence for a Q&A session with club members, facilitating an engaging discussion that deepened understanding of AI concepts and inspired a new group on AI advancements project.",
    },
    {
      role: "Student Researcher",
      company: "Motion Detection AI Research Program | Gimpo Highschool",
      duration: "March 2021 – November 2021",
      description:
        "Developed and tested a Python AI powered motion detection program using MediaPipe model for a student research project. Authored a scientific research paper detailing the project methodology, results, and implications for future research plans.",
    },
  ];

  const educationData = [
    {
      institution: "Northern Virginia Community College",
      degree: "Associate of Science in Computer Science",
      startDate: "August 2023",
      endDate: "May 2025",
      description:
        "Focused on software development, algorithms, and data structures.",
    },
    {
      institution: "George Mason University",
      degree: "Bachelor of Science in Computer Science",
      startDate: "August 2023",
      endDate: "May 2027",
      description: "ADVANCE Program, BS Computer Science pathway.",
    },
  ];

  return (
    <div className="App">
      <header className={isDarkMode ? "header-dark-mode" : ""}>
        <nav>
          <ul className="nav__title">{">>>"} Juhun Park</ul>
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
            <div className="button-container">
              <button className="header-button" onClick={toggleDarkMode}>
                <img
                  src={isDarkMode ? sun : moon}
                  alt={isDarkMode ? "Sun" : "Moon"}
                  className={isDarkMode ? "sun" : "moon"}
                />
              </button>
            </div>
          </ul>
        </nav>
      </header>

      <div className={isDarkMode ? "dark-mode" : ""}>
        <section class="intro">
          <h1 class="section__title section__title--intro">
            Hi, I am <strong>Juhun Park</strong>
          </h1>
          <img
            className="intro__img"
            src={intro2}
            alt="a picture of yourself"
            class="intro__img"
          />
        </section>

        <section className="about" id="about">
          <h2 className="about__title">About Me</h2>
          <div className="about__div"></div>
          <ul className="about__description">
            <li>
              Studying <strong>AI / ML</strong> and{" "}
              <strong>Software Development</strong>
            </li>
            <li>
              From Seoul, South Korea ; located in{" "}
              <strong>Chantilly, VA</strong>
            </li>
            <li>
              Currently studying in{" "}
              <strong>Northern Virginia Community College</strong>, soon will be
              transfering to <strong>George Mason University</strong>
            </li>
            <li>Esports player for NOVA Nighthawks Rainbow Six: Siege team</li>
            <li>
              Beautiful girlfriend from Bolivia, happy family in South Korea and
              the United States
            </li>
          </ul>
        </section>

        <section class="skills" id="skills">
          <h2 className="skills__title">Skills</h2>
          <ul class="skills__list">
            <li class="skills__list-item">
              AI / ML, Data Science, Full-stack development
            </li>
            <li class="skills__list-item">
              Programming Languages : Python, Java, SQL, HTML, CSS, JavaScript
            </li>
            <li class="skills__list-item">
              Full-stack: Pandas, React, Flask, PostgreSQL
            </li>
            {/* <li class="skills__list-item">TensorFlow, PyTorch</li> */}
            <li class="skills__list-item">Data Visualization</li>
            {/* <li class="skills__list-item">Cloud Computing</li> */}
            <li class="skills__list-item">
              Git, Anaconda3, VS Code, LaTeX, Eclipse, MS Office
            </li>
          </ul>
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <h3>
                  {exp.role} at {exp.company}
                </h3>
                <p>{exp.duration}</p>
                <p>
                  {">"} {exp.description}
                  {">"} {exp.description2}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="education-section">
          <h2>Education</h2>
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.institution}</h3>
              <p>{edu.degree}</p>
              <p>
                {/* {edu.startDate} - {edu.endDate} */}
                Expected {edu.endDate}
              </p>
              <p>
                {">"} {edu.description}
              </p>
            </div>
          ))}
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
      </div>
    </div>
  );
}

export default App;
