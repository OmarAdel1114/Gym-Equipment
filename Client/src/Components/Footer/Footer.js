import React from 'react';
import './footer.css';
import logo from '../../assets/media/New_Blue Logo Whait_2 (2) (1).webp';
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaShoppingCart,
  FaTag,
  FaShippingFast,
  FaStore,
  FaCheckCircle,
  FaHandshake,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Blueshell Logo" />
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-services">
          <div className="service">
            <div className="service-holder">
              <FaShoppingCart className="service-icon" />
              <p>ONE-STOP SHOPPING</p>
            </div>
            <span>Take care of all your inventory needs in one place.</span>
          </div>
          <div className="service">
            <div className="service-holder">
              <FaTag className="service-icon" />
              <p>EVERYDAY LOW PRICES</p>
            </div>
            <span>
              See a better price? Let us know and we’ll match it, that’s our low
              price guarantee.
            </span>
          </div>
          <div className="service">
            <div className="service-holder">
              <FaShippingFast className="service-icon" />
              <p>FAST SHIPPING</p>
            </div>
            <span>
              Need it fast? No problem! Just place your order and leave the rest
              to us.
            </span>
          </div>
          <div className="service">
            <div className="service-holder">
              <FaStore className="service-icon" />
              <p>RISK-FREE BUYING</p>
            </div>
            <span>
              Our products are guaranteed to sell. If you can’t sell it, we’ll
              buy it back!
            </span>
          </div>
          <div className="service">
            <div className="service-holder">
              <FaCheckCircle className="service-icon" />
              <p>NO MINIMUM ORDER</p>
            </div>
            <span>
              Buy one or buy many. Order what you need when you need it.
            </span>
          </div>
          <div className="service">
            <div className="service-holder">
              <FaHandshake className="service-icon" />
              <p>TRAINED SALES REPS</p>
            </div>
            <span>
              Our Sales reps are carefully trained to provide the service &
              support you deserve.
            </span>
          </div>
        </div>
        <div className="footer-content">
          <div className="footer-about">
            <h2>About Us</h2>
            <p>
              We provide high-quality fitness equipment and services to help you
              set up your dream gym. Our solutions are designed to meet your
              fitness goals and exceed your expectations.
            </p>
          </div>
          <div className="footer-contact">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <FaMapMarkerAlt /> <span>123 Fitness Street, Cairo, Egypt</span>
              </li>
              <li>
                <FaPhone /> <span>+20 123 456 7890</span>
              </li>
              <li>
                <FaEnvelope /> <span>info@blueshell.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Made by{' '}
            <span className="anchor-profile">
              <a href="https://abdelrahmanemad2712.me" target='blank' rel="">
                Abdelrahman Emad
              </a>
            </span>
            {' '}
            and
            {' '} 
            <span className='anchor-profile'>
           <a href={"https://Facebook.com"} target='blank'>
             Omar Adel
            </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
