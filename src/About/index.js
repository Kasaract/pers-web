import React from 'react';

import './about.scss';
import Gary from './images/aboutphoto.jpg';

const About = () => {
	return (
    <div className="about__container" id="about">
      <div className="about__headline">About</div>
      <div className="about__content-container">
        <img className="about__picture" src={Gary} alt="Photo"/>
        <div className="about__message-container">
          <p className="about__paragraph">Hey there! I'm Gary, a freshman at MIT studying Computer Science and Business Analytics.</p>
          <p className="about__paragraph">I am currently a remote intern at <a className="about__paragraph-link" href="https://fiduciaryshield.bidmoni.com/" target="_blank">BidMoni Inc.</a> working with data analytics and a front-end developer for the annual <a className="about__paragraph-link" href="https://newenglandivsa.org/" target="_blank">NEIVSA</a> <a className="about__paragraph-link" href="https://www.facebook.com/events/1947582202213109/" target="_blank"> Vietnamese Empowerment Summit.</a></p>
          <p className="about__paragraph">Some fun things I like to do in my free time are playing table tennis, competing in chess, and rewatching Naruto episodes.</p>
          <p className="about__paragraph">Feel free to connect with me at <a className="about__paragraph-link" href="mailto:garynguyen2018@gmail.com" target="_blank">garynguyen2018@gmail.com!</a></p>
        </div>
      </div>

    </div>
	)
}

export default About;