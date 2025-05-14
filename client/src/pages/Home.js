// src/pages/Home.jsx
import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import './Home.css';

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const dealsRef = useRef(null);
  const coffeeRef = useRef(null);

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

  const deals = [
    { name: "Amul Butter", price: "₹240", img: "/products/amul-butter.jpg" },
    { name: "Tata Tea", price: "₹150", img: "/products/tata-tea.jpg" },
    { name: "Colgate Toothpaste", price: "₹95", img: "/products/colgate.jpg" },
    { name: "Dairy Milk Chocolate", price: "₹85", img: "/products/dairymilk.jpg" },
    { name: "Aashirvaad Atta", price: "₹320", img: "/products/atta.jpg" },
    { name: "Tropicana Juice", price: "₹110", img: "/products/juice.jpg" },
    { name: "Amul Butter", price: "₹240", img: "/products/amul-butter.jpg" },
    { name: "Tata Tea", price: "₹150", img: "/products/tata-tea.jpg" },
    { name: "Colgate Toothpaste", price: "₹95", img: "/products/colgate.jpg" },
    { name: "Dairy Milk Chocolate", price: "₹85", img: "/products/dairymilk.jpg" },
    { name: "Aashirvaad Atta", price: "₹320", img: "/products/atta.jpg" },
    { name: "Real Mixed Fruit Juice", price: "₹110", img: "/products/realjuice.jpg" }
  
    
  ];

  const coffeeDeals = [
    { name: "Vietnamese Cold Coffee", price: "₹189", img: "/products/coffee1.png" },
    { name: "Hot Chocolate", price: "₹135", img: "/products/coffee2.png" },
    { name: "Classic Cold Coffee", price: "₹159", img: "/products/coffee3.png" },
    { name: "Hazelnut Cold Coffee", price: "₹169", img: "/products/coffee4.png" },
    { name: "Vietnamese Cold Coffee", price: "₹189", img: "/products/coffee1.png" },
    { name: "Hot Chocolate", price: "₹135", img: "/products/coffee2.png" },
    { name: "Classic Cold Coffee", price: "₹159", img: "/products/coffee3.png" },
  ];

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="home-container">

      {/* Categories Scroll */}
      <div className="categories-scroll" >
        {categories.map((cat, idx) => (
          <Link 
            key={idx}
            to={`/category/${encodeURIComponent(cat.name)}`}
            className="category-item"
          >
            <img src={cat.img} alt={cat.name} className="category-icon" />
            {/* <div className="category-name">{cat.name}</div> */}
          </Link>
        ))}
      </div>

      {/* Paan Corner Section */}
      <div className="section paan-corner text-center">
        
        <img src="/banners/PaanCorner.png" alt="Paan Corner" className="banner-image" />
      

      </div>

     {/* Super Sonic + Beauty Lit Section with inner slider */}
     <Row className="my-4" style={{ padding: "20px 0" }}>
        {/* Left Side */}
        <Col md={6} className="mb-3">
          <div className="deals-banner d-flex flex-column">
            {/* Super Sonic Image */}
            <div
              style={{
                backgroundColor: "black",
                borderRadius: "12px 12px 0 0",
                overflow: "hidden",
              }}
            >
              <img
                src="\banners\SuperSonic.webp"
                alt="Super Sonic Deals"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Black Slider Container */}
            <div
              style={{
                backgroundColor: "black",
                borderRadius: "0 0 12px 12px" /* Only bottom round corners */,
                padding: "15px",
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
              className="hide-scrollbar"
            >
              {/* Slider Cards */}
              <div className="deals-card d-inline-block mx-2">
                <img
                  src="/Slider/deal1.png"
                  alt="Deal 1"
                  style={{
                    width: "110px",
                    height: "100px",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="deals-card d-inline-block mx-2">
                <img
                  src="/Slider/deal2.png"
                  alt="Deal 2"
                  style={{
                    width: "110px",
                    height: "100px",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="deals-card d-inline-block mx-2">
                <img
                  src="/Slider/deal3.png"
                  alt="Deal 3"
                  style={{
                    width: "110px",
                    height: "100px",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="deals-card d-inline-block mx-2">
                <img
                  src="/Slider/deal4.png"
                  alt="Deal 4"
                  style={{
                    width: "110px",
                    height: "100px",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="deals-card d-inline-block mx-2">
                <img
                  src="/Slider/deal5.png"
                  alt="Deal 5"
                  style={{
                    width: "110px",
                    height: "100px",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>
          </div>
        </Col>

        {/* Right Side - BeautyLit + Pink Slider (no space between) */}
        <Col md={6} className="mb-3">
          <div className="deals-banner d-flex flex-column">
            {/* BeautyLit Image */}
            <div
              style={{
                background: "linear-gradient(to right, #ffdce0, #ffeef0)",
                borderRadius: "12px 12px 0 0",
                overflow: "hidden",
              }}
            >
              <img
                src="\banners\BeautyLIT.webp"
                alt="Beauty Lit Fest"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Pink Deals Slider Below */}
            <div
              style={{
                background: "linear-gradient(to right, #ffdce0, #ffeef0)",
                borderRadius: "0 0 12px 12px" /* Only bottom round corners */,
                padding: "15px",
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
              className="hide-scrollbar"
            >
              {/* Slider Cards */}
              <div className="deals-card d-inline-block mx-2">
                <img
                  src="/Slider/beauty1.png"
                  alt="Beauty 1"
                  style={{
                    width: "110px",
                    height: "100px",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="deals-card d-inline-block mx-2">
                <img
                  src="/Slider/beauty2.png"
                  alt="Beauty 2"
                  style={{
                    width: "110px",
                    height: "100px",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="deals-card d-inline-block mx-2">
                <img
                  src="/Slider/beauty3.png"
                  alt="Beauty 3"
                  style={{
                    width: "110px",
                    height: "100px",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="deals-card d-inline-block mx-2">
                <img
                  src="/Slider/beauty4.png"
                  alt="Beauty 4"
                  style={{
                    width: "110px",
                    height: "100px",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="deals-card d-inline-block mx-2">
                <img
                  src="/Slider/beauty5.png"
                  alt="Beauty 5"
                  style={{
                    width: "110px",
                    height: "100px",
                    borderRadius: "12px",
                  }}
                />
              </div>
              <div className="deals-card d-inline-block mx-2">
                <img
                  src="/Slider/beauty6.png"
                  alt="Beauty 6"
                  style={{
                    width: "110px",
                    height: "100px",
                    borderRadius: "12px",
                  }}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* Insurance + JioHotstar + Forex + Bank Cards Section */}
      <Row className="my-4 g-3">
        <Col md={3} sm={6} xs={12}>
          <div
            className="info-card shadow-sm rounded"
            style={{ overflow: "hidden", background: "#f7f7f7" }}
          >
            <img
              src="/Cards/LifeCover.webp"
              alt="Life Cover"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <div
            className="info-card shadow-sm rounded"
            style={{ overflow: "hidden", background: "#f7f7f7" }}
          >
            <img
              src="/Cards/JioHotstar.webp"
              alt="JioHotstar"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <div
            className="info-card shadow-sm rounded"
            style={{ overflow: "hidden", background: "#f7f7f7" }}
          >
            <img
              src="/Cards/ZeroForex.webp"
              alt="Zero Forex"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Col>

        <Col md={3} sm={6} xs={12}>
          <div
            className="info-card shadow-sm rounded"
            style={{ overflow: "hidden", background: "#f7f7f7" }}
          >
            <img
              src="/Cards/SavingAcc.webp"
              alt="Bank Savings"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </Col>
      </Row>

      {/* Deals of the Day */}
      <div className="section">
        <h2>Deals of the Day</h2>
        <div className="products-scroll" ref={dealsRef}>
          {deals.map((product, idx) => (
            <div key={idx} className="product-card">
              <img src={product.img} alt={product.name} className="product-img" />
              <h5 className="product-name">{product.name}</h5>
              <p className="product-price">{product.price}</p>
              <button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <Button variant="light" className="scroll-btn left" onClick={() => scrollLeft(dealsRef)}>←</Button>
        <Button variant="light" className="scroll-btn right" onClick={() => scrollRight(dealsRef)}>→</Button>
      </div>

      {/* Coffee Lovers */}
      <div className="section">
        <h2>Coffee Lovers</h2>
        <div className="products-scroll" ref={coffeeRef}>
          {coffeeDeals.map((coffee, idx) => (
            <div key={idx} className="product-card">
              <img src={coffee.img} alt={coffee.name} className="product-img" />
              <h5 className="product-name">{coffee.name}</h5>
              <p className="product-price">{coffee.price}</p>
              <button className="add-btn" onClick={() => addToCart(coffee)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <Button variant="light" className="scroll-btn left" onClick={() => scrollLeft(coffeeRef)}>←</Button>
        <Button variant="light" className="scroll-btn right" onClick={() => scrollRight(coffeeRef)}>→</Button>
      </div>

      {/* Footer */}
      <footer className="footer">
      <div className="popular-searches">
    <h4>Popular Searches</h4>


    

    <div className="search-row">
      <strong>Products :</strong>
      <span>Avocado | Strawberry | Pomegranate | Beetroot | Ash gourd | Bottle gourd | Lady finger | Potato | Lemon | Dalchini | Fennel seeds | Blueberry | Papaya | Dragon fruit</span>
    </div>

    <div className="search-row">
      <strong>Brands :</strong>
      <span>Yakult | My Muse | Aashirvaad Atta | Too Yumm | Lays | Figaro Olive Oil | Nandini Milk | Amul | Mother Dairy Near Me | Fortune Oil</span>
    </div>

    <div className="search-row">
      <strong>Categories :</strong>
      <span>Grocery | Curd | Hukka flavour | Paan shop near me | Eggs price | Cheese slice | Fresh fruits | Fresh vegetables | Refined oil | Butter price | Paneer price</span>
    </div>
  </div>

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
          {/* <div>
            <h5>Download App</h5>
            <button className="store-btn">Play Store</button>
            <button className="store-btn">App Store</button>
          </div>
           */}
           <div className="download-app">
  <h5>Download App</h5>

  <button className="store-btn">
    <img src="/icons/playstore.png" alt="Play Store" className="store-icon" />
    Get it on play store
  </button>

  <button className="store-btn">
    <img src="data:image/png;base64,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" alt="App Store" className="store-icon" />
    Get it on app store
  </button>
</div>
        </div>
        <p className="footer-bottom">© 2025 Zepto Clone by Sourabh Basarikatti. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;
