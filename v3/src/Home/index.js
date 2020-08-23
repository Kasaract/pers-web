import React from 'react';
import { Link } from 'react-scroll';

import bg from '../share/images/filler_bg.jpg';
import './Home.scss';

const Home = () => {
	return (
		<div className="" style={{ height: '100vh', overflow: 'hidden' }}>
			<div
				className="position-absolute background w-100"
				style={{ zIndex: '-1' }}
			>
				<div className="layer" />
			</div>

			<div class="d-flex justify-content-end align-items-center p-3 px-md-4 ">
				<nav class="my-2 my-md-0 mr-md-3">
					<Link to="home" spy={true} smooth={true} duration={750}>
						<a class="p-3 text-white" href="#" style={{ fontSize: '1.2rem' }}>
							Home
						</a>
					</Link>
					<Link to="about" spy={true} smooth={true} duration={750}>
						<a class="p-3 text-white" href="#" style={{ fontSize: '1.2rem' }}>
							About
						</a>
					</Link>
					<Link to="projects" spy={true} smooth={true} duration={750}>
						<a class="p-3 text-white" href="#" style={{ fontSize: '1.2rem' }}>
							Projects
						</a>
					</Link>
					{/* <a class="p-3 text-white" href="#">Design</a>
          <a class="p-3 text-white" href="#">Photography</a> */}
					<Link to="contact" spy={true} smooth={true} duration={750}>
						<a class="p-3 text-white" href="#" style={{ fontSize: '1.2rem' }}>
							Contact
						</a>
					</Link>
				</nav>
			</div>
			<div
				className="d-flex flex-column justify-content-center"
				style={{ height: '75vh' }}
			>
				<h1
					className="text-white text-center mt-4"
					style={{ fontSize: '5.75rem', letterSpacing: '0.5rem' }}
				>
					Gary Nguyen
				</h1>
				<p
					className="text-white text-center my-4"
					style={{ fontSize: '1.5rem' }}
				>
					Developer · Photographer · Designer
				</p>
			</div>
		</div>
	);
};

export default Home;

{
	/* <div className="name">Gary Nguyen</div>
<div className="education">CS @ MIT</div>
<div className="tagline">Creator. Developer. Learner.</div> */
}
