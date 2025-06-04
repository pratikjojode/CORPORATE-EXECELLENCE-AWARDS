import React from 'react';
import '../Styles/Header.css'; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>CORPORATE EXCELLENCE AWARDS</h1>
          <p>Celebrating the Achievements of Corporate Professionals</p>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            
            <li><a href="#sponsors">Sponsors</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;