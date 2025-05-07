// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   phone: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now }
// });


// export default mongoose.models.User || mongoose.model('User', userSchema);




// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   phone: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: {
//     type: String,
//     enum: ['user', 'vendor', 'admin'],
//     default: 'user'
//   },
//   createdAt: { type: Date, default: Date.now },
//   orders: [
//     {
//       productId: mongoose.Schema.Types.ObjectId,
//       quantity: Number,
//       date: { type: Date, default: Date.now }
//     }
//   ],
//   address: {
//     type: String,
//     default: ''
//   }
// });

// export default mongoose.models.User || mongoose.model('User', userSchema);

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['user', 'vendor', 'admin'], // User can have a role of user, vendor, or admin
    default: 'user',
  },
  orders: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Link to a product model
      quantity: { type: Number, required: true },
      date: { type: Date, default: Date.now },
    }
  ],
  address: {
    type: String,
    default: '', // Default empty address
  },
  createdAt: { type: Date, default: Date.now }, // Record creation date
});

// Make sure that if the model already exists in the database, it won't be redefined
export default mongoose.models.User || mongoose.model('User', userSchema);
