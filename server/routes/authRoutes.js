// import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';

// const router = express.Router();

// // ✅ REGISTER API with error logging
// router.post('/register', async (req, res) => {
//   console.log("Register route hit");
//   console.log(req.body);

//   try {
//     const { name, phone, password } = req.body;

//     if (!name || !phone || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await User.findOne({ phone });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ name, phone, password: hashedPassword });
//     await newUser.save();

//     console.log("✅ User registered:", newUser);
//     res.status(201).json({ message: 'User registered successfully' });

//   } catch (err) {
//     console.error("❌ Register Error:", err);
//     res.status(500).json({ message: 'Something went wrong', error: err.message });
//   }
// });

// // ✅ LOGIN API with error logging
// router.post('/login', async (req, res) => {
//   try {
//     const { phone, password } = req.body;

//     if (!phone || !password) {
//       return res.status(400).json({ message: "Phone and password are required" });
//     }

//     const user = await User.findOne({ phone });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

//     console.log("✅ User logged in:", user.phone);
//     res.json({ token, user: { name: user.name, phone: user.phone } });

//   } catch (err) {
//     console.error("❌ Login Error:", err);
//     res.status(500).json({ message: 'Something went wrong', error: err.message });
//   }
// });

// // ✅ FORGOT PASSWORD with error logging
// router.post('/forgot-password', async (req, res) => {
//   try {
//     const { phone, newPassword } = req.body;

//     if (!phone || !newPassword) {
//       return res.status(400).json({ message: "Phone and new password are required" });
//     }

//     const user = await User.findOne({ phone });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const hashedPassword = await bcrypt.hash(newPassword, 10);

//     user.password = hashedPassword;
//     await user.save();

//     console.log("✅ Password reset for user:", phone);
//     res.json({ message: 'Password reset successful! You can now login.' });

//   } catch (err) {
//     console.error("❌ Forgot Password Error:", err);
//     res.status(500).json({ message: 'Something went wrong', error: err.message });
//   }
// });

// export default router;


import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// ✅ REGISTER API with role
router.post('/register', async (req, res) => {
  console.log("Register route hit");
  console.log(req.body);

  try {
    const { name, phone, password, role } = req.body;

    if (!name || !phone || !password || !role) {
      return res.status(400).json({ message: "All fields (name, phone, password, role) are required" });
    }

    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, phone, password: hashedPassword, role });
    await newUser.save();

    console.log("✅ User registered:", newUser);
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error("❌ Register Error:", err);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
});

// ✅ LOGIN API with role in response
router.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;

    if (!phone || !password) {
      return res.status(400).json({ message: "Phone and password are required" });
    }

    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

    console.log("✅ User logged in:", user.phone);
    res.json({
      token,
      user: {
        name: user.name,
        phone: user.phone,
        role: user.role,
        id: user._id,
      },
    });

  } catch (err) {
    console.error("❌ Login Error:", err);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
});

// ✅ FORGOT PASSWORD
router.post('/forgot-password', async (req, res) => {
  try {
    const { phone, newPassword } = req.body;

    if (!phone || !newPassword) {
      return res.status(400).json({ message: "Phone and new password are required" });
    }

    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    console.log("✅ Password reset for user:", phone);
    res.json({ message: 'Password reset successful! You can now login.' });

  } catch (err) {
    console.error("❌ Forgot Password Error:", err);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
});

export default router;
