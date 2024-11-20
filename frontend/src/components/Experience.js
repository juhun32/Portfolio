import React from "react";
import { useState } from "react";
import gimpo from "../img/gimpo.jpg";
import gmu from "../img/gmu.png";
import codepath from "../img/codepath.png";
import himedia from "../img/himedia.png";
import english from "../img/english.png";
import "../css/Experience.css";

const experiences = [
  {
    image: gmu,
    role: "Volunteer",
    company: "InsightLegi DataStorm 2024",
    duration: "November 2024",
    description:
      "Managed logistics, participant data and provided technical support for participants and mentors for a 36-hour hackathon event.",
    description2:
      "Contributed to social media promotion and event planning, resulting in 1000+ views.",
  },
  {
    image: gmu,
    role: "Participant",
    company: "PatriotHacks 2024",
    duration: "October 2024",
    description:
      "Participated in a 36-hour hackathon event, collaborated with 3 team members to develop a React web application that provides information about government spending of tax revenue on incarceration, and solutions to reduce spending.",
  },
  {
    image: codepath,
    role: "Student",
    company:
      "CodePath Technical Interview Prep Course (TIP102 Intermediate Level)",
    duration: "May 2024 – August 2024",
    description:
      "Improved problem-solving skills and understanding of data structures and algorithms, including heaps, trees, linked lists, and hashmaps through practicing 60+ datastructure problems.",
    description2:
      "Enhanced soft skills in communication and analytical thinking by collaborating with 5 team members from various cultural and programming backgrounds.",
  },
  {
    image: english,
    role: "English Instructor",
    company: "21Cen. English Academy",
    duration: "July 2024 – August 2024",
    description:
      "Provided one-on-one tutoring sessions to 14 high school students, helped students improve their grades by 30% and understanding of English concepts and structures.",
    description2:
      "Developed customized 10 lesson plans by addressing the specific needs and learning objectives of 14 individual students, resulting in total of 20% time saved each tutoring sessions.",
  },
  {
    image: himedia,
    role: "Apprentice",
    company: "Himedia Academy Backend Developer Apprenticeship",
    duration: "January 2023 – April 2023",
    description:
      "Backend development training course consisted of 10 participants, focused learning of Java development and practical workspace training based on 8-hours per session curriculum.",
    description2:
      "Developed foundational skills in Java development, object-oriented programming, data structures, and Oracle DBMS through one-to-one focused learning sessions.",
    description3:
      "Managed team projects by utilizing Git and Notion to enhance collaboration and track progress, resulting in improved workflow efficiency and successful project completion.",
  },
  {
    image: gimpo,
    role: "Club President",
    company: "Software Developer Student Club",
    duration: "August 2020 – March 2022",
    description:
      "Managed 36 club members ensuring smooth progress of their personal projects while ensuring their academic success in highschool, received positive feedback from peers and club mentors.",
    description2:
      "Organized two successful project demonstration event for 5 club members by coordinating logistics, presentations, and attendee engagement whilst securing Covid-19 pandemic safety.",
    description3:
      "Invited a published author in artificial intelligence for a Q&A session with club members, facilitating an engaging discussion that deepened understanding of AI concepts and inspired a new group on AI advancements project.",
  },
  {
    image: gimpo,
    role: "Student Researcher",
    company: "Motion Detection AI Research Program",
    duration: "March 2021 – November 2021",
    description:
      "Developed and tested a Python AI powered motion detection program using MediaPipe model for a student research project.",
    description2:
      "Authored a scientific research paper detailing the project methodology, results, and implications for future research plans.",
  },
];

const Experience = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <section id="experience">
      <div className="experience-header">
        <h1>{">"} Experience / Activity</h1>
        <label className="label">
          <div className="toggle">
            <input
              className="toggle-state"
              type="checkbox"
              checked={showDetails}
              onChange={handleToggle}
            />
            <div className="indicator"></div>
          </div>
          {/* <div className="label-text">{showDetails ? "Show" : "Hide"}</div> */}
        </label>
      </div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-content">
              <div className="experience-image">
                <img src={exp.image} alt={`${exp.company} logo`} />
              </div>
              <div className={showDetails ? "experience-details" : "hide"}>
                <h2>{exp.company}</h2>
                <h3>
                  <span>{exp.role}</span>
                  <span>{exp.duration}</span>
                </h3>
                <ol>
                  <li>{exp.description}</li>
                  {exp.description2 && <li>{exp.description2}</li>}
                  {exp.description3 && <li>{exp.description3}</li>}
                </ol>
              </div>
              <div
                className={showDetails ? "hide-div" : "experience-div"}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
