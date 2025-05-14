// // ✅ frontend/pages/VendorDashboard.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import categorySlugMapper from '../utils/categorySlugMapper';
// import './VendorDashboard.css';

// const VendorDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [form, setForm] = useState({
//     name: '', price: '', category: '', image: '',
//     description: '', weight: '', discount: ''
//   });
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState('');

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
//     const storedToken = localStorage.getItem('token');

//     if (!storedUser._id || storedUser.role !== 'vendor' || !storedToken) {
//       localStorage.clear();
//       navigate('/login');
//       return;
//     }

//     setUser(storedUser);
//     setToken(storedToken);

//     const fetchData = async () => {
//       try {
//         const productRes = await axios.get('/api/products/vendor', {
//           headers: { Authorization: `Bearer ${storedToken}` },
//         });
//         setProducts(productRes.data.products || []);

//         const orderRes = await axios.get('/api/orders/vendor', {
//           headers: { Authorization: `Bearer ${storedToken}` },
//         });
//         setOrders(orderRes.data.orders || []);
//       } catch (err) {
//         const message = err.response?.data?.message || err.message;
//         console.error(' Error fetching vendor data:', message);
//         if (message.includes('Invalid') || message.includes('expired')) {
//           localStorage.clear();
//           navigate('/login');
//         } else if (message.includes('Access denied')) {
//           alert('Access denied: You must be logged in as a vendor');
//           localStorage.clear();
//           navigate('/login');
//         } else {
//           alert('Failed to load vendor dashboard');
//         }
//       }
//     };

//     fetchData();
//   }, [navigate]);

// const getSoldCount = (productId) => {
//   return orders.reduce((total, order) => {
//     const items = Array.isArray(order.items) ? order.items : [];

//     const matches = items.filter(item => {
//       let idA = item?.productId;

//       // Handle populated or non-populated productId
//       if (idA && typeof idA === 'object' && '_id' in idA) {
//         idA = idA._id;
//       }

//       return idA?.toString() === productId.toString();
//     });

