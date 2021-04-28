import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class RecipeCenter extends React.Component {


    constructor(props) {
        super(props)
        this.state = { recipeCollection: [] }
    }

    // componentDidUpdate = () => {
    //     // axios.post('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/recipe_center', {
    //     //     data: console.log(document.getElementById('search').value)
    //     // })

    //     // this.getDishes()
    //     //this.handleSearch('click')
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
            data: document.getElementById('search').value,
            ingSearch: false
        })

        //this.getDishes()
        axios.get('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/recipe_center')
            .then((response) => {
                this.setState({ recipeCollection: response.data })
                document.getElementById('search').value = ''
            })
            .catch(() => {
                console.log('error')
            })
    }


    handleIngredSearch = event => {
        event.preventDefault()

        let ingredArray = []
        let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

        for (var i = 0; i < checkboxes.length; i++) {
            ingredArray.push(checkboxes[i].value)
        }

        console.log(ingredArray)


        axios.post('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/recipe_center', {
            data: ingredArray,
            ingSearch: true
        })

        //this.getDishes()
        axios.get('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/recipe_center')
            .then((response) => {
                this.setState({ recipeCollection: response.data })
                document.getElementById('search').value = ''
            })
            .catch(() => {
                console.log('error')
            })
    }

    // getCheckedBoxes = chkboxName => {
    //     //https://stackoverflow.com/questions/8563240/how-to-get-all-checked-checkboxes/31113246
    //     let checkboxes = document.getElementsByName(chkboxName);
    //     let checkboxesChecked = [];
    //     // loop over them all
    //     for (let i=0; i<checkboxes.length; i++) {
    //        // And stick the checked ones onto an array...
    //        if (checkboxes[i].checked) {
    //           checkboxesChecked.push(checkboxes[i]);
    //        }
    //     }
    //     // Return the array if it is non-empty, or null
    //     return checkboxesChecked.length > 0 ? checkboxesChecked : null;
    // }

    // getDishes = () => {

    //     // axios.get('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/recipe_center')
    //     //     .then((response) => {
    //     //         this.setState({ recipeCollection: response.data })
    //     //         document.getElementById('search').value = ''
    //     //     })
    //     //     .catch(() => {
    //     //         console.log('error')
    //     //     })
    //     //
    // }

    recipeResults() {
        return this.state.recipeCollection.map((data, i) => {
            return <h5 obj={data} key={i}><a href={data.url} target="_blank" rel="noopener noreferrer">{JSON.stringify(data.name)}</a></h5>
        })
    }

    render() {
        //console.log(document.querySelectorAll('input[name=Ingredients]:checked').value)
        return (
            <div className="container fluid">
                <form className="container-fluid text-center">

                    <br />
                    <br />
                    <br />
                    <h2>Search for a recipe</h2>

                    <input type="search" id="search" placeholder="recipe name" /><br /><br />
                    <button type="submit" className="mainButton" onClick={this.handleSearch}>Search</button>

                </form>


                <form className="text-center">
                    <fieldset>
                        <br />
                        <br />
                        <br />
                        <h2>Search by Your Ingredients</h2>
                        <h4>Please Check the Ingredients you Have</h4>
                        <input type="checkbox" name="ingredients" id="eggs" defaultValue="eggs" />
                        Eggs
                        <br />
                        <input type="checkbox" name="ingredients" id="milk" defaultValue="milk" />
                        Milk
                        <br />
                        <input type="checkbox" name="Ingredients" id="cheese" defaultValue="cheese" />
                        Cheese
                        <br />
                        <input type="checkbox" name="Ingredients" id="pasta" defaultValue="pasta" />
                        Pasta
                        <br />
                        <input type="checkbox" name="Ingredients" id="chicken" defaultValue="chicken" />
                        Chicken
                        <br />
                        <input type="checkbox" name="Ingredients" id="rice" defaultValue="rice" />
                        Rice
                        <br />
                        <input type="checkbox" name="Ingredients" id="salt" defaultValue="salt" />
                        Salt
                        <br />
                        <input type="checkbox" name="Ingredients" id="flour" defaultValue="flour" />
                        Flour
                        <br />
                        <input type="checkbox" name="Ingredients" id="bakingpowder" defaultValue="baking powder" />
                        Baking Powder
                        <br />
                        <input type="checkbox" name="Ingredients" id="butter" defaultValue="butter" />
                        Butter
                        <br />
                        <br />
                        <button type="submit" className="mainButton" onClick={this.handleIngredSearch}>Search</button>
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
