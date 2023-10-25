import React from 'react';

const Experiences = () => {
  return (
    <div id="experiences" class="container margin-bottom">
      <div class="row justify-content-center">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          class="col-lg-6 no_padding"
        >
          <h2 style={{ marginBottom: '50px' }}>Experiences</h2>
        </div>
        <div class="col-lg-6 negative-desc-margin-left"></div>
      </div>

      {/* InterSystems */}
      <div
        id="intersystems"
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
          <h3 className="mb-3">InterSystems</h3>
          <h5>Systems Developer</h5>
          <h6>July 2022 - Present</h6>
          <p class="projectDesc">
            Core contributor to company's cloud-agnostic multi-tenant
            infrastructure pipeline, integrated testing and CICD automation,
            collaborated closely with corporate security for best practices, and
            assisted in team's growth as mentor and interviewer.
          </p>
          <p class="technologies">
            AWS{'         '}Kubernetes{'         '}Docker{'\n'}Golang
            {'        '}Python
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          class="col-lg-6 no_padding"
        >
          <div class="styling_image " id="lce">
            <img src="./assets/intersystems.png" alt="intersystems" />
            <a
              style={{ display: 'block' }}
              href="https://www.intersystems.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span class="divLink"></span>
            </a>
          </div>
        </div>
      </div>

      {/* MIT CSAIL */}
      <div
        id="mit-csail"
        class="row justify-content-center"
        style={{ marginBottom: '120px' }}
      >
        <div class="col-lg-6 no_padding">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            class="styling_image "
          >
            <img src="./assets/mit_csail.png" alt="mit csail" />
            <a
              style={{ display: 'block' }}
              href="https://www.csail.mit.edu/"
              target="_blank"
              rel="noreferrer"
            >
              <span class="divLink"></span>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="800"
          class="col-lg-6 no_padding justify-content-end negative-desc-margin-left"
          style={{ textAlign: 'right' }}
        >
          <h3 className="mb-3">MIT CSAIL</h3>
          <h5>Research Assistant</h5>
          <h6>Sept 2021 - May 2022</h6>
          <p class="projectDesc">
            Researcher as part of the PRAXIS project as part of the{' '}
            <a
              className="intro-company"
              href="http://up.csail.mit.edu/"
              target="_blank"
              rel="noreferrer"
            >
              Usable Programming (UP) Group
            </a>
            . Explored methodologies on partitioning skills into sub-skills and
            measurements of progress. Focused domain exploration in typing in
            foreign languages
          </p>
          <p class="technologies">
            React.js{'         '}Express.js{'         '}MongoDB{'\n'}
            Figma
          </p>
        </div>
      </div>

      {/* Fundamental Secrets */}
      <div
        id="fundamental-secrets"
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
          <h3 className="mb-3">Fundamental Secrets</h3>
          <h5>Lead Software Engineer</h5>
          <h6>Apr 2021 - Aug 2021</h6>
          <p class="projectDesc">
            Reorganized development team structure and workflow to boost
            productivity, implemented Agile development, established code
            standards, and lead web3 projects such as a peer-to-peer sports
            betting platform and a wallet tracking utility.
          </p>
          <p class="technologies">
            React.js{'         '}Web3.js{'         '}Solidity{'\n'}
            Figma
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          class="col-lg-6 no_padding"
        >
          <div class="styling_image " id="lce">
            <img
              src="./assets/fundamental_secrets.jpg"
              alt="fundamenetal secrets"
            />
          </div>
        </div>
      </div>

      {/* Emergent */}
      <div
        id="emergent"
        class="row justify-content-center"
        style={{ marginBottom: '120px' }}
      >
        <div class="col-lg-6 no_padding">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            class="styling_image "
          >
            <img src="./assets/emergent_light.png" alt="emergent" />
            <a
              style={{ display: 'block' }}
              href="https://www.emergentspace.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span class="divLink"></span>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="800"
          class="col-lg-6 no_padding justify-content-end negative-desc-margin-left"
          style={{ textAlign: 'right' }}
        >
          <h3 className="mb-3">Emergent</h3>
          <h5>Full Stack Developer Intern</h5>
          <h6>May 2020 - Aug 2020</h6>
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
      </div>

      {/* Brain Power */}
      <div
        id="brain-power"
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
          <h3 className="mb-3">Brain Power</h3>
          <h5>Full Stack Developer Intern</h5>
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
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          class="col-lg-6 no_padding"
        >
          <div class="styling_image " id="lce">
            <img src="./assets/brainpower.png" alt="brain power" />
          </div>
        </div>
      </div>

      {/* MIT Media Lab */}
      <div
        id="mit-media-lab"
        class="row justify-content-center"
        style={{ marginBottom: '120px' }}
      >
        <div class="col-lg-6 no_padding">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            class="styling_image "
          >
            <img src="./assets/medialab_light.png" alt="media lab" />
            <a
              style={{ display: 'block' }}
              href="https://www.media.mit.edu/"
              target="_blank"
              rel="noreferrer"
            >
              <span class="divLink"></span>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="800"
          class="col-lg-6 no_padding justify-content-end negative-desc-margin-left"
          style={{ textAlign: 'right' }}
        >
          <h3>MIT Media Lab</h3>
          <h6>Feb 2020 - May 2020</h6>
          <p class="projectDesc">
            Worked as a UROP assistant in the{' '}
            <a
              className="intro-company"
              href="https://www.media.mit.edu/groups/personal-robots/overview/"
              target="_blank"
              rel="noreferrer"
            >
              Personal Robotics Group
            </a>{' '}
            to develop a web-app used by primary school teachers in the Boston
            and Atlanta areas to monitor their students' literacy progress.
          </p>
          <p class="technologies">
            React.js{'         '}Chart.js{'         '}Material-UI
          </p>
        </div>
      </div>

      <div style={{ height: '50px' }} />
    </div>
  );
};

export default Experiences;
