// import React, { useState, useEffect } from 'react';
import './css/DarkModeToggle.css';     

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode ? 'true' : 'false');
  };

  useEffect(() => {
    // Check local storage for user preference
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setIsDarkMode(true);
    }
  
  }, []);

  useEffect(() => {
    // Apply dark mode styles to the page
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}>
      <button
        onClick={toggleDarkMode}
        // aria-pressed={isDarkMode}
        className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`}
      >
        <span className="icon moon">🌙</span>
        <span className="icon sun">☀️</span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
