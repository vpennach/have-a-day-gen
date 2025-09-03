import React from 'react';
import LeagueButton from '../components/LeagueButton';
import './HomePage.css';

function HomePage() {
  const handleLeagueSelect = (league) => {
    console.log(`Selected league: ${league}`);
    // TODO: Navigate to team selection page
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
