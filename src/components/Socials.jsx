import React from "react";
import "../css/Socials.css";

const Socials = () => {
  return (
    <div className="socials-container">
      <div className="socials-left">
        <img src="logo.png" alt="Logo" className="socials-logo" />
      </div>
      <div className="socials-right">
        <a href="#">
          <i className="fab fa-instagram socials-icon"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin-in socials-icon"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter socials-icon"></i>
        </a>
        <a href="#">
          <i className="fab fa-facebook-f socials-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
