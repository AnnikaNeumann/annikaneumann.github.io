import React from 'react';
import PortfolioContainer from './container/PortfolioContainer';
// import UnderConstruction from './components/UnderConstruction';

import './App.css';

import { Outlet } from 'react-router-dom';

const App = () => {


  console.log("This is a test")
  return (
    <>
      {/* <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button> */}

      <PortfolioContainer />
      <Outlet /> 
    </>
  );
};

export default App;

