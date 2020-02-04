import React from 'react';

import filler from '../../share/images/filler_bg.jpg'

const ProjectCard = (props) => (
  <div className="text-center p-5">
    <img src={props.img} alt="filler" className="w-100 rounded" />
    <h4 className="my-2">{props.name}</h4>
    <p>{props.desc}</p>
    {
      !!props.link ?
        (
          <a href={props.link}>
            <div className="btn btn-primary btn-lg w-50">{props.action}</div>
          </a>
        ) : <div className="btn btn-primary btn-lg w-50">{props.action}</div>
    }
  </div>
);

export default ProjectCard;