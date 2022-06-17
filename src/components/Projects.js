import React from 'react';
import Footer from './Footer';
const Projects = () =>{


    return(
        <>
        <aside>

        <div className="split right">
        <h2>Take a sneak peak into my recent projects</h2>
        <h3>This website is also accessible via Screen Reader</h3>
        
        <div className="flex-container">

        <div className='link1'>
        <a href='https://github.com/AnnikaNeumann/BeyondTravelling' aria-label='Beyond Travelling App'>Beyond Travelling - Your source for accessible accommodation in the UK</a>
        <img className="BeyondTravel" src={require("../images/BeyondTravelLogo.png")} alt='BeyondTravellingLogo'/>
        </div>

        <br></br><br></br>


        <div className='link2'>
        <a href='https://github.com/AnnikaNeumann/W7Hw_BreakingBad_React.git' aria-label='Breaking Bad App'>React App - Information about the cult series "Breaking Bad"</a>
        <br></br>
        <img className="BreakingBad" src={require("../images/BreakingBad.png")} alt='BreakingBad'/>
        </div>

        <br></br><br></br>
        
        <div>
        <a href='https://github.com/AnnikaNeumann/trivia_js_project' aria-label='The Quizard of Oz App'>React App - A fun Trivia Quiz<br>
        </br></a><br></br>
        <img className="Quiz" src={require("../images/Quiz.png")} alt='Trivia Quiz'/>
        </div>

        <br></br><br></br>

        <div>
        <p><a href='https://github.com/AnnikaNeumann/W9LabHotelBooking.git' aria-label='Hotel Booking App'>React App - HotelBooking</a></p><br>
        </br><br></br>
        <img className="Hotel" src={require("../images/hotel.png")} alt='Hotel California App'/>
        </div>
        <br></br><br></br>

        </div>
        </div>
        </aside>
        </>

        
    )
}






export default Projects;