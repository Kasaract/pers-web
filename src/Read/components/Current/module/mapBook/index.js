import React from 'react';

export const MapBook = (books) => books.map(book => (
  <BookProfile 
    cover={book.cover}
    title={book.title}
    author={book.author}
  />
));