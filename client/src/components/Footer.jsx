import React from 'react';
import '../styles/Home.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h5>Categories</h5>
          <p>Fruits & Vegetables</p>
          <p>Packaged Food</p>
          <p>Frozen Food</p>
        </div>
        <div>
          <h5>Company</h5>
          <p>About Us</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h5>Download App</h5>
          <button className="store-btn">Play Store</button>
          <button className="store-btn">App Store</button>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Zepto Clone. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
