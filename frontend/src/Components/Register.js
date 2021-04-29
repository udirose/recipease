import React, {useState} from "react";
import axios from "axios"
import {Link} from "react-router-dom"
import { Redirect } from 'react-router'
import { useHistory } from "react-router-dom"

function Register() {
const history = useHistory()
const isRegistered = false
  
  

    function handleClick(event){

      
        event.preventDefault()
        var pName = document.getElementById('name').value
        var pEmail = document.getElementById('reg-username').value
        var pPassword = document.getElementById('reg-password').value
        axios.post('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/register', {
          "name": pName,
          "email": pEmail,
          "password": pPassword
        }).then((response) => {
          console.log(response);
          
          //this.setState({redirect: true})
          
        }, (error) => {
          console.log(error);
        })
        history.push("/recipe_center")
        
        //end axios
    }
    return (
      //conditional rendering : logical operator
      // if(isRegister){
      //   return <Redirect></Redirect>
      // }

      

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
          <a className="login-logo" href="/">
            <img alt src="images/RecipeaseLogo.png" width={189} height={27} />
          </a>
          <h1 className="login-page-text">welcome to recipease!</h1>
          <h1 className="login-page-text">to enter, please register.</h1>
          <div className="form-group text-center">
            <br />
            <form id="registerForm">
            <input type="text" required id="name" placeholder="enter full name"/>
              <input
                className="mx-auto"
                type="reg-text"
                required
                id="reg-username"
                placeholder="enter email"
              />
              <br />
              <br />
              <input
                type="password"
                required
                id="reg-password"
                placeholder="enter password"
              />
              <br />
              <br />
             <input type="submit" id="registerButton" defaultValue="Register" onClick={handleClick} />
            </form>
          </div>
        </div>
      </div>
    );
  
}

export default Register;
