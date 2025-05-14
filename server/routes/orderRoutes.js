
// // ✅ /routes/orders.js
// import express from 'express';
// import mongoose from 'mongoose';
// import Order from '../models/Order.js';
// import Product from '../models/Product.js';
// import { authenticateToken } from '../middleware/authMiddleware.js';

// const router = express.Router();

// // ✅ Save Order
// router.post('/save', authenticateToken, async (req, res) => {
//   try {
//     const { items, orderId, paymentId, amount } = req.body;

//     const enrichedItems = await Promise.all(
//       items.map(async (item) => {
//         const product = await Product.findById(item.productId);
//         if (!product) throw new Error(`Product not found: ${item.productId}`);
//         return {
//           productId: product._id,
//           quantity: item.quantity,
//           name: product.name,
//           price: product.price,
//         };
//       })
//     );

//     const newOrder = await Order.create({
//       userId: req.user._id,
//       orderId,
//       paymentId,
//       status: 'Paid',
//       amount,
//       items: enrichedItems,
//     });

//     res.status(201).json({ message: '✅ Order saved', order: newOrder });
//   } catch (err) {
//     console.error('❌ Order Save Error:', err);
//     res.status(500).json({ message: 'Failed to save order', error: err.message });
//   }
// });

// // ✅ Get All Orders for Admin (MUST be above :userId route)
// router.get('/all', authenticateToken, async (req, res) => {
//   try {
//     if (req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Access denied' });
//     }

//     const orders = await Order.find({})
//       .sort({ createdAt: -1 })
//       .populate({ path: 'userId', select: 'name email' })
//       .populate({ path: 'items.productId', select: 'name price', strictPopulate: false });

//     const validOrders = orders.filter(order => {
//       if (!order.userId || !Array.isArray(order.items)) {
//         console.warn('⚠️ Skipping invalid order:', order._id);
//         return false;
//       }
//       return true;
//     });

//     console.log(`📦 Total valid orders returned: ${validOrders.length}`);
//     res.json(validOrders);
//   } catch (err) {
//     console.error('❌ Admin All Orders Fetch Error:', err);
//     res.status(500).json({ message: 'Failed to fetch all orders', error: err.message });
//   }
// });

// // ✅ Get Vendor Orders (MUST be before :userId route)
// router.get('/vendor', authenticateToken, async (req, res) => {
//   try {
//     console.log("🔐 Vendor route accessed by:", req.user);

//     if (req.user.role !== 'vendor') {
//       console.log("❌ Access denied due to role mismatch:", req.user?.role);
//       return res.status(403).json({ message: 'Access denied' });
//     }

//     const vendorProducts = await Product.find({ vendor: req.user._id });
//     const vendorProductIds = vendorProducts.map(p => new mongoose.Types.ObjectId(p._id));

//     const orders = await Order.find({
//       'items.productId': { $in: vendorProductIds },
//     }).populate('items.productId', 'name price');

//     console.log('📦 Vendor Orders Fetched:', orders.length);
//     res.json({ orders });
//   } catch (err) {
//     console.error('❌ Vendor Order Fetch Error:', err.message);
//     res.status(500).json({ message: 'Failed to fetch vendor orders', error: err.message });
//   }
// });

// // ✅ Get Orders for User or Admin (MUST be below specific routes)
// router.get('/:userId', authenticateToken, async (req, res) => {
//   try {
//     const userId = req.params.userId;

//     if (req.user._id.toString() !== userId && req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Access denied' });
//     }

//     const orders = await Order.find({ userId }).sort({ createdAt: -1 });
//     res.json(orders);
//   } catch (err) {
//     console.error('❌ User Order Fetch Error:', err);
//     res.status(500).json({ message: 'Failed to fetch user orders', error: err.message });
//   }
// });

// // 🔧 Cleanup Broken Orders
// router.delete('/cleanup-broken-orders', async (req, res) => {
//   try {
//     const result = await Order.deleteMany({
//       $or: [
//         { userId: { $exists: false } },
//         { items: { $exists: false } },
//         { items: { $size: 0 } },
//       ],
//     });

