// src/components/RecipeForm.js
import React, { useState } from 'react';
import '../components/RecipeForm.css';

function RecipeForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    ingredients: initialData.ingredients || '',
    instructions: initialData.instructions || '',
    prepTime: initialData.prepTime || '',
    difficulty: initialData.difficulty || '',
    mealTime: initialData.mealTime || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Transform ingredients and instructions back into arrays if stored as strings
    const submissionData = {
      ...formData,
      ingredients: formData.ingredients.split('\n').filter(line => line.trim()),
      instructions: formData.instructions.split('\n').filter(line => line.trim())
    };
    onSubmit(submissionData);
  };

  return (
    <form className="RecipeForm"onSubmit={handleSubmit}>
      <label>
        Title:
        <input name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Ingredients (separate by line):
        <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} />
      </label>
      <label>
        Instructions (separate by line):
        <textarea name="instructions" value={formData.instructions} onChange={handleChange} />
      </label>
      <label>
        Preparation Time (minutes):
        <input type="number" name="prepTime" value={formData.prepTime} onChange={handleChange} />
      </label>
      <label>
        Difficulty:
        <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
          <option value="">Select difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <label>
        Meal Time:
        <select name="mealTime" value={formData.mealTime} onChange={handleChange}>
          <option value="">Select meal time</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </label>
      <button type="submit">Save Recipe</button>
    </form>
  );
}

export default RecipeForm;