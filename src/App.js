import React from 'react';
import PortfolioContainer from './container/PortfolioContainer';
import UnderConstruction from './components/UnderConstruction';

import './App.css';
// import ErrorPage from "./routes/ErrorPage";

import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <PortfolioContainer />
      <Outlet /> {/* Render the nested routes */}
    </>
  );
};

export default App;

