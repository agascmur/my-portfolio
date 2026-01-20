import React from 'react';
import logo from '../assets/logo.png';

const About = () => {
  return (
    <section id="about">
      <img height="190em" width="190em" src={logo} alt="Logo" />
      <h2>About Me</h2>
      <p>
        Hi, I'm Àngel Gascón, a software developer currently working in the Industry 4.0 space.<br />
        I love tinkering with technology and building projects—some of which actually make it to production.<br />
        In my free time, I enjoy hiking, gaming, and taking care of the people I care about.<br />
        Feel free to explore my projects or get in touch!
      </p>
    </section>
  );
};

export default About;
