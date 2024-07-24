import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookList from './components/BookList';
import BookDetail from './pages/BookDetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books" element={<BookList/>} />
        <Route path="/books/:id" element={<BookDetail/>} />
      </Routes>
    </Router>
  );
};

export default App;


