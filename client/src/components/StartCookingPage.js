import React, { useState } from 'react';
import MealOptions from './MealOptions';
import './StartCookingPage.css';
import RecipeDetails from '../components/RecipeDetails'; // Adjust the path as necessary


function StartCookingPage() {
  const [mealTime, setMealTime] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="startCookingPage">
      <h1>What would you like to cook today?</h1>
      {!mealTime && (
        <div className="mealTimeButtons">
          <button onClick={() => setMealTime('breakfast')}>Breakfast</button>
          <button onClick={() => setMealTime('lunch')}>Lunch</button>
          <button onClick={() => setMealTime('dinner')}>Dinner</button>
        </div>
      )}
      {mealTime && !selectedRecipe && (
        <>
        <MealOptions mealTime={mealTime} onSelectRecipe={setSelectedRecipe} />
        <button className="chooseAgainButton" onClick={() => setMealTime('')}>Choose Again</button>
        </>
      )}
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} />
      )}
    </div>
  );
}

export default StartCookingPage;