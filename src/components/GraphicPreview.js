import React, { useEffect, useRef } from 'react';
import './GraphicPreview.css';

function GraphicPreview({ formData, league }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const size = 400; // Square canvas
    
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
      
      // Draw content on top
      drawContent(ctx, size);
    };
    background.src = '/assets/black-square.png';

    // Draw content function
    const drawContent = (ctx, size) => {
      // Set text properties
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Draw team name
      if (formData.team) {
        ctx.font = 'bold 24px Arial';
        ctx.fillText(formData.team, size / 2, 80);
      }

      // Draw player name
      if (formData.playerName) {
        ctx.font = 'bold 32px Arial';
        ctx.fillText(formData.playerName, size / 2, 140);
      }

      // Draw player number
      if (formData.playerNumber) {
        ctx.font = 'bold 28px Arial';
        ctx.fillText(`#${formData.playerNumber}`, size / 2, 180);
      }

      // Draw statistics
      const stats = formData.stats;
      const statsY = 250;
      const statsSpacing = 30;

      if (stats.points) {
        ctx.font = '20px Arial';
        ctx.fillText(`Points: ${stats.points}`, size / 2, statsY);
      }
      if (stats.rebounds) {
        ctx.font = '20px Arial';
        ctx.fillText(`Rebounds: ${stats.rebounds}`, size / 2, statsY + statsSpacing);
      }
      if (stats.assists) {
        ctx.font = '20px Arial';
        ctx.fillText(`Assists: ${stats.assists}`, size / 2, statsY + statsSpacing * 2);
      }
      if (stats.steals) {
        ctx.font = '20px Arial';
        ctx.fillText(`Steals: ${stats.steals}`, size / 2, statsY + statsSpacing * 3);
      }
      if (stats.blocks) {
        ctx.font = '20px Arial';
        ctx.fillText(`Blocks: ${stats.blocks}`, size / 2, statsY + statsSpacing * 4);
      }
    };
  }, [formData, league]);

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
