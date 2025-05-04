import { useNavigate } from 'react-router-dom';
import { Sport } from '../data/sportsData';

export default function Home() {
  const navigate = useNavigate();
  const sports: Sport[] = ['MLB', 'NBA', 'NHL', 'NFL'];

  const handleSportSelect = (sport: Sport) => {
    navigate(`/generator/${sport.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Have A Day Generator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => handleSportSelect(sport)}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center"
            >
              <span className="text-2xl font-bold">{sport}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 