import React from 'react';
import Footer from './Footer';
const Projects = () =>{


    return(
        <>
        
        <div className="split right">
        
        <div className="Projects">
        <h3>Take a sneak peak into my recent projects</h3>
        <a href='https://github.com/AnnikaNeumann/W7Hw_BreakingBad_React.git'>React App - Information about the cult series "Breaking Bad"</a>
        <br></br><br></br>

        <a href='https://github.com/AnnikaNeumann/1st-Project-Vet-Management-App.git'>Python Vet Management App</a>
        </div>
        <img className="logoImage" src={require("../images/annika.jpg")} alt='Annika'/>

        <Footer/>
        </div>
        </>

        
    )
}






export default Projects;