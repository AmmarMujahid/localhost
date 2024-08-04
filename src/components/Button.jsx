import React from "react";

const Button = ({ title, className, primary, secondary, icon, ...rest }) => {
  let baseStyle =
    "px-7 rounded-md whitespace-nowrap flex gap-2 items-center justify-center cursor-pointer transition duration-300 hover:scale-105";

  if (primary) {
    baseStyle += " bg-primary text-white py-4 font-medium";
  }

  if (secondary) {
    baseStyle +=
      " bg-white text-primary py-3 border-[1px] border-primary font-semibold";
  }

  return (
    <button className={`${baseStyle} ${className}`} {...rest}>
      {icon}
      {title}
    </button>
  );
};

export default Button;
