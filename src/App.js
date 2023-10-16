import React from 'react';

import Home from './sections/Home';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';
import Design from './sections/Design';

import './App.css';

import Github from './share/images/social-media-icons/github.svg';
import LinkedIn from './share/images/social-media-icons/linkedin.svg';
import Twitter from './share/images/social-media-icons/twitter.svg';
import Instagram from './share/images/social-media-icons/instagram.svg';

const App = () => {
  return (
    <>
      <nav class="navWrapper">
        <div id="sideNav" class="sidenav my-auto">
          <div>
            <a id="aboutNav" class="homeNav" href="#home">
              Home
            </a>
            <a id="softwareNav" class="experiencesNav" href="#experiences">
              Experiences
            </a>
            <a id="photographyNav" class="projectsNav" href="#projects">
              Projects
            </a>
            {/* <a id="contactNav" class="designNav" href="#design">
							Design
						</a> */}
          </div>
        </div>
        <div id="menu" class="navsign my-auto">
          <div
            class="hamburger"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            <p class="bar bar1"></p>
            <p class="bar bar2"></p>
            <p class="bar bar3"></p>
          </div>
        </div>
      </nav>
      <Home />
      <Experiences />
      <Projects />
      {/* <Design /> */}
      <div
        className="social-container"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="800"
      >
        <div className="social-list">
          <ul className="social-item-list">
            <li className="social-item">
              <a
                className="social-link"
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://github.com/Kasaract"
              >
                <img src={Github} alt="Github" />
              </a>
            </li>
            <li className="social-item">
              <a
                className="social-link"
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://www.linkedin.com/in/gary-nguyen-mit"
              >
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
            </li>
            <li className="social-item">
              <a
                className="social-link"
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://twitter.com/garynguyen_18"
              >
                <img src={Twitter} alt="Twitter" />
              </a>
            </li>
            <li className="social-item last-social-item">
              <a
                className="social-link"
                target="_blank"
                rel="nofollow noopener noreferrer"
                href="https://www.instagram.com/garynguyen18/"
              >
                <img
                  className="last-social-icon"
                  src={Instagram}
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="email-container"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="800"
      >
        <div className="email-wrapper">
          <a className="email-link" href="mailto:nguyeng@mit.edu">
            nguyeng@mit.edu
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
