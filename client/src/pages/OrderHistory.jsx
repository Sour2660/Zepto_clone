// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './OrderHistory.css';

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);

//   // ✅ Parse once to prevent re-renders
//   const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         if (!storedUser._id || !token) {
//           console.warn("User ID or token missing");
//           return;
//         }

//         const res = await axios.get(`/api/orders/${storedUser._id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setOrders(res.data || []);
//       } catch (err) {
//         console.error('❌ Error fetching order history:', err);
//       }
//     };

//     fetchOrders(); // 🔁 Called only once on mount
//   }, []); // ✅ Empty dependency array

//   return (
//     <div className="order-history-container">
//       <h2 className="order-history-title">📦 My Order History</h2>

//       {orders.length === 0 ? (
//         <p className="empty-msg">You have not placed any orders yet.</p>
//       ) : (
//         orders.map((order, idx) => {
//           const total = order.items?.reduce((sum, item) => {
//             const price = item.price || 0;
//             return sum + price * item.quantity;
//           }, 0);

//           return (
//             <div key={order._id || idx} className="order-card">
//               <div className="order-meta">
//                 <strong>Order #{idx + 1}</strong>
//                 <span
//                   className={`status ${order.status === 'Paid' ? 'paid' : 'cod'}`}
//                 >
//                   {order.status || 'Paid'}
//                 </span>
//                 <span className="date">
//                   {new Date(order.createdAt).toLocaleString()}
//                 </span>
//               </div>

//               <ul className="order-items">
//                 {order.items.map((item, i) => (
//                   <li key={i} className="item-row">
//                     <span>{item.name || 'Unnamed'} × {item.quantity}</span>
//                     <span>₹{(item.price || 0) * item.quantity}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="order-total">
//                 <b>Total:</b> ₹{total?.toFixed(2)}
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default OrderHistory;


// src/pages/OrderHistory.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './OrderHistory.css';

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);
//   const user = JSON.parse(localStorage.getItem('user') || '{}');
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     const fetchOrders = async () => {
//       if (!user._id || !token) {
//         console.warn("User ID or token missing");
//         return;
//       }

//       try {
//         const res = await axios.get(`/api/orders/${user._id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setOrders(res.data || []);
//       } catch (err) {
//         console.error('❌ Error fetching order history:', err);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="order-history-container">
//       <h2 className="order-history-title">📦 My Order History</h2>

//       {orders.length === 0 ? (
//         <p className="empty-msg">You have not placed any orders yet.</p>
//       ) : (
//         orders.map((order, idx) => {
//           const total = order.items?.reduce((sum, item) => {
//             return sum + (item.price || 0) * item.quantity;
//           }, 0);

//           return (
//             <div key={order._id || idx} className="order-card">
//               <div className="order-meta">
//                 <strong>Order #{idx + 1}</strong>
//                 <span className={`status ${order.status === 'Paid' ? 'paid' : 'cod'}`}>
//                   {order.status}
//                 </span>
//                 <span className="date">{new Date(order.createdAt).toLocaleString()}</span>
//               </div>

//               <ul className="order-items">
//                 {order.items.map((item, i) => (
//                   <li key={i} className="item-row">
//                     <span>{item.name || 'Unnamed'} × {item.quantity}</span>
//                     <span>₹{(item.price || 0) * item.quantity}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="order-total"><b>Total:</b> ₹{total.toFixed(2)}</div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default OrderHistory;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OrderHistory.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');

      if (!storedUser || !storedToken) {
        console.warn("🔒 Missing user or token in localStorage");
        setLoading(false);
        return;
      }

      const parsedUser = JSON.parse(storedUser);

      if (!parsedUser._id) {
        console.warn("❌ user._id is missing in localStorage:", parsedUser);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`/api/orders/${parsedUser._id}`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });
        console.log("✅ Orders fetched:", res.data);
        setOrders(res.data || []);
      } catch (err) {
        console.error('❌ Error fetching order history:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>⏳ Loading your order history...</p>;

  return (
    <div className="order-history-container">
      <h2 className="order-history-title">📦 My Order History</h2>

      {orders.length === 0 ? (
        <p className="empty-msg">You have not placed any orders yet.</p>
      ) : (
        orders.map((order, idx) => {
          const total = order.items?.reduce((sum, item) => {
            return sum + (item.price || 0) * item.quantity;
          }, 0);

          return (
            <div key={order._id || idx} className="order-card">
              <div className="order-meta">
                <strong>Order #{idx + 1}</strong>
                <span className={`status ${order.status === 'Paid' ? 'paid' : 'cod'}`}>
                  {order.status}
                </span>
                <span className="date">{new Date(order.createdAt).toLocaleString()}</span>
              </div>

              <ul className="order-items">
                {order.items.map((item, i) => (
                  <li key={i} className="item-row">
                    <span>{item.name} × {item.quantity}</span>
                    <span>₹{(item.price || 0) * item.quantity}</span>
                  </li>
                ))}
              </ul>

              <div className="order-total"><b>Total:</b> ₹{total.toFixed(2)}</div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default OrderHistory;
