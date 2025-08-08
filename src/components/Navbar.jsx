import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const highlightWidth = 100;
  const highlightLeft = activeIndex * highlightWidth;

  return (
    <div className="navbar">
      <nav>
        <Link to="/" onMouseEnter={() => handleHover(0)}>HOME</Link>
        <Link to="/about" onMouseEnter={() => handleHover(1)}>ABOUT</Link>
        <Link to="/skills" onMouseEnter={() => handleHover(2)}>SKILLS</Link>
        <Link to="/contact" onMouseEnter={() => handleHover(3)}>CONTACT</Link>
        <span style={{ left: `${highlightLeft}px` }}></span>
      </nav>
    </div>
  );
};

export default Navbar;