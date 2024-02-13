import React, { useState } from 'react';
import './RecipeDetails.css';

function RecipeDetails({ recipe }) {
  const [displayedSteps, setDisplayedSteps] = useState([recipe.instructions[0]]);
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (ingredient) => {
    setCheckedItems(prev => ({ ...prev, [ingredient]: !prev[ingredient] }));
  };

  const handleNextStep = () => {
    if (displayedSteps.length < recipe.instructions.length) {
      setDisplayedSteps([...displayedSteps, recipe.instructions[displayedSteps.length]]);
    }
  };

  return (
    <div className="recipe-container">
      <h2 className="recipe-title">{recipe.title}</h2>
  
      <div className="recipe-ingredients">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={`ingredient-${index}`}
                name={ingredient}
                checked={!!checkedItems[ingredient]}
                onChange={() => handleCheck(ingredient)}
              />
              <label htmlFor={`ingredient-${index}`}>{ingredient}</label>
            </li>
          ))}
        </ul>
      </div>
  
      <div className="recipe-instructions">
        <h3>Instructions</h3>
        <ol>
          {displayedSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
        <button onClick={handleNextStep} disabled={displayedSteps.length === recipe.instructions.length}>
          Next
        </button>
      </div>
    </div>
  );
}

export default RecipeDetails;

