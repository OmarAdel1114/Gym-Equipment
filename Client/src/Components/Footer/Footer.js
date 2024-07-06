import React from 'react';
import './footer.css';
import logo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';
import { FaFacebook, FaYoutube, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Blueshell Logo" /> {/* Update this path */}
        </div>
        <div className="footer-content">
          <div className="footer-about">
            <h2>About Us</h2>
            <p>We provide high-quality fitness equipment and services to help you set up your dream gym. Our solutions are designed to meet your fitness goals and exceed your expectations.</p>
          </div>
          <div className="footer-contact">
            <h2>Contact Us</h2>
            <ul>
              <li><FaMapMarkerAlt /> <span>123 Fitness Street, Cairo, Egypt</span></li>
              <li><FaPhone /> <span>+20 123 456 7890</span></li>
              <li><FaEnvelope /> <span>info@blueshell.com</span></li>
            </ul>
          </div>
          <div className="footer-social">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Made by Abdelrahman Emad and Omar Adel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
