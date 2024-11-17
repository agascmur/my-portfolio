import React from 'react';
import Project from './Project';
import projectData from '../data/projects.json'; // Import the JSON data

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;