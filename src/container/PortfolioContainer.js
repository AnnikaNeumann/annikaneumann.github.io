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
        <h2>Hello, my name is Annika - <br></br>Life between Coding (since 2021) and Cats (for 38 years)</h2>
        <About/>
        <br></br>
        <Projects/>
        <Footer/>
        </> 

    )
}


export default PortfolioContainer;