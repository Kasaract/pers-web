import React from 'react';

import './footer.scss';
import facebook from '../../images/social-media-icons/facebook-footer.svg';
import linkedin from '../../images/social-media-icons/linkedin-footer.svg';
import twitter from '../../images/social-media-icons/twitter-footer.svg';
import instagram from '../../images/social-media-icons/instagram-footer.svg';

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__message">© Designed and coded by Gary Nguyen.</div>
      <div className="footer__socialmedia-container">
        <a href="https://www.instagram.com/garynguyen18/" target="_blank">
          <img className="footer__socialmedia-icon" src={instagram} alt="IG"/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100017551746096" target="_blank">
          <img className="footer__socialmedia-icon" src={facebook} alt="FB"/>
        </a>
        <a href="https://www.linkedin.com/in/gary-nguyen-271504155/" target="_blank">
          <img className="footer__socialmedia-icon" src={linkedin} alt="LinkedIn"/>
        </a>
        <a href="https://twitter.com/garynguyen_18" target="_blank">
          <img className="footer__socialmedia-icon" src={twitter} alt="Twitter"/>
        </a>
      </div>
    </div>
  )
}

export default Footer;