import React from "react";

const RatingInput = () => {
  return (
    <div className="rating gap-2">
      <input type="radio" name="rating-1" className="mask mask-star bg-yell" />
      <input type="radio" name="rating-1" className="mask mask-star bg-yell" />
      <input type="radio" name="rating-1" className="mask mask-star bg-yell" />
      <input
        type="radio"
        name="rating-1"
        className="mask mask-star bg-yell"
        defaultChecked
      />
      <input type="radio" name="rating-1" className="mask mask-star bg-yell" />
    </div>
  );
};

export default RatingInput;
