import '../index.css';
import App from '../App';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Home from '../components/Home';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Projects from '../components/Projects';

// const AppWrapper = () => {
//     const [isDarkMode, setIsDarkMode] = (false);
  
    useEffect(() => {
      // Check local storage for user preference
      const storedDarkMode = localStorage.getItem('darkMode');
      if (storedDarkMode === 'true') {
        setIsDarkMode(true);
      }
    }, []);
  
    useEffect(() => {
      // Apply dark mode styles to the page
      // if (isDarkMode) {
      //   document.documentElement.setAttribute('data-theme', 'dark');
      // } else {
      //   document.documentElement.setAttribute('data-theme', 'light');
      // }
      // Store the dark mode setting in local storage
    //   localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
    // }, [isDarkMode]);

const router = createBrowserRouter([
  {
    element: <App isDarkMode={isDarkMode}/>,
    children: [
      {
        path: '/',
        element: <Home isDarkMode={isDarkMode} />,
      },
      {
        path: '/about',
        element: <About isDarkMode={isDarkMode}/>,
      },
      {
        path: '/projects',
        element: <Projects isDarkMode={isDarkMode}/>,
      },
      {
        path: '/contact',
        element: <ContactForm isDarkMode={isDarkMode}/>,
      },
         ],
  },
]);

return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  );
};

export default AppWrapper;