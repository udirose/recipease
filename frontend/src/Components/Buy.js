import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

class Buy extends React.Component {
  render() {
    const ingredients = this.props.ingredients;
    console.log(ingredients);
    const ingredArray = ingredients.split(/(?=[0-9])/);

    for (let i = 0; i < ingredArray.length; i++) {
      ingredArray[i] = ingredArray[i].match(/[A-z]\s*/g);
      if (ingredArray[i] != null) {
        let arr = ingredArray[i].toString().split(",");
        ingredArray[i] = arr.join("");
      }
    }

    const listIngreds = ingredArray.map((ingred) => (
      <div>
        <form
          action="https://www.amazon.com/s?k="
          method="GET"
          target="_blank"
          rel="noopener noreferrer"
        >
          <input type="hidden" name="field-keywords" value={ingred} />

          {ingred != null ||
          ingred != "" ||
          ingred != " " ||
          ingred != "  " ||
          ingred != "   " ||
          ingred != "    " ? (
            <button type="submit">{ingred} </button>
          ) : null}
        </form>
      </div>
    ));
    return <ul>{listIngreds}</ul>;
  }
}

export default Buy;
