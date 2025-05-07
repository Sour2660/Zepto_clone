 // src/routes/userRoutes.js
// import express from 'express';
// import User from '../models/User.js';

// const router = express.Router();

// // GET user data by phone
// router.get('/users/:phone', async (req, res) => {
//   try {
//     const user = await User.findOne({ phone: req.params.phone });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.json({
//       name: user.name,
//       phone: user.phone,
//       orders: user.orders || [],
//     });
//   } catch (err) {
//     console.error('❌ Error fetching user:', err.message);
//     res.status(500).json({ message: 'Internal Server Error', error: err.message });
//   }
// });

// export default router;


// import User from '../models/User.js';

// const router = express.Router();

// // ✅ GET user/vendor/admin by phone & optional role
// router.get('/users/:phone', async (req, res) => {
//   const roleQuery = req.query.role; // Optional ?role=vendor or ?role=admin
//   const query = { phone: req.params.phone };
//   if (roleQuery) query.role = roleQuery;

//   try {
//     const user = await User.findOne(query);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.json({
//       name: user.name,
//       phone: user.phone,
//       role: user.role,
//       orders: user.orders || [],
//     });
//   } catch (err) {
//     console.error('❌ Error fetching user:', err.message);
//     res.status(500).json({ message: 'Internal Server Error', error: err.message });
//   }
// });
// import express from 'express';
// import User from '../models/User.js';

// const router = express.Router();

// // ✅ GET user/vendor/admin by phone & optional role
// router.get('/users/:phone', async (req, res) => {
//   const roleQuery = req.query.role; // Optional ?role=vendor or ?role=admin
//   const query = { phone: req.params.phone };

//   if (roleQuery) query.role = roleQuery; // If role query exists, add it to the filter

//   try {
//     const user = await User.findOne(query);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.json({
//       name: user.name,
//       phone: user.phone,
//       role: user.role, // Include role in the response
//       orders: user.orders || [], // Include orders if available
//       address: user.address, // Include address information
//     });
//   } catch (err) {
//     console.error('❌ Error fetching user:', err.message);
//     res.status(500).json({ message: 'Internal Server Error', error: err.message });
//   }
// });

// export default router;



import express from 'express';
import User from '../models/User.js';
import { protect } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

// ✅ Get user by phone, optional role
router.get('/users/:phone', async (req, res) => {
  const roleQuery = req.query.role;
  const query = { phone: req.params.phone };
  if (roleQuery) query.role = roleQuery;

  try {
    const user = await User.findOne(query);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      name: user.name,
      phone: user.phone,
      role: user.role,
      orders: user.orders || [],
      address: user.address,
    });
  } catch (err) {
    console.error('❌ Error fetching user:', err.message);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
});

// ✅ Admin: Get all users (optional role filter)
router.get('/admin/users', protect, authorizeRoles('admin'), async (req, res) => {
  const roleFilter = req.query.role ? { role: req.query.role } : {};
  try {
    const users = await User.find(roleFilter).select('-password');
    res.json(users);
  } catch (err) {
    console.error('❌ Admin user fetch error:', err.message);
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
});

// ✅ Admin: Delete user by ID
router.delete('/admin/users/:id', protect, authorizeRoles('admin'), async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('❌ Admin user delete error:', err.message);
    res.status(500).json({ message: 'Failed to delete user', error: err.message });
  }
});

export default router;
