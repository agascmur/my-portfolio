import React, { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useContext(LanguageContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:agascmur@gmail.com?subject=Mensaje de ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0A---${formData.email}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>{t('contact.title')}</h2>
        <p className="contact-subtitle">{t('contact.subtitle')}</p>

        <div className="contact-content">
          {/* Formulario */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t('contact.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t('contact.name')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t('contact.email')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder={t('contact.message')}
              />
            </div>

            <button type="submit" className="submit-btn">{t('contact.send')}</button>
            {submitted && <p className="success-msg">{t('contact.success')}</p>}
          </form>

          {/* Links de contacto */}
          <div className="contact-links">
            <h3>{t('contact.or')}</h3>
            <a href="mailto:agascmur@gmail.com" className="contact-link email-link">
              <span className="icon">✉</span>
              <span>agascmur@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/%C3%A0ngel-gasc%C3%B3n-m%C3%BAria-0589a7215/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link github-link"
            >
              <span className="icon">✒</span>
              <span>linkedin.com/angelgascon</span>
            </a>
            <a
              href="https://github.com/agascmur"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link github-link"
            >
              <span className="icon">⚙</span>
              <span>github.com/agascmur</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;