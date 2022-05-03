import React from 'react';
import Footer from './Footer';
const Projects = () =>{


    return(
        <>
        
        <div className="split right">

        <h2>Take a sneak peak into my recent projects</h2>
        <h4>This website is also accessible via Screen Reader</h4>

        <div className="flex-container">
        <div>
        <a href='https://github.com/AnnikaNeumann/W7Hw_BreakingBad_React.git'>React App - Information about the cult series "Breaking Bad"</a>
        <br></br><br></br>
        <img className="BreakingBad" src={require("../images/BreakingBad.png")} alt='BreakingBad'/>

        </div>
        <br></br><br></br>
        
        <div>
        <a href='github.com/AnnikaNeumann/trivia_js_project'>React App - A fun "Wizard of Oz" themed Trivia Quiz with a variety of <br>
        </br>categories and difficulty levels.</a><br></br>
        <img className="Quiz" src={require("../images/Quiz.png")} alt='Quiz'/>
        
        </div>
        <br></br><br></br>

        </div>
        </div>
        <Footer/>
        </>

        
    )
}






export default Projects;