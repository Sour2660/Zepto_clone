// src/pages/SearchResults.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../pages/productsData'; // adjust if needed
import '../pages/CategoryPage.css'

const SearchResults = () => {
  const { keyword } = useParams();

  // Combine all products from all categories
  const allProducts = Object.values(productsData).flat();

  // Filter products by search keyword
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="fruits-page-container">
      <aside className="sidebar"></aside>

      <main className="main-content">
        <h2 className="page-title">Search Results for "{keyword}"</h2>

        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <h5>No products found for "{keyword}"</h5>
          ) : (
            filteredProducts.map((item, idx) => (
              <div key={idx} className="product-card">
                {item.discount && <div className="discount-badge">{item.discount} Off</div>}
                <img src={item.img} alt={item.name} className="product-img" />
                <h5 className="product-name">{item.name}</h5>
                <p className="product-weight">{item.weight}</p>
                <div className="price-section">
                  <b>{item.price}</b>
                </div>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchResults;
