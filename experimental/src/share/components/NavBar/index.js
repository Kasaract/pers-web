import React from 'react';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';

import './navbar.scss';

const NavBar = ({open, handleClick}) => {

  const handleNavClick = () => handleClick(!open);

  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" onClick={handleNavClick}/>
      
        {/* Burger */}
        <span></span>
        <span></span>
        <span></span>
        
        <ul id="menu">
          <a href="#"><li>Home</li></a>
          <Link to="/about"><li onClick={handleNavClick}>About</li></Link>
          <a href="#"><li>Info</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;