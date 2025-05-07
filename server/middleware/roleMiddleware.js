export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
          message: `Access denied: Only ${allowedRoles.join(' or ')} can access this route`,
        });
      }
      next();
    };
  };
  