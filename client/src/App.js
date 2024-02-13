// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StartCookingPage from './components/StartCookingPage'; // Make sure this component is properly defined
import CreateRecipePage from './components/CreateRecipePage';
import RecipeBookPage from './components/RecipeBookPage';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start-cooking" element={<StartCookingPage />} />
        <Route path="/create-recipe" element={<CreateRecipePage />} />
        <Route path="/recipe-book" element={<RecipeBookPage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}


export default App;

