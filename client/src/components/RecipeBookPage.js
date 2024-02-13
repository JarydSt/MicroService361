// src/pages/RecipeBookPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RecipeBookPage() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  const handleRecipeClick = (recipeId) => {
    // Navigate to the RecipeDetails page with the recipeId
    navigate(`/recipe/${recipeId}`);
  };

  useEffect(() => {
    // Function to fetch recipes
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('/api/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        // Handle error (e.g., show error message)
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipe Book</h1>
      {recipes.map((recipe) => (
        <button key={recipe._id} onClick={() => handleRecipeClick(recipe._id)}>
          {recipe.title}
        </button>
      ))}
    </div>
  );
}

export default RecipeBookPage;