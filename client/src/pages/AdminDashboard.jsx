// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   const [vendors, setVendors] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem('user'));

//   useEffect(() => {
//     const token = localStorage.getItem('token');

//     if (!user || user.role !== 'admin') {
//       navigate('/login');
//       return;
//     }

//     const fetchData = async () => {
//       try {
//         const vendorRes = await axios.get('/api/admin/users?role=vendor', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setVendors(vendorRes.data);

//         const productRes = await axios.get('/api/products/admin', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setProducts(productRes.data.products);

//         setLoading(false);
//       } catch (error) {
//         console.error('❌ Error fetching data:', error);
//         setLoading(false);
//         alert('Failed to load vendors and products.');
//       }
//     };

//     fetchData();
//   }, [navigate, user]);

//   const removeVendor = async (id) => {
//     const token = localStorage.getItem('token');
//     try {
//       await axios.delete(`/api/admin/users/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setVendors((prev) => prev.filter((v) => v._id !== id));
//       alert('✅ Vendor removed successfully!');
//     } catch (error) {
//       console.error('❌ Error removing vendor:', error);
//       alert('❌ Failed to remove vendor.');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <div className="admin-container">
//       <div className="admin-header">
//         <h1>Admin Dashboard</h1>
//         <div>
//           <span>Hello, {user?.name} (Admin)</span>
//           <button className="logout-btn" onClick={handleLogout}>Logout</button>
//         </div>
//       </div>

//       {loading ? (
//         <div className="loading-text">Loading...</div>
//       ) : (
//         <div className="dashboard-grid">
//           <div className="card">
//             <h2>Vendors</h2>
//             <ul>
//               {vendors.length > 0 ? (
//                 vendors.map(v => (
//                   <li key={v._id} className="list-item">
//                     <span>{v.name}</span>
//                     <button className="remove-btn" onClick={() => removeVendor(v._id)}>Remove</button>
//                   </li>
//                 ))
//               ) : (
//                 <li className="empty-message">No vendors found.</li>
//               )}
//             </ul>
//           </div>

//           <div className="card">
//             <h2>All Products</h2>
//             <ul>
//               {products.length > 0 ? (
//                 products.map(p => (
//                   <li key={p._id} className="list-item">
//                     <span>{p.name}</span>
//                     <span>₹{p.price}</span>
//                   </li>
//                 ))
//               ) : (
//                 <li className="empty-message">No products found.</li>
//               )}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   const [vendors, setVendors] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
//     const storedToken = localStorage.getItem('token');

//     if (!storedUser._id || storedUser.role !== 'admin' || !storedToken) {
//       navigate('/login');
//       return;
//     }

//     setUser(storedUser);
//     setToken(storedToken);

//     const fetchData = async () => {
//       try {
//         const vendorRes = await axios.get('/api/admin/users?role=vendor', {
//           headers: { Authorization: `Bearer ${storedToken}` }
//         });
//         setVendors(vendorRes.data);

//         const productRes = await axios.get('/api/products/admin', {
//           headers: { Authorization: `Bearer ${storedToken}` }
//         });
//         setProducts(productRes.data.products);

//         setLoading(false);
//       } catch (error) {
//         console.error('❌ Error fetching data:', error);
//         alert('Failed to load vendors and products.');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   const removeVendor = async (id) => {
//     try {
//       await axios.delete(`/api/admin/users/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setVendors((prev) => prev.filter((v) => v._id !== id));
//       alert('✅ Vendor removed successfully!');
//     } catch (error) {
//       console.error('❌ Error removing vendor:', error);
//       alert('❌ Failed to remove vendor.');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <div className="admin-container">
//       <div className="admin-header">
//         <h1>Admin Dashboard</h1>
//         <div>
//           <span>Hello, {user?.name} (Admin)</span>
//           <button className="logout-btn" onClick={handleLogout}>Logout</button>
//         </div>
//       </div>

