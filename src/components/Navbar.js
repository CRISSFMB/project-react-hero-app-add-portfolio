import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HeldenApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-item nav-link" to="/marvel">
                MarvelHelden
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link" to="/dc">
                DCHelden
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-item nav-link" to="/search">
                Suchen Helden
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hero">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
