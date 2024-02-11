// src/components/MealOptions.js
import React, { useState, useEffect } from 'react';
import './MealOptions.css';

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
        console.log('Recipes received:', data); 
        setRecipes(data);
      })
      .catch(error => console.error('Error fetching recipes:', error)); 
  }, [mealTime]);

  return (
    <div className="mealOptionsContainer">
      <h2 className="mealOptionsHeader">Choose a {mealTime} recipe</h2>
      <ul className="recipeList">
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <li key={recipe._id} className="recipeItem">
              <button className="recipeButton" onClick={() => onSelectRecipe(recipe)}>
                {recipe.title}
              </button>
            </li>
          ))
        ) : (
          <p className="noRecipesMessage">No recipes found for {mealTime}.</p>
        )}
      </ul>
    </div>
  );

  
}

export default MealOptions;