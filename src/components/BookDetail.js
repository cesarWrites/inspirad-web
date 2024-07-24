import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`/api/books/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>${book.price}</p>
      <button>Buy and Download</button>
    </div>
  );
};

export default BookDetail;
