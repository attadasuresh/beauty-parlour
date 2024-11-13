import React from 'react';
import './Contact.css'; // Import the CSS file

// Import Font Awesome Icons
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      
      <div className="contact-content">
        {/* Address Section */}
        <div className="contact-section">
          <h2 className="section-title">Our Address</h2>
          <p className="contact-info">
            <strong>Beauty Parlour</strong><br />
            123 Beauty Street, City, State<br />
            Zip Code: 12345
          </p>
        </div>

        {/* Get in Touch Section */}
        <div className="contact-section">
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-info">
            Email: <a href="mailto:info@beautyparlour.com"><FaEnvelope /> info@beautyparlour.com</a><br />
            Phone: <a href="tel:+1234567890"><FaPhone /> +123 456 7890</a><br />
            Fax: +123 456 7891
          </p>
        </div>

        {/* Social Media Section */}
        <div className="contact-section">
          <h2 className="section-title">Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>

        {/* Operating Hours Section */}
        <div className="contact-section">
          <h2 className="section-title">Operating Hours</h2>
          <p className="contact-info">
            Monday - Friday: 9:00 AM - 6:00 PM<br />
            Saturday: 10:00 AM - 4:00 PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="contact-footer">
        <p>&copy; 2024 Beauty Parlour. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Contact;
