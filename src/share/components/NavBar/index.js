import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './navbar.scss';

const NavBar = () => {
  return (
    <div className='navbar__container'>
      <div className='navbar__link'>
        <Link 
          activeClass='navbar__link'
          to='about'
          spy={false}
          smooth={true}
          offset={0}
          duration={1000}
        >
          About
        </Link>
      </div>
      <div className='navbar__link'>
        <Link 
          activeClass='navbar__link'
          to='experience'
          spy={false}
          smooth={true}
          offset={0}
          duration={1000}
        >
          Experience
        </Link>
      </div>
    </div>
  );
}

export default NavBar;