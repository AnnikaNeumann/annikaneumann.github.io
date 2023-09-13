import React from 'react';
import '../components/css/Projects.css';

const Projects = () =>{


    return(
        <>
        <section>
        <h1 tabIndex= '0' className='project'>Take a sneak peak into a few projects<br></br> and click on each project for more information</h1>
        <br></br>
        <div className="flex-projects">

        <div className='project-links'>
        <a href='https://github.com/AnnikaNeumann/BeyondTravelling' target="_blank" rel="noreferrer" aria-label='Beyond Travelling - Your source for accessible accommodation in the UK'>Beyond Travelling - Your source for accessible accommodation in the UK</a>
        <br></br>
        <img className="BeyondTravel" src={require("../images/BeyondTravelLogo.png")} alt='A round, orange logo with five people and different disabilities'/>
        </div>

        <br></br><br></br>


        <div className='project-links'>
        <a href='https://github.com/AnnikaNeumann/W7Hw_BreakingBad_React.git' target="_blank" rel="noreferrer" aria-label='Breaking Bad App - Information about the cult series "Breaking Bad'>React App - Information about the cult series "Breaking Bad"</a>
        <br></br>
        <img className="BreakingBad" src={require("../images/BreakingBad.png")} alt='An image with green background, the Breaking Bad font and photos of the actors'/>
        </div>

        <br></br><br></br>
        
        <div className='project-links'>
        <a href='https://github.com/AnnikaNeumann/trivia_js_project' target="_blank" rel="noreferrer" aria-label='The Quizard of Oz - a fun Trivia Quiz App'>React App - A fun Trivia Quiz</a>
        <br></br>
        <img className="Quiz" src={require("../images/Quiz.png")} alt='A light blue image with a rainbow and the title "The Quizard of Oz with quiz related buttons'/>
        </div>

        </div>
        </section>
        </>

        
    )
}






export default Projects;