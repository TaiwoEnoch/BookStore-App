import React from 'react';
import BooksList from '../components/bookList';
import AddBook from '../components/AddBook';

const Books = () => (
  <div className="container">
    <BooksList />
    <AddBook />
  </div>
);

export default Books;
