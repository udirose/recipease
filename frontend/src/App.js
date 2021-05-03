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

const api = axios.create({
  baseURL: "http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:3000/",
});


var access
//look up react router to switch between routes


let logged = false;
function App({log,setLog}) {
  //const [log, setLog] = useState( log != null ? true : false);
  //const [log,setLog] = useState()
  // const getLogData = (logStat) => {
  //   setLog(logStat)
  // }

  
  if(log){
    console.log("WHERS MY MONEY MR WHITE")
    return(
      <Router>
      <Route path="/" exact>
      <NavLogged />
      <Animations />
      <Slogan />
    </Route>

    <Route path="/register">
      <NavLogged/>
      <Register />
    </Route>

    <Route path="/login">
      <NavLogged/>
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
  } else if(!log){
    return (
      <Router>
        <Route path="/" exact>
          <Nav/>
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
  
  // //

  // useEffect(() => {
  
  //   axios.post("http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/login")
  //   .then((response) => {
  //     console.log(response.data);
  //     access = response.data;
  //   })
  //   .catch(() => {
  //     console.log("error");
  //   });
  
  // })
  //-----------
  // if (!loggedInStatus) {
  //   return (
  //     <Router>
  //       <Route path="/" exact>
  //         <Nav/>
  //         <Animations />
  //         <Slogan />
  //       </Route>

  //       <Route path="/register">
  //         <Nav />
  //         <Register />
  //       </Route>

  //       <Route path="/login">
  //         <Nav />
  //         <Login  loginMeth={getLogData} />
  //       </Route>

  //       <Route path="/recipe_center">
  //         <Nav />
  //         <RecipeCenter />
  //       </Route>
  //     </Router>
  //   );
  // } else {
  //   <Router>
  //     <Route path = "/" exact>
  //       <Slogan/>
  //     </Route>
  //   </Router>
  // }

  //------------------
// const [isLoggedIn, loginSet] = useState();

  //var access = this.props.location.access

  //const [isLoggedIn, loginSet] = useState()
// alert(access)
//   if (!access) {
//     return (
//       <Router>
//         <Route path="/" exact>
//           <Login loginSet={loginSet} logTrue={false}/>
//         </Route>
//         <Route path="/register">
//           <Register />
//         </Route>
//       </Router>
//     );
//   } 
//   if (access) {
//     return (
//       <Router>
//         <Route path="/" exact>
//           <NavLogged />
//           <Slogan />
//         </Route>
//         <Route path="/recipe_center">
//           <NavLogged />
//           <RecipeCenter />
//         </Route>

//         <Route path="/your_recipes">
//           <NavLogged />
//           <UploadRecipe />
//         </Route>
//       </Router>
//     );
//   }

  // render() {
  

  // if (loggedInStatus) {
  //   //loginSet(true)
  //   return (
  //     <Router>
  //       <Route path="/" exact>
  //         <NavLogged />
  //         <Animations />
  //         <Slogan />
  //       </Route>

  //       <Route path="/register">
  //         <Nav />
  //         <Register />
  //       </Route>

  //       <Route path="/login">
  //         <Nav />
  //         <Login loginMeth={getLogData} />
  //       </Route>

  //       <Route path="/recipe_center">
  //         <NavLogged />
  //         <RecipeCenter />
  //       </Route>

  //       <Route path="/your_recipes">
  //         <NavLogged />
  //         <UploadRecipe />
  //       </Route>
  //     </Router>
  //   );
  // }
  //}

