import React from 'react';

const Design = () => {
	return (
		<div id="design" class="container margin-bottom">
			<div class="row justify-content-center">
				<div
					data-aos="fade-up"
					data-aos-duration="800"
					class="col-lg-5 no_padding"
				>
					<h2 style={{ marginBottom: '50px' }}>Design</h2>
				</div>
				<div class="col-lg-5"></div>
			</div>
			<section id="photos">
				<div id="ole-vasa">
					<img
						src="./assets/design/ole_vasa_light.jpg"
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="800"
						alt="ole vasa"
					/>
					<img
						src="./assets/design/ole_vasa_dark.jpg"
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-duration="800"
						alt="ole vasa"
					/>
					<img
						src="./assets/design/ole_vasa_navy_blue.jpg"
						data-aos="fade-up"
						data-aos-delay="300"
						data-aos-duration="800"
						alt="ole vasa"
					/>
				</div>

				<div id="hack" className="mb-4">
					<img
						src="./assets/design/hack_logo_concepts.png"
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="800"
						alt="hack"
					/>
					<img
						src="./assets/design/hacktypeface.png"
						data-aos="fade-up"
						data-aos-delay="400"
						data-aos-duration="800"
						alt="hack"
					/>
					<img
						src="./assets/design/hack_logo.png"
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-duration="800"
						alt="hack"
					/>

					<img
						src="./assets/design/hack_reg_close.jpg"
						data-aos="fade-up"
						data-aos-delay="500"
						data-aos-duration="800"
						alt="hack"
					/>
					<img
						src="./assets/design/hack_reg_open.jpg"
						data-aos="fade-up"
						data-aos-delay="300"
						data-aos-duration="800"
						alt="hack"
					/>
					<img
						src="./assets/design/LogoConcepts2.png"
						data-aos="fade-up"
						data-aos-delay="600"
						data-aos-duration="800"
						alt="hack"
					/>
				</div>
				<div id="module1">
					<img
						src="./assets/design/screen.png"
						data-aos="fade-up"
						data-aos-delay="100"
						data-aos-duration="800"
						alt="architecture"
					/>

					<img
						src="./assets/design/interstitial.png"
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-duration="800"
						alt="architecture"
					/>
					<img
						src="./assets/design/screen1.png"
						data-aos="fade-up"
						data-aos-delay="300"
						data-aos-duration="800"
						alt="architecture"
					/>
				</div>
				<div id="module2">
					<img
						src="./assets/design/module.png"
						data-aos="fade-up"
						data-aos-delay="400"
						data-aos-duration="800"
						alt="architecture"
					/>
					<img
						src="./assets/design/stack.png"
						data-aos="fade-up"
						data-aos-delay="500"
						data-aos-duration="800"
						alt="architecture"
					/>
				</div>
			</section>
		</div>
	);
};

export default Design;
