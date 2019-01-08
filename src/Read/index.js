import React from 'react';

import NavBar from '../share/components/NavBar';
import Footer from '../share/components/Footer';
import CurrentRead from './components/Current';
import './read.scss';

const Read = () => {
  return (
    <div>
      <NavBar />
      <CurrentRead />
      <Footer />
    </div>     
  )
}

export default Read;