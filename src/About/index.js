import React from 'react';
import about from '../share/images/about.jpg';
import './About.scss';

const About = () => {
  return (
    <div className="my-3">
      <h1 className="text-center mb-3 mt-5">About Me</h1>
      <div className="w-100 d-flex justify-content-center">
        <img src={about} className="rounded-circle mx-auto" alt="about" style={{ maxHeight: '15rem' }} />
      </div>
      <div className="d-flex flex-center">
        <div className="d-flex flex-row mx-auto my-3">
          <div className="mx-1">O</div>
          <div className="mx-1">O</div>
          <div className="mx-1">O</div>
          <div className="mx-1">O</div>
          <div className="mx-1">O</div>
        </div>
      </div>
      <div className="row">
        <div className="col" />
        <div className="col">
          <div className="text-center my-3">Hey! I'm Gary. Thanks for visiting <span role="img" aria-label="(waving hand)">👋</span>. I'm a sophomore currently studying CS, Econ, and Data Science (6-14) at MIT.</div>
          <div className="text-center my-3">Looking to get in touch? Feel free to shoot me an email at <a href="mailto:garynguyen2018@gmail.com">garynguyen2018@gmail.com</a> or take a look at my <a href="#" target="_blank" rel="noopener noreferrer">resume</a>.</div>
        </div>
        <div className="col" />
      </div>
    </div>
  )
}

export default About;