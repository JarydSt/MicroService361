// src/components/MealOptions.js
import React, { useState, useEffect } from 'react';

function MealOptions({ mealTime, onSelectRecipe }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`/api/recipes/${mealTime}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Recipes received:', data); // Debug log
        setRecipes(data);
      })
      .catch(error => console.error('Error fetching recipes:', error)); // Debug log
  }, [mealTime]);

  return (
    <div>
      <h2>Choose a {mealTime} recipe</h2>
      <ul>
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <li key={recipe._id}>
              <button onClick={() => onSelectRecipe(recipe)}>{recipe.title}</button>
            </li>
          ))
        ) : (
          <p>No recipes found for {mealTime}.</p>
        )}
      </ul>
    </div>
  );

  
}

export default MealOptions;