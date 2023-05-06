import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { nav_events } from '../javascript/script.js';

function Navbar() {
  return (
         <div className="navbar" onClick={nav_events}>
            <div className="navbar__logo">Logo</div>
            <nav className="navbar__nav">
              <Link to="/">Home</Link>
              <Link to="../Activities">Activities</Link>
              <Link to="../Challenge">Challenge</Link>
              <Link to="../Executives">Executives</Link>
              <Link to="../Blog">Blog</Link>
            </nav>
            <button className="navbar__button">SIGN IN</button>
        </div>

       

   
  );
}

 
export default Navbar;