//     return total + matches.reduce((sum, i) => sum + i.quantity, 0);
//   }, 0);
// };

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const res = await axios.post('/api/products', { ...form, vendor: user._id }, {
//   //       headers: { Authorization: `Bearer ${token}` },
//   //     });
//   //     setProducts([...products, res.data]);
//   //     setForm({ name: '', price: '', category: '', image: '', description: '', weight: '', discount: '' });
//   //   } catch (err) {
//   //     console.log("📤 Submitting Product:", { ...form, vendor: user._id });

//   //     alert('Failed to add product');
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const productData = {
//       ...form,
//       price: Number(form.price),
//       weight: form.weight ? Number(form.weight) : 0,
//       discount: form.discount ? Number(form.discount) : 0,
//       vendor: user._id
//     };

//     console.log("📤 Submitting Product:", productData);

//     const res = await axios.post('/api/products', productData, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     setProducts([...products, res.data]);
//     setForm({ name: '', price: '', category: '', image: '', description: '', weight: '', discount: '' });
//   } catch (err) {
//     console.error("❌ Error adding product:", err);
//     alert('Failed to add product');
//   }
// };


//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login');
//   };

//   const categoryOptions = Object.values(categorySlugMapper);

//   console.log("🧪 Products:", products);
//   console.log("🧪 Orders:", orders);

//   return (
//     <div className="vendor-dashboard">
//       <div className="vendor-header">
//         <h1>📦 Vendor Dashboard</h1>
//         <div>
//           <span>Hello, {user?.name} (Vendor)</span>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit} className="add-product-form">
//         <h2>Add New Product</h2>
//         <input name="name" type="text" placeholder="Product Name" value={form.name} onChange={handleChange} required />
//         <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
//         <select name="category" value={form.category} onChange={handleChange} required>
//           <option value="">Select Category</option>
//           {categoryOptions.map((cat) => (
//             <option key={cat} value={cat}>{cat}</option>
//           ))}
//         </select>
//         <input name="image" type="text" placeholder="Image URL" value={form.image} onChange={handleChange} required />
//         <input name="description" type="text" placeholder="Description" value={form.description} onChange={handleChange} />
//         <input name="weight" type="text" placeholder="Weight" value={form.weight} onChange={handleChange} />
//         <input name="discount" type="text" placeholder="Discount" value={form.discount} onChange={handleChange} />
//         <button type="submit">+ Add Product</button>
//       </form>

//       <div className="product-list">
//         <h2>🛒 My Products</h2>
//         {products.length > 0 ? (
//           <div className="product-grid">
//             {products.map((p) => {
//               const sold = getSoldCount(p._id);
//               return (
//                 <div key={p._id} className="product-card">
//                   <h3>{p.name}</h3>
//                   <p>₹{p.price}</p>
//                   <p>Category: {p.category}</p>
//                   <p>Sold: {sold}</p>
//                   <p>Status: {sold > 0 ? '✅ Sold' : '🟢 Not Sold Yet'}</p>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <p>No products added yet.</p>
//         )}
//       </div>

//       <div className="sold-products">
//         <h2>📦 Sold Product History</h2>
//         {products.filter(p => getSoldCount(p._id) > 0).length > 0 ? (
//           <table className="sold-products-table">
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Sold Quantity</th>
//                 <th>Price (₹)</th>
//                 <th>Total Revenue (₹)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.filter(p => getSoldCount(p._id) > 0).map(p => {
//                 const soldQty = getSoldCount(p._id);
//                 const revenue = soldQty * p.price;
//                 return (
//                   <tr key={p._id}>
//                     <td>{p.name}</td>
//                     <td>{soldQty}</td>
//                     <td>{p.price}</td>
//                     <td>{revenue}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         ) : (
//           <p>No products sold yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VendorDashboard;


// ✅ frontend/pages/VendorDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import categorySlugMapper from '../utils/categorySlugMapper';
import './VendorDashboard.css';

const VendorDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({
    name: '', price: '', category: '', image: '',
    description: '', weight: '', discount: ''
  });
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const storedToken = localStorage.getItem('token');

    if (!storedUser._id || storedUser.role !== 'vendor' || !storedToken) {
      localStorage.clear();
      navigate('/login');
      return;
    }

    setUser(storedUser);
    setToken(storedToken);

    const fetchData = async () => {
      try {
        const productRes = await axios.get('/api/products/vendor', {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setProducts(productRes.data.products || []);

        const orderRes = await axios.get('/api/orders/vendor', {
          headers: { Authorization: `Bearer ${storedToken}` },
        });
        setOrders(orderRes.data.orders || []);
      } catch (err) {
        const message = err.response?.data?.message || err.message;
        console.error(' Error fetching vendor data:', message);
        if (message.includes('Invalid') || message.includes('expired')) {
          localStorage.clear();
          navigate('/login');
        } else if (message.includes('Access denied')) {
          alert('Access denied: You must be logged in as a vendor');
          localStorage.clear();
          navigate('/login');
        } else {
          alert('Failed to load vendor dashboard');
        }
      }
    };

    fetchData();
  }, [navigate]);

  const getSoldCount = (productId) => {
    return orders.reduce((total, order) => {
      const items = Array.isArray(order.items) ? order.items : [];
      const matches = items.filter(item => {
        let id = item.productId;
        if (id && typeof id === 'object' && '_id' in id) {
          id = id._id;
        }
        return id?.toString() === productId.toString();
      });
      return total + matches.reduce((sum, i) => sum + i.quantity, 0);
    }, 0);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        ...form,
        price: Number(form.price),
        weight: form.weight ? Number(form.weight) : 0,
        discount: form.discount ? Number(form.discount) : 0,
        vendor: user._id
      };

      console.log("📤 Submitting Product:", productData);

      const res = await axios.post('/api/products', productData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProducts([...products, res.data]);
      setForm({ name: '', price: '', category: '', image: '', description: '', weight: '', discount: '' });
    } catch (err) {
      console.error("❌ Error adding product:", err);
      alert('Failed to add product');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const categoryOptions = Object.values(categorySlugMapper);

  console.log("🧪 Products:", products);
  console.log("🧪 Orders:", orders);
  products.forEach(p => console.log("📊", p.name, "sold", getSoldCount(p._id)));

  return (
    <div className="vendor-dashboard">
      <div className="vendor-header">
        <h1>📦 Vendor Dashboard</h1>
        <div>
          <span>Hello, {user?.name} (Vendor)</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="add-product-form">
        <h2>Add New Product</h2>
        <input name="name" type="text" placeholder="Product Name" value={form.name} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
        <select name="category" value={form.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          {categoryOptions.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input name="image" type="text" placeholder="Image URL" value={form.image} onChange={handleChange} required />
        <input name="description" type="text" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="weight" type="text" placeholder="Weight" value={form.weight} onChange={handleChange} />
        <input name="discount" type="text" placeholder="Discount" value={form.discount} onChange={handleChange} />
        <button type="submit">+ Add Product</button>
      </form>

      <div className="product-list">
        <h2>🛒 My Products</h2>
        {products.length > 0 ? (
          <div className="product-grid">
            {products.map((p) => {
              const sold = getSoldCount(p._id);
              return (
                <div key={p._id} className="product-card">
                  <h3>{p.name}</h3>
                  <p>₹{p.price}</p>
                  <p>Category: {p.category}</p>
                  <p>Sold: {sold}</p>
                  <p>Status: {sold > 0 ? '✅ Sold' : '🟢 Not Sold Yet'}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No products added yet.</p>
        )}
      </div>

      <div className="sold-products">
        <h2>📦 Sold Product History</h2>
        {products.filter(p => getSoldCount(p._id) > 0).length > 0 ? (
          <table className="sold-products-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Sold Quantity</th>
                <th>Price (₹)</th>
                <th>Total Revenue (₹)</th>
              </tr>
            </thead>
            <tbody>
              {products.filter(p => getSoldCount(p._id) > 0).map(p => {
                const soldQty = getSoldCount(p._id);
                const revenue = soldQty * p.price;
                return (
                  <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{soldQty}</td>
                    <td>{p.price}</td>
                    <td>{revenue}</td>
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
  );
};

export default VendorDashboard;
