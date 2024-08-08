import React from "react";
import "./Skills.css"; // Import the CSS file
import { Link } from "react-scroll";
const Skills = () => {
  const technicalSkills = [
    { name: "Java", level: 80 },
    { name: "C/C++", level: 60 },
    { name: "HTML", level: 80 },
    { name: "CSS/Tailwind CSS", level: 75 },
    { name: "JavaScript", level: 50 },
    { name: "React", level: 50 },
  ];

  const softSkills = [
    { name: "Leadership", level: 80 },
    { name: "Teamwork", level: 75 },
    { name: "Communication", level: 75 },
    { name: "Resilience", level: 65 },
  ];

  return (
    <section id="skills" className="skills-section">
      <h1 className="skill">Skills</h1>
      <div className="skills-container">
        <div className="skills-category">
          <h2 className="category-title">Technical Skills</h2>
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skills-bar-container">
              <p className="skill-name">{skill.name}</p>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="progress-bar-fill"></span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-category">
          <h2 className="category-title">Soft Skills</h2>
          {softSkills.map((skill, index) => (
            <div key={index} className="skills-bar-container">
              <p className="skill-name">{skill.name}</p>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="progress-bar-fill"></span>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
