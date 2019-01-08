import React from 'react';

import Footer from '../share/components/Footer';
import CurrentRead from './components/Current';
import './read.scss';

const Read = () => {
  return (
    <div>
      <CurrentRead />
      <Footer />
    </div>     
  )
}

export default Read;