import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
   <>
   <div className="navbar">
  <ul className='links'>
    <li><a href="#home">HOME</a></li>
    <li><a href="#about">ABOUT</a></li>
    <li><a href="#skills">SKILLS</a></li>
    <li><a href="#contact">CONTACT</a></li>
  </ul>
</div>
   </>
  )
}

export default Navbar