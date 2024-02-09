// src/components/MealOptions.js
import React, { useState, useEffect } from 'react';

function MealOptions({ mealType, onSelectRecipe }) {
  const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     // Fetch recipes based on mealType
//     // This is a placeholder. Replace with actual fetch call.
//     fetch(`/api/recipes/${mealType}`)
//       .then(response => response.json())
//       .then(data => setRecipes(data))
//       .catch(error => console.error(error));
//   }, [mealType]);

  useEffect(() => {
    fetch(`/api/recipes/${mealType}`)
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
  }, [mealType]);

  return (
    <div>
      <h2>Choose a {mealType} recipe</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <button onClick={() => onSelectRecipe(recipe)}>{recipe.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealOptions;