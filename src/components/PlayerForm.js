import React, { useState } from 'react';
import './PlayerForm.css';

function PlayerForm({ onFormChange }) {
  const [formData, setFormData] = useState({
    team: '',
    playerName: '',
    playerNumber: '',
    stats: {
      points: '',
      rebounds: '',
      assists: '',
      steals: '',
      blocks: ''
    }
  });

  const handleInputChange = (field, value) => {
    const newFormData = { ...formData };
    
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      newFormData[parent] = { ...newFormData[parent], [child]: value };
    } else {
      newFormData[field] = value;
    }
    
    setFormData(newFormData);
    onFormChange(newFormData);
  };

  return (
    <div className="player-form">
      <h2>Player Information</h2>
      
      <div className="form-group">
        <label htmlFor="team">Team:</label>
        <input
          type="text"
          id="team"
          value={formData.team}
          onChange={(e) => handleInputChange('team', e.target.value)}
          placeholder="Enter team name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="playerName">Player Name:</label>
        <input
          type="text"
          id="playerName"
          value={formData.playerName}
          onChange={(e) => handleInputChange('playerName', e.target.value)}
          placeholder="Enter player name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="playerNumber">Player Number:</label>
        <input
          type="text"
          id="playerNumber"
          value={formData.playerNumber}
          onChange={(e) => handleInputChange('playerNumber', e.target.value)}
          placeholder="Enter jersey number"
        />
      </div>

      <div className="stats-section">
        <h3>Statistics</h3>
        
        <div className="form-group">
          <label htmlFor="points">Points:</label>
          <input
            type="number"
            id="points"
            value={formData.stats.points}
            onChange={(e) => handleInputChange('stats.points', e.target.value)}
            placeholder="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rebounds">Rebounds:</label>
          <input
            type="number"
            id="rebounds"
            value={formData.stats.rebounds}
            onChange={(e) => handleInputChange('stats.rebounds', e.target.value)}
            placeholder="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="assists">Assists:</label>
          <input
            type="number"
            id="assists"
            value={formData.stats.assists}
            onChange={(e) => handleInputChange('stats.assists', e.target.value)}
            placeholder="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="steals">Steals:</label>
          <input
            type="number"
            id="steals"
            value={formData.stats.steals}
            onChange={(e) => handleInputChange('stats.steals', e.target.value)}
            placeholder="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="blocks">Blocks:</label>
          <input
            type="number"
            id="blocks"
            value={formData.stats.blocks}
            onChange={(e) => handleInputChange('stats.blocks', e.target.value)}
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
}

export default PlayerForm;
