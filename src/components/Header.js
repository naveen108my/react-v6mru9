import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <ul className="header">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Details</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
