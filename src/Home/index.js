import React from 'react';

import bg from '../share/images/filler_bg.jpg';
import './Home.scss';

const Home = () => {
  return (
    <div className="">
      <img src={bg} alt="background" className="w-100" />
    </div>
  )
}

export default Home;

{/* <div className="name">Gary Nguyen</div>
<div className="education">CS @ MIT</div>
<div className="tagline">Creator. Developer. Learner.</div> */}