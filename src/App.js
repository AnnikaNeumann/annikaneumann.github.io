import React from 'react';
import PortfolioContainer from './container/PortfolioContainer';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';


const App = () => {

  
  console.log("This is a test")

  return (
    
    <>
      <PortfolioContainer />
      <Outlet /> 
      <Footer />

    </>
  );
};

export default App;

