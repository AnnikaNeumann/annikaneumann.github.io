import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import React from 'react';
import {createRoot} from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';
// import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <ContactForm />,
      },
      // {
      //   path: '*',
      //   element: <NotFound />,
      // }

    ],
  },
]);

const root = createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
