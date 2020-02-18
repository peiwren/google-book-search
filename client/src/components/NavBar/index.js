import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-light">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <h2>Google Books</h2>
        </li>
        <li className="nav-item one">
          <Link
            to="/search"
            className={
              window.location.pathname === "/search" ? "one active" : "one"
            }
          >
            Search
          </Link>
        </li>
        <li className="nav-item two">
          <Link
            to="/saved"
            className={
              window.location.pathname === "/saved" ? "two active" : "two"
            }
          >
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
