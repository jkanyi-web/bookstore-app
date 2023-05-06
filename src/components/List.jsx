/** @format */

import PropTypes from 'prop-types';
import Book from './Book';

function List({ books, deleteBook }) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} deleteBook={deleteBook} />
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default List;