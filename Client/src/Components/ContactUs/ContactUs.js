import React from 'react';
import './contactus.css'

function ContactUs() {
  return (
    <div className="contact-us-section">
      <h2 className="header-title">Contact Us</h2>
      <p className="info">
        We'd love to hear from you! Please fill out the form below and we will
        get in touch with you shortly.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
