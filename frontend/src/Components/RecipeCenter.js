import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class RecipeCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipeCollection: [] };
  }

  // const [recipeCollection,setRecipeCollection] = useState([])
  // const [searchValue, setSearchValue] = useState("")

  handleSearch = (event) => {
    //console.log(searchValue)
    event.preventDefault();
    axios.post(
      "http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/recipe_center",
      {
        data: document.getElementById('search').value,
        ingSearch: false,
      }
    ).then((response) => {
      //console.log(searchValue)
      //setRecipeCollection(response.data)
      this.setState({ recipeCollection: response.data });
      //setSearchValue("")
      
      //console.log(searchValue)
      document.getElementById('search').value = ""
    })
    .catch(() => {
      console.log("error");
    });
  };





  handleIngredSearch = (event) => {
    event.preventDefault();

    let ingredArray = [];
    let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

    for (var i = 0; i < checkboxes.length; i++) {
      ingredArray.push(checkboxes[i].value);
    }

    console.log(ingredArray);

    axios.post(
      "http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/recipe_center",
      {
        data: ingredArray,
        ingSearch: true,
      }
    ).then((response) => {
      this.setState({ recipeCollection: response.data });
      document.getElementById("search").value = "";
    })
    .catch(() => {
      console.log("error");
    });

  
  };


recipeResults = () =>{
    //console.log(recipeCollection)
    if(this.state.recipeCollection != null && this.state.recipeCollection.length != 0){
    return this.state.recipeCollection.map((data, i) => {
      
      return (
        <h5 obj={data} key={i}>
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            {JSON.stringify(data.name)}
          </a>
        </h5>
      );
    });
  } else {
    return(<h5>No Results...</h5>);
  }
  }

  render() {
    return (
      <div className="container fluid">
      <br/>
      <br/>
      <br/>
        <br />
        <div
          className="card card-text mx-auto"
          style={{
            width: "45%",
          }}
        >
          <form className="container-fluid text-center">
            <br />
            <h2>Search for a recipe</h2>

            <input type="search" id="search" placeholder="recipe name" />
            <br />
            <br />
            <button
              type="submit"
              className="mainButton"
              onClick={this.handleSearch}
            >
              Search
            </button>

            <br />
            <br />
            <br />
          </form>
        </div>

        <div
          className="card card-text mx-auto"
          style={{
            width: "45%",
          }}
        >
        <form className="text-center">
          <fieldset>

            <br />
            <h2>Search by Your Ingredients</h2>
            <h4>Please Check the Ingredients you Have</h4>
            <input
              type="checkbox"
              name="ingredients"
              id="eggs"
              defaultValue="eggs"
            />
            Eggs
            <input
              type="checkbox"
              name="ingredients"
              id="milk"
              defaultValue="milk"
            />
            Milk
            <input
              type="checkbox"
              name="Ingredients"
              id="cheese"
              defaultValue="cheese"
            />
            Cheese
            <input
              type="checkbox"
              name="Ingredients"
              id="pasta"
              defaultValue="pasta"
            />
            Pasta
            <input
              type="checkbox"
              name="Ingredients"
              id="chicken"
              defaultValue="chicken"
            />
            Chicken
            <input
              type="checkbox"
              name="Ingredients"
              id="rice"
              defaultValue="rice"
            />
            Rice
            <input
              type="checkbox"
              name="Ingredients"
              id="salt"
              defaultValue="salt"
            />
            Salt
            <input
              type="checkbox"
              name="Ingredients"
              id="flour"
              defaultValue="flour"
            />
            Flour
            <input
              type="checkbox"
              name="Ingredients"
              id="bakingpowder"
              defaultValue="baking powder"
            />
            Baking Powder
            <input
              type="checkbox"
              name="Ingredients"
              id="butter"
              defaultValue="butter"
            />
            Butter
            <input
              type="checkbox"
              name="Ingredients"
              id="paprika"
              defaultValue="paprika"
            />
            Paprika
            <br />
            <br />
            <button
              type="submit"
              className="mainButton"
              onClick={this.handleIngredSearch}
            >
              Search
            </button>
          </fieldset>
        </form>
        <br/>
        <br/>
        </div>

        

        <h2>Results:</h2>
        <br />
        <div>{this.recipeResults()}</div>

        <form
          method="get"
          action="http://www.amazon.com/s/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <input type="hidden" name="url" value="search-alias=aps" />
          <input type="hidden" name="field-keywords" value="eggs" />
          <button type="submit" name="url">
            Get Ingredients on Amazon
          </button>
        </form>
      </div>
    );
    // amazon form from https://www.askdavetaylor.com/add_amazon_search_box_to_web_page_profile/
  }
}

export default RecipeCenter;
