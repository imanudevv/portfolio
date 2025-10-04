import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success");

    // Reset form after submission
    e.target.reset();
  };

  return (
    <div className="container">
      <h1>Let's Create <br /> Something That Leaves a Mark</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="user_name">Your Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Enter Your Name"
            required
          />

          <label htmlFor="user_email">Your Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
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

          <button type="submit" className="submit-btn">
            Submit
          </button>
          
          {status === "success" && (
            <div className="status-message success">
              Message submitted (demo only). No email sent.
            </div>
          )}
        </form>
      </div>

      <div className="ac">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="insta-button"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            className="insta-icon"
          />
          Visit My Instagram
        </a>

        <a
          href="https://github.com/imanudevv"
          target="_blank"
          rel="noopener noreferrer"
          className="insta-button"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub"
            className="insta-icon"
          />
          Visit My GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/anudev-vp-750a03358/"
          target="_blank"
          rel="noopener noreferrer"
          className="insta-button"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="insta-icon"
          />
          Visit My LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
