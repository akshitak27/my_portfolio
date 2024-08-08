// src/components/ProjectsSection.js

import React from 'react';
import Project from '../Projects/Projects';
import './ProjectsSection.css'; // Import your CSS file here

const projects = [
  {
    name: 'Groovz- Article Summarizer ',
    githubLink: 'https://github.com/akshitak27/article_summarizer',
    demoLink: 'https://article-summarizer-ten-virid.vercel.app/',
    details: 'React, Vite, TailwindCSS, And API Based Project',
    className: 'ProjectBox1'
  },
  {
    name: 'Fully Responsive Modern UI/UX Website in React JS  ',
    githubLink: 'https://github.com/akshitak27/gpt3',
    demoLink: 'https://gpt3-chi-five.vercel.app/',
    details: 'HTML5, CSS3 And React Based Project',
    className: 'ProjectBox2'
  },
];

const ProjectsSection = () => {
  return (
    <section className="Projects" id="Projects">
      <div data-aos="fade-up" className="ProjectsContainer">
        <div className="ProjectHeading">Projects</div>
        <div className="ProjectCards">
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              details={project.details}
              className={project.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
