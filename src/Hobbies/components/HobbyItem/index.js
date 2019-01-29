import React from 'react';

const HobbyItem = (props) => {
  return (
    <div className="hobbyitem__container">
      <img className="hobbyitem__icon" src={props.icon}/>
      <div className="hobbyitem__text">{props.text}</div>
    </div>
  )
}

export default HobbyItem;