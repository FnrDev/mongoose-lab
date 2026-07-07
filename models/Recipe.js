const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100
    },
    instructions: {
        type: [String],
        required: true
    },
    prepTime: {
        type: Number,
        min: 5,
        max: 500,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard']
    }
}, { timestamps: true })

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe