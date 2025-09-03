import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PlayerForm from '../components/PlayerForm';
import GraphicPreview from '../components/GraphicPreview';
import './LeaguePage.css';

function NHLPage() {
  const [formData, setFormData] = useState({});

  const handleFormChange = (data) => {
    setFormData(data);
  };

  return (
    <div className="league-page">
      <header className="league-header">
        <div className="league-title">
          <img 
            src="/assets/nhl-shield.png" 
            alt="NHL Shield" 
            className="league-shield"
          />
          <h1>NHL Have A Day Gen</h1>
        </div>
        <Link to="/" className="back-button">
          ← Back to Leagues
        </Link>
      </header>
      
      <main className="league-content">
        <div className="content-panels">
          <div className="left-panel">
            <PlayerForm league="NHL" onFormChange={handleFormChange} />
          </div>
          <div className="right-panel">
            <GraphicPreview formData={formData} league="NHL" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default NHLPage;
