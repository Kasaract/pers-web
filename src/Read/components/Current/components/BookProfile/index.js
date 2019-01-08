import React from 'react';

const BookProfile = (props) => {
  return (
    <div className="bookprofile__container">
      <img className="bookprofile__image" src={props.cover}/>
      <div className="bookprofile__title">{props.title}</div>
      <div className="bookprofile__author">{props.author}</div>
    </div>
  )
}

export default BookProfile;