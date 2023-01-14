import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Your Refrigerator App</h1>
        <div className="button-container">
            <Link to="/items">
            <button className="add-item-button">Your Items</button>
            </Link>
            <p>What's on your refrigerator</p>
        </div>
        <div className="button-container">
            <Link to="/add-item">
            <button className="add-item-button">Add Items</button>
            </Link>
            <p>Add a new item to your refrigerator</p>
        </div>
        <div className="button-container">
            <Link to="/menu">
            <button className="menu-ideas-button">Menu Ideas</button>
            </Link>
            <p>Get ideas for a menu using the items in your refrigerator</p>
        </div>
    </div>
  );
}

export default Home;
