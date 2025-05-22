/**
 * -----------------------------------------------------------------------------
 * Zepto Clone Application
 * -----------------------------------------------------------------------------
 * Developed by: Sourabh Basarikatti
 * Description : This file is part of the Zepto Clone project, developed to 
 *               simulate core functionalities and design of the original 
 *               Zepto application for educational and developmental purposes.
 * -----------------------------------------------------------------------------
 */

import React, { useContext, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  Row, Col, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import './Home.css';
import Footer from '../components/Footer';
import axios from 'axios';

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const dealsRef = useRef(null);
  const coffeeRef = useRef(null);
  const scrollRefMap = useRef({});
  const [categoryProducts, setCategoryProducts] = useState({});


  

  const cardLinks = {
  LifeCover: "https://www.axismaxlife.com/term-insurance-plans/premium-calculator?utmCode=143713627&utm_source=Partnership_Zepto&utm_medium=Display&utm_content=StaticBanner&utm_theme=2Crore&utm_term=2Cr_876PM_Static_NewParent_NonRS_110325",
  JioHotstar: "https://www.tataneu.com/v2/finance/creditcard/pdp/neucard?utm_source=Partnerships_external&utm_medium=Zepto&utm_campaign=Zepto_April_25",
  ZeroForex: "https://apply.scapia.cards/landing_page?campaign_image_asset=v1744873027%2Fspitha_prod_uploads%2F2025_04%2FScapiaforex2_1744873025455.webp&utm_source=Zepto&utm_content=Forex_NHC",
  SavingAcc: "https://www.bajajfinserv.in/webform/v1/emicard/login?utm_source=Partner5&utm_medium=banner&utm_campaign=HHI"
};

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
  { name: "Amul Butter", price: "₹240", img: "/products/Amul-Salted-Butter.png" },
  { name: "Tata Tea", price: "₹150", img: "/products/tata-tea.jpg" },
  { name: "Colgate Toothpaste", price: "₹95", img: "/products/colgate.jpg" },
  { name: "Dairy Milk Chocolate", price: "₹85", img: "/products/dairymilk.jpg" },
  { name: "Aashirvaad Atta", price: "₹320", img: "/products/atta.jpg" },
  { name: "Tropicana Juice", price: "₹110", img: "/products/juice1.jpg" },
  { name: "Tomato Local", price: "₹40", img: "/products/tomato.png" },
  { name: "Amul Milk", price: "₹29", img: "/products/Amul.png" }
];

  const coffeeDeals = [
    { name: "Vietnamese Cold Coffee", price: "₹189", img: "/products/coffee1.png" },
    { name: "Hot Chocolate", price: "₹135", img: "/products/coffee2.png" },
    { name: "Classic Cold Coffee", price: "₹159", img: "/products/coffee3.png" },
    { name: "Hazelnut Cold Coffee", price: "₹169", img: "/products/coffee4.png" },
    { name: "Vietnamese Cold Coffee", price: "₹189", img: "/products/coffee1.png" },
    { name: "Hot Chocolate", price: "₹135", img: "/products/coffee2.png" },
    { name: "Classic Cold Coffee", price: "₹159", img: "/products/coffee3.png" },
    { name: "Vietnamese Cold Coffee", price: "₹189", img: "/products/coffee1.png" }
  ];

  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://13.203.224.133:5000/api/products');
        const grouped = {};
        res.data.forEach((product) => {
          const cat = product.category || 'Others';
          if (!grouped[cat]) grouped[cat] = [];
          grouped[cat].push(product);
        });
        setCategoryProducts(grouped);
      } catch (error) {
        console.error('❌ Error loading products:', error);
      }
    };
    fetchProducts();
  }, []);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

   return (
    <div className="home-container">
      <div className="categories-scroll">
        {categories.map((cat, idx) => (
          <Link key={idx} to={`/category/${encodeURIComponent(cat.name)}`} className="category-item">
            <img src={cat.img} alt={cat.name} className="category-icon" />
          </Link>
        ))}
      </div>

     
      <div className="section paan-corner text-center">
     <a href="https://www.zepto.com/cn/paan-corner/cigarettes/cid/cd50825e-baf8-47fe-9abc-ed9556122a9a/scid/5bcbee47-7c83-4279-80f0-7ecc068496df" target="_blank" rel="noopener noreferrer" >
     <img src="/banners/PaanCorner.png" alt="Paan Corner" className="banner-image"/>
      </a>
     </div>

      <Row className="my-4" style={{ padding: "20px 0" }}>
        <Col md={6} className="mb-3">
          <div className="deals-banner d-flex flex-column">
            <div style={{ backgroundColor: "black", borderRadius: "12px 12px 0 0", overflow: "hidden" }}>
              <img src="/banners/SuperSonic.webp" alt="Super Sonic Deals" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ backgroundColor: "black", borderRadius: "0 0 12px 12px", padding: "15px", overflowX: "auto", whiteSpace: "nowrap" }} className="hide-scrollbar">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="deals-card d-inline-block mx-2">
                  <img src={`/Slider/deal${i}.png`} alt={`Deal ${i}`} style={{ width: "110px", height: "100px", borderRadius: "12px" }} />
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col md={6} className="mb-3">
          <div className="deals-banner d-flex flex-column">
            <div style={{ background: "linear-gradient(to right, #ffdce0, #ffeef0)", borderRadius: "12px 12px 0 0", overflow: "hidden" }}>
              <img src="/banners/BeautyLIT.webp" alt="Beauty Lit Fest" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <div style={{ background: "linear-gradient(to right, #ffdce0, #ffeef0)", borderRadius: "0 0 12px 12px", padding: "15px", overflowX: "auto", whiteSpace: "nowrap" }} className="hide-scrollbar">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="deals-card d-inline-block mx-2">
                  <img src={`/Slider/Beauty${i}.png`} alt={`Beauty ${i}`} style={{ width: "110px", height: "100px", borderRadius: "12px" }} />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>

  
      
