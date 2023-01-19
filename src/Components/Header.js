import React from 'react';
import Button from './Button';
import "../index.css";
import { Link } from 'react-router-dom';

const Header = ({ showForm, changeTextAndColor }) => {
  return (
      <header className="header">
          <Link to="/fridge_manager">
            <button className="btn_link">Home</button>
          </Link>
          <Link to="/add-item">
            <Button onClick={showForm} color={changeTextAndColor ? 'red' : 'green'} text=     {changeTextAndColor ? 'Close' : 'Add'} />
          </Link>
        </header>
    )
}
export default Header;