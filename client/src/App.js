
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavbarZepto from './components/NavbarZepto';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import AccountPage from './pages/AccountPage';
// import CategoryPage from './pages/CategoryPage';
// import SearchResults from './components/SearchResults'; 
// import CartProvider from './context/CartContext';
// import Register from './components/Register';
// import Login from './components/Login';
// import ForgotPassword from './components/ForgotPassword';
// import PaymentPage from './pages/PaymentPage';
// import OrderSuccess from './pages/OrderSuccess';
// import ProductDetailsPage from './pages/ProductDetailsPage';
// import AdminAddProduct from './pages/AdminAddProduct';
// import './App.css';

// const App = () => {
//   return (
//     <CartProvider>
//       <Router>
    
//         <NavbarZepto />

       
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/account" element={<AccountPage />} />
//           <Route path="/category/:categoryName" element={<CategoryPage />} />
//           <Route path="/search/:keyword" element={<SearchResults />} /> 
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/payment" element={<PaymentPage />} />
//           <Route path="/order-success" element={<OrderSuccess />} />
//           <Route path="/product/:id" element={<ProductDetailsPage />} />
//           <Route path="/admin/add-product" element={<AdminAddProduct />} />

//           {/* <Route path="/login" element={<Home />} />  */}
//           <Route path="/register" element={<Register />} />
//        <Route path="/login" element={<Login />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;

// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import NavbarZepto from './components/NavbarZepto';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import AccountPage from './pages/AccountPage';
// import CategoryPage from './pages/CategoryPage';
// import SearchResults from './components/SearchResults';
// import CartProvider from './context/CartContext';
// import Register from './components/Register';
// import Login from './components/Login';
// import ForgotPassword from './components/ForgotPassword';
// import PaymentPage from './pages/PaymentPage';
// import OrderSuccess from './pages/OrderSuccess';
// import ProductDetailsPage from './pages/ProductDetailsPage';
// import AdminDashboard from './pages/AdminDashboard'; // Admin dashboard page
// import './App.css';

// const App = () => {
//   const [isAdmin, setIsAdmin] = useState(false);
//    console.log('isAdmin')
//   // Check if the user is an admin on mount
//   useEffect(() => {
//     const userRole = JSON.parse(localStorage.getItem('user'))?.role;
//      console.log('userole')
//     if (userRole === 'admin') {
//       setIsAdmin(true);
     
//     }
//   }, []);

//   return (
//     <CartProvider>
//       <Router>
//         <NavbarZepto />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/account" element={<AccountPage />} />
//           <Route path="/category/:categoryName" element={<CategoryPage />} />
//           <Route path="/search/:keyword" element={<SearchResults />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/payment" element={<PaymentPage />} />
//           <Route path="/order-success" element={<OrderSuccess />} />
//           <Route path="/product/:id" element={<ProductDetailsPage />} />

//           {/* Admin-only route: Admin Dashboard */}
//           <Route
//             path="/admin/dashboard"
//             element={isAdmin ? <AdminDashboard /> : <Navigate to="/login" />}
//           />

//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;


// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
// import NavbarZepto from './components/NavbarZepto';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import AccountPage from './pages/AccountPage';
// import CategoryPage from './pages/CategoryPage';
// import SearchResults from './components/SearchResults';
// import Register from './components/Register';
// import Login from './components/Login';
// import ForgotPassword from './components/ForgotPassword';
// import PaymentPage from './pages/PaymentPage';
// import OrderSuccess from './pages/OrderSuccess';
// import ProductDetailsPage from './pages/ProductDetailsPage';
// import AdminDashboard from './pages/AdminDashboard';
// import VendorDashboard from './pages/VendorDashboard';
// import CartProvider from './context/CartContext';
// import './App.css';

// const App = () => {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <Router>
//           <NavbarZepto />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/account" element={<AccountPage />} />
//             <Route path="/category/:categoryName" element={<CategoryPage />} />
//             <Route path="/search/:keyword" element={<SearchResults />} />
//             <Route path="/forgot-password" element={<ForgotPassword />} />
//             <Route path="/payment" element={<PaymentPage />} />
//             <Route path="/order-success" element={<OrderSuccess />} />
//             <Route path="/product/:id" element={<ProductDetailsPage />} />

//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />

//             {/* Protected Routes */}
//             <Route
//               path="/admin/dashboard"
//               element={
//                 <ProtectedRoute allowedRoles={['admin']}>
//                   <AdminDashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/vendor/dashboard"
//               element={
//                 <ProtectedRoute allowedRoles={['vendor']}>
//                   <VendorDashboard />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </Router>
//       </CartProvider>
//     </AuthProvider>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
// import CartProvider from './context/CartContext';

// import NavbarZepto from './components/NavbarZepto';
// import Home from './pages/Home';
// import Cart from './pages/Cart';
// import AccountPage from './pages/AccountPage';
// import CategoryPage from './pages/CategoryPage';
// import SearchResults from './components/SearchResults';
// import Register from './components/Register';
// import LoginPage from './pages/LoginPage';
// import ForgotPassword from './components/ForgotPassword';
// import PaymentPage from './pages/PaymentPage';
// import OrderSuccess from './pages/OrderSuccess';
// import ProductDetailsPage from './pages/ProductDetailsPage';
// import AdminDashboard from './pages/AdminDashboard';
// import VendorDashboard from './pages/VendorDashboard';
// import './App.css';

// const AppContent = () => {
//   const { user } = useAuth();
//  if (user) {
//     console.log("Logged in user role:", user.role);
//   }
//   // Show Navbar only for 'user' role (not admin/vendor)
 

//   return (
//     <>
//       <NavbarZepto />

//       <Routes>
//         <Route path="/" element={<Home />} />
        
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/account" element={<AccountPage />} />
//         <Route path="/category/:categoryName" element={<CategoryPage />} />
//         <Route path="/search/:keyword" element={<SearchResults />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/payment" element={<PaymentPage />} />
//         <Route path="/order-success" element={<OrderSuccess />} />
//         <Route path="/product/:id" element={<ProductDetailsPage />} />

//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<LoginPage />} />

//         {/* Protected Routes */}
//         <Route
//           path="/admin/dashboard"
//           element={
//             <ProtectedRoute allowedRoles={['admin']}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/vendor/dashboard"
//           element={
//             <ProtectedRoute allowedRoles={['vendor']}>
//               <VendorDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <Router>
//           <AppContent />
//         </Router>
//       </CartProvider>
//     </AuthProvider>
//   );
// };

// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import CartProvider from './context/CartContext';

import NavbarZepto from './components/NavbarZepto';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AccountPage from './pages/AccountPage';
import CategoryPage from './pages/CategoryPage';
import SearchResults from './components/SearchResults';
import Register from './components/Register';
import LoginPage from './pages/LoginPage';
import ForgotPassword from './components/ForgotPassword';
import PaymentPage from './pages/PaymentPage';
import OrderSuccess from './pages/OrderSuccess';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AdminDashboard from './pages/AdminDashboard';
import VendorDashboard from './pages/VendorDashboard';
import OrdersPage from './pages/OrderHistory'
import './App.css';

const AppContent = () => {
  const { user } = useAuth();
  const location = useLocation();

  // Hide Navbar on admin and vendor dashboard
  const hideNavbarPaths = ['/admin/dashboard', '/vendor/dashboard'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <NavbarZepto />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/search/:keyword" element={<SearchResults />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/my-orders" element={<OrdersPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vendor/dashboard"
          element={
            <ProtectedRoute allowedRoles={['vendor']}>
              <VendorDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

