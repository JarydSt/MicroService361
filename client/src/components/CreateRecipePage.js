// src/pages/CreateRecipePage.js
import React, { useState } from 'react';
import RecipeForm from '../components/RecipeForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../components/CreateRecipePage.css';


function CreateRecipePage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [showConfirmation, setShowConfirmation] = useState(false); // State for showing confirmation message

  const createRecipe = async (recipeData) => {
    try {
      const response = await axios.post('/api/recipes', recipeData);
      console.log(response.data);
      setShowConfirmation(true); // Show confirmation message
      setTimeout(() => {
        navigate('/'); // Redirect to the main menu after a delay
      }, 2000); // Adjust delay as needed
    } catch (error) {
      console.error('Error creating recipe:', error.response.data);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <h1>Create Recipe</h1>
      <RecipeForm onSubmit={createRecipe} />
      {showConfirmation && (
        <div className="overlay">
          <div className="messageBox">
            <p>Recipe created successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateRecipePage;