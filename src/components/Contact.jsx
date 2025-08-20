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
  


      </div>
      <div className='ac'>
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
  class="insta-button"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
    alt="GitHub"
    class="insta-icon"
  />
  Visit My Github
</a>
<a
  href="https://www.linkedin.com/in/anudev-vp-750a03358/"
  target="_blank"
  rel="noopener noreferrer"
  class="insta-button"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
    alt="LinkedIn"
    class="insta-icon"
  />
  Visit My LinkedIn
</a>

</div>
       </div>
    </>
  );
};

export default Contact;