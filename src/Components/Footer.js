import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Using react-icons for social media icons

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <h2 className="footer-title">About Us</h2>
          <p>
            Welcome to our Beauty Parlour! We offer a variety of beauty services to help you look and feel your best.
          </p>
        </div>

        <div className="footer-section footer-contact">
          <h2 className="footer-title">Contact</h2>
          <ul>
            <li>Email: <a href="mailto:beautyparlour@example.com">beautyparlour@example.com</a></li>
            <li>Phone: <a href="tel:+1234567890">+123 456 7890</a></li>
            <li>Address: 123 Beauty Street, Fashion City</li>
          </ul>
        </div>

        <div className="footer-section footer-social">
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Beauty Parlour. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
