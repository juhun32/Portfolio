import React from "react";

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
      "CodePath Technical Interview Prep Course (TIP102 Intermediate Level)",
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
      "Provided one-on-one tutoring sessions to 14 high school students, helped students improve their grades by 30% and understanding of English concepts and structures.",
    description2:
      "Developed customized 10 lesson plans by addressing the specific needs and learning objectives of 14 individual students, resulting in total of 20% time saved each tutoring sessions.",
  },
  {
    role: "Student",
    company: "Himedia Academy Backend Developer Course",
    duration: "January 2023 – April 2023",
    description:
      "Backend development training course consisted of 10 participants, focused learning of Java development and practical workspace training based on 8-hours per session curriculum.",
    description2:
      "Developed foundational skills in Java development, object-oriented programming, data structures, and Oracle DBMS through one-to-one focused learning sessions.",
    description3:
      "Managed team projects by utilizing Git and Notion to enhance collaboration and track progress, resulting in improved workflow efficiency and successful project completion.",
  },
  {
    role: "Club President",
    company: "Software Developer Student Club of Gimpo Highschool",
    duration: "August 2020 – March 2022",
    description:
      "Managed 36 club members ensuring smooth progress of their personal projects while ensuring their academic success in highschool, received positive feedback from peers and club mentors.",
    description2:
      "Organized two successful project demonstration event for 5 club members by coordinating logistics, presentations, and attendee engagement whilst securing Covid-19 pandemic safety.",
    description3:
      "Invited a published author in artificial intelligence for a Q&A session with club members, facilitating an engaging discussion that deepened understanding of AI concepts and inspired a new group on AI advancements project.",
  },
  {
    role: "Student Researcher",
    company: "Motion Detection AI Research Program | Gimpo Highschool",
    duration: "March 2021 – November 2021",
    description:
      "Developed and tested a Python AI powered motion detection program using MediaPipe model for a student research project.",
    description2:
      "Authored a scientific research paper detailing the project methodology, results, and implications for future research plans.",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h2>{exp.company}</h2>
            <h3>{exp.role}</h3>
            <h3>{exp.duration}</h3>
            <div className="experience-content">
              <div className="experience-image">
                <img src={`path/to/image/${index}.jpg`} alt={`${exp.company} logo`} />
              </div>
              <div className="experience-details">
                <h2>{exp.company}</h2>
                <h3>{exp.role}</h3>
                <h3>{exp.duration}</h3>
                <p>
                  {">"} {exp.description}
                </p>
                {exp.description2 && (
                  <p>
                    {">"} {exp.description2}
                  </p>
                )}
                {exp.description3 && (
                  <p>
                    {">"} {exp.description3}
                  </p>
                )}
              </div>
            </div>
            {/* <p>
              {">"} {exp.description}
            </p>
            {exp.description2 && (
              <p>
                {">"} {exp.description2}
              </p>
            )}
            {exp.description3 && (
              <p>
                {">"} {exp.description3}
              </p>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
