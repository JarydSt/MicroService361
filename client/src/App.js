// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StartCookingPage from './components/StartCookingPage'; // Make sure this component is properly defined

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start-cooking" element={<StartCookingPage />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

