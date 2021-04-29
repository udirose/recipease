import React from "react";
import axios from 'axios';

function Login() {

  function handleClick(event) {
    event.preventDefault()
    var lEmail = document.getElementById('lEmail').value
    var lPassword = document.getElementById('lPassword').value



    axios.get('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/login', async (req, res) => {
      
    })
  }



  return (
    <div className="container-fluid">
    <br/>
    <br/>
    <br/>
    <div
      className="card card-text mx-auto"
      style={{
        width: "45%"
      }}
    >
      <a className="login-logo" href="home.html">
        <img alt src="images/RecipeaseLogo.png" width={189} height={27} />
      </a>
      <h1 className="login-page-text">welcome to recipease!</h1>
      <h1 className="login-page-text">to enter, please login.</h1>
      <div className="form-group text-center">
        <br />
        <form id="login" action="/" method="POST">
          <input
            className="mx-auto"
            type="text"
            required
            id="lEmail"
            placeholder="enter email"
          />
          <br />
          <br />
          <input
            type="password"
            required
            id="lPassword"
            placeholder="enter password"
          />
          <br />
          <br />
          <button type = "submit" id = "loginButton" defaultValue= "LOGIN" onClick={handleClick}>SUBMIT</button>
        </form>
      </div>
      <div className="no-account container">
        <h2>no account?</h2>{" "}
        <a className="create" href="#">
          create one!
        </a>
      </div>
    </div>
  </div>

  );
}


export default Login;