//       {loading ? (
//         <div className="loading-text">Loading...</div>
//       ) : (
//         <div className="dashboard-grid">
//           <div className="card">
//             <h2>Vendors</h2>
//             <ul>
//               {vendors.length > 0 ? (
//                 vendors.map(v => (
//                   <li key={v._id} className="list-item">
//                     <span>{v.name}</span>
//                     <button className="remove-btn" onClick={() => removeVendor(v._id)}>Remove</button>
//                   </li>
//                 ))
//               ) : (
//                 <li className="empty-message">No vendors found.</li>
//               )}
//             </ul>
//           </div>

//           <div className="card">
//             <h2>All Products</h2>
//             <ul>
//               {products.length > 0 ? (
//                 products.map(p => (
//                   <li key={p._id} className="list-item">
//                     <span>{p.name}</span>
//                     <span>₹{p.price}</span>
//                   </li>
//                 ))
//               ) : (
//                 <li className="empty-message">No products found.</li>
//               )}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;


// ✅ AdminDashboard.jsx — With Platform-wide Sold Product History
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   const [vendors, setVendors] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [allOrders, setAllOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
//     const storedToken = localStorage.getItem('token');

//     if (!storedUser._id || storedUser.role !== 'admin' || !storedToken) {
//       navigate('/login');
//       return;
//     }

//     setUser(storedUser);
//     setToken(storedToken);

//     const fetchData = async () => {
//       try {
//         const vendorRes = await axios.get('/api/admin/users?role=vendor', {
//           headers: { Authorization: `Bearer ${storedToken}` },
//         });
//         setVendors(vendorRes.data);

//         const productRes = await axios.get('/api/products/admin', {
//           headers: { Authorization: `Bearer ${storedToken}` },
//         });
//         setProducts(productRes.data.products);

//         const orderRes = await axios.get('/api/orders/all', {
//           headers: { Authorization: `Bearer ${storedToken}` },
//         });
//         setAllOrders(orderRes.data);

//         setLoading(false);
//       } catch (error) {
//         console.error('❌ Error fetching admin data:', error);
//         alert('Failed to load admin dashboard');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [navigate]);

//   const getSoldQuantity = (productId) => {
//     return allOrders.reduce((total, order) => {
//       const match = order.items.find(item => item.productId?.toString() === productId.toString());
//       return total + (match ? match.quantity : 0);
//     }, 0);
//   };

//   const removeVendor = async (id) => {
//     try {
//       await axios.delete(`/api/admin/users/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setVendors((prev) => prev.filter((v) => v._id !== id));
//       alert('✅ Vendor removed successfully!');
//     } catch (error) {
//       console.error('❌ Error removing vendor:', error);
//       alert('❌ Failed to remove vendor.');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   return (
//     <div className="admin-container">
//       <div className="admin-header">
//         <h1>Admin Dashboard</h1>
//         <div>
//           <span>Hello, {user?.name} (Admin)</span>
//           <button className="logout-btn" onClick={handleLogout}>Logout</button>
//         </div>
//       </div>

//       {loading ? (
//         <div className="loading-text">Loading...</div>
//       ) : (
//         <div className="dashboard-grid">
//           <div className="card">
//             <h2>Vendors</h2>
//             <ul>
//               {vendors.length > 0 ? (
//                 vendors.map((v) => (
//                   <li key={v._id} className="list-item">
//                     <span>{v.name}</span>
//                     <button className="remove-btn" onClick={() => removeVendor(v._id)}>Remove</button>
//                   </li>
//                 ))
//               ) : (
//                 <li className="empty-message">No vendors found.</li>
//               )}
//             </ul>
//           </div>

//           <div className="card">
//             <h2>All Products</h2>
//             <ul>
//               {products.length > 0 ? (
//                 products.map((p) => (
//                   <li key={p._id} className="list-item">
//                     <span>{p.name}</span>
//                     <span>₹{p.price}</span>
//                   </li>
//                 ))
//               ) : (
//                 <li className="empty-message">No products found.</li>
//               )}
//             </ul>
//           </div>

//           <div className="card">
//             <h2>📦 Product Sell History</h2>
//             {products.filter(p => getSoldQuantity(p._id) > 0).length > 0 ? (
//               <table className="sold-history-table">
//                 <thead>
//                   <tr>
//                     <th>Product</th>
//                     <th>Units Sold</th>
//                     <th>Price</th>
//                     <th>Total Revenue</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.filter(p => getSoldQuantity(p._id) > 0).map((p) => {
//                     const soldQty = getSoldQuantity(p._id);
//                     const revenue = soldQty * p.price;
//                     return (
//                       <tr key={p._id}>
//                         <td>{p.name}</td>
//                         <td>{soldQty}</td>
//                         <td>₹{p.price}</td>
//                         <td>₹{revenue}</td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             ) : (
//               <p>No products sold yet.</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;

// ✅ AdminDashboard.jsx — With Platform-wide Sold Product History & Token Expiry Handling
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [vendors, setVendors] = useState([]);
  const [products, setProducts] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const storedToken = localStorage.getItem('token');

    if (!storedUser._id || storedUser.role !== 'admin' || !storedToken) {
      localStorage.clear();
      navigate('/login');
      return;
    }

    setUser(storedUser);
    setToken(storedToken);

    const fetchData = async () => {
      try {
        const vendorRes = await axios.get('/api/admin/users?role=vendor', {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setVendors(vendorRes.data);

        const productRes = await axios.get('/api/products/admin', {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setProducts(productRes.data.products);

        const orderRes = await axios.get('/api/orders/all', {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setAllOrders(orderRes.data);

        setLoading(false);
      } catch (error) {
        const message = error.response?.data?.message || error.message;
        console.error('❌ Error fetching admin data:', message);
        if (message.includes('Invalid') || message.includes('expired')) {
          localStorage.clear();
          navigate('/login');
        } else {
          alert('Failed to load admin dashboard');
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [navigate]);

  const getSoldQuantity = (productId) => {
    return allOrders.reduce((total, order) => {
      const match = order.items.find(item => item.productId?._id?.toString() === productId.toString() || item.productId?.toString() === productId.toString());
      return total + (match ? match.quantity : 0);
    }, 0);
  };

  const removeVendor = async (id) => {
    try {
      await axios.delete(`/api/admin/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setVendors((prev) => prev.filter((v) => v._id !== id));
      alert('✅ Vendor removed successfully!');
    } catch (error) {
      console.error('❌ Error removing vendor:', error);
      alert('❌ Failed to remove vendor.');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div>
          <span>Hello, {user?.name} (Admin)</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {loading ? (
        <div className="loading-text">Loading...</div>
      ) : (
        <div className="dashboard-grid">
          <div className="card">
            <h2>Vendors</h2>
            <ul>
              {vendors.length > 0 ? (
                vendors.map((v) => (
                  <li key={v._id} className="list-item">
                    <span>{v.name}</span>
                    <button className="remove-btn" onClick={() => removeVendor(v._id)}>Remove</button>
                  </li>
                ))
              ) : (
                <li className="empty-message">No vendors found.</li>
              )}
            </ul>
          </div>

          <div className="card">
            <h2>All Products</h2>
            <ul>
              {products.length > 0 ? (
                products.map((p) => (
                  <li key={p._id} className="list-item">
                    <span>{p.name}</span>
                    <span>₹{p.price}</span>
                  </li>
                ))
              ) : (
                <li className="empty-message">No products found.</li>
              )}
            </ul>
          </div>

          <div className="card">
            <h2>📦 Product Sell History</h2>
            {products.filter(p => getSoldQuantity(p._id) > 0).length > 0 ? (
              <table className="sold-history-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Units Sold</th>
                    <th>Price</th>
                    <th>Total Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {products.filter(p => getSoldQuantity(p._id) > 0).map((p) => {
                    const soldQty = getSoldQuantity(p._id);
                    const revenue = soldQty * p.price;
                    return (
                      <tr key={p._id}>
                        <td>{p.name}</td>
                        <td>{soldQty}</td>
                        <td>₹{p.price}</td>
                        <td>₹{revenue}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p>No products sold yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
