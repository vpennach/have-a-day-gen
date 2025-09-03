import React from 'react';
import { useNavigate } from 'react-router-dom';
import LeagueButton from '../components/LeagueButton';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleLeagueSelect = (league) => {
    navigate(`/${league.toLowerCase()}`);
  };

  const leagues = ['NBA', 'NHL', 'MLB', 'NFL'];

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Have A Day Graphic Generator</h1>
        <h2>Select which league to create a graphic</h2>
        
        <div className="league-buttons">
          {leagues.map(league => (
            <LeagueButton
              key={league}
              league={league}
              onClick={handleLeagueSelect}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default HomePage;
