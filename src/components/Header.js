import React, {useState} from "react";
import About from "./About";



const Header = () => {

    // const handleClick = function(){
    //     onClick(handleClick)
    // }

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
                </ul>
            </nav>
           
            </div>

        
    )
}


export default Header;