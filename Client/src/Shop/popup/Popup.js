import React from 'react';
import './popup.css'; // Optional: Add your styles in a CSS file

const Popup = ({ message, isVisible }) => {
  return (
    isVisible && (
      <div className="popup">
        <p>{message}</p>
      </div>
    )
  );
};

export default Popup;
