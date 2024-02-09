// models/Recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  mealTime: String, // e.g., "breakfast", "lunch", "dinner"
  ingredients: [String],
  instructions: [String],
  prepTime: Number,
  difficulty: String // e.g., "easy", "medium", "hard"
});

module.exports = mongoose.model('Recipe', recipeSchema);