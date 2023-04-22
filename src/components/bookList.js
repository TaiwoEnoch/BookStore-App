import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './bookItem';

function BooksList() {
  let booksArray = useSelector((store) => store.books).books;
  const categoriesList = useSelector((store) => store.categories).categories;

  const performFilter = (e) => {
    e.preventDefault();
    const selectedCategory = e.target[0].value;
    if (categoriesList.includes(selectedCategory)) {
      if (booksArray.find((book) => book.category === selectedCategory)) {
        booksArray = booksArray.find((book) => book.category === selectedCategory);
        // console.log(booksArray);
        // <BooksList />
      } else {
        // console.log('No books found in this category');
        booksArray = [];
      }
    }
  };
  return (
    <div>
      <h1>All Books</h1>
      <form
        onSubmit={(e) => performFilter(e)}
        className="filter-form"
      >
        <select>
          {
            categoriesList.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
        <button type="submit">filter by category</button>
      </form>
      {
        booksArray.map((book) => (
          <div key={book.id}>
            <BookItem book={JSON.stringify(book)} />
          </div>
        ))
      }
    </div>
  );
}

export default BooksList;
