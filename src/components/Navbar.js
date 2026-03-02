
import React from 'react';
import { NavLink } from 'react-router-dom';
import moLogo from '../Assets/Images/mo.logo.png';

const Navbar = () => {
  return (
    <header className="main-navbar-wrapper">
      <nav className="navbar navbar-expand-lg main-navbar px-4 px-md-5">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={moLogo} alt="Red Consistency" className="navbar-logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="mainNavbar">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <NavLink className="nav-link" end to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/compounds">
                  Collections
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/marketplace">
                  Marketplace
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/finishing">
                  Renovation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;