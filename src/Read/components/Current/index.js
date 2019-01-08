import React from 'react';

import '../share/SectionStyling/read.scss';
import Books from './current_read.json';
import MapBook from '../module/mapBook';

const CurrentRead = () => {
  const displayBook = MapBook(Books);

  return (
    <div className="read__container">
      <div className="read__headline">What I'm Currently Reading</div>
      <div className="read__book-container">{displayBook}</div>
    </div>   
  )
}

export default CurrentRead;