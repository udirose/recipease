import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top">
        <a className="navbar-brand" href="/">
          <img
            className="logo"
            src="images/RecipeaseLogo.png"
            width={252}
            length={36}
          />
        </a>
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
              <a className="nav-link home" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link recipe-center" href="/recipe_center">
                RECIPE CENTER
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link saved-recipes" href="/your_recipes">
                YOUR RECIPES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link login" href="/login">
                LOGIN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link register" href="/register">
                REGISTER
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
