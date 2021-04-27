const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var mongodb = require("mongodb");

const recipeSchema = new Schema({
    name: String,
    ingredients: String,
    url: String,
    image: String,
    cookTime: String,
    recipeYield: String,
    datePublished: String,
    prepTime: String,
    description: String
  },{ collection : 'recipes' })
  
  recipeSchema.index({ request: 'text' })
  
  const Recipe = mongoose.model('recipes', recipeSchema)

 

  let searchedItem = ""

  router.route('/recipe_center').post((req,res)=>{
      searchedItem = req.body.data
  })

  

  router.route('/recipe_center').get((req,res)=>{

    console.log(searchedItem)
    let regex = "." + searchedItem + "."
    Recipe.find({ 
        "name": {$regex: regex, $options:"i"}
      }, function (err, result) {
        if (err) throw err;
        if (result) {
            res.send(result)
        //   result.forEach(r=>{
        //       res.json(r)
        //     //   console.log(r.name)
        //     //   console.log(r.ingredients)
        //     //   console.log("------")
        //   })

          
        } else {
          res.send(JSON.stringify({
            error: 'Error'
          }))
        }
      }).limit(20)


      searchedItem = ""
  })




  module.exports = router
