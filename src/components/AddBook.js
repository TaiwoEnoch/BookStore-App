import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, postBooks } from '../redux/books/booksSlice';

import './addBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const getNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuid(),
      title,
      category: category || 'Other',
      author,
    };
    dispatch(addBook(newBook));
    dispatch(postBooks(newBook));
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setCategory('');
    setAuthor('');
  };

  return (
    <>
      <div className="Line" />
      <span className="add-book-title">ADD NEW BOOK</span>
      <form className="add-book-form" onSubmit={(e) => getNewBook(e)}>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          value={title}
          placeholder="Book title"
          className="title-input"
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="categories-select"
        >
          { categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          type="name"
          value={author}
          placeholder="Author"
          className="author-input"
        />
        <button
          type="submit"
          className="add-book-btn"
        >
          Add Book
        </button>
      </form>
    </>
  );
};

export default AddBook;
