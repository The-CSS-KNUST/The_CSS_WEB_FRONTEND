import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/MobileNavigation.css';

function MobileNavigation() {
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
    <div className={`mobile-navigation ${isOpen ? 'open' : ''}`}>
      <div className="mobile-navigation-header">
        <button className="toggle-button" onClick={handleToggle}>
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
  );
}

export default MobileNavigation;
