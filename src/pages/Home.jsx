/** @format */

import { useState } from 'react';

import Navigation from '../components/Navbar';
import List from '../components/List';
import Form from '../components/Form';

function HomePage() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, { id: Math.random(), ...book }]);
  };

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <>
      <Navigation />
      <h1>My Book Collection</h1>
      <List books={books} deleteBook={handleDeleteBook} />
      <Form addBook={handleAddBook} />
    </>
  );
}

export default HomePage;
