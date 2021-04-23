import React from "react";
import './styles.css'

class Slogan extends React.Component {
  render() {
    return (
      <div className="container slogan">
        <h1>recipes you love.</h1>
        <h1>ingredients you already have.</h1>
        <br />
        <button className="mainButton">ENTER RECIPE CENTER</button>
      </div>
    );
  }
}

export default Slogan;
