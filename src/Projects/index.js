import React from 'react';

import ProjectCard from './ProjectCard'
import './Projects.scss';

const Projects = () => (
  <div>
    <div>Projects</div>
    <div className="row">
      {
        [1, 2, 3].map(() => (
          <div className="col">
            <ProjectCard />
          </div>
        ))
      }
    </div>
    <div className="row">
      {
        [1, 2, 3].map(() => (
          <div className="col">
            <ProjectCard />
          </div>
        ))
      }
    </div>
    <div className="row">
      {
        [1, 2, 3].map(() => (
          <div className="col">
            <ProjectCard />
          </div>
        ))
      }
    </div>
  </div>
);

export default Projects;