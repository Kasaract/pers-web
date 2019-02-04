import React from 'react';

import NavBar from '../share/components/NavBar';
import Landing from '../Landing';
import About from '../About';
import Experiences from '../Experiences';
import Hobbies from '../Hobbies';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <Experiences />
      <Hobbies />
    </div>
  )
}

export default Home;