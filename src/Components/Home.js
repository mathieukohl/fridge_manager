import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';


const Home = () => {
  return (
    <div className="home-container">
      <h1 className='title'>Coolio</h1>
        <div className="button-container">
            <Link to="/items">
            <button className="add-item-button">Your Items</button>
            </Link>
            {/*<p>What's on your refrigerator, and where you can add new items</p>*/}
        </div>
        <div className="button-container">
            <Link to="/menu">
            <button className="menu-ideas-button">Menu Ideas</button>
            </Link>
            {/*<p>Get ideas for a menu using the items in your refrigerator</p>*/}
        </div>
        <div className="button-container">
            <Link to="/groceries">
            <button className="add-to-list">Your Shopping list</button>
            </Link>
           {/*<p>Add a new item to your grocery list</p>*/}
        </div>
    </div>
  );
}

export default Home;
