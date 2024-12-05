import React from "react";
import "./Button.css";

const Button = ({ icon, text, title, variant }) => {
  return (
    <button
      type="button"
      className={variant === "outline" ? "btn-border" : "btn-solid"}
    >
      {icon && <div>{icon}</div>}
      <div className="slider-btn-info">
        {text && <p>{text}</p>}
        {title && <h1>{title}</h1>}
      </div>
    </button>
  );
};

export default Button;
