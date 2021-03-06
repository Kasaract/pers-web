import React from 'react';
import { Link } from 'react-router-dom';

import './hobbyitem.scss';

const HobbyItem = (props) => {
  return (
    <div className="hobbyitem__container">
      <Link className="hobbyitem__link" to={props.hobby}>
        <img className="hobbyitem__icon" src={props.icon}/>
      </Link>
      <div className="hobbyitem__text">{props.text}</div>
    </div>
  )
}

export default HobbyItem;