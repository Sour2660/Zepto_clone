import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Save to localStorage
    const order = {
      items: cartItems,
      total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      placedAt: new Date().toLocaleString()
    };
    const previousOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([...previousOrders, order]));

    // Clear cart after storing
    clearCart();
  }, [cartItems, clearCart]);

  return (
    <div className="order-success-container">
      <h1>🎉 Thank you for your order!</h1>
      <p>Your order has been placed successfully.</p>
      <button onClick={() => navigate('/')} className="back-home-btn">Go to Homepage</button>
    </div>
  );
};

export default OrderSuccess;
