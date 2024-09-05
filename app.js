require('dotenv').config();  // Load environment variables
const express = require('express');
const connectToDatabase = require('./config/database'); 
const app = express();
app.use(express.json());  // Middleware to parse JSON bodies

// Connect to MongoDB
connectToDatabase();
// Use routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);
const createRoute = require('./routes/experience');
app.use('/create',createRoute);
const getRoutes = require('./routes/getData');
app.use('/get',getRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
