import React from 'react';

import Mapping from '../module/Mapping';
import '../share/styling/hobbies_styling.scss';

const Plan = (props) => {
  const display = Mapping(props.items);

  return (
    <div className="plan__container">
      <div className="plan__headline">{props.headline}</div>
      <div className="plan__items-container">{display}</div>
    </div>   
  )
}

export default Plan;