import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Programming Books</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <Link to={`/books/${book._id}`}>{book.title}</Link>
            <p>{book.author}</p>
            <p>${book.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
