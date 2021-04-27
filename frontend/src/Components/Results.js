import React from "react";
import axios from 'axios'
import './styles.css'

class Results extends React.Component {

    constructor(props){
        super(props)
        this.state = {recipeCollection: []}
    }

    componentDidUpdate = () => {
        // axios.post('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/results', {
        //     data: this.props.searchQuery
        // })

        this.getDishes()
    }

    componentDidMount = () => {
        //console.log(document.getElementById('search').value)

        // axios.post('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/results', {
        //     data: this.props.searchQuery
        // })

        this.getDishes()
    }



    getDishes = () => {

        axios.get('http://ec2-3-19-211-127.us-east-2.compute.amazonaws.com:8080/results')
            .then((response) => {
                this.setState({ recipeCollection: response.data})
            })
            .catch(() => {
                console.log('error')
            })
    }

    recipeResults(){
        return this.state.recipeCollection.map((data,i)=>{
            return <h5 obj = {data} key = {i}><a href = {data.url} target="_blank" rel="noopener noreferrer">{JSON.stringify(data.name)}</a></h5>
        })
    }

    render() {
        //console.log(this.props.searchQuery);

        return (

            <div className="container-fluid">
                <br />
                <br />
                <br />
                <h2>Results:</h2>
                <br />
                <div>
                    {this.recipeResults()}
                </div>
            </div>
        );
    }

}

export default Results;
