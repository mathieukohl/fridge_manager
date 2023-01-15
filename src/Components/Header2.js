import React from 'react';
import "../index.css";
import { Link } from 'react-router-dom';

const Header = ({ showForm, changeTextAndColor }) => {
  return (
      <header className="header">
          <Link to="/fridge_manager">
            <button className="btn_link">Home</button>
          </Link>
        </header>
    )
}
export default Header;