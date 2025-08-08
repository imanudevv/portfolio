import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className='container'>
        <h1>Let's</h1>
        <h2>Create Something</h2>
        <h3>That Leaves a Mark</h3>
      </div>
      <div className='form'>
        <form action="contact">
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" />
        </form>
      </div>
    </>
  );
};

export default Contact;