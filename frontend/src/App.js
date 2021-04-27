import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Slogan from './Components/Slogan'
import Nav from './Components/Nav'
import Animations from './Components/Animations'
import Register from './Components/Register'
import Login from './Components/Login'
import RecipeCenter from './Components/RecipeCenter'


const api = axios.create({
  baseURL: 'http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:3000/'
})

require('dotenv').config()




//look up react router to switch between routes
function App() {

  // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // }

  return (
    <Router>
      <Route path="/" exact>
        <Nav />
        <Animations/>
        <Slogan />
      </Route>

      <Route path="/register">
        <Nav />
        <Register />
      </Route>

      <Route path="/login">
        <Nav />
        <Login />
      </Route>

      <Route path="/recipe_center">
        <Nav />
        <RecipeCenter/>
      </Route>

    </Router>
  );

}
//THIS GOES IN SEARCH  handleSearchChange={handleSearchChange} searchQuery={searchQuery}
// THIS GOES IN RESULTS searchQuery={searchQuery}
//<ComponentName username="String"></ComponentName>

export default App;
