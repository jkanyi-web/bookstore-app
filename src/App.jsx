/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Categories from './pages/Categories';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
