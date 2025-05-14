
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const authenticateToken = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id).select('-password');

      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      // 🔥 Attach _id and role to req.user (manually)
      req.user = {
        _id: user._id,
        role: user.role,
        name: user.name,
        phone: user.phone,
      };
      console.log("🧠 Middleware attached user:", req.user);

      next();
    } catch (error) {
      console.error('❌ Authentication Error:', error.message);
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  } else {
    return res.status(401).json({ message: 'No token provided' });
  }
};

