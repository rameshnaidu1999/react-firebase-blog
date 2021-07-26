import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Navbar() {
  const [{ user }] = useStateValue();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <div className="container">
          <a className="navbar-brand" href="#!">
            Bloggy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  {user?.email}
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/createblog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
