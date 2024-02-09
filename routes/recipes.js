// routes/recipes.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// POST route to create a new recipe
router.post('/', async (req, res) => {
  const recipe = new Recipe(req.body);
  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET route to fetch recipes by meal type
router.get('/:mealType', async (req, res) => {
  try {
    const { mealType } = req.params;
    const recipes = await Recipe.find({ mealType: mealType });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Fetch all recipes for a specific meal time
router.get('/:mealTime', async (req, res) => {
  try {
    const { mealTime } = req.params;
    console.log('Fetching recipes for meal time:', mealTime); // Debug log
    const recipes = await Recipe.find({ mealTime: mealTime });
    console.log('Found recipes:', recipes); // Debug log
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error); // Debug log
    res.status(500).json({ message: error.message });
  }
});

// Additional routes 

/* PUT route to update a recipe by id
router.put('/:id', async (req, res) => {
  // ... update logic here
});

// DELETE route to delete a recipe by id
router.delete('/:id', async (req, res) => {
  // ... delete logic here
});*/

module.exports = router;