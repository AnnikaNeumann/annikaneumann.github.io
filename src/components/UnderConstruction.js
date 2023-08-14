import React, { Component } from 'react';
import './UnderConstruction.css';
 
const UnderConstruction = () => {
 
    return (
      
      <div className='construction' style={{backgroundImage: 'url(' + require('../images/Space.jpeg') + ')'}}>
      <h1 tabIndex='-1' className="header" >Annika Neumann<br></br>Life between Coding and Cats</h1>       
      <p>This website is currently under construction, I will be back soon</p>
        <ul className='icons' tabIndex={0}>
                    <li>
                    <a href="https://github.com/AnnikaNeumann" target="_blank" rel="noreferrer"><img className="github" src={require("../images/github-sign.png")} alt='Link to Github'/></a>
                    </li>
                    
                    <li>
                    <a href="https://www.linkedin.com/in/annika-neumann-422b98232/" target="_blank" rel="noreferrer"><img className="linkedin" src={require("../images/linkedin.png")} alt='Link to LinkedIn'/></a>
                    </li>
                </ul>
        </div>
        
       
                
    );
    };

  
export default UnderConstruction;