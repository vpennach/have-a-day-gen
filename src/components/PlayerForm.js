import React, { useState } from 'react';
import { leagueData } from '../data/leagueData';
import './PlayerForm.css';

function PlayerForm({ league, onFormChange }) {
  const [formData, setFormData] = useState({
    team: '',
    playerName: '',
    playerNumber: '',
    statCount: 1,
    stats: []
  });

  const handleInputChange = (field, value) => {
    const newFormData = { ...formData };
    
    if (field === 'statCount') {
      const count = parseInt(value);
      newFormData.statCount = count;
      // Adjust stats array to match new count
      newFormData.stats = newFormData.stats.slice(0, count);
      // Fill with empty objects if needed
      while (newFormData.stats.length < count) {
        newFormData.stats.push({ type: '', value: '' });
      }
    } else if (field.startsWith('stat.')) {
      const [_, index, subField] = field.split('.');
      const statIndex = parseInt(index);
      newFormData.stats[statIndex] = { ...newFormData.stats[statIndex], [subField]: value };
    } else {
      newFormData[field] = value;
    }
    
    setFormData(newFormData);
    onFormChange(newFormData);
  };

  const teams = leagueData[league]?.teams || [];
  const statistics = leagueData[league]?.statistics || [];

  return (
    <div className="player-form">
      <h2>Player Information</h2>
      
      <div className="form-group">
        <label htmlFor="team">Team:</label>
        <select
          id="team"
          value={formData.team}
          onChange={(e) => handleInputChange('team', e.target.value)}
        >
          <option value="">Select a team</option>
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
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
        
        <div className="form-group stat-count-group">
          <label>How many stats?</label>
          <div className="stat-count-options">
            {[1, 2, 3, 4].map((num) => (
              <label key={num} className="stat-count-option">
                <input
                  type="radio"
                  name="statCount"
                  value={num}
                  checked={formData.statCount === num}
                  onChange={(e) => handleInputChange('statCount', parseInt(e.target.value))}
                />
                <span>{num}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="stat-fields-container">
          {formData.stats.map((stat, index) => (
            <div key={index} className="stat-field">
              <div className="form-group">
                <label htmlFor={`stat-type-${index}`}>Stat {index + 1}:</label>
                <select
                  id={`stat-type-${index}`}
                  value={stat.type}
                  onChange={(e) => handleInputChange(`stat.${index}.type`, e.target.value)}
                >
                  <option value="">Select a stat</option>
                  {statistics.map((statOption) => (
                    <option key={statOption.id} value={statOption.id}>
                      {statOption.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor={`stat-value-${index}`}>Value:</label>
                <input
                  type="number"
                  id={`stat-value-${index}`}
                  value={stat.value}
                  onChange={(e) => handleInputChange(`stat.${index}.value`, e.target.value)}
                  placeholder="0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayerForm;
