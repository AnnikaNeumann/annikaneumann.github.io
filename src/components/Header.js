import React from "react";
import NavBar2 from "./NavBar2";
import SkipToContent from './SkipToContent';



const Header = () => {
    return (
      <div>
        <header>
          <SkipToContent />
        </header>
        <NavBar2 />
      </div>
    );
  }


export default Header;