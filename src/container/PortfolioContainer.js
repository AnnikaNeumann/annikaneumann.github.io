import React, {useState} from 'react';
import '../App.css';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import Footer from '../components/Footer';

 

const PortfolioContainer = () =>{


    return(
        <>
        <Header/>
        <About/>
        <Projects/>
        <Footer/>
        </> 

    )
}


export default PortfolioContainer;