import React, { useState } from 'react';

import NavBar from '../share/components/NavBar';

import './Projects.scss';

const Projects = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div class="project_wrapper">

      
      { navOpen ? <div class="navbar_dark_layer" /> : <div></div> }
      <NavBar open={navOpen} handleClick={setNavOpen}/>


      <div class="page-header">My Projects</div>

      <div class="section">
        <div class="section-header">Web Dev</div>
        <div class="section-projects">
          <div class="project-wrapper">
            <div class="image"/>
            <div class="text">
              <div class="text-title">BidMoni Inc.</div>
              <div class="text-position">Data Analyst Intern // 2018 - 2019</div>
              <div class="text-description">BidMoni is a fintech startup firm whose flagship product, FiduciaryShield, is a service platform for retirement plans to solicit bids from retirement plan providers. As an intern, I'm currently working on data projects using SQL Server.</div>
            </div>
          </div>
          <div class="project-wrapper">
            <div class="image"/>
            <div class="text">
              <div class="text-title">BidMoni Inc.</div>
              <div class="text-position">Data Analyst Intern // 2018 - 2019</div>
              <div class="text-description">BidMoni is a fintech startup firm whose flagship product, FiduciaryShield, is a service platform for retirement plans to solicit bids from retirement plan providers. As an intern, I'm currently working on data projects using SQL Server.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;