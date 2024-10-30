import React from "react";

const Education = () => {
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
      description:
        "ADVANCE Program, BS Computer Science pathway.",
    },
  ];

  return (
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
          <p>{">"} {edu.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
