import React, { useState } from 'react';

import NavBar from '../share/components/NavBar';

import './About.scss';

const About = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div class="about_wrapper">

      
      { navOpen ? <div class="navbar_dark_layer" /> : <div></div> }
      <NavBar open={navOpen} handleClick={setNavOpen}/>

      <div class="about">
        <div class="about__image"/>
        <div class="about__text">
          <div class="header">About Me</div>
          <div class="paragraph">Hey! I'm Gary. Thanks for visiting 👋. I'm a sophomore currently studying CS, Econ, and Data Science (6-14) at MIT.</div>
          <div class="paragraph">I'm a front-end enthusiast and aspiring UI/UX designer. In my free time, you'll find me dancing away in the studio, playing table tennis, or binging sci-fi shows!</div>
          <div class="paragraph">Looking to get in touch? Feel free to shoot me an email at garynguyen2018@gmail.com or take a look at my resume.</div>

        </div>
      </div>
    </div>
  )
}

export default About;