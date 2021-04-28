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
  
  module.exports = mongoose.model('recipes', recipeSchema)