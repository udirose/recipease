const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var mongodb = require("mongodb");
let Recipe = require('../models/recipesmodel')

let searchedItem
let isIngredSearch

//gets the searched item and if it is an ingredient search
router.route('/recipe_center').post((req, res) => {

  searchedItem = req.body.data
  isIngredSearch = req.body.ingSearch
  console.log(req.body)


  if (!isIngredSearch) {
    //this is with the normal search bar. the search seems to get stuck

    console.log(searchedItem)
    let regex = "." + searchedItem + "."
    Recipe.find({
      "name": { $regex: regex, $options: "i" }
    }, function (err, result) {
      if (err) throw err;
      if (result) {
        res.send(result)
      } else {
        res.send(JSON.stringify({
          error: 'Error'
        }))
      }
    }).limit(20)


    searchedItem = ""
  } else if (isIngredSearch){


    if(Array.isArray(searchedItem)){
      

            let regexMult = ""
      
              for(let i = 0; i < searchedItem.length; i++){
                if(i!= searchedItem.length -1){
                regexMult += "(?=.*"+searchedItem[i]+")|"
                }
                else{
                  regexMult += "(?=.*"+searchedItem[i]+")"
                }
              }
      
                console.log(regexMult)
                Recipe.find({
                  "ingredients": { $regex: regexMult, $options: "i" }
                }, function (err, result) {
                  if (err) throw err;
                  if (result) {
                    res.send(result)
                  } else {
                    res.send(JSON.stringify({
                      error: 'Error'
                    }))
                  }
                }).limit(20)
              }

              searchedItem = ""
              isIngredSearch = false
  }
})


module.exports = router
