import React from "react";
import '../components/css/Footer.css';

const Footer = () =>{

    return(
        <div>
        <footer aria-roledescription="footer and copyright statement ">
        <div tabIndex='0' className="Footer">
         <h3>&copy;{new Date().getFullYear()} created with React, JavaScript and CSS by Annika Neumann</h3>
        </div>
        </footer>
        </div>
    )
}



export default Footer;