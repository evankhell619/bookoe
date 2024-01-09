import React, { children } from "react";

const Button = (props) => {
  const { children, color = "bg-white" } = props;
  return (
    <button
      className={` h-[50px] font-cus[Poppins] text-[20px] border border-purp rounded-md  text-purp font-semibold  ${color} `}
    >
      {children}
    </button>
  );
};

export default Button;
