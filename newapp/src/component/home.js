import React from 'react';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
const Home = () => {
    return (
      <div>
        <h2>Home Page</h2>
        <p>Welcome to contact</p>
        <Link to="/user">User</Link>
      </div>
    );
  };
  
  export default Home;
         