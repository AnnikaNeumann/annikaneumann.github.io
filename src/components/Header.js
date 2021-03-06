import React, {useState} from "react";


const Header = () => {


    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                    <a href="https://github.com/AnnikaNeumann" target="_blank" rel="noreferrer"><img className="github" src={require("../images/github-sign.png")} alt='Github link'/></a>
                    </li>
                    
                    <li>
                    <a href="https://www.linkedin.com/in/annika-neumann-422b98232/" target="_blank" rel="noreferrer"><img className="linkedin" src={require("../images/linkedin.png")} alt='LinkedIn link'/></a>
                    </li>
                    <li>
                    <h1>Annika Neumann<br></br>Life between Coding and Cats</h1>
                    </li>
                    <li>
                    <div>
                    <img className="annika" src={require("../static/annika.png")} alt='annika in a black jacket with her white cat on her shoulder.'/>
                    </div>
                    </li>
                    <hr/>
                    
                </ul>
            </nav>
            </div>


        
    )
}


export default Header;