<Row className="my-4 g-3">
  {["LifeCover", "JioHotstar", "ZeroForex", "SavingAcc"].map((card, i) => (
    <Col key={i} md={3} sm={6} xs={12}>
      <a
        href={cardLinks[card]}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div className="info-card shadow-sm rounded" style={{ overflow: "hidden", background: "#f7f7f7" }}>
          <img
            src={`/cards/${card}.webp`}
            alt={card}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </a>
    </Col>
  ))}
</Row>

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

      {Object.keys(categoryProducts).map((cat, idx) => {
        if (!scrollRefMap.current[cat]) {
          scrollRefMap.current[cat] = React.createRef();
        }
        const items = categoryProducts[cat].slice(0, 8);
        return (
          <div key={idx} className="section">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="mb-3">{cat}</h3>
              <Link to={`/category/${encodeURIComponent(cat)}`} className="text-primary">See All</Link>
            </div>
            <div className="products-scroll" ref={scrollRefMap.current[cat]}>
              {items.map((item) => (
                <div key={item._id} className="product-card">
                  {item.discount && <div className="discount-badge">{item.discount} Off</div>}
                  <Link to={`/product/${item._id}`} className="product-link">
                    <img src={item.image || '/images/default-product.png'} alt={item.name} className="product-img" />
                    <h5 className="product-name">{item.name}</h5>
                  </Link>
                  <p className="product-weight">{item.weight}</p>
                  <div className="price-section"><b>₹{item.price}</b></div>
                  <button className="add-btn" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              ))}
            </div>
            <Button variant="light" className="scroll-btn left" onClick={() => scrollRefMap.current[cat].current.scrollBy({ left: -300, behavior: 'smooth' })}>←</Button>
            <Button variant="light" className="scroll-btn right" onClick={() => scrollRefMap.current[cat].current.scrollBy({ left: 300, behavior: 'smooth' })}>→</Button>
          </div>
        );
      })}

      <Footer />
      </div>
  );
};

export default Home;
