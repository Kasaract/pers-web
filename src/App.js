import React from 'react';

import Navbar from './share/components/NavBar'
import Landing from './Landing';
import About from './About';
import Experiences from './Experiences';
import Footer from './share/components/Footer';

const App = () => {
  return (
    <div className="app__container">
      <Navbar />
      <Landing />
      <About />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
