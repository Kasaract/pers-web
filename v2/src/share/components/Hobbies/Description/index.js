import React from 'react';

import './description.scss';

const Description = (props) => {
  return (
    <div className="description__text">{props.description}</div>
  )
}

export default Description