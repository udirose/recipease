import React from "react";
import './styles.css'

class Slogan extends React.Component {
  render() {
    return (
      <div 
      className="container slogan"
      style={{
          position: "absolute",
          zIndex: 5,
          left: 0,
          top: -10
        }}>
        <h1>recipes you love.</h1>
        <h1>ingredients you already have.</h1>
        <br />
        <a href = "/recipe_center"><button className="mainButton" type = "submit">ENTER RECIPE CENTER</button></a>
      </div>
    );
  }
}

export default Slogan;
