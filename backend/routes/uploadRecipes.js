const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var mongodb = require("mongodb");
const submitRecip = require('../models/recipesmodel')




  router.route('/your_recipes').post((req,res)=>{
    const reName = req.body.name
    const reIngred = req.body.ingredients
    const reDesc = req.body.description
    const userUrl = req.body.username


    const newRec = new submitRecip({
        "name": reName,
        "ingredients": reIngred,
        "description": reDesc,
        "url": userUrl
    })

    newRec.save()
    res.redirect('/recipe_center')
  })

  module.exports = router