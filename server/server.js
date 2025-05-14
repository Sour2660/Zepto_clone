// // backend/server.js
// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import cors from 'cors';

// // ✅ Import route files
// import authRoutes from './routes/authRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import paymentRoutes from './routes/paymentRoutes.js';
// import productRoutes from './routes/productRoutes.js'; 
// import orderRoutes from './routes/orderRoutes.js';


// dotenv.config();

// const app = express();

// // ✅ Middlewares
// app.use(cors());
// app.use(express.json());

// // ✅ API Routes
// app.use('/api/auth', authRoutes);
// app.use('/api', userRoutes);
// //axios.get('/api/users/admin/users?role=vendor')
// app.use('/api/payment', paymentRoutes);
// app.use('/api/products', productRoutes); // ✅ added

// app.use('/api/orders', orderRoutes);

// // ✅ Connect MongoDB and Start Server
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('MongoDB Connected ✅');
//     app.listen(process.env.PORT || 5000, () => {
//       console.log(`Server running on port ${process.env.PORT || 5000} 🚀`);
//     });
//   })
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//   });


import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// ✅ Import routes
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use('/api/auth', authRoutes);
app.use('/api', userRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// ✅ MongoDB and Server Start
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });
