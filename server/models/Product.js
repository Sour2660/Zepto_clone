// backend/models/Product.js
// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   image: { type: String, required: true },     // corresponds to product.image
//   price: { type: Number, required: true },
//   description: { type: String },
//   weight: { type: String },
//   discount: { type: String },
//   category: { type: String, required: true },
// }, { timestamps: true });

// const Product = mongoose.model('Product', productSchema);
// export default Product;


import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  weight: { type: String },
  discount: { type: String },
  category: { type: String, required: true },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true, // Ensures only vendors can add
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
