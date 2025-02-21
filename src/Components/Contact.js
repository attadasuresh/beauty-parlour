import React from 'react';
import './Contact.css'; // Import the CSS file

// Import Font Awesome Icons
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      
      <div className="contact-content">

        {/* Get in Touch Section */}
        <div className="contact-section">
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-info">
            Email: <a href="renukamakeup6@gmail.com"><FaEnvelope /> renukamakeup6@gmail.com</a><br />
            Phone: <a href="tel:+1234567890"><FaPhone /> 6301479701</a><br />
            Phone: <a href="tel:+1234567890"><FaPhone /> 9392633540</a><br />
          </p>
        </div>

        {/* Social Media Section */}
        <div className="contact-section">
          <h2 className="section-title">Follow Us</h2>
          <div className="social-icons " style={{alignItems:"center",justifyContent:"center"}}>
            <a href="https://facebook.com"  className="social-icon" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
                {/* Address Section */}
                <div className="contact-section">
          <h2 className="section-title">Our Address</h2>
          <p className="contact-info" style={{textAlign:"center"}}>
            <strong >Comming Soon</strong><br />
            
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
