import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRouter } from 'react-router-dom'; // Use createRouter
import Home from './components/Home';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';
import SubmitSuccess from './components/SubmitSuccess';

const root = createRoot(document.getElementById('root'));

const router = createRouter({
  routes: [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <ContactForm /> },
    { path: '/projects', element: <Projects /> },
    { path: '/submitsuccess', element: <SubmitSuccess /> },
  ],
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // document.getElementById('root')
);



// import React from 'react';
// import {createRoot} from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter } from 'react-router-dom'; 
// import Home from './components/Home';
// import About from './components/About';
// import ContactForm from './components/ContactForm';
// import Projects from './components/Projects';
// import SubmitSuccess from './components/SubmitSuccess';
// import { RouterProvider, Route, Link, Outlet,} from "react-router-dom";

// const root = createRoot(document.getElementById('root'));

// const router = createBrowserRouter([
//   {
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/contact',
//         element: <ContactForm />,
//       },
//       {
//         path: '/projects',
//         element: <Projects />,
//       },
//       {
//         path: '/submitsuccess',
//         element: <SubmitSuccess />,
//       },
//     ],
//   },
// ]);

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <App />
//     </RouterProvider>
//   </React.StrictMode>,
// );


