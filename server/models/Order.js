


// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   orderId: { type: String },
//   paymentId: { type: String },
//   status: { type: String, default: 'Pending' },
//   amount: { type: Number, required: true },
//   items: [
//     {
//       productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//       name: { type: String },      
//       price: { type: Number },     
//       quantity: { type: Number, required: true },
//     }
//   ],
//   createdAt: { type: Date, default: Date.now }
// });

// export default mongoose.model('Order', orderSchema);


// models/Order.js
// import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   orderId: String,
//   paymentId: String,
//   status: { type: String, default: 'Pending' },
//   amount: { type: Number, required: true },
//   items: [
//     {
//       productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//       name: String,
//       price: Number,
//       quantity: Number,
//     }
//   ],
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model('Order', orderSchema);


import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product ID is required'],
  },
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Product quantity is required'],
    min: [1, 'Quantity must be at least 1'],
  },
});

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User ID is required'],
  },
  orderId: { type: String },
  paymentId: { type: String },
  status: {
    type: String,
    enum: ['Pending', 'Paid', 'Cancelled'],
    default: 'Pending',
  },
  amount: {
    type: Number,
    required: [true, 'Order amount is required'],
    min: [0, 'Amount must be non-negative'],
  },
  items: [orderItemSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Order', orderSchema);
