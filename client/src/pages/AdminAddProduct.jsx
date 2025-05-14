// src/pages/AdminAddProduct.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './AdminAddProduct.css'; // optional CSS

const AdminAddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    image: '',
    price: '',
    description: '',
    weight: '',
    discount: '',
    category: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', product);
      alert('✅ Product added successfully!');
      setProduct({ name: '', image: '', price: '', description: '', weight: '', discount: '', category: '' });
    } catch (error) {
      console.error('❌ Error adding product:', error);
      alert('❌ Failed to add product');
    }
  };

  return (
    <div className="admin-add-product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(product).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key}
            value={product[key]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
