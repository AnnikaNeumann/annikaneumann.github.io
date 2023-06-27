import React, {useState} from "react";


const Header = () => {


    return (
        <div className="header">
            <nav>
                <ul tabIndex={0}>
                    <li>
                    <a href="https://github.com/AnnikaNeumann" target="_blank" rel="noreferrer"><img className="github" src={require("../images/github-sign.png")} alt='Link to Github'/></a>
                    </li>
                    
                    <li>
                    <a href="https://www.linkedin.com/in/annika-neumann-422b98232/" target="_blank" rel="noreferrer"><img className="linkedin" src={require("../images/linkedin.png")} alt='Link to LinkedIn'/></a>
                    </li>
                    <li>
                    <h1 tabIndex='-1' className="header" >Annika Neumann<br></br>Life between Coding and Cats</h1>
                    </li>
                    
                </ul>
            </nav>
            </div>


        
    )
}


export default Header;