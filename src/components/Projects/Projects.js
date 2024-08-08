// src/components/Project.js

import React from 'react';
import '../Projects/Projects.css'; // Import your CSS file here

const Project = ({ name, githubLink, demoLink, details, className }) => {
  return (
    <div data-aos="fade-up" className={`ProjectBox ${className}`}>
      <div className="ProjectHoverBox">
        <div className="ProjectHoverBoxLeft"></div>
        <div className="ProjectHoverBoxMid">
          <p className="ProjectName">{name}</p>
          <div className="ProjectLink">
            <a href={githubLink}>
              <i className="ProjectIcon fa-2x fa-brands fa-github"></i>
            </a>
            <a href={demoLink}>
              <i className="ProjectIcon fa-2x fa-solid fa-link"></i>
            </a>
          </div>
          <p className="ProjectDetail">{details}</p>
        </div>
        <div className="ProjectHoverBoxRight"></div>
      </div>
    </div>
  );
};

export default Project;
