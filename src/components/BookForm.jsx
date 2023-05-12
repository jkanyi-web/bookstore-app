/** @format */

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/booksSlice';

export default function BookForm() {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleAddBook = (event) => {
    event.preventDefault();

    if (!newTitle || !newAuthor || !newCategory) {
      alert('Please fill out all fields');
      return;
    }

    dispatch(
      addNewBook({
        id: uuidv4(),
        title: newTitle,
        author: newAuthor,
        category: newCategory,
      })
    );

    setNewTitle('');
    setNewAuthor('');
    setNewCategory('');
    alert('Book added successfully!');
  };

  return (
    <div className='book-form-container'>
      <h2 className='book-form-title'>Add a New Book</h2>
      <form className='book-form'>
        <div className='book-form-input-group'>
          <label htmlFor='title' className='book-form-label'>
            Title
          </label>
          <br />
          <input
            type='text'
            id='title'
            placeholder='Enter the book title'
            className='book-form-input'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div className='book-form-input-group'>
          <label htmlFor='author' className='book-form-label'>
            Author
          </label>
          <br />
          <input
            type='text'
            id='author'
            placeholder='Enter the book author'
            className='book-form-input'
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
        </div>
        <div className='book-form-input-group'>
          <label htmlFor='category' className='book-form-label'>
            Category
          </label>
          <br />
          <input
            type='text'
            id='category'
            placeholder='Enter the book category'
            className='book-form-input'
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </div>
        <div className='book-form-button-group'>
          <button
            type='submit'
            className='book-form-button'
            onClick={handleAddBook}>
            Add Book
          </button>
          <button
            type='button'
            className='book-form-button'
            onClick={() => {
              setNewTitle('');
              setNewAuthor('');
              setNewCategory('');
            }}>
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
}
