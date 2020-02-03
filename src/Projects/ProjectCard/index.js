import React from 'react';

import filler from '../../share/images/filler_bg.jpg'

const ProjectCard = () => (
  <div className="text-center p-5">
    <img src={filler} alt="filler" className="w-100 rounded" />
    <h4 className="my-2">Project name</h4>
    <p>This is an example of a project description. I made so and so, and I perfect this and that. I made so and so, and I perfect this and that.</p>
    <div className="btn btn-primary btn-lg w-50">Coming soon</div>
  </div>
);

export default ProjectCard;