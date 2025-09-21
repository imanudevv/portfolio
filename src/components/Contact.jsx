import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus("error");
        },
      );
  };

  return (
    <div className="container">
      <h1>Let's Create <br /> Something That Leaves a Mark</h1>

      <div className="form-container">
        <form ref={form} onSubmit={sendEmail} className="form">
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

          <button type="submit" className="submit-btn" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
          
          {status === "success" && (
            <div className="status-message success">
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          
          {status === "error" && (
            <div className="status-message error">
              Failed to send message. Please try again.
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