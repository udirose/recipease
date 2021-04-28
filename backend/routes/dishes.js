const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var mongodb = require("mongodb");
let Recipe = require('../models/recipesmodel')

// const recipeSchema = new Schema({
//     name: String,
//     ingredients: String,
//     url: String,
//     image: String,
//     cookTime: String,
//     recipeYield: String,
//     datePublished: String,
//     prepTime: String,
//     description: String
//   },{ collection : 'recipes' })

//   recipeSchema.index({ request: 'text' })

//   const Recipe = mongoose.model('recipes', recipeSchema)



let searchedItem
let isIngredSearch

router.route('/recipe_center').post((req, res) => {

  searchedItem = req.body.data
  isIngredSearch = req.body.ingSearch
})


router.route('/recipe_center').get((req, res) => {

  if (!isIngredSearch) {

    console.log(searchedItem)
    let regex = "." + searchedItem + "."
    Recipe.find({
      "name": { $regex: regex, $options: "i" }
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

    ///START OF INGREDIENT SEARCH
  } else if (isIngredSearch) {

    //this will loop through the ingredients array and do search queries
    if(Array.isArray(searchedItem)){
      

      let regexMult = ""

        // searchedItem.forEach((i)=>{
        //   regexedArray = "." + i + "."
        // })

        for(let i = 0; i < searchedItem.length; i++){
          if(i!= searchedItem.length -1){
          regexMult += "(?=.*"+searchedItem[i]+")|"
          }
          else{
            regexMult += "(?=.*"+searchedItem[i]+")"
          }
        }

        //.chicken.,.baking powder.
        //regexedArray = regexedArray.join()

          //let regex = "." + searchedItem + "."

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
