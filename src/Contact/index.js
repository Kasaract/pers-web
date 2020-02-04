import React from 'react';

import fb from '../share/images/social-media-icons/facebook.svg';
import linkedin from '../share/images/social-media-icons/linkedin.svg';
import ig from '../share/images/social-media-icons/instagram.svg';
import github from '../share/images/social-media-icons/github.svg';
import twitter from '../share/images/social-media-icons/twitter.svg';
import './Contact.scss';

const Contact = () => (
  <div style={{ height: '100vh' }} className="d-flex flex-column justify-content-center">
    <h1 className="text-center my-3">Let's get in touch!</h1>
    <div className="row my-3">
      <div className="col" />
      <div className="col-3 d-flex flex-row justify-content-between">
        <img src={fb} style={{ maxHeight: '2.2rem' }} alt="fb" />
        <img src={linkedin} style={{ maxHeight: '2.2rem' }} alt="linkedin" />
        <img src={ig} style={{ maxHeight: '2.2rem' }} alt="instagram" />
        <img src={github} style={{ maxHeight: '2.2rem' }} alt="github" />
        <img src={twitter} style={{ maxHeight: '2.2rem' }} alt="twitter" />
      </div>
      <div className="col" />
    </div>
  </div>
);

export default Contact;