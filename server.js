import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;

const app = express();
// Middleware to parse JSON
app.use(express.json());
// Routes
app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;

if (!mongoURI) {
  console.error('MONGO_URI is not defined in environment variables!');
  process.exit(1);
}

// MongoDB connection
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Options are no longer required
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// Call the function to connect to the database
main();

// Or adding the full structure with error handling:
app.listen(PORT, () => {
  console.log(`Application URL: http://localhost:${PORT}`);
}).on('error', (err) => {
  console.error('Server loading error:', err);
  process.exit(1); // Exit with code "1" for errors for any issue
});