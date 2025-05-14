// import express from 'express';
// import mongoose from 'mongoose';
// import Product from '../models/Product.js';
// import { protect } from '../middleware/authMiddleware.js';
// import { authorizeRoles } from '../middleware/roleMiddleware.js';

// const router = express.Router();

// // ✅ Public: Get all products
// router.get('/', async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch products', error: err });
//   }
// });

// // ✅ Admin: Get all or filter by vendorId
// router.get('/admin', protect, authorizeRoles('admin'), async (req, res) => {
//   try {
//     const vendorId = req.query.vendorId;
//     let filter = {};
//     if (vendorId && mongoose.Types.ObjectId.isValid(vendorId)) {
//       filter.vendor = new mongoose.Types.ObjectId(vendorId);
//     }
//     const products = await Product.find(filter);
//     res.json({ products });
//   } catch (err) {
//     console.error('❌ Error in /admin products route:', err);
//     res.status(500).json({ message: 'Failed to fetch products', error: err.message });
//   }
// });

// // ✅ Vendor: Get only logged-in vendor's products
// router.get('/vendor', protect, authorizeRoles('vendor'), async (req, res) => {
//   try {
//     const products = await Product.find({ vendor: req.user.id });
//     res.json({ products });
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch vendor products', error: err.message });
//   }
// });

// // ✅ Single product by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// // ✅ Vendor: Add product
// router.post('/', protect, authorizeRoles('vendor'), async (req, res) => {
//   try {
//     const newProduct = new Product({
//       ...req.body,
//       vendor: req.user.id,
//     });
//     const saved = await newProduct.save();
//     res.status(201).json(saved);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to add product', error });
//   }
// });

// // ✅ Vendor: Delete own product
// router.delete('/:id', protect, authorizeRoles('vendor'), async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     if (product.vendor.toString() !== req.user.id) {
//       return res.status(403).json({ message: 'Not authorized to delete this product' });
//     }
//     await product.remove();
//     res.json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error', error });
//   }
// });

// export default router;


import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

// ✅ Public: Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err });
  }
});

// ✅ Admin: Get all or filter by vendorId
router.get('/admin', authenticateToken, authorizeRoles('admin'), async (req, res) => {
  try {
    const vendorId = req.query.vendorId;
    let filter = {};
    if (vendorId && mongoose.Types.ObjectId.isValid(vendorId)) {
      filter.vendor = new mongoose.Types.ObjectId(vendorId);
    }
    const products = await Product.find(filter);
    res.json({ products });
  } catch (err) {
    console.error('❌ Error in /admin products route:', err);
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
});

// ✅ Vendor: Get only logged-in vendor's products
router.get('/vendor', authenticateToken, authorizeRoles('vendor'), async (req, res) => {
  try {
    const products = await Product.find({ vendor: req.user.id });
    res.json({ products });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch vendor products', error: err.message });
  }
});

// ✅ Single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// ✅ Vendor: Add product
// router.post('/', authenticateToken, authorizeRoles('vendor'), async (req, res) => {
//   try {
//     const newProduct = new Product({
//       ...req.body,
//       vendor: req.user.id,
//     });
//     const saved = await newProduct.save();
//     res.status(201).json(saved);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to add product', error });
//   }
// });
// ✅ POST /api/products
router.post('/', authenticateToken, authorizeRoles('vendor'), async (req, res) => {
  try {
    console.log("📥 Received Product Data:", req.body);
    console.log("👤 Vendor from token:", req.user.id);

    const { name, price, category, image } = req.body;

    if (!name || !price || !category || !image) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newProduct = new Product({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
      weight: req.body.weight,
      discount: req.body.discount,
      category: req.body.category,
      vendor: req.user._id  // ✅ must match Product schema
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('❌ Product Save Error:', error.message);  // ✅ this is the real clue
    res.status(500).json({ message: 'Failed to add product', error: error.message });
  }
});


// ✅ Vendor: Delete own product
router.delete('/:id', authenticateToken, authorizeRoles('vendor'), async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (product.vendor.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this product' });
    }

    await product.remove();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

export default router;
