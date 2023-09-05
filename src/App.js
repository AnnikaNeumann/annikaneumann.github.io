import React from 'react';
import PortfolioContainer from './container/PortfolioContainer';
import UnderConstruction from './components/UnderConstruction';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';



function App() {
  return (
    <>    
    <Router>

    <PortfolioContainer/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    </>

  );
}

  export default App;