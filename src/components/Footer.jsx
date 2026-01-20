import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer>
      <div className="footer-content">
        {t('footer.paragraphs').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
