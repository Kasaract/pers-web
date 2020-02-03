import React from 'react';
import about from '../share/images/about.jpg';
import './About.scss';

const About = () => {
  return (
    <div className="about_wrapper">
      <div className="about">
        <img className="about__image" src={about} alt="about" />
        <div className="about__text">
          <div className="header">About Me</div>
          <div className="paragraph">Hey! I'm Gary. Thanks for visiting <span role="img" aria-label="(waving hand)">👋</span>. I'm a sophomore currently studying CS, Econ, and Data Science (6-14) at MIT.</div>
          <div className="paragraph">I'm a front-end enthusiast and aspiring UI/UX designer. In my free time, you'll find me dancing away in the studio, playing table tennis, or binging sci-fi shows!</div>
          <div className="paragraph">Looking to get in touch? Feel free to shoot me an email at <a href="mailto:garynguyen2018@gmail.com">garynguyen2018@gmail.com</a> or take a look at my <a href="#" target="_blank" rel="noopener noreferrer">resume</a>.</div>

        </div>
      </div>
    </div >
  )
}

export default About;