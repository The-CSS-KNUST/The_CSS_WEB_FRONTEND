import React from 'react';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">Logo</div>
      <nav className="navbar__nav">
        <a href="#">Home</a>
        <a href="#">Activities</a>
        <a href="#">Challenge</a>
        <a href="#">Executives</a>
        <a href="#">Blog</a>
      </nav>
      <button className="navbar__button">SIGN IN</button>
    </div>
  );
}
export default Navbar;