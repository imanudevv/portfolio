import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate success or error
    const isSuccessful = Math.random() > 0.5;

    if (isSuccessful) {
      setStatus("success");
    } else {
      setStatus("error");
    }

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

        {status === "success" ? (
          <div style={{ color: "green", marginTop: "10px" }}>
            ✅ Thank you! Submission successful.
          </div>
        ) : status === "error" ? (
          <div style={{ color: "red", marginTop: "10px" }}>
            ❌ Error! Something went wrong.
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Contact;