import React, { useState } from 'react';
import './css/DarkModeToggle.css';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode', !isDarkMode);
  };

  React.useEffect(() => {
    // Check local storage for user preference
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  React.useEffect(() => {
    // Store user preference in local storage
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  return (
    <div className="dark-mode-toggle">
      <button
        onClick={toggleDarkMode}
        aria-pressed={isDarkMode}
        className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`}
      >
        <span className="icon moon">🌙</span>
        <span className="icon sun">☀️</span>
      </button>
    </div>
  );
};

export default DarkModeToggle;
