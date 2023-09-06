import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfo, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import shpe_logo from '../assets/logos/shpe_logo.png';
import '../index.css';
import '../styles/header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="headertop">
        <img src={shpe_logo} alt="Logo" className="logo" />
        <span className="shpe-text1">SHPE</span>
        <div className="divider"></div>
        <span className="shpe-text2">University of Colorado Boulder </span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact className="main-nav" activeClassName="main-nav-active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" exact className="main-nav" activeClassName="main-nav-active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" exact className="main-nav" activeClassName="main-nav-active">
            Membership
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact className="main-nav" activeClassName="main-nav-active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/Events" exact className="main-nav" activeClassName="main-nav-active">
            Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;