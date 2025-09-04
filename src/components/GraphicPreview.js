import React, { useEffect, useRef } from 'react';
import { formatStatDisplay, getTeamById } from '../data/leagueData';
import './GraphicPreview.css';

function GraphicPreview({ formData, league }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const size = 550; // Square canvas - made larger
    
    // Set canvas size
    canvas.width = size;
    canvas.height = size;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Load and draw background
    const background = new Image();
    background.onload = () => {
      // Draw background (black square for now)
      ctx.drawImage(background, 0, 0, size, size);
    };
    background.src = '/assets/template-jersey-size.svg';
  }, []);

  return (
    <div className="graphic-preview">
      <h2>Graphic Preview</h2>
      <div className="preview-container">
        <canvas
          ref={canvasRef}
          className="preview-canvas"
        />
      </div>
      <button className="export-button">
        Export Graphic
      </button>
    </div>
  );
}

export default GraphicPreview;
