import React from 'react';
import { Link } from 'react-scroll';

import './navbar.scss';

const NavBar = () => {
  return (
    <div className='navbar__container'>
      <div className='navbar__link'>
        <Link
          to="about"
          smooth={true}
          duration={700}
        >
          About
        </Link>
      </div>
      <div className='navbar__link'>
      <Link
        to="experience"
        smooth={true}
        duration={700}
      >
        Experience
      </Link>
      </div>
      <div className='navbar__link'>
      <Link
        to="hobbies"
        smooth={true}
        duration={700}
      >
        Hobbies
      </Link>
      </div>
    </div>
  );
}

export default NavBar;