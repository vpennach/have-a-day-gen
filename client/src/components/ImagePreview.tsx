interface ImagePreviewProps {
  playerName: string;
  playerNumber: string;
  stats: Array<{ label: string; value: string }>;
  numStats: number;
}

export default function ImagePreview({ playerName, playerNumber, stats, numStats }: ImagePreviewProps) {
  // Create placeholder icons for stats (simple shapes for now)
  const createPlaceholderIcon = (index: number) => (
    <div 
      key={index}
      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold"
    >
      {index + 1}
    </div>
  );

  return (
    <div className="w-full h-full bg-white rounded-lg border-2 border-gray-300 relative overflow-hidden">
      {/* Player Name - Top */}
      <div className="absolute top-4 left-0 right-0 text-center">
        <h2 className="text-2xl font-bold text-blue-800 uppercase tracking-wider">
          {playerName || 'PLAYER NAME'}
        </h2>
      </div>

      {/* Player Number - Center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-8xl font-bold text-blue-800">
          {playerNumber || '0'}
        </div>
      </div>

      {/* Stats - Bottom */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <div className="flex justify-center space-x-8">
          {Array.from({ length: numStats }).map((_, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              {/* Icon */}
              {createPlaceholderIcon(index)}
              {/* Stat Label */}
              <div className="text-sm font-semibold text-blue-800 text-center">
                {stats[index]?.label || `Stat ${index + 1}`}
              </div>
              {/* Stat Value */}
              <div className="text-lg font-bold text-blue-800 text-center">
                {stats[index]?.value || '0'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
