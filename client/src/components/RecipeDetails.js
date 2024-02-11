import React, { useState } from 'react';

function RecipeDetails({ recipe }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (ingredient) => {
    setCheckedItems(prev => ({ ...prev, [ingredient]: !prev[ingredient] }));
  };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <h3>Ingredients</h3>
      {recipe.ingredients.map(ingredient => (
        <div key={ingredient}>
          <input
            type="checkbox"
            id={ingredient}
            name={ingredient}
            checked={!!checkedItems[ingredient]}
            onChange={() => handleCheck(ingredient)}
          />
          <label htmlFor={ingredient}>{ingredient}</label>
        </div>
      ))}
      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((step, index) =>
          <li key={index}>{step}</li>
        )}
      </ol>
      {/* Add more structure to the instructions as needed */}
    </div>
  );
}

export default RecipeDetails;