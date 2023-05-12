/** @format */

import { useSelector } from 'react-redux';
import BookItem from '../components/BookItem';
import BookForm from '../components/BookForm';
import { v4 as uuidv4 } from 'uuid';
import BookstoreNavbar from '../components/Navbar';

const BookList = () => {
  const generateKey = () => uuidv4();
  const books = useSelector((state) => state.books.bookList);

  return (
    <div>
      <BookstoreNavbar />
      <h2>List of Books</h2>
      {books.map((book) => (
        <BookItem
          title={book.title}
          author={book.author}
          category={book.category}
          key={generateKey()}
          id={book.item_id}
        />
      ))}
      <BookForm />
    </div>
  );
}

export default BookList;
