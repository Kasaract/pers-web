import React from 'react';
import { Link } from 'react-router-dom';

import './secondarynavbar.scss';

const SecondaryNavBar = () => {
  return (
    <div className='secondarynavbar__container'>
        <Link className='secondarynavbar__link' to="/" exact>Home</Link>
        <Link className='secondarynavbar__link' to="/read">Read</Link>
        <Link className='secondarynavbar__link'to="/listen">Listen</Link>
        <Link className='secondarynavbar__link' to="/learn">Learn</Link>
    </div>
  );
}

export default SecondaryNavBar;