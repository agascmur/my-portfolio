import React from 'react';
import './../styles/components.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Your Name</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;