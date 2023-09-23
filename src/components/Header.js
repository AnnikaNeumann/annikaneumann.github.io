import React, {useState} from "react";
import NavBar2 from "./NavBar2";
import SkipToContent from './SkipToContent';



const Header = () => {


    return (
        <div className="header">
            <header>
                <SkipToContent />
            </header>
            <NavBar2/>
        </div>                    
        
    )
}


export default Header;