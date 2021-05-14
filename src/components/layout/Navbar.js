import React from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
     <div className="container">
     <NavLink className="navbar-brand" to="/">
        React 
      </NavLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/About">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/Contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
     </div>
    </nav>

  );
}

export default Navbar