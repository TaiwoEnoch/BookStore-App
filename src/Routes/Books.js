import React from 'react';
import { useDispatch } from 'react-redux';
import BooksList from '../components/bookList';
import AddBook from '../components/addBook';
import { clearBooks } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <BooksList />
      <AddBook />
      <button
        onClick={() => dispatch(clearBooks())}
        type="button"
      >
        Clear All Books
      </button>
    </div>
  );
};

export default Books;
