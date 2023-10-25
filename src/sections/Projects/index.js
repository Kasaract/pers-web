import React from 'react';

const Projects = () => {
  return (
    <div id="projects" class="container margin-bottom">
      <div class="row justify-content-center">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          class="col-lg-6 no_padding"
        >
          <h2 style={{ marginBottom: '50px' }}>Projects</h2>
        </div>
        <div class="col-lg-6 negative-desc-margin-left"></div>
      </div>

      {/* First Project */}
      <div
        class="row  justify-content-center"
        style={{ marginBottom: '120px' }}
      >
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="800"
          class="col-lg-6 no_padding justify-content-end negative-desc-margin-right"
          style={{ zIndex: '10' }}
        >
          <h3>hear</h3>
          <h6>Jan 2020 - Mar 2020</h6>
          <p class="projectDesc" style={{ whiteSpace: 'pre-wrap' }}>
            {
              'An accessibility-focused podcast and audiobook app serving hearing-impaired individuals using speech-to-text technology.\n\nFirst Place Prize @ HackDartmouth V'
            }
          </p>
          <p class="technologies">
            React.js{'         '}Express.js{'         '}Firebase{'\n'}Google
            Cloud Platform
            {'        '}Speech-to-Text
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          class="col-lg-6 no_padding"
        >
          <div class="styling_image " id="lce">
            <img src="./assets/hear-03.png" alt="hear" />
            <a
              style={{ display: 'block' }}
              href="https://devpost.com/software/hear-podcasts-made-accessible"
            >
              <span class="divLink"></span>
            </a>
          </div>
        </div>
      </div>
      <div style={{ height: '50px' }} />
    </div>
  );
};

export default Projects;
