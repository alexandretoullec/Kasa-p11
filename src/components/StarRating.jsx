import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRating = ({ rating }) => {
  const [ratingStar, setRatingStar] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="stars">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <FaStar
            key={index}
            size={30}
            color={currentRating <= rating ? "#FF6060" : "#e4e5e9"}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
