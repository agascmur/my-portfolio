import React, { useState } from 'react';

const Contact = () => {
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
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Have a question or want to collaborate? I'd love to hear from you.</p>

        <div className="contact-content">
          {/* Formulario */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me what's on your mind..."
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
            {submitted && <p className="success-msg">✓ Email client opened!</p>}
          </form>

          {/* Links de contacto */}
          <div className="contact-links">
            <h3>Or connect with me on:</h3>
            <a href="mailto:agascmur@gmail.com" className="contact-link email-link">
              <span className="icon">✉</span>
              <span>agascmur@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/%C3%A0ngel-gasc%C3%B3n-m%C3%BAria-0589a7215/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link linkedin-link"
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