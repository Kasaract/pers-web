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
          <a class="p-3 text-white" href="#">Design</a>
          <a class="p-3 text-white" href="#">Photography</a>
          <a class="p-3 text-white" href="#">Contact</a>
        </nav>
      </div>
      <div className="">
        <h1 className="text-white text-center">Gary Nguyen</h1>
        <h6 className="text-white text-center">Aspiring front-end developer, UI/UX designer, and photographer</h6>
      </div>
    </div>
  )
}

export default Home;

{/* <div className="name">Gary Nguyen</div>
<div className="education">CS @ MIT</div>
<div className="tagline">Creator. Developer. Learner.</div> */}