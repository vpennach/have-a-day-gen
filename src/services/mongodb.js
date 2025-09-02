// API service for communicating with the backend
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

// Helper function to test the connection through the backend API
export const testConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/test-connection`);
    const data = await response.json();
    
    if (data.success) {
      console.log('Successfully connected to MongoDB Atlas via backend!');
      return true;
    } else {
      console.error('Failed to connect to MongoDB Atlas:', data.message);
      return false;
    }
  } catch (error) {
    console.error('Failed to connect to backend API:', error);
    return false;
  }
};

// Helper function to check if backend is running
export const checkBackendHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Backend server is not running:', error);
    return false;
  }
};
