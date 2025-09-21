import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlightWidth = 100;
  const highlightLeft = activeIndex * highlightWidth;

  return (
    <div className="navbar">
      <nav>
        <a href="#home" onClick={() => scrollToSection('home')} onMouseEnter={() => handleHover(0)}>HOME</a>
        <a href="#about" onClick={() => scrollToSection('about')} onMouseEnter={() => handleHover(1)}>ABOUT</a>
        <a href="#skills" onClick={() => scrollToSection('skills')} onMouseEnter={() => handleHover(2)}>SKILLS</a>
        <a href="#contact" onClick={() => scrollToSection('contact')} onMouseEnter={() => handleHover(3)}>CONTACT</a>
        <span style={{ left: `${highlightLeft}px` }}></span>
      </nav>
    </div>
  );
};

export default Navbar;