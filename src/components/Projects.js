import React from 'react';
const Projects = () =>{


    return(
        <>
        <aside>
        <h1>Take a sneak peak into my recent projects</h1>
        <br></br>
        <div className="flex-projects">

        <div className='project-links'>
        <a href='https://github.com/AnnikaNeumann/BeyondTravelling' target="_blank" aria-label='Beyond Travelling App'>Beyond Travelling - Your source for accessible accommodation in the UK</a>
        <br></br>
        <img className="BeyondTravel" src={require("../images/BeyondTravelLogo.png")} alt='BeyondTravellingLogo'/>
        </div>

        <br></br><br></br>


        <div className='project-links'>
        <a href='https://github.com/AnnikaNeumann/W7Hw_BreakingBad_React.git' target="_blank" aria-label='Breaking Bad App'>React App - Information about the cult series "Breaking Bad"</a>
        <br></br>
        <img className="BreakingBad" src={require("../images/BreakingBad.png")} alt='BreakingBad'/>
        </div>

        <br></br><br></br>
        
        <div className='project-links'>
        <a href='https://github.com/AnnikaNeumann/trivia_js_project' target="_blank" aria-label='The Quizard of Oz App'>React App - A fun Trivia Quiz</a>
        <br></br>
        <img className="Quiz" src={require("../images/Quiz.png")} alt='Trivia Quiz'/>
        </div>

        <br></br><br></br>

        <div className='project-links'>
        <a href='https://github.com/AnnikaNeumann/W9LabHotelBooking.git' target="_blank" aria-label='Hotel Booking App'>React App - HotelBooking</a>
        <br></br>
        <img className="Hotel" src={require("../images/hotel.png")} alt='Hotel California App'/>
        </div>
        <br></br><br></br>

        </div>
        </aside>
        </>

        
    )
}






export default Projects;