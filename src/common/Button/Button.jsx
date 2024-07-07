import React from "react";

const Button = ({ onClick, children, className, disabled, ...restProps }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
