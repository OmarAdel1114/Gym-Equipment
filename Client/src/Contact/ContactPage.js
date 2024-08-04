import React from 'react';
import './contactpage.css';
import ContactUs from '../Components/ContactUs/ContactUs';
import Nav from '../Components/nav/Nav';
import Footer from '../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faMapMarkerAlt,
  faClock,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

function ContactPage() {
  return (
    <>
      <Nav />
      <div className="contact-page">
        <div className='photo-header'>
          <h1 className="header-title">Contact Us</h1>
        </div>
        <div className="contact-details">
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div>
              <h2>Phone</h2>
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <div>
              <h2>Address</h2>
              <p>123 Main Street, City, Country</p>
            </div>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faClock} className="contact-icon" />
            <div>
              <h2>Work Time</h2>
              <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div>
              <h2>Email</h2>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
