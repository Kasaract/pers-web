import React from 'react';
import { Element } from 'react-scroll';

import fb from '../share/images/social-media-icons/facebook.svg';
import linkedin from '../share/images/social-media-icons/linkedin.svg';
import ig from '../share/images/social-media-icons/instagram.svg';
import github from '../share/images/social-media-icons/github.svg';
import twitter from '../share/images/social-media-icons/twitter.svg';
import about from '../share/images/about.jpg';
import './About.scss';

const About = () => {
	return (
		<Element name="about">
			<div className="my-3 pb-3">
				<h1 className="text-center mb-3 mt-5">About Me</h1>
				<div className="w-100 d-flex justify-content-center">
					<img
						src={about}
						className="rounded-circle mx-auto"
						alt="about"
						style={{ maxHeight: '15rem' }}
					/>
				</div>
				<div className="row my-3 w-100">
					<div className="col" />
					<div className="col-2 d-flex flex-row justify-content-between">
						<a
							href="https://www.facebook.com/profile.php?id=100017551746096"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={fb}
								style={{ height: '1.3rem', width: '1.3rem' }}
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
								style={{ height: '1.3rem', width: '1.3rem' }}
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
								style={{ height: '1.3rem', width: '1.3rem' }}
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
								style={{ height: '1.3rem', width: '1.3rem' }}
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
								style={{ height: '1.3rem', width: '1.3rem' }}
								alt="twitter"
							/>
						</a>
					</div>
					<div className="col" />
				</div>
				<div className="row w-100">
					<div className="col" />
					<div className="col-5">
						<div className="text-center my-3" style={{ fontSize: '1.3rem' }}>
							Hey! I'm Gary. Thanks for visiting{' '}
							<span role="img" aria-label="(waving hand)">
								👋
							</span>
							. I'm a sophomore currently studying Art & Design (4-B) at MIT. I
							love front-end, I enjoy capturing the best moments, and I'm
							practicing to express myself through design
						</div>
						<div className="text-center my-3" style={{ fontSize: '1.3rem' }}>
							Looking to get in touch? Feel free to shoot me an email at{' '}
							<a href="mailto:garynguyen2018@gmail.com">
								garynguyen2018@gmail.com
							</a>
							{'.'}
							{/* or take a look at my{' '}
							<a href="#" target="_blank" rel="noopener noreferrer">
								resume
							</a>
							. */}
						</div>
					</div>
					<div className="col pr-0" />
				</div>
			</div>
		</Element>
	);
};

export default About;
