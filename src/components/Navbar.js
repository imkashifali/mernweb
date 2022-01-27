import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <Link class="navbar-brand fw-bolder fs-4 mx-auto" to="/">
              SKB Law
            </Link>

            <Link
              to="/login"
              className="btn btn-outline-primary ms-auto px-4 rounded-pill"
            >
              <i className="fa fa-sign-in me-2"></i>Login
            </Link>
            <Link
              to="/register"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill"
            >
              <i className="fa fa-user-plus me-2"></i>Register
            </Link>

            <Link
              to="/dashboard"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill"
            >
              <i className="far fa-sort-amount-up-alt me-2"></i>Dashboard
            </Link>
            <Link
              to="/logout"
              className="btn btn-outline-primary ms-2 px-4 rounded-pill"
            >
              <i className="far fa-sign-out-alt me-2"></i>Logout
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
