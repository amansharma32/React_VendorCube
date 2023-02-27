import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

import "../App.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          Vendor Cube
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/about">
                
                About
              </NavLink>
            </li>

            <li className="nav-item active">
              <NavLink to="/" className="nav-link">
                Login
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" to="/registration">
                Registration
              </NavLink>
            </li>
                 
            <li className="nav-item ">
              <NavLink className="nav-link" to="/wcube">
                Wcube
              </NavLink>
            </li>
                 


          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
