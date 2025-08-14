import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data here
    console.log("Form submitted");
  };

  return (
    <>
      <div className="container">
        <h1>Let's Create <br /> Something That Leaves a Mark</h1>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
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

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="submit-btn">Submit</button>
        </form>

       <div>
  <a
    href="https://www.instagram.com/_anudevv/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#e1306c", fontSize: "2rem" }}
  >
    
  </a>
</div>

      </div>
    </>
  );
};
export default Contact;
