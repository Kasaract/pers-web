import React from 'react';

import './current_read.scss';
import Books from './current_read.json';
import MapBook from './module/mapBook';

const CurrentRead = () => {
  const displayBook = MapBook(Books);

  return (
    <div className="currentread__container">
      <div className="currentread__headline">What I'm Currently Reading</div>
      <div className="currentread__book-container">{displayBook}</div>
    </div>   
  )
}

export default CurrentRead;