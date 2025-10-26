import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          React Challenges:
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/counter" ? "active" : ""}>
              Counter
            </Link>
          </li>
          <li>
            <Link to="/movies" className={location.pathname.startsWith("/search") ? "active" : ""}>
              Movies
            </Link>
          </li>
          <li>
            <Link to="/todos" className={location.pathname.startsWith("/todo") ? "active" : ""}>
              To-Do
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;