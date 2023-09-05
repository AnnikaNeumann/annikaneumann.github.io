import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Close the menu when the screen size is larger than 768px
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
        <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
        <div className={`bar ${isOpen ? 'animate' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;