import  { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Webflix</h1>
      </div>
      <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#series">Series</a>
          </li>
          <li>
            <a href="#movies">Movies</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </button>
    </header>
  );
};

export default Header;
