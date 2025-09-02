import React, { useState, useEffect } from 'react';
import './App.css';
import { testConnection, checkBackendHealth } from './services/mongodb';

function App() {
  const [connectionStatus, setConnectionStatus] = useState('Testing connection...');
  const [isConnected, setIsConnected] = useState(false);
  const [backendStatus, setBackendStatus] = useState('Checking backend...');

  useEffect(() => {
    const checkConnections = async () => {
      // First check if backend is running
      const backendRunning = await checkBackendHealth();
      setBackendStatus(backendRunning ? 'Backend server is running!' : 'Backend server is not running');
      
      if (backendRunning) {
        // Then check MongoDB connection through backend
        const connected = await testConnection();
        setIsConnected(connected);
        setConnectionStatus(connected ? 'Connected to MongoDB Atlas!' : 'Failed to connect to MongoDB Atlas');
      } else {
        setIsConnected(false);
        setConnectionStatus('Backend server is not running');
      }
    };

    checkConnections();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Have A Day Generator</h1>
        <div style={{ 
          padding: '20px', 
          backgroundColor: backendStatus.includes('running') ? '#4CAF50' : '#f44336', 
          color: 'white', 
          borderRadius: '8px',
          margin: '20px 0'
        }}>
          <h3>Backend Status</h3>
          <p>{backendStatus}</p>
        </div>
        
        <div style={{ 
          padding: '20px', 
          backgroundColor: isConnected ? '#4CAF50' : '#f44336', 
          color: 'white', 
          borderRadius: '8px',
          margin: '20px 0'
        }}>
          <h3>Database Status</h3>
          <p>{connectionStatus}</p>
        </div>
        <p>
          Welcome to the Have A Day Generator! This app will help you create inspirational sports graphics.
        </p>
        <p>
          <strong>Next Steps:</strong>
        </p>
        <ul style={{ textAlign: 'left', maxWidth: '600px' }}>
          <li>Start the backend server: <code>cd backend && npm start</code></li>
          <li>Set up your MongoDB Atlas connection string in backend/.env</li>
          <li>Create team data collections</li>
          <li>Build the team selection interface</li>
          <li>Implement the graphic generator</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
