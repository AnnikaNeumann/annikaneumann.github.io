import React, {useState} from "react";


const Header = () => {


    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                    <a href="https://github.com/AnnikaNeumann"><img className="github" src={require("../images/github-sign.png")} alt='Github'/></a>
                    </li>
                    
                    <li>
                    <a href="https://www.linkedin.com/in/annika-neumann-422b98232/"><img className="linkedin" src={require("../images/linkedin.png")} alt='LinkedIn'/></a>
                    </li>
                    <li>
                    <h1>Hello, my name is Annika Neumann<br></br>Life between Coding and Cats</h1>
                    </li>
                </ul>
            </nav>
            </div>

        
    )
}


export default Header;