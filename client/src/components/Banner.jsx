import React from 'react';
import '../styles/Home.css';

const Banner = () => {
  return (
    <div className="banner-section">
      <img
        src="/banners/banner1.png"
        alt="Super Sonic Deals"
        className="banner-image"
      />
      <img
        src="/banners/banner2.png"
        alt="Beauty Lit Fest"
        className="banner-image"
      />
    </div>
  );
};

export default Banner;
