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


// // Fetch all recipes for a specific meal time
// router.get('/:mealTime', async (req, res) => {
//   try {
//     const { mealTime } = req.params;
//     console.log('Fetching recipes for meal time:', mealTime); // Debug log
//     const recipes = await Recipe.find({ mealTime: mealTime });
//     console.log('Found recipes:', recipes); // Debug log
//     res.json(recipes);
//   } catch (error) {
//     console.error('Error fetching recipes:', error); // Debug log
//     res.status(500).json({ message: error.message });
//   }
// });

// // Fetch all recipes for a specific meal time
// router.get('/:mealTime', async (req, res) => {
//   try {
//     const { mealTime } = req.params;
//     console.log('Fetching recipes for meal time:', mealTime);
//     const recipes = await Recipe.find({ mealTime: mealTime });
//     console.log('Found recipes:', recipes); 
//     res.json(recipes);
//   } catch (error) {
//     console.error('Error fetching recipes:', error); 
//     res.status(500).json({ message: error.message });
//   }
// });

// Fetch all recipes for a specific meal time
router.get('/:mealTime', async (req, res) => {
  try {
    const { mealTime } = req.params;
    // This will print the mealTime parameter to the console
    console.log('Requested mealTime:', mealTime);
    const recipes = await Recipe.find({ mealTime: mealTime });
    // This will print the recipes found to the console
    console.log(`Found ${recipes.length} recipes for mealTime ${mealTime}:`, recipes);
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes for mealTime:', mealTime, error);
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