require('dotenv').config()
const mongoose = require('mongoose')
const { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } = require('./recipeUtils')
const connectToDB = require('./db')

connectToDB()

const newRecipe = {
    name: "Majbos chicken",
    instructions: "frie at 180C",
    prepTime: 60,
    difficulty: "Hard"
}

createRecipe(newRecipe)
getAllRecipes()