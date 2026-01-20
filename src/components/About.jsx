import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import logo from '../assets/logo.png';

const About = () => {
  const { t } = useContext(LanguageContext);

  return (
    <section id="about" className="about">
      <img height="190em" width="190em" src={logo} alt="Logo" />
      <h2>{t('about.title')}</h2>
      <div className="about-content">
        {t('about.paragraphs').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
