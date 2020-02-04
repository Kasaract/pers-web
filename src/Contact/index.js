import React from 'react';

import fb from '../share/images/social-media-icons/facebook.svg';
import linkedin from '../share/images/social-media-icons/linkedin.svg';
import ig from '../share/images/social-media-icons/instagram.svg';
import github from '../share/images/social-media-icons/github.svg';
import twitter from '../share/images/social-media-icons/twitter.svg';
import './Contact.scss';

const Contact = () => (
	<div
		style={{ height: '100vh' }}
		className="d-flex flex-column justify-content-center"
	>
		<h1 className="text-center my-3">Let's get in touch!</h1>
		<div className="row my-3">
			<div className="col" />
			<div className="col-3 d-flex flex-row justify-content-between">
				<a
					href="https://www.facebook.com/profile.php?id=100017551746096"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={fb}
						style={{ height: '2.2rem', width: '2.2rem' }}
						alt="fb"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/gary-nguyen-271504155/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={linkedin}
						style={{ height: '2.2rem', width: '2.2rem' }}
						alt="linkedin"
					/>
				</a>
				<a
					href="https://www.instagram.com/garynguyen18/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={ig}
						style={{ height: '2.2rem', width: '2.2rem' }}
						alt="instagram"
					/>
				</a>
				<a
					href="https://github.com/Kasaract"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={github}
						style={{ height: '2.2rem', width: '2.2rem' }}
						alt="github"
					/>
				</a>
				<a
					href="https://twitter.com/garynguyen_18"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={twitter}
						style={{ height: '2.2rem', width: '2.2rem' }}
						alt="twitter"
					/>
				</a>
			</div>
			<div className="col" />
		</div>
	</div>
);

export default Contact;
