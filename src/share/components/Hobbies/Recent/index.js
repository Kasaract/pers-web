import React from 'react';

import '../share/SectionStyling/read.scss';
import Books from './recent_read.json';
import MapBook from '../module/mapBook';

const RecentRead = () => {
  const displayBook = MapBook(Books);

  return (
    <div className="read__container">
      <div className="read__headline">What I've Recently Read</div>
      <div className="read__book-container">{displayBook}</div>
    </div>   
  )
}

export default RecentRead;