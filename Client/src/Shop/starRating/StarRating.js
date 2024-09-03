import React from 'react';
import './starrating.css'

const StarRating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((star, index) => {
        index += 1;
        return (
          <span key={index} className={index <= rating ? "on" : "off"}>
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
