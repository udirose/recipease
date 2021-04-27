import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class RecipeCenter extends React.Component {


    constructor(props) {
        super(props)
        this.state = { recipeCollection: [] }
    }

    // componentDidUpdate = () => {
    //     axios.post('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/recipe_center', {
    //         data: console.log(document.getElementById('search').value)
    //     })

    //     this.getDishes()
    // }

    // componentDidMount = () => {
    //     //console.log(document.getElementById('search').value)

    //     axios.post('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/recipe_center', {
    //         data: console.log(document.getElementById('search').value)
    //     })

    //     this.getDishes()
    // }

    handleSearch = event => {
        event.preventDefault()
        axios.post('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/recipe_center', {
            data: document.getElementById('search').value
        })

        this.getDishes()
    }



    getDishes = () => {

        axios.get('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/recipe_center')
            .then((response) => {
                this.setState({ recipeCollection: response.data })
            })
            .catch(() => {
                console.log('error')
            })
    }

    recipeResults() {
        return this.state.recipeCollection.map((data, i) => {
            return <h5 obj={data} key={i}><a href={data.url} target="_blank" rel="noopener noreferrer">{JSON.stringify(data.name)}</a></h5>
        })
    }

    render() {
        return (
            <div className="container fluid">
                <form className="container-fluid text-center">

                    <br />
                    <br />
                    <br />
                    <h2>Search for a recipe</h2>

                    <input type="search" id="search" placeholder="recipe name" /><br/><br/>
                    <button type="submit" className="mainButton" onClick = {this.handleSearch}>Search</button>

                </form>


                <form method="post" className="text-center">
                    <fieldset>
                        <br />
                        <br />
                        <br />
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

                <h2>Results:</h2>
                <br />
                <div>
                    {this.recipeResults()}
                </div>
            </div>

        );
    }
}


export default RecipeCenter;
