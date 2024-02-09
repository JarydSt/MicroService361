// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  let navigate = useNavigate();

  const handleStartCooking = () => {
    navigate('/start-cooking');
  };

  return (
    <div className="homePage">
      <button onClick={handleStartCooking}>Start Cooking</button>
      <button onClick={() => navigate('/favorites')}>Favorites</button>
      <button onClick={() => navigate('/create-recipe')}>Create Recipe</button>
    </div>
  );
}

export default HomePage;