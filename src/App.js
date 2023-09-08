import React from 'react';
import PortfolioContainer from './container/PortfolioContainer';
import UnderConstruction from './components/UnderConstruction';
import About from './components/About';
import Projects from './components/Projects';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <>    
    <Router>

    <PortfolioContainer/>
      <div className="Routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
    </>

  );
}

  export default App;