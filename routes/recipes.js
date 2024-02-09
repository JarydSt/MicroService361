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

// Additional routes for updating and deleting recipes will go here

module.exports = router;