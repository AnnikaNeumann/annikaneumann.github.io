import React from 'react';
import '../components/css/SkipToContent.css';

const SkipToContent = () => {
  return (
    <a href="#main-content" tabIndex='0' className="skip-link">
      Skip to Content
    </a>
  );
};

export default SkipToContent;