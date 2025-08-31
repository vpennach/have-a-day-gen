import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sport, teams, stats } from '../data/sportsData';
import ImagePreview from '../components/ImagePreview';

export default function Generator() {
  const { sport } = useParams<{ sport: string }>();
  const navigate = useNavigate();
  const currentSport = sport?.toUpperCase() as Sport;

  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [numStats, setNumStats] = useState<number>(3);
  const [playerStats, setPlayerStats] = useState<{
    name: string;
    number: string;
    stats: { label: string; value: string }[];
  }>({
    name: '',
    number: '',
    stats: Array(4).fill({ label: '', value: '' }),
  });

  if (!currentSport || !teams[currentSport]) {
    return <div>Invalid sport selected</div>;
  }

  const handleStatChange = (index: number, field: 'label' | 'value', value: string) => {
    const newStats = [...playerStats.stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setPlayerStats({ ...playerStats, stats: newStats });
  };

  const handleDownload = async () => {
    console.log('Player Stats:', {
      sport: currentSport,
      team: selectedTeam,
      player: playerStats.name,
      number: playerStats.number,
      stats: playerStats.stats.slice(0, numStats)
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:text-blue-800 mb-4"
        >
          ← Back to Sports
        </button>
        <h1 className="text-2xl font-bold">Have A Day Generator - {currentSport}</h1>
      </div>

      {/* Main Content - Two Columns */}
      <div style={{
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '32px',
        width: '100%'
      }}>
        
        {/* LEFT SIDE - Form */}
        <div style={{
          width: '100%', 
          minHeight: '500px',
          padding: '16px'
        }}>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Player Details</h2>
            
            {/* Team Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Team</label>
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select a team</option>
                {teams[currentSport].map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Player Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Player Name</label>
              <input
                type="text"
                value={playerStats.name}
                onChange={(e) => setPlayerStats({ ...playerStats, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter player name"
              />
            </div>

            {/* Jersey Number */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Jersey Number</label>
              <input
                type="text"
                value={playerStats.number}
                onChange={(e) => setPlayerStats({ ...playerStats, number: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter jersey number"
              />
            </div>

            {/* Number of Stats */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Stats</label>
              <select
                value={numStats}
                onChange={(e) => setNumStats(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Stat' : 'Stats'}
                  </option>
                ))}
              </select>
            </div>

            {/* Stats Input */}
            <div className="mb-6">
              <h3 className="text-md font-medium mb-3">Stats</h3>
              {Array.from({ length: numStats }).map((_, index) => (
                <div key={index} className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Stat Type</label>
                    <select
                      value={playerStats.stats[index]?.label || ''}
                      onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    >
                      <option value="">Select stat</option>
                      {stats[currentSport].map((stat) => (
                        <option key={stat.id} value={stat.label}>
                          {stat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Value</label>
                    <input
                      type="text"
                      value={playerStats.stats[index]?.value || ''}
                      onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md text-sm"
                      placeholder="Value"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Generate Button */}
            <button
              onClick={handleDownload}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Generate & Download
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Preview */}
        <div style={{
          width: '100%', 
          minHeight: '500px',
          padding: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Preview</h2>
            
            {/* Preview Box */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-red-200 border-4 border-gray-400 rounded-lg overflow-hidden">
                <ImagePreview
                  playerName={playerStats.name}
                  playerNumber={playerStats.number}
                  stats={playerStats.stats}
                  numStats={numStats}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
} 