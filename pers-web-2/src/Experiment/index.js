import React from 'react';
import Particles from 'react-particles-js';

import NavBar from '../share/components/NavBar';
import particles from './particles.json';

const Home = () => {
  return (
    <div style={{backgroundColor: "#297CBF"}}>
      <Particles

        params={particles} 
      />
    </div>
  )
}

export default Home;