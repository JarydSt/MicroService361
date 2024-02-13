// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  let navigate = useNavigate();

  const handleStartCooking = () => {
    navigate('/start-cooking');
  };

  return (
    <div className="homePage">
      <button onClick={handleStartCooking}>Start Cooking</button>
      <button onClick={() => navigate('/recipe-book')}>Recipe Book</button>
      <button onClick={() => navigate('/create-recipe')}>Create Recipe</button>
    </div>
  );
}

export default HomePage;