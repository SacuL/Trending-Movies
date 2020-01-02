import React from "react";
import "./Button.css";

const Button = ({ onClick, children }) => (
  <div className="my-button">
    <button onClick={onClick}>{children}</button>
  </div>
);

export default Button;
