// // backend/routes/productRoutes.js
// import express from 'express';
// import Product from '../models/Product.js';

// const router = express.Router();

// // ✅ GET all products
// router.get('/', async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch products', error: err });
//   }
// });

// // ✅ GET product by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     const saved = await product.save();
//     res.status(201).json(saved);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to add product', error });
//   }
// });

// export default router;



import express from 'express';
import Product from '../models/Product.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

// ✅ GET all products (public)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err });
  }
});

// ✅ GET product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// ✅ Admin: Get all products or filter by vendor ID
router.get('/admin', protect, authorizeRoles('admin'), async (req, res) => {
  try {
    const vendorId = req.query.vendorId;
    const filter = vendorId ? { vendor: vendorId } : {};
    const products = await Product.find(filter);
    res.json({ products });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err });
  }
});

// ✅ Vendor: Add new product
router.post('/', protect, authorizeRoles('vendor'), async (req, res) => {
  try {
    const newProduct = new Product({
      ...req.body,
      vendor: req.user.id, // Attach logged-in vendor
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add product', error });
  }
});

// ✅ Vendor: Delete own product
router.delete('/:id', protect, authorizeRoles('vendor'), async (req, res) => {
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
