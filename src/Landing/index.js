import React from 'react';

import './landing.scss';
import facebook from '../share/images/social-media-icons/facebook.svg';
import linkedin from '../share/images/social-media-icons/linkedin.svg';
import twitter from '../share/images/social-media-icons/twitter.svg';
import instagram from '../share/images/social-media-icons/instagram.svg';

const Landing = () => {
  return (
    <div className="landing__container">
      <div className="landing__text-container">
        <div className="landing__name">Gary Nguyen</div>
        <div className="landing__major">CS and Business Analytics @MIT</div>
        <div className="landing__tagline">Creator. Developer. Learner.</div>
        <div className="landing__socialmedia-container">
          <a href="https://www.instagram.com/garynguyen18/" target="_blank">
            <img className="landing__socialmedia-icon" src={instagram} alt="IG"/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100017551746096" target="_blank">
            <img className="landing__socialmedia-icon" src={facebook} alt="FB"/>
          </a>
          <a href="https://www.linkedin.com/in/gary-nguyen-271504155/" target="_blank">
            <img className="landing__socialmedia-icon" src={linkedin} alt="LinkedIn"/>
          </a>
          <a href="https://twitter.com/garynguyen_18" target="_blank">
            <img className="landing__socialmedia-icon" src={twitter} alt="Twitter"/>
          </a>
        </div>
      </div>
    </div>
  )   
}

export default Landing;