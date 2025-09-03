import React from 'react';
import './LeagueButton.css';

function LeagueButton({ league, onClick }) {
  return (
    <button 
      className={`league-button ${league.toLowerCase()}`}
      onClick={() => onClick(league)}
    >
      <img 
        src={`/assets/${league.toLowerCase()}-shield.png`}
        alt={`${league} Shield`}
        className="shield"
      />
    </button>
  );
}

export default LeagueButton;
