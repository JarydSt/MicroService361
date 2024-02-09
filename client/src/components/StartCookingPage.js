import React, { useState } from 'react'; // Correct import statement
import MealOptions from './MealOptions'; // Ensure this file exists and is exported correctly
import RecipeDetails from './RecipeDetails'; // Ensure this file exists and is exported correctly

function StartCookingPage() {
  const [mealType, setMealType] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div>
      <h1>What would you like to cook today?</h1>
      {!mealType && (
        <div>
          <button onClick={() => setMealType('breakfast')}>Breakfast</button>
          <button onClick={() => setMealType('lunch')}>Lunch</button>
          <button onClick={() => setMealType('dinner')}>Dinner</button>
        </div>
      )}
      {mealType && !selectedRecipe && (
        <MealOptions mealType={mealType} onSelectRecipe={setSelectedRecipe} />
      )}
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} />
      )}
    </div>
  );
}

export default StartCookingPage;