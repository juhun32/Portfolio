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
    <section className="experience">
      <div className="experience-header">
        <h1>{">"} Experience / Activity</h1>
        <div className="experience-header-div"></div>
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
        </label>
      </div>

      <div className="experience-container">
        <div className="experience-list">
          <div className="experience-content">
            <div className="experience-item">
              <div className="experience-grid">
                <img src={gmu} alt="gmu logo" />
                <p className="job-title">Volunteer</p>
                <p className="date">November 2024</p>
              </div>
              <p>
                <br className="br-height"></br>
                <br className="br-height"></br>
              </p>
            </div>

            <p>
              <br className="br-height"></br>
              <br className="br-height"></br>
            </p>

            <div className="experience-item">
              <div className="experience-grid">
                <img src={gmu} alt="gmu logo" />
                <p className="job-title">Participant</p>
                <p className="date">October 2024</p>
              </div>
              <p>
                <br className="br-height"></br>
                <br className="br-height"></br>
              </p>
            </div>

            <p>
              <br className="br-height"></br>
              <br className="br-height"></br>
            </p>

            <div className="experience-item">
              <div className="experience-grid">
                <img src={codepath} alt="codepath logo" />
                <p className="job-title">Student</p>
                <p className="date">May 2024 – August 2024</p>
              </div>
              <p>
                <br className="br-height"></br>
                <br className="br-height"></br>
              </p>
            </div>

            <p>
              <br className="br-height"></br>
              <br className="br-height"></br>
            </p>

            <div className="experience-item">
              <div className="experience-grid">
                <img src={english} alt="english logo" />
                <p className="job-title">English Instructor</p>
                <p className="date">July 2024 – August 2024</p>
              </div>
              <p>
                <br className="br-height"></br>
                <br className="br-height"></br>
              </p>
            </div>

            <p>
              <br className="br-height"></br>
              <br className="br-height"></br>
            </p>

            <div className="experience-item">
              <div className="experience-grid">
                <img src={himedia} alt="himedia logo" />
                <p className="job-title">Apprentice</p>
                <p className="date">January 2023 – April 2023</p>
              </div>
              <p>
                <br className="br-height"></br>
                <br className="br-height"></br>
                <br className="br-height"></br>
              </p>
            </div>

            <p>
              <br className="br-height"></br>
              <br className="br-height"></br>
            </p>

            <div className="experience-item">
              <div className="experience-grid">
                <img src={gimpo} alt="gimpo logo" />
                <p className="job-title">Club President</p>
                <p className="date">August 2020 – March 2022</p>
              </div>
              <p>
                <br className="br-height"></br>
                <br className="br-height"></br>
              </p>
            </div>

            <p>
              <br className="br-height"></br>
              <br className="br-height"></br>
            </p>

            <div className="experience-item">
              <div className="experience-grid">
                <img src={gimpo} alt="gimpo logo" />
                <p className="job-title">Student Researcher</p>
                <p className="date">March 2021 – November 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div className="vertical-line"></div>

        <div className={showDetails ? "experience-show" : "hide-div"}>
          <div className="experience-content">
            <div className="experience-detail">
              <p className="event-title">InsightLegi DataStorm 2024</p>
              <p className="event-desc">
                Managed logistics, participant data and provided technical
                support for participants and mentors for a 36-hour hackathon
                event.Contributed to social media promotion and event planning,
                resulting in 1000+ views.
              </p>
            </div>

            <p>
              <br className="br-height"></br>
              <br className="br-height"></br>
            </p>

            <div className="experience-detail">
              <p className="event-title">PatriotHacks 2024</p>
              <p className="event-desc">
                Participated in a 36-hour hackathon event, collaborated with 3
                team members to develop a React web application that provides
                information about government spending of tax revenue on
                incarceration, and solutions to reduce spending.
              </p>
            </div>

            <p>
              <br className="br-height"></br>
              <br className="br-height"></br>
            </p>

            <div className="experience-detail">
              <p className="event-title">
                CodePath Technical Interview Prep Course (TIP102 Intermediate
                Level)
              </p>
              <p className="event-desc">
                Improved problem-solving skills and understanding of data
                structures and algorithms. Enhanced soft skills in communication
                and analytical thinking by collaborating with 5 team members.
              </p>
            </div>

            <p>
              <br className="br-height"></br>
            </p>

            <div className="experience-detail">
              <p className="event-title">21Cen. English Academy</p>
              <p className="event-desc">
                Provided one-on-one tutoring sessions to 14 high school
                students. Developed customized 10 lesson plans by addressing the
                specific needs and learning objectives of 14 individual
                students.
              </p>
            </div>

            <p>
              <br className="br-height"></br>
              <br className="br-height"></br>
            </p>

            <div className="experience-detail">
              <p className="event-title">
                Himedia Academy Backend Developer Apprenticeship
              </p>
              <p className="event-desc">
                Backend development training course consisted of 10
                participants. Developed foundational skills in Java development,
                object-oriented programming, data structures, and Oracle DBMS.
                Managed team projects by utilizing Git and Notion to enhance
                collaboration and track progress.
              </p>
            </div>

            <p>
              <br className="br-height"></br>
            </p>

            <div className="experience-detail">
              <p className="event-title">Software Developer Student Club</p>
              <p className="event-desc">
                Managed 36 club members ensuring smooth progress of their
                personal projects. Organized two successful project
                demonstration event for 5 club members. Invited a published
                author in artificial intelligence for a Q&A session with club
                members.
              </p>
            </div>

            <p>
              <br className="br-height"></br>
            </p>

            <div className="experience-detail">
              <p className="event-title">
                Motion Detection AI Research Program
              </p>
              <p className="event-desc">
                Developed and tested a Python AI powered motion detection
                program using MediaPipe model. Authored a scientific research
                paper detailing the project methodology, results, and
                implications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
