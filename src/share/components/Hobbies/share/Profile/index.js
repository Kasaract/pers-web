import React from 'react';

import './profile.scss';

const Profile = (props) => {
  return (
    <div className="profile__container">
      <img className="profile__image" src={props.cover}/>
      <div className="profile__title">{props.title}</div>
      <div className="profile__author">{props.author}</div>
      <div className="profile__time">{props.time}</div>
    </div>
  )
}

export default Profile;