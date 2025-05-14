import React from 'react';
import '../styles/Home.css';

const coffeeItems = [
  { name: 'Vietnamese Cold Coffee', price: '₹189', img: '/products/coffee1.png' },
  { name: 'Hot Chocolate', price: '₹135', img: '/products/coffee2.png' },
  { name: 'Classic Cold Coffee', price: '₹159', img: '/products/coffee3.png' },
  { name: 'Hazelnut Cold Coffee', price: '₹169', img: '/products/coffee4.png' },
];

const CoffeeLovers = () => {
  return (
    <div className="section coffee-lovers">
      <h2>Coffee Lovers</h2>
      <div className="products-grid">
        {coffeeItems.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.img} alt={item.name} className="product-img" />
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <button className="add-btn">Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeLovers;
