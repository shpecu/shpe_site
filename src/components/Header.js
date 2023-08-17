
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfo, FaEnvelope } from 'react-icons/fa';
import shpe_logo from '../assets/logos/shpe_logo.png';
import '../index.css';

const Header = () => {
  return (
    <header className="header">
      <div className='nav-container'>
        <nav className="navbar">
          <div className='nav-logo'>
            <Link to="/" className="nav-link"> 
              <img src={shpe_logo} alt="Logo" className="logo" />
            </Link>
          </div>
          <div className='nav-links'>
            <Link to="/" className="nav-link">
              <FaHome className="nav-icon" />
              Home
            </Link>
            <Link to="/about" className="nav-link">
              <FaInfo className="nav-icon" />
              About
            </Link>
            <Link to="/contact" className="nav-link">
              <FaEnvelope className="nav-icon" />
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;