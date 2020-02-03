import React from 'react';
import about from '../share/images/about.jpg';
import './About.scss';

const About = () => {
  return (
    <div>
      <div>About Me</div>
      <div>Picture</div>
      <div className="d-flex flex-row">
        <div>Icon</div>
        <div>Icon</div>
        <div>Icon</div>
        <div>Icon</div>
        <div>Icon</div>
      </div>
      <div>
        <div>Hey! I'm Gary. Thanks for visiting <span role="img" aria-label="(waving hand)">👋</span>. I'm a sophomore currently studying CS, Econ, and Data Science (6-14) at MIT.</div>
        <div>Looking to get in touch? Feel free to shoot me an email at <a href="mailto:garynguyen2018@gmail.com">garynguyen2018@gmail.com</a> or take a look at my <a href="#" target="_blank" rel="noopener noreferrer">resume</a>.</div>
      </div>
    </div>
  )
}

export default About;