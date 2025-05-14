// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element, allowedRoles, user }) => {
//   if (!user || !allowedRoles.includes(user.role)) {
//     return <Navigate to="/login" replace />;
//   }

//   return element;
// };

// export default ProtectedRoute;


// // src/components/ProtectedRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const { user } = useAuth();

//   if (!user) return <Navigate to="/login" />;
//   if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" />;

//   return children;
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
