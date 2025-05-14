// src/pages/FruitsPage.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './FruitsPage.css'; 

const FruitsPage = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('Fruits & Vegetables');

  const categories = [
    { name: "Fruits & Vegetables", img: "/category/fruits.png" },
    { name: "Atta, Rice, Oil & Dals", img: "/category/atta.png" },
    { name: "Masala & Dry Fruits", img: "/category/masala.png" },
    { name: "Zepto Cafe", img: "/category/cafe.png" },
    { name: "Sweet Cravings", img: "/category/sweets.png" },
    { name: "Toys & Sports", img: "/category/toys.png" },
    { name: "Apparel & Lifestyle", img: "/category/apparel.png" },
    { name: "Jewellery & Accessories", img: "/category/jewellery.png" },
    { name: "Frozen Food", img: "/category/frozen.png" },
    { name: "Ice Creams & More", img: "/category/icecream.png" },
    { name: "Packaged Food", img: "/category/packaged.png" }
  ];

  const products = [
    { name: "Muskmelon", price: "₹60", weight: "600-800g", discount: "4%", img: "/products/muskmelon.png" },
    { name: "Organic Ginger", price: "₹200", weight: "200g", discount: "18%", img: "/products/ginger.png" },
    { name: "Assorted Roses", price: "₹100", weight: "100g", discount: "37%", img: "/products/roses.png" },
    { name: "Lucky Bamboo Plant", price: "₹130", weight: "1pc", discount: "22%", img: "/products/bamboo.png" },
    { name: "Coriander Leaves", price: "₹24", weight: "100g", discount: "48%", img: "/products/coriander.png" },
    { name: "Cucumber Green", price: "₹34", weight: "500g", discount: "29%", img: "/products/cucumber.png" },
    { name: "Tomato Local", price: "₹21", weight: "500g", discount: "27%", img: "/products/tomato.png" },
    { name: "Chilli Green", price: "₹16", weight: "100g", discount: "15%", img: "/products/chilli.png" },
  ];

  return (
    <div className="fruits-page-container">
      
      {/* Sidebar */}
      <aside className="sidebar">
        {categories.map((cat, idx) => (
          <div 
            key={idx}
            className={`sidebar-category ${selectedCategory === cat.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            <img src={cat.img} alt={cat.name} className="sidebar-icon" />
            <span>{cat.name}</span>
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h2 className="page-title">{selectedCategory}</h2>

        {/* Banner */}
        <div className="banner">
          <img 
            src="https://cdn.zeptonow.com/production/tr:w-600,f-auto,q-80/inventory/banner/eaff67d6-aa53-40fe-a6ba-38793acdd518.png" 
            alt="Season of the King" 
          />
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((item, index) => (
            <div key={index} className="product-card">
              <div className="discount-badge">{item.discount} Off</div>
              <img src={item.img} alt={item.name} className="product-img" />
              <h5 className="product-name">{item.name}</h5>
              <p className="product-weight">{item.weight}</p>
              <div className="price-section">
                <b>{item.price}</b>
              </div>
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FruitsPage;
