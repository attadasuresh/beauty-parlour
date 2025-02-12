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
            <li>Email: <a href="mailto:beautyparlour@example.com">renukamakeup6@gmail.com</a></li>
            <li>Phone: <a href="tel:+1234567890">6301479701</a></li>
            <li>Phone: <a href="tel:+1234567890"> 9392633540</a></li>

            <li>Address: 123 Beauty Street, Fashion City</li>
          </ul>
        </div>

        <div className="footer-section footer-social" style={{textAlign:"center",alignItems:"center",justifyContent:"center"}}>
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-icons" >
            <a href="#" style={{color:"white",fontSize:"40px"}} ><FaFacebook  /></a>
            <a href="#" style={{color:"white",fontSize:"40px"}}><FaInstagram /></a>
            <a href="#" style={{color:"white",fontSize:"40px"}}><FaTwitter /></a>
            <a href="#" style={{color:"white",fontSize:"40px"}}><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Renu makeup works. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
