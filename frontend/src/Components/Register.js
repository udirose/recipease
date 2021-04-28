import React, {useState} from "react";
import axios from "axios"
import {Link} from "react-router-dom"

function Register() {
const isRegistered = false
  
  

    function handleClick(event){

      
        event.preventDefault()
        var pName = document.getElementById('name').value
        var pEmail = document.getElementById('email').value
        var pPassword = document.getElementById('password').value
        axios.post('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/register', {
          "name": pName,
          "email": pEmail,
          "password": pPassword
        }).then((response) => {
          console.log(response);
          isRegistered = true
        }, (error) => {
          console.log(error);
        })

        
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
        <h1 className="text-center">Register!</h1>
        <div className="form-group text-center">
          <form id="registerForm">
            <input type="text" required id="name" placeholder="enter full name"
            />
            <br />
            <br />
            <input 
              type="text" 
              required 
              id="email" 
              placeholder="Enter Email" 
              />
            <br />
            <br />
            <input
              type="password"
              id="password"
              required
              placeholder="Choose Password"
            />
            <br />
            <br />
            <Link to="/login"><input
             type="submit" 
             id="registerButton" 
             defaultValue="Register" 
             onClick={handleClick}
             /></Link>
          </form>
        </div>
      </div>
    );
  
}

export default Register;
