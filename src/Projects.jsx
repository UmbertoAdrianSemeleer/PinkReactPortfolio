import React from 'react';
import { Link } from 'react-router-dom';
import projects from './projectData';
import './styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <Link to={`/project/${project.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
