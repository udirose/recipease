// Requires official Node.js MongoDB Driver 3.0.0+
const express = require('express')
const app = express()
const mongodb = require("mongodb");
const BSONRegExp = mongodb.BSONRegExp;
const router = express.Router()

const client = mongodb.MongoClient;
const url = "mongodb+srv://chef:thesoundofthecrust14@recipease.ethnj.mongodb.net/Recipease?retryWrites=true&w=majority";


router.route('/recipe_center').get((req,res)=>{

client.connect(url, function (err, client) {
    
    const db = client.db("Recipease");
    const collection = db.collection("recipes");
    
    
    const query = { $text: { $search: "\"pasta\"" } };

    
    const projection = {
        "name": 1.0,
        "ingredients": 1.0,
        "recipeYield": 1.0,
        "prepTime": 1.0
    };
    
    const sort = [ ["name", 1.0] ];
    
    var cursor = collection.find(query).project(projection).sort(sort);
    
    console.log(collection.find(query))
   
    cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );
    
    // Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/
    
});

})
module.exports = router