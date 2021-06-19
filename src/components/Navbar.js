import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" exact to="/marvel">
            Marvel
          </Link>

          <Link className="nav-item nav-link" exact to="/dc">
            DC
          </Link>

          <Link className="nav-item nav-link" exact to="/search">
            Search
          </Link>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <Link className="nav-item nav-link" exact to="/login">
            Logout
          </Link>
        </ul>
      </div>
    </nav>
  );
};
