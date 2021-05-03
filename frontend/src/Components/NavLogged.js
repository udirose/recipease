import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavLogged extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top">
        <Link to = "/" className = "navbar-brand">
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
          
              <Link to = "/" className = "nav-link home">
                HOME
                </Link>
              
            </li>
            <li className="nav-item">
   
              <Link to = "/recipe_center" className = "nav-link recipe-center">
                RECIPE CENTER
                </Link>
              
            </li>
            <li className="nav-item">
            <Link to = "/your_recipes" className = "nav-link saved-recipes">
                YOUR RECIPES
             </Link>
            </li>
            <li className="nav-item">
            <a href = "/" className = "nav-link login">
              
                LOGOUT
                
                </a>
              
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavLogged;
