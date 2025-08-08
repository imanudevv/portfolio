import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className='container'>
        <h1>Let's Create <br /> Something That Leaves a Mark</h1>

      </div>
      <div className="form-container">
        <form action="contact" className="form">
           <label htmlFor="text">Your Name</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter Your Name"
            required
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
           <label htmlFor="email">Messege</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Messege"
            required
          />

          <button type='submit' className='submit-btn'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;