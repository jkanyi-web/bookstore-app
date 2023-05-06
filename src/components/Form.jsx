/** @format */

import PropTypes from 'prop-types';
import { useState } from 'react';

const Form = ({ addBook }) => {
  const [inputs, setInputs] = useState({ title: '', author: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(inputs);
    setInputs({ title: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='title-input'>
        Title:
        <input
          id='title-input'
          type='text'
          name='title'
          value={inputs.title}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor='author-input'>
        Author:
        <input
          id='author-input'
          type='text'
          name='author'
          value={inputs.author}
          onChange={handleChange}
          required
        />
      </label>
      <button type='submit'>Add Book</button>
    </form>
  );
};

Form.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default Form;
