import React from "react";

class Ingredients extends React.Component {
  render() {
    return (
      <form method="post" className = "text-center">
        <fieldset>
        <br/>
        <br/>
        <br/>
        <h2>Search by Your Ingredients</h2>
          <h4>Please Check the Ingredients you Have</h4>
          <input type="checkbox" name="ingredients" defaultValue="eggs" />
          Eggs
          <br />
          <input type="checkbox" name="ingredients" defaultValue="milk" />
          Milk
          <br />
          <input type="checkbox" name="Ingredients" defaultValue="cheese" />
          Cheese
          <br />
          <br />
          <input type="submit" defaultValue="Submit now" />
        </fieldset>
      </form>
    );
  }
}

export default Ingredients;
