import React, { useState } from 'react'; // Correct import statement
import MealOptions from './MealOptions'; // Ensure this file exists and is exported correctly
import RecipeDetails from './RecipeDetails'; // Ensure this file exists and is exported correctly

function StartCookingPage() {
  const [mealTime, setMealTime] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div>
      <h1>What would you like to cook today?</h1>
      {!mealTime && (
        <div>
          <button onClick={() => setMealTime('breakfast')}>Breakfast</button>
          <button onClick={() => setMealTime('lunch')}>Lunch</button>
          <button onClick={() => setMealTime('dinner')}>Dinner</button>
        </div>
      )}
      {mealTime && !selectedRecipe && (
        <MealOptions mealTime={mealTime} onSelectRecipe={setSelectedRecipe} />
      )}
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} />
      )}
    </div>
  );
}

export default StartCookingPage;