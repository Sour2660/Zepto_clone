
// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import cors from 'cors';

// // Routes
// import authRoutes from './routes/authRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import paymentRoutes from './routes/paymentRoutes.js';
// import productRoutes from './routes/productRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api', userRoutes);
// app.use('/api/payment', paymentRoutes);
// app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes);

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('✅ MongoDB Connected');
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error('❌ MongoDB connection error:', err.message);
//   });


import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Import Routes
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

// Load .env variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Enable CORS for all origins
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Parse form-urlencoded data

// Route Mounts
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// MongoDB Connection and Server Start
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,    // Optional but common in older setups
  useUnifiedTopology: true, // Optional but common in older setups
})
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });
