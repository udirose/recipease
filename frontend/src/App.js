import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Slogan from "./Components/Slogan";
import Nav from "./Components/Nav";
import Animations from "./Components/Animations";
import Register from "./Components/Register";
import Login from "./Components/Login";
import RecipeCenter from "./Components/RecipeCenter";
import UploadRecipe from "./Components/UploadRecipe";
import NavLogged from "./Components/NavLogged";
import Buy from "./Components/Buy";
import View from "./Components/View";

const api = axios.create({
  baseURL: "http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:3000/",
});

function App({ log, setLog }) {
  if (log) {
    return (
      <Router>
        <Route path="/" exact>
          <NavLogged />
          <Animations />
          <Slogan />
        </Route>

        <Route path="/register">
          <NavLogged />
          <Register />
        </Route>

        <Route path="/login">
          <NavLogged />
          <Login loginMeth={setLog} />
        </Route>

        <Route path="/recipe_center">
          <NavLogged />
          <RecipeCenter />
        </Route>

        <Route path="/your_recipes">
          <NavLogged />
          <UploadRecipe />
        </Route>
      </Router>
    );
  } else if (!log) {
    return (
      <Router>
        <Route path="/" exact>
          <Nav />
          <Animations />
          <Slogan />
        </Route>

        <Route path="/register">
          <Nav />
          <Register />
        </Route>

        <Route path="/login">
          <Nav />
          <Login loginMeth={setLog} />
        </Route>

        <Route path="/recipe_center">
          <Nav />
          <RecipeCenter />
        </Route>
      </Router>
    );
  }
}

export default App;
