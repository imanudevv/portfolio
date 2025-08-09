import React from 'react';
import './Skills.css';
import logos from '../assets/js.png';
import logo1 from '../assets/html.png'
import logo2 from '../assets/python.png'
import logo3 from '../assets/css.png'
import logo4 from '../assets/React-Logo.png'
import logo5 from '../assets/nodejs.png'
import logo6 from '../assets/Mongodb.png'



const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
   
    <div className="logos">
      
      <img src={logo1} alt="html logo" />
            <img src={logo3} alt="css logo" />
            <img src={logos} alt="JavaScript logo" />
            <img src={logo4} alt="react logo" />
            <img src={logo5} alt="node logo" />
            <img src={logo6} alt="node logo" />
      <img src={logo2} alt="python logo" />
      
      
      

     


    </div>
     </div>
  );
};

export default Skills; 