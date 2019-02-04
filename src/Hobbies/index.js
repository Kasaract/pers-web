import React from 'react';

import Tagline from './components/Tagline';
import HobbyItem from './components/HobbyItem';
import './hobbies.scss';

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
          icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3CTaF6mpX4Zm3zv8W0bUbc-R5s77UQaqK8YE_1SVk7i7Wy7E"
          text="Read"
          hobby="/read"
        />
        <HobbyItem 
          icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3CTaF6mpX4Zm3zv8W0bUbc-R5s77UQaqK8YE_1SVk7i7Wy7E"
          text="Listen"
          hobby="/listen"
        />
        <HobbyItem 
          icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3CTaF6mpX4Zm3zv8W0bUbc-R5s77UQaqK8YE_1SVk7i7Wy7E"
          text="Learn"
          hobby="/learn"
        />
      </div>
    </div>
  )
}

export default Hobbies;