//     res.json({ message: '🧹 Broken orders cleaned up', deletedCount: result.deletedCount });
//   } catch (err) {
//     console.error('❌ Cleanup Error:', err);
//     res.status(500).json({ message: 'Failed to clean orders', error: err.message });
//   }
// });

// export default router;


// ✅ /routes/orders.js
import express from 'express';
import mongoose from 'mongoose';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// ✅ Save Order
router.post('/save', authenticateToken, async (req, res) => {
  try {
    const { items, orderId, paymentId, amount } = req.body;

    const enrichedItems = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findById(item.productId);
        if (!product) throw new Error(`Product not found: ${item.productId}`);
        return {
          productId: product._id,
          quantity: item.quantity,
          name: product.name,
          price: product.price,
        };
      })
    );

    const newOrder = await Order.create({
      userId: req.user._id,
      orderId,
      paymentId,
      status: 'Paid',
      amount,
      items: enrichedItems,
    });

    res.status(201).json({ message: '✅ Order saved', order: newOrder });
  } catch (err) {
    console.error('❌ Order Save Error:', err);
    res.status(500).json({ message: 'Failed to save order', error: err.message });
  }
});

// ✅ Get All Orders for Admin (MUST be above :userId route)
router.get('/all', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const orders = await Order.find({})
      .sort({ createdAt: -1 })
      .populate({ path: 'userId', select: 'name email' })
      .populate({ path: 'items.productId', select: 'name price', strictPopulate: false });

    const validOrders = orders.filter(order => {
      if (!order.userId || !Array.isArray(order.items)) {
        console.warn('⚠️ Skipping invalid order:', order._id);
        return false;
      }
      return true;
    });

    console.log(`📦 Total valid orders returned: ${validOrders.length}`);
    res.json(validOrders);
  } catch (err) {
    console.error('❌ Admin All Orders Fetch Error:', err);
    res.status(500).json({ message: 'Failed to fetch all orders', error: err.message });
  }
});

// ✅ Get Vendor Orders (MUST be before :userId route)
router.get('/vendor', authenticateToken, async (req, res) => {
  try {
    console.log("🔐 Vendor route accessed by:", req.user);

    if (req.user.role !== 'vendor') {
      console.log("❌ Access denied due to role mismatch:", req.user?.role);
      return res.status(403).json({ message: 'Access denied' });
    }

    // ✅ Fix: Match vendorId field in Product model
    const vendorProducts = await Product.find({ vendorId: req.user._id });
    const vendorProductIds = vendorProducts.map(p => new mongoose.Types.ObjectId(p._id));

    const orders = await Order.find({
      'items.productId': { $in: vendorProductIds },
    }).populate('items.productId', 'name price');

    console.log('📦 Vendor Orders Fetched:', orders.length);
    res.json({ orders });
  } catch (err) {
    console.error('❌ Vendor Order Fetch Error:', err.message);
    res.status(500).json({ message: 'Failed to fetch vendor orders', error: err.message });
  }
});

// ✅ Get Orders for User or Admin (MUST be below specific routes)
router.get('/:userId', authenticateToken, async (req, res) => {
  try {
    const userId = req.params.userId;

    if (req.user._id.toString() !== userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error('❌ User Order Fetch Error:', err);
    res.status(500).json({ message: 'Failed to fetch user orders', error: err.message });
  }
});

// 🔧 Cleanup Broken Orders
router.delete('/cleanup-broken-orders', async (req, res) => {
  try {
    const result = await Order.deleteMany({
      $or: [
        { userId: { $exists: false } },
        { items: { $exists: false } },
        { items: { $size: 0 } },
      ],
    });

    res.json({ message: '🧹 Broken orders cleaned up', deletedCount: result.deletedCount });
  } catch (err) {
    console.error('❌ Cleanup Error:', err);
    res.status(500).json({ message: 'Failed to clean orders', error: err.message });
  }
});

export default router;
