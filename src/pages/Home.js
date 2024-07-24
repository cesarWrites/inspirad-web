import React from 'react';
import "../styles/Home.css"
import Footer from './Footer';
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Book Store</h1>
        <p>Check out our latest programming books and articles.</p>
        <p>Our web app offers the following services:</p>
        <ul>
          <li>Browse and purchase programming books</li>
          <li>Read insightful articles on various tech topics</li>
          <li>Access valuable information on digital literacy</li>
        </ul>
      </div>
      <Footer/>
    </div>
   
  );
};

export default Home;
