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
import View from "./Components/View";
import App from "./App"

//this is in order to keep the state from not reseting
function State() {
    const [log,setLog] = useState()
    return(
        <App log = {log} setLog = {setLog}/>
    )
}

export default State;