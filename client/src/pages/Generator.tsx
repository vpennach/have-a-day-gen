import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sport, teams, stats, Team, StatOption } from '../data/sportsData';

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
    // TODO: Implement image generation and download
    console.log('Download functionality to be implemented');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Have A Day Generator - {currentSport}</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-800"
          >
            ← Back to Sports
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Player Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Team</label>
                <select
                  value={selectedTeam}
                  onChange={(e) => setSelectedTeam(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select a team</option>
                  {teams[currentSport].map((team) => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Player Name</label>
                <input
                  type="text"
                  value={playerStats.name}
                  onChange={(e) => setPlayerStats({ ...playerStats, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Jersey Number</label>
                <input
                  type="text"
                  value={playerStats.number}
                  onChange={(e) => setPlayerStats({ ...playerStats, number: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Number of Stats</label>
                <select
                  value={numStats}
                  onChange={(e) => setNumStats(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Stat' : 'Stats'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Stats</h3>
                {Array.from({ length: numStats }).map((_, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Stat Type</label>
                      <select
                        value={playerStats.stats[index]?.label || ''}
                        onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Select a stat</option>
                        {stats[currentSport].map((stat) => (
                          <option key={stat.id} value={stat.label}>
                            {stat.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Value</label>
                      <input
                        type="text"
                        value={playerStats.stats[index]?.value || ''}
                        onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleDownload}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Generate & Download
              </button>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <div className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Preview will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 