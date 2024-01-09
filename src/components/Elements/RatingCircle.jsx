import React from "react";

const RatingCircle = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
      >
        <circle cx="20.5" cy="20.5" r="20.5" fill="#FDAF17" />
        <text
          x="10"
          y="25"
          className="font-medium text-center font-cus['Poppins'] "
          fill="white"
        >
          4.0
        </text>
      </svg>
    </div>
  );
};

export default RatingCircle;
