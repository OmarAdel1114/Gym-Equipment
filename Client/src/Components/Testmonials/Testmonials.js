import React from 'react';
import './testmonials.css'

function Testmonials() {
  const testimonialsData = [
    {
      name: 'John Doe',
      testimonial:
        'This gym equipment store has everything I need. The quality is top-notch!',
      date: 'June 10, 2023',
    },
    {
      name: 'Jane Smith',
      testimonial:
        'Excellent service and great selection of products. Highly recommended!',
      date: 'July 5, 2023',
    },
    {
      name: 'Sam Johnson',
      testimonial:
        'Fantastic customer support and fast delivery. Will buy again!',
      date: 'August 15, 2023',
    },
  ];

  return (
      <div className="testimonials-section">
          <h2 className="header-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="testimonial-text">"{testimonial.testimonial}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
            <p className="testimonial-date">{testimonial.date}</p>
          </div>
        ))}
        {/* <p>Customer testimonial...</p> */}
      </div>
      {/* More testimonials */}
    </div>
  );
}

export default Testmonials;
