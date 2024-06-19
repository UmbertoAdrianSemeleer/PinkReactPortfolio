import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <ul>
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
