import React from 'react';

import BookProfile from '../../components/BookProfile'

const MapBook = (books) => books.map(book => (
  <BookProfile 
    cover={book.cover}
    title={book.title}
    author={book.author}
  />
));

export default MapBook;