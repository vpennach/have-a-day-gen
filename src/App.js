import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NBAPage from './pages/NBAPage';
import NHLPage from './pages/NHLPage';
import MLBPage from './pages/MLBPage';
import NFLPage from './pages/NFLPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nba" element={<NBAPage />} />
          <Route path="/nhl" element={<NHLPage />} />
          <Route path="/mlb" element={<MLBPage />} />
          <Route path="/nfl" element={<NFLPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
