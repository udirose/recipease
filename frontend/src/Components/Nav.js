import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <Link to="/" className="navbar-brand">
        <img
          className="logo"
          src="images/RecipeaseLogo.png"
          width={252}
          length={36}
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          {" "}
          <i className="fas fa-bars hamburger"> </i>{" "}
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto nav">
          <li className="nav-item">
            <Link to="/" className="nav-link home">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recipe_center" className="nav-link recipe-center">
              RECIPE CENTER
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link login">
              LOGIN
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link register">
              REGISTER
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
