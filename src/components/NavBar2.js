import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/NavBar2.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";

function NavBar2() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === "Space") {
      handleClick();
    }
  };

  return (
    <>

      <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar-container container" >
          

            <Link to="/" className="navbar-logo" tabIndex='0' onClick={closeMobileMenu}>
            <img className="logo" src={require("../static/CatLogo.png")} alt='A black and white logo with the text "coding and cats.'/>
            </Link>

            <div 
            className="menu-icon" 
            tabIndex='0' 
            onClick={handleClick}
            onKeyDown={handleKeyPress} // Handle keyboard events
            role="button"
            >
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ol className={click ? "nav-menu active" : "nav-menu"} tabIndex='0'>
              <li className="nav-item">
                <NavLink
                  to="/" tabIndex='0'
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item" >
                <NavLink
                  to="/about" tabIndex='0'
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/projects" tabIndex='0'
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Projects
                </NavLink>
                </li>
              <li className="nav-item">
                <NavLink
                  to="/contact" tabIndex='0'
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu} 
                >
                  Contact
                </NavLink>
              </li>
            </ol>
          </div>
      </IconContext.Provider>
    </>
  );
}

export default NavBar2;