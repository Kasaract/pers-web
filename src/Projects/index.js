import React from 'react';

import ProjectCard from './ProjectCard'
import './Projects.scss';

const Projects = () => (
  <div className="my-3" style={{ background: '#f7f7f7' }}>
    <h1 className="text-center pt-5 pb-3">Projects</h1>
    {
      [4, 5, 6].map(() => (
        <div className="row">
          <div className="col-1" />
          {
            [1, 2, 3].map(() => (
              <div className="col">
                <ProjectCard />
              </div>
            ))
          }
          <div className="col-1" />
        </div>
      ))
    }
  </div>
);

export default Projects;