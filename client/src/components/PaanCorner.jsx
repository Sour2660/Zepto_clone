import React from 'react';
import '../styles/Home.css';

const PaanCorner = () => {
  return (
    <div className="section paan-corner">
      <h2>Paan Corner</h2>
      <img
        src="/banners/paan-corner.png"
        alt="Paan Corner Banner"
        className="banner-image"
      />
      <p>Smoking Accessories, Mints & More</p>
      <button className="order-button">Order Now</button>
    </div>
  );
};

export default PaanCorner;
