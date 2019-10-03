import React from 'react';

import './experiences.scss';
import experiences from './experiences.json';
import bidmoni from './images/bidmoni.png';
import neivsa from './images/neivsa.png'

const Experiences = () => {
  
  const mapExperiences = (experiences) => experiences.map(experience => (
    <div className="experiences__experience-container" key={experience.image}>
      <img className="experiences__image" src={experience.image} alt="Logo"/>
      <div className="experiences__text-container">
        <div className="experiences__name">{experience.name}</div>
        <div className="experiences__position">{experience.position}</div>
        <div className="experiences__location">{experience.location}</div>
        <div className="experiences__description">{experience.description}</div>
      </div>
    </div>
  ));

  return (
    <div className="experiences__content-container" id="experience">
      <div className="experiences__headline">Experience</div>
        <div className="experiences__experience-container">
        <img className="experiences__image" src={bidmoni} alt="Logo"/>
        <div className="experiences__text-container">
          <div className="experiences__name">
            <a className="experiences__name-link" href="https://fiduciaryshield.bidmoni.com/" target="_blank" rel="noreferrer noopener nofollow">BidMoni Inc.</a>
          </div>
          <div className="experiences__position">Data Analyst Intern // Oct 2018 - Present</div>
          <div className="experiences__location">Vancleave, Mississippi</div>
          <div className="experiences__description">BidMoni is a fintech startup firm whose flagship product, 
            FiduciaryShield, is a service platform for retirement plans to solicit bids from retirement plan providers. As an 
            intern, I'm currently working on data projects using SQL Server.
          </div>
        </div>
      </div>
      <div className="experiences__experience-container">
      <img className="experiences__image" src={neivsa} alt="Logo"/>
      <div className="experiences__text-container">
        <div className="experiences__name">
          <a className="experiences__name-link" href="https://www.facebook.com/events/1947582202213109/" target="_blank" rel="noreferrer noopener nofollow">VES-5</a>
        </div>
        <div className="experiences__position">IT Committee // Oct 2018 - Present</div>
        <div className="experiences__location">Providence, Rhode Island</div>
        <div className="experiences__description">The New England Intercollegiate Vietnamese Student Association (NEIVSA) hosts 
          the Vietnamese Empowerment Summit (VES) annually with the aim to promote education, leadership, and culture. As part of the IT team,
          I'm working on front-end development using ReactJS and SCSS.
        </div>
      </div>
    </div>
    </div>
  )
}

export default Experiences;