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

    // Load custom font
    const font = new FontFace('EaglesFont', 'url(/assets/philadelphia-eagles-font.ttf)');
    
    font.load().then(() => {
      document.fonts.add(font);
      
      // Load and draw background
      const background = new Image();
      background.onload = () => {
        // Draw background
        ctx.drawImage(background, 0, 0, size, size);
        
        // Draw player name and number if available
        if (formData.playerName || formData.playerNumber) {
          ctx.fillStyle = '#FFFFFF';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          // Draw player name (centered, upper portion) - much larger and with letter spacing
          if (formData.playerName) {
            const fontSize = formData.nameFontSize || 88;
            ctx.font = `bold ${fontSize}px EaglesFont`;
            ctx.letterSpacing = '5px';
            // Draw black stroke first with rounded line caps to prevent spikes
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeText(formData.playerName.toUpperCase(), size / 2 + 6, size * 0.2);
            // Then draw white fill
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(formData.playerName.toUpperCase(), size / 2 + 6, size * 0.2);
          }
          
          // Draw player number (centered, lower portion) - twice as large
          if (formData.playerNumber) {
            ctx.font = 'bold 224px EaglesFont';
            // Draw black stroke first with rounded line caps to prevent spikes
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 12;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeText(formData.playerNumber, size / 2 + 8, size * 0.5);
            // Then draw white fill
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(formData.playerNumber, size / 2 + 8, size * 0.5);
          }
        }
      };
      background.src = '/assets/template-jersey-size.svg';
    }).catch(err => {
      console.error('Font loading failed:', err);
      // Fallback to system font if custom font fails
      const background = new Image();
      background.onload = () => {
        ctx.drawImage(background, 0, 0, size, size);
        
        if (formData.playerName || formData.playerNumber) {
          ctx.fillStyle = '#FFFFFF';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          if (formData.playerName) {
            const fontSize = formData.nameFontSize || 88;
            ctx.font = `bold ${fontSize}px Arial`;
            ctx.letterSpacing = '5px';
            // Draw black stroke first with rounded line caps to prevent spikes
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeText(formData.playerName.toUpperCase(), size / 2 + 6, size * 0.2);
            // Then draw white fill
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(formData.playerName.toUpperCase(), size / 2 + 6, size * 0.2);
          }
          
          if (formData.playerNumber) {
            ctx.font = 'bold 224px Arial';
            // Draw black stroke first with rounded line caps to prevent spikes
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 12;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeText(formData.playerNumber, size / 2 + 8, size * 0.5);
            // Then draw white fill
            ctx.fillStyle = '#FFFFFF';
            ctx.fillText(formData.playerNumber, size / 2 + 8, size * 0.5);
          }
        }
      };
      background.src = '/assets/template-jersey-size.svg';
    });
  }, [formData]);

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
