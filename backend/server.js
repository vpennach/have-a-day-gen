const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://username:password@cluster.mongodb.net/have-a-day-gen?retryWrites=true&w=majority';
let db;

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db('have-a-day-gen');
    console.log('Successfully connected to MongoDB Atlas!');
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas:', error);
  }
}

// Test connection endpoint
app.get('/api/test-connection', async (req, res) => {
  try {
    if (!db) {
      return res.status(500).json({ 
        success: false, 
        message: 'Database not connected' 
      });
    }
    
    // Test the connection
    await db.admin().ping();
    res.json({ 
      success: true, 
      message: 'Successfully connected to MongoDB Atlas!' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to connect to MongoDB Atlas',
      error: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Backend server is running!',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
  connectToMongoDB();
});
