// Requires official Node.js MongoDB Driver 3.0.0+
const express = require('express')
const mongodb = require("mongodb");
const BSONRegExp = mongodb.BSONRegExp;
const router = express.Router()
import axios from 'axios'


const client = mongodb.MongoClient;
const url = "mongodb+srv://chef:thesoundofthecrust14@recipease.ethnj.mongodb.net/Recipease?retryWrites=true&w=majority";



client.connect(url, function (err, client) {
    
    var db = client.db("Recipease");
    var collection = db.collection("recipes");
    
    var query = {
        "name": new BSONRegExp("\\.\\*pasta\\.\\*", "i")
    };
    
    var projection = {
        "name": 1.0,
        "ingredients": 1.0
    };
    
    var cursor = collection.find(query).project(projection);
    
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


module.exports = router