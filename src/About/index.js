import React from 'react';

import fb from '../share/images/social-media-icons/facebook.svg';
import linkedin from '../share/images/social-media-icons/linkedin.svg';
import ig from '../share/images/social-media-icons/instagram.svg';
import github from '../share/images/social-media-icons/github.svg';
import twitter from '../share/images/social-media-icons/twitter.svg';
import about from '../share/images/about.jpg';
import './About.scss';

const About = () => {
  return (
    <div className="my-3 pb-3">
      <h1 className="text-center mb-3 mt-5">About Me</h1>
      <div className="w-100 d-flex justify-content-center">
        <img src={about} className="rounded-circle mx-auto" alt="about" style={{ maxHeight: '15rem' }} />
      </div>
      <div className="row my-3">
        <div className="col" />
        <div className="col-2 d-flex flex-row justify-content-between">
          <img src={fb} style={{ maxHeight: '1.3rem' }} alt="fb" />
          <img src={linkedin} style={{ maxHeight: '1.3rem' }} alt="linkedin" />
          <img src={ig} style={{ maxHeight: '1.3rem' }} alt="instagram" />
          <img src={github} style={{ maxHeight: '1.3rem' }} alt="github" />
          <img src={twitter} style={{ maxHeight: '1.3rem' }} alt="twitter" />
        </div>
        <div className="col" />
      </div>
      <div className="row">
        <div className="col" />
        <div className="col-5">
          <div className="text-center my-3" style={{ fontSize: '1.3rem' }}>Hey! I'm Gary. Thanks for visiting <span role="img" aria-label="(waving hand)">👋</span>. I'm a sophomore currently studying CS, Econ, and Data Science (6-14) at MIT.</div>
          <div className="text-center my-3" style={{ fontSize: '1.3rem' }}>Looking to get in touch? Feel free to shoot me an email at <a href="mailto:garynguyen2018@gmail.com">garynguyen2018@gmail.com</a> or take a look at my <a href="#" target="_blank" rel="noopener noreferrer">resume</a>.</div>
        </div>
        <div className="col" />
      </div>
    </div>
  )
}

export default About;