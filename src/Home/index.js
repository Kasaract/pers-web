import React, { useState } from 'react';
import Particles from 'react-particles-js';

import NavBar from '../share/components/NavBar';
import particles from './particles.json';


import facebook from '../share/images/social-media-icons/facebook.svg';
import linkedin from '../share/images/social-media-icons/linkedin.svg';
import twitter from '../share/images/social-media-icons/twitter.svg';
import instagram from '../share/images/social-media-icons/instagram.svg';
import github from '../share/images/social-media-icons/github.svg';
import headshot from '../share/images/gary3.jpg';
import './Home.scss';

const Home = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="home_wrapper">
      
      <div className="middle_layer" />
      <div className="top_layer" />

      <div className="intro">
        {/* <div className="intro__image"/> */}
        <img className="intro__image" src={headshot} alt="home"/>
        <div className="intro__text">
          <div className="name">Gary Nguyen</div>
          <div className="education">CS @ MIT</div>
          <div className="tagline">Creator. Developer. Learner.</div>
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


      <NavBar open={navOpen} handleClick={setNavOpen}/>

      <Particles
        style={{backgroundColor: "#297CBF"}}
        params={particles} 
      />
    </div>
  )
}

export default Home;