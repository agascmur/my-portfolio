// src/components/Project.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Project = ({ title, link, descriptions }) => {
  const { language, t } = useContext(LanguageContext);

  const desc = descriptions[language];
  
  return (
    <div className="project-card" draggable="false">
      <h3>{title}</h3>
      <div className="project-description">
        {Array.isArray(desc) ? (
          desc.map((para, i) => (
            <p key={i}>{para}</p>
          ))
        ) : (
          <p>{desc}</p>
        )}
      </div >
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
        {t('projects.viewGithub')}
      </a>
    </div>
  );
};

export default Project;
