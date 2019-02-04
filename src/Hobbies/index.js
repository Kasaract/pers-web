import React from 'react';

import Tagline from './components/Tagline';
import HobbyItem from './components/HobbyItem';

const Hobbies = () => {
  return (
    <div>
      <Tagline
        text="I'm a learner"
      />
      <HobbyItem 
        icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3CTaF6mpX4Zm3zv8W0bUbc-R5s77UQaqK8YE_1SVk7i7Wy7E"
        text="Listen"
        hobby="/listen"
      />
      <HobbyItem 
        icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3CTaF6mpX4Zm3zv8W0bUbc-R5s77UQaqK8YE_1SVk7i7Wy7E"
        text="Listen"
        hobby="/listen"
      />
      <HobbyItem 
        icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3CTaF6mpX4Zm3zv8W0bUbc-R5s77UQaqK8YE_1SVk7i7Wy7E"
        text="Listen"
        hobby="/listen"
      />
    </div>
  )
}

export default Hobbies;