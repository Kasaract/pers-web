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
            <div class="col-lg-7 col-md-6 col-sm-8">
              <div className="mb-3">
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
              <div>
                <h3
                  className="text-nowrap title mb-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-anchor-placement="top-center"
                >
                  Systems Developer @ InterSystems
                </h3>
              </div>
              <div
                className="intro"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-anchor-placement="top-center"
              >
                <div className="mb-3 pt-0">
                  Welcome! Thanks for stopping by!{' '}
                  <span role="img" aria-label="emoji">
                    👋
                  </span>
                </div>
                <div className="">
                  Codecademy was how I got my start back in 2012. W3 and YouTube
                  gave me my taste of coding - and the bugs shortly after. Fast
                  forward to today, I've had opportunities to contribute in
                  development for a <a href="">health data leader</a>, a web3
                  pioneer , an aerospace leader, an education start-up, and a
                  research lab.
                </div>
                <div>
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
