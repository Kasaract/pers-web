import React from 'react';

import Mapping from '../module/Mapping';

const Recent = (props) => {
  const display = Mapping(props.items);

  return (
    <div className="recent__container">
      <div className="recent__headline">{props.headline}</div>
      <div className="recent__book-container">{display}</div>
    </div>   
  )
}

export default Recent;