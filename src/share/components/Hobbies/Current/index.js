import React from 'react';

import Mapping from '../module/Mapping';
import '../share/styling/hobbies_styling.scss';

const Current = (props) => {
  const display = Mapping(props.items);

  return (
    <div className="current__container">
      <div className="current__headline">{props.headline}</div>
      <div className="current__items-container">{display}</div>
    </div>   
  )
}

export default Current;