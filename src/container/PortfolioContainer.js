import React, {useState} from 'react';
import '../App.css';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';

 

const PortfolioContainer = () =>{


    return(
        <>
        <Header/>
        <h2>Hello, my name is Annika Neumann<br></br>Life between Coding (since 2021) and Cats (for 38 years)</h2>
        <About/>
        <Projects/>
        </> 

    )
}


export default PortfolioContainer;