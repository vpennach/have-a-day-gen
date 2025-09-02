# Setup Instructions

## Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create environment file:**
   Create a `.env` file in the `backend/` directory with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/have-a-day-gen?retryWrites=true&w=majority
   PORT=5000
   ```

3. **Start the backend server:**
   ```bash
   npm start
   ```

## MongoDB Atlas Setup

1. **Create a MongoDB Atlas account** at https://www.mongodb.com/atlas
2. **Create a new cluster** (free tier is fine)
3. **Create a database user** with read/write permissions
4. **Whitelist your IP address** (or use 0.0.0.0/0 for development)
5. **Get your connection string** from the "Connect" button

## Frontend Setup

1. **Navigate to root directory:**
   ```bash
   cd ..
   ```

2. **Start the React app:**
   ```bash
   npm start
   ```

3. **Open http://localhost:3000** in your browser

## How It Works

- **Backend (Port 5000):** Express.js server that connects to MongoDB Atlas
- **Frontend (Port 3000):** React app that communicates with the backend via API calls
- **Database:** MongoDB Atlas stores all your team data and assets

The app will show the status of both the backend server and MongoDB connection on the main page.