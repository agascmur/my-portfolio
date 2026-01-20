// src/components/Project.jsx
import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Project = ({ title, link, descriptions }) => {
  const { language, t } = useContext(LanguageContext);

  return (
    <div className="project-card" draggable="false">
      <h3>{title}</h3>
      <p>{descriptions[language]}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {t('projects.viewGithub')}
      </a>
    </div>
  );
};

export default Project;
