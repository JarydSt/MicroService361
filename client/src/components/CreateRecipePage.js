// src/pages/CreateRecipePage.js
import React from 'react';
import RecipeForm from '../components/RecipeForm';
import axios from 'axios';

function CreateRecipePage() {
  const createRecipe = async (recipeData) => {
    try {
      const response = await axios.post('/api/recipes', recipeData);
      console.log(response.data);
      // Handle success (e.g., redirect to recipe list or show success message)
    } catch (error) {
      console.error('Error creating recipe:', error.response.data);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <h1>Create Recipe</h1>
      <RecipeForm onSubmit={createRecipe} />
    </div>
  );
}

export default CreateRecipePage;