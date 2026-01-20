import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import '../styles/global.css';

const Header = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="nav-left">
        <nav>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>{t('header.home')}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>{t('header.projects')}</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>{t('header.contact')}</a></li>
          </ul>
        </nav>
      </div>
      <div className="nav-right">
        <button onClick={() => setLanguage('en')} className={language === 'en' ? 'active' : ''}>ENG</button>
        <button onClick={() => setLanguage('es')} className={language === 'es' ? 'active' : ''}>ESP</button>
        <button onClick={() => setLanguage('ca')} className={language === 'ca' ? 'active' : ''}>CAT</button>
      </div>
    </header>
  );
};

export default Header;