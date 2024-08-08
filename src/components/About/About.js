import "./About.css";
import React from "react";
import myphoto from "../../assets/myphoto.jpg";
import { Link } from "react-scroll";
export const About = () => {
  return (
    <div className="about">
      <div className="mypic">
        <img src={myphoto} alt="pic" />
      </div>
      <div className="aboutme">
        <h2 className="abt">About Me</h2>
        <p className="des">
          I hold a Bachelor's degree in Engineering and am deeply passionate
          about coding and solving complex problems using cutting-edge
          technology. With a strong interest in web development and UI/UX
          design, I am dedicated to creating innovative and user-centric
          solutions. I am enthusiastic about exploring new technologies and
          embrace a growth mindset to continually enhance my skills and adapt to
          emerging trends.
        </p>
        <div className="section-p">
        <div className="sections">
          <p className="bit-sections">Name: Akshita Khandelwal</p>
          <p className="bit-sections">Education: Bachelor of Engineering</p>
          <p className="bit-sections">Languages: English, Hindi</p>
        </div>
        </div>
       
        <a
          href="https://drive.google.com/file/d/1zMlvfeTnDkH4Zl5uGyMwfjIUBUzni7xj/view?usp=drive_link"
          download
        >
          <button className="btn-resume">Resume</button>
        </a>
      </div>
    </div>
  );
};
