import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/digital-literacy">Digital Literacy</Link>
      </div>
    </nav>
  );
};

export default Navbar;

