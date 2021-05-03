import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login(props) {
  const history = useHistory();

  function handleClick(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    axios
      .post(
        "http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/login",
        {
          usernameField: email,
          passwordField: password,
        }
      )
      .then((response) => {
        if (response) {
          props.loginMeth(true);
          history.push({
            pathname: "/",
          });
        }
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <div className="container-fluid">
      <br />
      <br />
      <br />
      <div
        className="card card-text mx-auto"
        style={{
          width: "45%",
        }}
      >
        <a className="login-logo" href="home.html">
          <img alt src="images/RecipeaseLogo.png" width={189} height={27} />
        </a>
        <h1 className="login-page-text">welcome to recipease!</h1>
        <h1 className="login-page-text">to enter, please login.</h1>
        <div className="form-group text-center">
          <br />
          <form id="login">
            <input
              className="mx-auto"
              type="text"
              required
              id="email"
              placeholder="enter email"
            />
            <br />
            <br />
            <input
              type="password"
              required
              id="password"
              placeholder="enter password"
            />
            <br />
            <br />
            <button
              type="submit"
              id="loginButton"
              onClick={handleClick}
              defaultValue="LOGIN"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="no-account container">
          <h2>no account?</h2>{" "}
          <a className="create" href="/register">
            create one!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
