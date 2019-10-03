import React from 'react';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';

import './navbar.scss';

const NavBar = ({open, handleClick}) => {

  const handleNavClick = () => handleClick(!open);

  return (
    <>
      { open ? <div class="dark_layer" onClick={() => handleNavClick()}/> : <div /> }
      <nav role="navigation">
        <div id="menuToggle">
  { open ? <input type="checkbox" onClick={handleNavClick} checked /> : <input type="checkbox" onClick={handleNavClick} /> }
        
          {/* Burger */}
          <span></span>
          <span></span>
          <span></span>
          
          <ul id="menu">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li onClick={handleNavClick}>About</li></Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;