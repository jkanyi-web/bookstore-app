/** @format */

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/categories'>Categories</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
