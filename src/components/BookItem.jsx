/* eslint-disable react/prop-types */
/** @format */

import { useDispatch } from 'react-redux';
import { removeSelectedBook } from '../redux/books/booksSlice';

export default function Book({ id, title, author, category }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className='book-list'>
        <ul>
          <li className='book-item'>
            <p className='book-title'>{title}</p>
            <p className='book-author'>{author}</p>
            <p className='book-category'>{category}</p>
            <button
              type='button'
              className='button key remove-button'
              onClick={() => dispatch(removeSelectedBook(id))}>
              Remove
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
