# User Progress Dashboard

A React Native fitness tracking app with Node.js backend and MongoDB database. Track your reps, calories burned, and weight progress with beautiful charts and real-time updates.

## Features

- 📊 **Dashboard Overview**: View total reps, calories burned, and average weight
- 📈 **Weight Progress Chart**: Visualize your weight journey over time
- ➕ **Add Progress**: Record new workout sessions
- ✏️ **Edit Progress**: Update or delete existing entries
- 🔄 **Real-time Updates**: Live data synchronization between frontend and backend
- 📱 **Mobile-First Design**: Optimized for mobile devices with smooth animations

## Tech Stack

### Frontend
- React Native with Expo
- React Navigation
- Axios for API calls
- React Native Chart Kit for data visualization
- React Native Linear Gradient for beautiful UI

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled for cross-origin requests

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Expo CLI
- Expo Go app on your mobile device

## Setup Instructions

### 1. Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MongoDB:**
   - **Option A: Local MongoDB**
     - Install MongoDB locally
     - Start MongoDB service
     - The app will connect to `mongodb://localhost:27017/fitness-progress`
   
   - **Option B: MongoDB Atlas**
     - Create a free MongoDB Atlas account
     - Create a new cluster
     - Get your connection string
     - Create a `.env` file in the backend directory:
       ```
       PORT=5000
       MONGODB_URI=your_mongodb_atlas_connection_string
       ```

4. **Start the backend server:**
   ```bash
   npm start
   ```
   
   The server will run on `http://localhost:5000`

### 2. Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure API URL:**
   - Open `screens/DashboardScreen.js`, `screens/AddProgressScreen.js`, and `screens/EditProgressScreen.js`
   - Replace `http://192.168.1.100:5000` with your computer's IP address
   - To find your IP address:
     - **Windows**: Run `ipconfig` in Command Prompt
     - **Mac/Linux**: Run `ifconfig` in Terminal
     - Look for your local IP (usually starts with 192.168.x.x or 10.0.x.x)

4. **Start the Expo development server:**
   ```bash
   npx expo start
   ```

### 3. Running the App

1. **Install Expo Go** on your mobile device from App Store or Google Play Store

2. **Connect to the same WiFi network** as your computer

3. **Scan the QR code** displayed in the terminal with Expo Go

4. **The app will load** and connect to your backend server

## API Endpoints

- `GET /progress` - Fetch all progress records
- `POST /progress` - Add a new progress record
- `PUT /progress/:id` - Update a progress record
- `DELETE /progress/:id` - Delete a progress record
- `GET /health` - Health check endpoint

## Data Structure

```javascript
{
  _id: ObjectId,
  date: Date,
  reps: Number,
  calories: Number,
  weight: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## Troubleshooting

### Connection Issues
- Ensure both devices are on the same WiFi network
- Check that your computer's firewall allows connections on port 5000
- Verify the IP address in the frontend files matches your computer's IP

### MongoDB Issues
- Make sure MongoDB is running locally
- Check your MongoDB Atlas connection string if using cloud database
- Verify network access settings in MongoDB Atlas

### Expo Issues
- Clear Expo cache: `npx expo start --clear`
- Restart the development server
- Try using tunnel mode: `npx expo start --tunnel`

## Project Structure

```
user-progress-dashboard/
├── backend/
│   ├── server.js          # Express server with API routes
│   ├── package.json       # Backend dependencies
│   └── env.example        # Environment variables template
├── frontend/
│   ├── App.js             # Main app component with navigation
│   ├── screens/
│   │   ├── DashboardScreen.js    # Main dashboard with charts
│   │   ├── AddProgressScreen.js  # Add new progress form
│   │   └── EditProgressScreen.js # Edit existing progress
│   └── package.json       # Frontend dependencies
└── README.md              # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on GitHub or contact the development team. 