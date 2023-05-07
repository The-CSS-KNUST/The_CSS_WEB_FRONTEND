import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/MobileNavigation.css';

function Mobile_nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     <button className="toggle-button" onClick={handleToggle}><i className="bi bi-x-lg"></i></button>
     <div className={`mobile-navigation ${isOpen ? '' : 'open'}`}>
      <div className="mobile-navigation-header">
        <button className="toggle-button" onClick={handleToggle}>
             <i className="fa-solid fa-list-radio menu_icon"></i>
         </button>
        {/* <div className="profile">
          <img src="profile-image.jpg" alt="Profile" />
          <span>John Doe</span>
        </div> */}
      </div>
      <nav className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/challenge">Challenge</Link>
        <Link to="/executives">Executives</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
    </>
    
  );
}

export default Mobile_nav;
