import React from 'react';
import './../styles/components.css';

const Header = () => {
  return (
    <header className="header">
      <h1>@agascmur</h1>
      <nav>
        <a
            onClick = {(e)=>{
            e.preventDefault();
            window.scrollTo({
            top: document.querySelector("#about").offsetTop,
            behavior: "smooth",
          });}}>
          About
        </a>
        <a
            onClick = {(e)=>{
            e.preventDefault();
            window.scrollTo({
            top: document.querySelector("#projects").offsetTop,
            behavior: "smooth",
          });}}>
          Projects
        </a>
        <a
            onClick = {(e)=>{
            e.preventDefault();
            window.scrollTo({
            top: document.querySelector("#contact").offsetTop,
            behavior: "smooth",
          });}}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;