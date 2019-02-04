import React from 'react';
//import { Link, animateScroll as scroll } from 'react-scroll';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

import './navbar.scss';

const NavBar = () => {
  return (
    <div className='navbar__container'>
      <div className='navbar__link'>
        <AnchorLink href='#about'>About</AnchorLink>
      </div>
      <div className='navbar__link'>
      <AnchorLink href='#experience'>Experience</AnchorLink>
      </div>
      <div className='navbar__link'>
        <Link to='/listen'>
          Listening
        </Link>
      </div>
      <div className='navbar__link'>
        <Link to='/read'>
          Reading
        </Link>
      </div>
      <div className='navbar__link'>
        <Link to='/learn'>
          Learning
        </Link>
      </div>
    </div>
  );
}

export default NavBar;