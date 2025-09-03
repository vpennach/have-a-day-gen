import React from 'react';
import { Link } from 'react-router-dom';
import './LeaguePage.css';

function MLBPage() {
  return (
    <div className="league-page">
      <header className="league-header">
        <div className="league-title">
          <img 
            src="/assets/mlb-shield.png" 
            alt="MLB Shield" 
            className="league-shield"
          />
          <h1>MLB Have A Day Gen</h1>
        </div>
        <Link to="/" className="back-button">
          ← Back to Leagues
        </Link>
      </header>
      
      <main className="league-content">
        <p>MLB team selection and graphic generation will go here.</p>
      </main>
    </div>
  );
}

export default MLBPage;
