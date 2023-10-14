import React from 'react';
import PortfolioContainer from './container/PortfolioContainer';
import './App.css';
import { Outlet } from 'react-router-dom';


const App = () => {

  
  console.log("This is a test")

  return (
    
    <>
      <PortfolioContainer />
      <Outlet /> 
    </>
  );
};

export default App;

