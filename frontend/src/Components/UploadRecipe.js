import React, {useState} from "react";
import axios from "axios"
import {Link} from "react-router-dom"

function UploadRecipe() {

    function handleClick(event){

      
        event.preventDefault()
        var iName = document.getElementById('recipName').value
        var iIngred = document.getElementById('recipIngred').value
        var iDesc = document.getElementById('recipDesc').value
        axios.post('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/your_recipes', {
          "name": iName,
          "ingredients": iIngred,
          "description": iDesc
        }).then((response) => {
          console.log(response);
          console.log("succesfully submited")
        }, (error) => {
          console.log(error);
        })

        
        //end axios
    }

    return (
        // <div className = "container fluid">
        // <br/>
        // <br/>
        // <br/>
        // <h2>Upload your own Recipe!</h2>
        //     <form id = "submitRecipe">
        //         <input type = "text" id = "recipName" placeholder = "enter recipe name"/><br/><br/>
        //         <input type = "text" id = "recipIngred" placeholder = "enter recipe ingredients"/><br/><br/>
        //         <input type = "text" id = "recipDesc" placeholder = "enter recipe description"/><br/><br/>
        //         <Link to = "/recipe_center"><input type = "submit" id = "uploadRecipe" onClick = {handleClick} value = "Upload"/></Link>
        //     </form>
        // </div>
        <div className="container-fluid">
    <br/>
    <br/>
    <br/>
    <br/>
    <div
      className="card card-text mx-auto"
      style={{
        width: "45%"
      }}
    >
  <h1 className="login-page-text">Upload your Own Recipe!</h1>
      <div className="form-group text-center">
        <br />
        <form id="submitRecipe">
          <input
            className="mx-auto"
            type="text"
            required
            id="recipName"
            placeholder="enter recipe name"
          />
          <br />
          <br />
          <input
            type="text"
            required
            id="recipIngred"
            placeholder="enter ingredients"
          />
          <br />
          <input
            type="text"
            required
            id="recipDesc"
            placeholder="enter description"
          />
          <br />
          <br />
          <button type = "submit" id = "uploadRecipe" defaultValue= "UPLOAD" onClick={handleClick}>UPLOAD</button>
        </form>
      </div>
    </div>
  </div>
    )


}

export default UploadRecipe;