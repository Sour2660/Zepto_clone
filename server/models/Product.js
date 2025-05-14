

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  weight: { type: String },
  discount: { type: String },
  category: { type: String, required: true },
  vendor: { // ✅ renamed to vendorId to match backend & frontend usage
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
