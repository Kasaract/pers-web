import React from 'react';

const Experiences = () => {
	return (
		<div id="experiences" class="container margin-bottom">
			<div class="row justify-content-center">
				<div
					data-aos="fade-up"
					data-aos-duration="800"
					class="col-lg-5 no_padding"
				>
					<h2 style={{ marginBottom: '50px' }}>Experiences</h2>
				</div>
				<div class="col-lg-5 negative-desc-margin-left"></div>
			</div>

			{/* First experience */}
			<div
				class="row  justify-content-center"
				style={{ marginBottom: '120px' }}
			>
				<div
					data-aos="fade-right"
					data-aos-delay="200"
					data-aos-duration="800"
					class="col-lg-5 no_padding justify-content-end negative-desc-margin-right"
					style={{ zIndex: '10' }}
				>
					<h3>Emergent</h3>
					<h6>May 2020 - Present</h6>
					<p class="projectDesc">
						Interned as a full-stack developer and UI designer. Redesigned UI of
						data visualization product to meet industry standards. Implemented
						unit and integration testing.
					</p>
					<p class="technologies">
						Next.js{'         '}Plotly.js{'         '}Three.js{'\n'}Jest
						{'        '}Docker
					</p>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="100"
					data-aos-duration="800"
					class="col-lg-5 no_padding"
				>
					<div class="styling_image " id="lce">
						<img src="./assets/emergent_light.png" alt="emergent" />
						<a
							style={{ display: 'block' }}
							href="https://www.emergentspace.com/"
						>
							<span class="divLink"></span>
						</a>
					</div>
				</div>
			</div>

			{/* Second Experience */}
			<div
				class="row  justify-content-center"
				style={{ marginBottom: '120px' }}
			>
				<div class="col-lg-5 no_padding">
					<div
						data-aos="fade-up"
						data-aos-duration="800"
						class="styling_image "
					>
						<img src="./assets/brainpower.png" alt="brain power" />
						<a style={{ display: 'block' }} href="https://brain-power.com/">
							<span class="divLink"></span>
						</a>
					</div>
				</div>
				<div
					data-aos="fade-left"
					data-aos-delay="100"
					data-aos-duration="800"
					class="col-lg-5 no_padding justify-content-end negative-desc-margin-left"
					style={{ textAlign: 'right' }}
				>
					<h3>Brain Power</h3>
					<h6>Jan 2020 - Mar 2020</h6>
					<p class="projectDesc">
						Interned as a front-end developer, working to redesign and modernize
						core components for an educational web app used by students on the
						ADHD and autism spectrum in several states.
					</p>
					<p class="technologies">
						React.js{'         '}Bootstrap{'         '}Jest
					</p>
				</div>
			</div>

			{/* Third Experience */}
			<div
				class="row  justify-content-center"
				style={{ marginBottom: '120px' }}
			>
				<div
					data-aos="fade-right"
					data-aos-delay="200"
					data-aos-duration="800"
					class="col-lg-5 no_padding justify-content-end negative-desc-margin-right"
					style={{ zIndex: '10' }}
				>
					<h3>MIT Media Lab</h3>
					<h6>Feb 2020 - May 2020</h6>
					<p class="projectDesc">
						Worked as a UROP assistant in the Personal Robotics Group to develop
						a web-app used by primary school teachers in the Boston and Atlanta
						areas to monitor their students' literacy progress.
					</p>
					<p class="technologies">
						React.js{'         '}Chart.js{'         '}Material-UI
					</p>
				</div>
				<div
					data-aos="fade-up"
					data-aos-delay="100"
					data-aos-duration="800"
					class="col-lg-5 no_padding"
				>
					<div class="styling_image " id="lce">
						<img src="./assets/medialab_light.png" alt="media lab" />
						<a style={{ display: 'block' }} href="https://www.media.mit.edu/">
							<span class="divLink"></span>
						</a>
					</div>
				</div>
			</div>

			<div style={{ height: '50px' }} />
		</div>
	);
};

export default Experiences;
