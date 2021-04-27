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
      <br />
      <br />
      <br />
      <h1 className="text-center">Login!</h1>
      <div className="form-group text-center">
        <br />
        <form id="login" action="/" method="POST">
          <input
            type="text"
            required
            id="lEmail"
            placeholder="Enter Email"
          />
          <br />
          <br />
          <input
            type="password"
            id="lPassword"
            required
            placeholder="******"
          />
          <br />
          <br />
          <input type="submit" id="loginButton" defaultValue="Login" onClick={handleClick} />
        </form>
      </div>
    </div>
  );
}


export default Login;
