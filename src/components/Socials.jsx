import React from "react";
import "../css/Socials.css";
<<<<<<< HEAD
=======
import Csslogo from "../assets/CSS LOGO 1.jpg";
>>>>>>> origin/divines-branch

const Socials = () => {
  return (
    <div className="socials-container">
      <div className="socials-left">
<<<<<<< HEAD
        <img src="logo.png" alt="Logo" className="socials-logo" />
=======
        <img src={Csslogo} alt="Logo" className="socials-logo" />
>>>>>>> origin/divines-branch
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
