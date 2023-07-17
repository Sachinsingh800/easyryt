import React, { useState, useEffect } from 'react';
import style from "./Rating.module.css"

export const GoogleRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (rating < 4) {
        setRating((prevRating) => prevRating + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [rating]);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => handleRating(value)}
        />
      ))}
    </div>
  );
};

const Star = ({ filled, onClick }) => (
  <span className={style.star} onClick={onClick}>
    {filled ? '★' : '☆'}
  </span>
);


export const ClutchRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (rating < 3) {
        setRating((prevRating) => prevRating + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [rating]);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <Stars
          key={value}
          filled={value <= rating}
          onClick={() => handleRating(value)}
        />
      ))}
    </div>
  );
};

const Stars = ({ filled, onClick }) => (
  <span className={style.star} onClick={onClick}>
    {filled ? '★' : '☆'}
  </span>
);


