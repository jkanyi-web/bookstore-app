/** @format */

import { Link } from 'react-router-dom';

function BookstoreNavbar() {
  return (
    <div className='navbar-container'>
      <h1 className='navbar-title'>Bookstore</h1>
      <nav className='navbar'>
        <ul className='nav-items'>
          <li className='nav-link'>
            <Link to='/' className='nav-link-text'>
              Books
            </Link>
          </li>
          <li className='nav-link'>
            <Link to='/categories' className='nav-link-text'>
              Categories
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BookstoreNavbar;
