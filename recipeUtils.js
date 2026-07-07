const Recipe = require('./models/Recipe')

async function createRecipe(newRecipe) {
    try {
        const created = await Recipe.create(newRecipe)
        console.log(created)
    } catch (error) {
        console.log("Failed to create recipe.", error)
    }
}

async function getAllRecipes() {
    try {
        const allRecipes = await Recipe.find();
        for (const recipe of allRecipes) {
            console.log(`${recipe.name} is an ${recipe.difficulty} recipe and takes ${recipe.prepTime} minutes to prepare`)
        }
    } catch (error) {
        console.log('Failed to list all recipes')
    }
}

async function getRecipeById(id) {
    try {
        const recipe = await Recipe.findById(id)
        if (recipe) {
            console.log(recipe)
        } else {
            console.log('No recipe with this ID exists.')
        }
    } catch (error) {
        console.log('Failed to fetch recipe by id')
    }
}

async function updateRecipe(recipeId, newRecipeData) {
    try {
        const updated = await Recipe.findByIdAndUpdate(recipeId, newRecipeData, { new: true })
        console.log(updated)
    } catch (error) {
        console.log('Failed to update recipe')
    }
}

async function deleteRecipe(recipeId) {
    try {
        const deleted = await Recipe.findByIdAndDelete(recipeId)
        console.log('Recipe successfully deleted.')
    } catch (error) {
        console.log('Error deleting recipe')
    }
}

module.exports = {
    createRecipe,
    deleteRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe
}