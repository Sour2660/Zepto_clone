/**
 * -----------------------------------------------------------------------------
 * Zepto Clone Application
 * -----------------------------------------------------------------------------
 * Developed by: Sourabh Basarikatti
 * Description : This file is part of the Zepto Clone project, developed to 
 *               simulate core functionalities and design of the original 
 *               Zepto application for educational and developmental purposes.
 * -----------------------------------------------------------------------------
 */

import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
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
import OrderHistory from './pages/OrderHistory';
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
        <Route path="/OrderSuccess" element={<OrderSuccess />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/my-orders" element={<OrdersPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order-history" element={<OrderHistory />} />


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

