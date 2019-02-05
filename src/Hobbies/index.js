import React from 'react';

import Tagline from './components/Tagline';
import HobbyItem from './components/HobbyItem';
import './hobbies.scss';

import book from './images/book.svg';
import bulb from './images/bulb.svg';
import headphones from './images/headphones.svg';

const Hobbies = () => {
  return (
    <div className="hobbies__container">
      <div className="hobbies__headline">Hobbies</div>
      <div className="hobbies__tagline">
        <Tagline
          text="I'm a lifelong learner, and I embrace it."
        />
      </div>
      <div className="hobbies__items-container">
        <HobbyItem 
          icon={book}
          text="Read"
          hobby="/read"
        />
        <HobbyItem 
          icon={headphones}
          text="Listen"
          hobby="/listen"
        />
        <HobbyItem 
          icon={bulb.svg}
          text="Learn"
          hobby="/learn"
        />
      </div>
    </div>
  )
}

export default Hobbies;