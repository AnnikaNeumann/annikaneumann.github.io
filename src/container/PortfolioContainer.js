import React from 'react';

import styled from 'styled-components';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Projects from '../components/Projects';
import PortfolioContext from '../context/PortfolioContext';
import 

const Title = styled.h1`
    text-align: center; 
    font-size: 1.5em;
    color: #fff;
    background-color: #062c43;
    margin: 0;
    padding: 1em;
`

const [portfolio, setPortfolio] = useState[null];


const PortfolioContainer = () =>{


    return(
    <>  
        <Title>WELCOME TO MY PORTFOLIO</Title>
        <PortfolioContext.Provider value={{portfolio}}>
        <h2>Planned and designed using Javascript, CSS and React</h2>
        <ContactMe/>
        <AboutMe/>
        <Projects/>
        </PortfolioContext.Provider>
    </> 

    )
}


export default PortfolioContainer;