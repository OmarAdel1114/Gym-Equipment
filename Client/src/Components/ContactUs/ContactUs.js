import React, { useState } from 'react';
import './contactus.css';

function ContactUs() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const validateEmail = (email) => {
    // Basic email format validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (message.length < 10) {
      setError('Message should be at least 10 characters long.');
      return;
    }

    setError('');
    setSent(true);
    setConfirmation(
      'Thank you for Submiting!'
    );

    setTimeout(() => {
      setSent(false);
      setConfirmation('');
    }, 2000);

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-us-section" id="contact-us">
      {/* <h2 className="header-title">Contact Us</h2> */}
      <h3 className="info">
        We'd love to hear from you! Please fill out the form below 
      </h3>
      {error && (
        <p className="error-message" role="alert">
          {error}
        </p>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-required="true"
          aria-label="Name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-required="true"
          aria-label="Email"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          aria-required="true"
          aria-label="Message"
        ></textarea>

        {confirmation && (
          <p className="confirmation-message" role="status">
            {confirmation}
          </p>
        )}
        <button type="submit" disabled={sent}>
          {sent ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
