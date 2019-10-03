import React, { useState } from 'react';

import NavBar from '../share/components/NavBar';


import facebook from '../share/images/social-media-icons/facebook.svg';
import linkedin from '../share/images/social-media-icons/linkedin.svg';
import twitter from '../share/images/social-media-icons/twitter.svg';
import instagram from '../share/images/social-media-icons/instagram.svg';
import github from '../share/images/social-media-icons/github.svg';
import './About.scss';

const Home = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div class="home_wrapper">

      
      { navOpen ? <div class="navbar_dark_layer" /> : <div></div> }
      <NavBar open={navOpen} handleClick={setNavOpen}/>

      <div class="intro">
        <div class="intro__image"/>
        <div class="intro__text">
          <div class="name">Gary Nguyen</div>
          <div class="education">CS @ MIT</div>
          <div class="tagline">Creator. Developer. Learner.</div>
          <div className="social-media">
            <a href="https://www.instagram.com/garynguyen18/" target="_blank" rel="noreferrer noopener nofollow">
              <img className="icon" src={instagram} alt="IG"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100017551746096" target="_blank" rel="noreferrer noopener nofollow">
              <img className="icon" src={facebook} alt="FB"/>
            </a>
            <a href="https://www.linkedin.com/in/gary-nguyen-271504155/" target="_blank" rel="noreferrer noopener nofollow">
              <img className="icon" src={linkedin} alt="LinkedIn"/>
            </a>
            <a href="https://twitter.com/garynguyen_18" target="_blank" rel="noreferrer noopener nofollow">
              <img className="icon" src={twitter} alt="Twitter"/>
            </a>
            <a href="https://twitter.com/garynguyen_18" target="_blank" rel="noreferrer noopener nofollow">
              <img className="icon" src={github} alt="Github"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;