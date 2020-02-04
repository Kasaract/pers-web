import React from 'react';

import bg from '../share/images/filler_bg.jpg';
import './Home.scss';

const Home = () => {
  return (
    <div className="" style={{ height: '100vh', overflow: 'hidden' }}>
      <div className="position-absolute background w-100" style={{ zIndex: '-1' }}>
        <div className="layer" />
      </div>

      <div class="d-flex justify-content-end align-items-center p-3 px-md-4 ">
        <nav class="my-2 my-md-0 mr-md-3">
          <a class="p-3 text-white" href="#">Home</a>
          <a class="p-3 text-white" href="#">About</a>
          <a class="p-3 text-white" href="#">Projects</a>
          {/* <a class="p-3 text-white" href="#">Design</a>
          <a class="p-3 text-white" href="#">Photography</a> */}
          <a class="p-3 text-white" href="#">Contact</a>
        </nav>
      </div>
      <div className="h-75 d-flex flex-column justify-content-center">
        <h1 className="text-white text-center mt-4" style={{ fontSize: '5.5rem', letterSpacing: '0.5rem' }}>Gary Nguyen</h1>
        <p className="text-white text-center my-4" style={{ fontSize: '1.5rem' }}>Aspiring Developer, Designer, and Photographer</p>
      </div>
    </div>
  )
}

export default Home;

{/* <div className="name">Gary Nguyen</div>
<div className="education">CS @ MIT</div>
<div className="tagline">Creator. Developer. Learner.</div> */}