

// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';
// import Sidebar from '../components/Sidebar';
// import axios from 'axios';
// import categorySlugMapper from '../utils/categorySlugMapper'; // ✅ IMPORT
// import './CategoryPage.css';

// const CategoryPage = () => {
//   const { addToCart } = useContext(CartContext);
//   const { categoryName } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchCategoryProducts = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/products');
//         const dbCategory = categorySlugMapper[categoryName] || categoryName;

//         const filtered = res.data.filter(
//           (p) => p.category?.toLowerCase().includes(dbCategory.toLowerCase())
//         );

//         setProducts(filtered);
//       } catch (err) {
//         console.error('❌ Error fetching category products:', err);
//       }
//     };

//     fetchCategoryProducts();
//   }, [categoryName]);

//   return (
//     <div className="fruits-page-container">
//       <aside className="sidebar">
//         <Sidebar />
//       </aside>

//       <main className="main-content">
//         <h2 className="page-title">{categorySlugMapper[categoryName] || categoryName}</h2>

//         <div className="products-grid">
//           {products.length === 0 ? (
//             <h5>No products found in {categorySlugMapper[categoryName] || categoryName}!</h5>
//           ) : (
//             products.map((item) => (
//               <div key={item._id} className="product-card">
//                 {item.discount && (
//                   <div className="discount-badge">{item.discount} Off</div>
//                 )}
//                 <Link to={`/product/${item._id}`} className="product-link">
//                   <img
//                     src={item.image || '/images/default-product.png'}
//                     alt={item.name}
//                     className="product-img"
//                   />
//                   <h5 className="product-name">{item.name}</h5>
//                 </Link>
//                 <p className="product-weight">{item.weight}</p>
//                 <div className="price-section"><b>₹{item.price}</b></div>
//                 <button className="add-to-cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
//               </div>
//             ))
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CategoryPage;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';
// import Sidebar from '../components/Sidebar';
// import axios from 'axios';
// import categorySlugMapper from '../utils/categorySlugMapper';
// import './CategoryPage.css';

// const CategoryPage = () => {
//   const { addToCart } = useContext(CartContext);
//   const { categoryName } = useParams();
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchCategoryProducts = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/products');
//         const dbCategory = categorySlugMapper[categoryName] || categoryName;

//         const filtered = res.data.filter(
//           (p) => p.category?.trim().toLowerCase() === dbCategory.trim().toLowerCase()
//         );

//         setProducts(filtered);
//       } catch (err) {
//         console.error('❌ Error fetching category products:', err);
//       }
//     };

//     fetchCategoryProducts();
//   }, [categoryName]);

//   return (
//     <div className="fruits-page-container">
//       <aside className="sidebar">
//         <Sidebar />
//       </aside>

//       <main className="main-content">
//         <h2 className="page-title">{categorySlugMapper[categoryName] || categoryName}</h2>

//         <div className="products-grid">
//           {products.length === 0 ? (
//             <h5>No products found in {categorySlugMapper[categoryName] || categoryName}!</h5>
//           ) : (
//             products.map((item) => (
//               <div key={item._id} className="product-card">
//                 {item.discount && (
//                   <div className="discount-badge">{item.discount} Off</div>
//                 )}
//                 <Link to={`/product/${item._id}`} className="product-link">
//                   <img
//                     src={item.image || '/images/default-product.png'}
//                     alt={item.name}
//                     className="product-img"
//                   />
//                   <h5 className="product-name">{item.name}</h5>
//                 </Link>
//                 <p className="product-weight">{item.weight}</p>
//                 <div className="price-section"><b>₹{item.price}</b></div>
//                 <button className="add-to-cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
//               </div>
//             ))
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CategoryPage;

import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import categorySlugMapper from '../utils/categorySlugMapper';
import './CategoryPage.css';

const CategoryPage = () => {
  const { addToCart } = useContext(CartContext);
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        // const res = await axios.get('http://localhost:5000/api/products');
        const res = await axios.get('http://13.203.224.133:5000/api/products');
        const dbCategory = categorySlugMapper[categoryName] || categoryName;

        const filtered = res.data.filter(
          (p) => p.category?.trim().toLowerCase() === dbCategory.trim().toLowerCase()
        );

        setProducts(filtered);
      } catch (err) {
        console.error('❌ Error fetching category products:', err);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'lowToHigh') return a.price - b.price;
    if (sortOrder === 'highToLow') return b.price - a.price;
    return 0; // default
  });

  return (
    <div className="fruits-page-container">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="main-content">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="page-title">{categorySlugMapper[categoryName] || categoryName}</h2>
          <div className="sort-dropdown">
            <label htmlFor="sortSelect" className="me-2">Sort by:</label>
            <select id="sortSelect" value={sortOrder} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {sortedProducts.length === 0 ? (
            <h5>No products found in {categorySlugMapper[categoryName] || categoryName}!</h5>
          ) : (
            sortedProducts.map((item) => (
              <div key={item._id} className="product-card">
                {item.discount && (
                  <div className="discount-badge">{item.discount} Off</div>
                )}
                <Link to={`/product/${item._id}`} className="product-link">
                  <img
                    src={item.image || '/images/default-product.png'}
                    alt={item.name}
                    className="product-img"
                  />
                  <h5 className="product-name">{item.name}</h5>
                </Link>
                <p className="product-weight">{item.weight}</p>
                <div className="price-section"><b>₹{item.price}</b></div>
                <button className="add-to-cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
