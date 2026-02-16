import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/database.js';

// Load environment variables
dotenv.config();

// Import routes
import userRoutes from './routes/userRoutes.js';
// import propertyRoutes from './routes/propertyRoutes.js';
// import contactRoutes from './routes/contactRoutes.js';

// Initialize app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/users', userRoutes);
// app.use('/api/properties', propertyRoutes);
// app.use('/api/contacts', contactRoutes);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});