import React from 'react';
import '../styles/Home.css';

const deals = [
  { name: 'Onion', price: '₹19', img: '/products/onion.png' },
  { name: 'Tomato Local', price: '₹8', img: '/products/tomato.png' },
  { name: 'Carrot Local', price: '₹5', img: '/products/carrot.png' },
  { name: 'Banana Elaichi', price: '₹40', img: '/products/banana.png' },
];

const DealsOfTheDay = () => {
  return (
    <div className="section">
      <h2>Deals of the Day</h2>
      <div className="products-grid">
        {deals.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.img} alt={product.name} className="product-img" />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button className="add-btn">Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheDay;
