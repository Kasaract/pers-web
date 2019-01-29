import React from 'react';

import '../share/SectionStyling/read.scss';
import Books from './plan_read.json';
import MapBook from '../module/mapBook';

const PlanRead = () => {
  const displayBook = MapBook(Books);

  return (
    <div className="read__container">
      <div className="read__headline">What I'm Planning to Read</div>
      <div className="read__book-container">{displayBook}</div>
    </div>   
  )
}

export default PlanRead;