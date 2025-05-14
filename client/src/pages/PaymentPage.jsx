
// import React, { useContext } from 'react';
// import axios from 'axios';
// import { CartContext } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';
// import './PaymentPage.css';

// const PaymentPage = () => {
//   const { cartItems, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const loadRazorpay = async () => {
//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';

//     script.onerror = () => alert('Razorpay SDK failed to load.');
//     script.onload = async () => {
//       try {
//         const { data: order } = await axios.post('/api/payment/create-order', {
//           amount: totalAmount
//         });

//         const options = {
//           key: process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_E01z2ODVLZlILq',
//           amount: order.amount,
//           currency: order.currency,
//           name: 'Zepto Clone',
//           description: 'Order Payment',
//           order_id: order.id,
//           handler: async (response) => {
//             try {
//               const verifyRes = await axios.post('/api/payment/verify', {
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_signature: response.razorpay_signature
//               });

//               if (verifyRes.data.success) {
//                 clearCart();
//                 alert('✅ Payment verified successfully!');
//                 navigate('/order-success');
//               } else {
//                 alert('❌ Payment verification failed.');
//               }
//             } catch (err) {
//               console.error('Verification Error:', err);
//               alert('Payment verification failed.');
//             }
//           },
//           prefill: {
//             name: 'John Doe',
//             email: 'johndoe@example.com',
//             contact: '9999999999'
//           },
//           theme: { color: '#28a745' }
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       } catch (error) {
//         console.error('❌ Razorpay Load Failed:', error);
//         alert('Failed to initiate payment');
//       }
//     };
//     document.body.appendChild(script);
//   };

//   const handlePlaceOrder = () => {
//     clearCart();
//     alert("Order Placed Successfully!");
//     navigate("/order-success");
//   };

//   return (
//     <div className="payment-container">
//       <h2 className="payment-title">🧾 Payment & Order Summary</h2>

//       <div className="payment-grid">
//         <div className="payment-address">
//           <h3>Delivery Address</h3>
//           <form className="address-form">
//             <input type="text" placeholder="Full Name" />
//             <input type="text" placeholder="Street Address" />
//             <input type="text" placeholder="City" />
//             <input type="text" placeholder="State" />
//             <input type="text" placeholder="Pincode" />
//             <input type="tel" placeholder="Phone Number" />
//           </form>
//         </div>

//         <div className="payment-summary">
//           <h3>Order Summary</h3>
//           <ul className="summary-list">
//             {cartItems.map((item, idx) => (
//               <li key={idx}>
//                 <span>{item.name} x {item.quantity}</span>
//                 <span>₹{item.price * item.quantity}</span>
//               </li>
//             ))}
//           </ul>

//           <div className="total-section">
//             <span>Total:</span>
//             <span>₹{totalAmount.toFixed(2)}</span>
//           </div>

//           <button className="checkout-button" onClick={loadRazorpay}>
//             Pay Now with Razorpay
//           </button>
//           <button
//             className="checkout-button"
//             style={{ marginTop: '10px', backgroundColor: '#343a40' }}
//             onClick={handlePlaceOrder}
//           >
//             Cash on Delivery (COD)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { CartContext } from '../context/CartContext';
// import { useNavigate } from 'react-router-dom';
// import './PaymentPage.css';

// const PaymentPage = () => {
//   const { cartItems, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user'));
//   const [loading, setLoading] = useState(false);
//   const [address, setAddress] = useState({
//     fullName: '',
//     street: '',
//     city: '',
//     state: '',
//     pincode: '',
//     phone: ''
//   });

//   const totalAmount = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const validateAddress = () => {
//     const { fullName, street, city, state, pincode, phone } = address;

//     if (!fullName || !street || !city || !state || !pincode || !phone) {
//       alert('❌ Please fill out all address fields.');
//       return false;
//     }

//     if (!/^\d{6}$/.test(pincode)) {
//       alert('❌ Enter a valid 6-digit pincode.');
//       return false;
//     }

//     if (!/^[6-9]\d{9}$/.test(phone)) {
//       alert('❌ Enter a valid 10-digit phone number.');
//       return false;
//     }

//     return true;
//   };

//   const saveOrder = async (paymentStatus) => {
//     if (!validateAddress()) return;

//     setLoading(true);
//     try {
//       await axios.post('/api/orders', {
//         userId: user.id,
//         items: cartItems,
//         total: totalAmount,
//         paymentMethod: paymentStatus,
//         paymentId: paymentStatus === 'Paid' ? 'Razorpay' : 'COD',
//         deliveryAddress: address
//       });

//       clearCart();
//       alert(`✅ Order placed successfully via ${paymentStatus}`);
//       navigate('/orders');
//     } catch (err) {
//       console.error('❌ Failed to save order:', err);
//       alert('❌ Failed to save order. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadRazorpay = async () => {
//     if (!validateAddress()) return;

//     const script = document.createElement('script');
//     script.src = 'https://checkout.razorpay.com/v1/checkout.js';

//     script.onerror = () => alert('Razorpay SDK failed to load.');
//     script.onload = async () => {
//       try {
//         const { data: order } = await axios.post('/api/payment/create-order', {
//           amount: totalAmount
//         });

//         const options = {
//           key: process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_E01z2ODVLZlILq',
//           amount: order.amount,
//           currency: order.currency,
//           name: 'Zepto Clone',
//           description: 'Order Payment',
//           order_id: order.id,
//           handler: async (response) => {
//             try {
//               const verifyRes = await axios.post('/api/payment/verify', {
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_signature: response.razorpay_signature
//               });

//               if (verifyRes.data.success) {
//                 await saveOrder('Paid');
//               } else {
//                 alert('❌ Payment verification failed.');
//               }
//             } catch (err) {
//               console.error('Verification Error:', err);
//               alert('Payment verification failed.');
//             }
//           },
//           prefill: {
//             name: user.name,
//             email: 'demo@zepto.com',
//             contact: address.phone
//           },
//           theme: { color: '#28a745' }
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       } catch (error) {
//         console.error('❌ Razorpay Load Failed:', error);
//         alert('Failed to initiate payment');
//       }
//     };
//     document.body.appendChild(script);
//   };

//   const handlePlaceOrder = () => {
//     saveOrder('COD');
//   };

//   const handleAddressChange = (e) => {
//     setAddress({ ...address, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="payment-container">
//       <h2 className="payment-title">🧾 Payment & Order Summary</h2>

//       <div className="payment-grid">
//         <div className="payment-address">
//           <h3>Delivery Address</h3>
//           <form className="address-form">
//             <input type="text" name="fullName" placeholder="Full Name" value={address.fullName} onChange={handleAddressChange} />
//             <input type="text" name="street" placeholder="Street Address" value={address.street} onChange={handleAddressChange} />
//             <input type="text" name="city" placeholder="City" value={address.city} onChange={handleAddressChange} />
//             <input type="text" name="state" placeholder="State" value={address.state} onChange={handleAddressChange} />
//             <input type="text" name="pincode" placeholder="Pincode" value={address.pincode} onChange={handleAddressChange} />
//             <input type="tel" name="phone" placeholder="Phone Number" value={address.phone} onChange={handleAddressChange} />
//           </form>
//         </div>

//         <div className="payment-summary">
//           <h3>Order Summary</h3>
//           <ul className="summary-list">
//             {cartItems.map((item, idx) => (
//               <li key={idx}>
//                 <span>{item.name} x {item.quantity}</span>
//                 <span>₹{item.price * item.quantity}</span>
//               </li>
//             ))}
//           </ul>

//           <div className="total-section">
//             <span>Total:</span>
//             <span>₹{totalAmount.toFixed(2)}</span>
//           </div>

//           <button className="checkout-button" onClick={loadRazorpay} disabled={loading}>
//             {loading ? 'Processing...' : 'Pay Now with Razorpay'}
//           </button>

//           <button
//             className="checkout-button"
//             style={{ marginTop: '10px', backgroundColor: '#343a40' }}
//             onClick={handlePlaceOrder}
//             disabled={loading}
//           >
//             {loading ? 'Placing Order...' : 'Cash on Delivery (COD)'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

// ✅ frontend/pages/PaymentPage.jsx
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({
    fullName: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const validateAddress = () => {
    const { fullName, street, city, state, pincode, phone } = address;

    if (!fullName || !street || !city || !state || !pincode || !phone) {
      alert('❌ Please fill out all address fields.');
      return false;
    }

    if (!/^\d{6}$/.test(pincode)) {
      alert('❌ Enter a valid 6-digit pincode.');
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert('❌ Enter a valid 10-digit phone number.');
      return false;
    }

    return true;
  };

  const saveOrder = async (paymentStatus) => {
    if (!validateAddress()) return;

    setLoading(true);
    try {
      const response = await axios.post('/api/orders/save', {
        items: cartItems.map(item => ({
          productId: item._id,
          quantity: item.quantity
        })),
        amount: totalAmount,
        orderId: paymentStatus === 'Paid' ? 'razorpay_order_id' : 'cod_order',
        paymentId: paymentStatus === 'Paid' ? 'razorpay_payment_id' : 'cod_payment',
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      clearCart();
      alert(`✅ Order placed successfully via ${paymentStatus}`);
      navigate('/orders');
    } catch (err) {
      console.error('❌ Failed to save order:', err.response?.data || err.message);
      alert('❌ Failed to save order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const loadRazorpay = async () => {
    if (!validateAddress()) return;

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';

    script.onerror = () => alert('Razorpay SDK failed to load.');
    script.onload = async () => {
      try {
        const { data: order } = await axios.post('/api/payment/create-order', {
          amount: totalAmount
        });

        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_E01z2ODVLZlILq',
          amount: order.amount,
          currency: order.currency,
          name: 'Zepto Clone',
          description: 'Order Payment',
          order_id: order.id,
          handler: async (response) => {
            try {
              const verifyRes = await axios.post('/api/payment/verify', {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              });

              if (verifyRes.data.success) {
                await saveOrder('Paid');
              } else {
                alert('❌ Payment verification failed.');
              }
            } catch (err) {
              console.error('Verification Error:', err);
              alert('Payment verification failed.');
            }
          },
          prefill: {
            name: user.name,
            email: 'demo@zepto.com',
            contact: address.phone
          },
          theme: { color: '#28a745' }
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error('❌ Razorpay Load Failed:', error);
        alert('Failed to initiate payment');
      }
    };
    document.body.appendChild(script);
  };

  const handlePlaceOrder = () => {
    saveOrder('COD');
  };

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">🧾 Payment & Order Summary</h2>

      <div className="payment-grid">
        <div className="payment-address">
          <h3>Delivery Address</h3>
          <form className="address-form">
            <input type="text" name="fullName" placeholder="Full Name" value={address.fullName} onChange={handleAddressChange} />
            <input type="text" name="street" placeholder="Street Address" value={address.street} onChange={handleAddressChange} />
            <input type="text" name="city" placeholder="City" value={address.city} onChange={handleAddressChange} />
            <input type="text" name="state" placeholder="State" value={address.state} onChange={handleAddressChange} />
            <input type="text" name="pincode" placeholder="Pincode" value={address.pincode} onChange={handleAddressChange} />
            <input type="tel" name="phone" placeholder="Phone Number" value={address.phone} onChange={handleAddressChange} />
          </form>
        </div>

        <div className="payment-summary">
          <h3>Order Summary</h3>
          <ul className="summary-list">
            {cartItems.map((item, idx) => (
              <li key={idx}>
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <div className="total-section">
            <span>Total:</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>

          <button className="checkout-button" onClick={loadRazorpay} disabled={loading}>
            {loading ? 'Processing...' : 'Pay Now with Razorpay'}
          </button>

          <button
            className="checkout-button"
            style={{ marginTop: '10px', backgroundColor: '#343a40' }}
            onClick={handlePlaceOrder}
            disabled={loading}
          >
            {loading ? 'Placing Order...' : 'Cash on Delivery (COD)'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;


