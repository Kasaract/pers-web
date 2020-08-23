import React, { useEffect } from 'react';
import AOS from 'aos';

import HomeImage from '../../share/images/about.jpg';

const Home = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div id="home">
			<div class="min-vh-100 d-flex align-items-center">
				<div class="container h-auto" id="header">
					<div class="row">
						<div class="col-lg-5 col-md-4 col-sm-3">
							<img
								className="float-right profile-pic"
								src={HomeImage}
								alt="Profile pic"
								data-aos="fade-up"
								data-aos-delay="000"
								data-aos-duration="800"
								data-aos-anchor-placement="top-center"
							/>
						</div>
						<div class="col-lg-5 col-md-6 col-sm-8">
							<div className="mb-4">
								<h1
									className="text-nowrap name"
									data-aos="fade-up"
									data-aos-delay="200"
									data-aos-duration="800"
									data-aos-anchor-placement="top-center"
								>
									Gary Nguyen
								</h1>
							</div>
							<div
								className="intro"
								data-aos="fade-up"
								data-aos-delay="300"
								data-aos-duration="800"
								data-aos-anchor-placement="top-center"
							>
								<div className="mb-3 pt-3">
									Hey! I'm Gary. Thanks for visiting!{' '}
									<span role="img" aria-label="emoji">
										👋
									</span>
								</div>
								<div className="">
									Born in southern Mississippi, I'm currently studying CS &
									Architecture at MIT. I love front-end development and UI/UX,
									I'm learning to express myself through design, and my favorite
									newsletters are{' '}
									<a
										className="newsletter"
										href="https://www.technologyreview.com/"
									>
										The Download
									</a>{' '}
									and{' '}
									<a
										className="newsletter"
										href="https://www.technologyreview.com/"
									>
										Morning Brew
									</a>
									!
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
