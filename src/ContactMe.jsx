import React from 'react';
import './styles/ContactMe.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <h1>Contact Me</h1>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="contact-icon" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
