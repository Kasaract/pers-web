import React from 'react';

import Mapping from '../module/Mapping';
import '../share/styling/hobbies_styling.scss';

const Recent = (props) => {
  const display = Mapping(props.items);

  return (
    <div className="recent__container">
      <div className="recent__headline">{props.headline}</div>
      <div className="recent__items-container">{display}</div>
    </div>   
  )
}

export default Recent;