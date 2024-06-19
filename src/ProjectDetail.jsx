import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from './projectData';
import './styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  return (
    <div className="project-detail-container">
      <div className="project-detail-content">
        <Link to="/projects"><button className="return-button">Back to Projects</button></Link>
        <h2>{project.title}</h2>
        {project.detail.map((section, index) => (
          <div key={index}>
            <h3>{section.header}</h3>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ))}
        {project.video && <iframe src={project.video} title="Project Video"></iframe>}
        {project.documents.length > 0 && (
          <ul>
            {project.documents.map((doc, index) => (
              <li key={index}><a href={doc.url} target="_blank" rel="noopener noreferrer">{doc.name}</a></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
