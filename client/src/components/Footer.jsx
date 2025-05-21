// import React from 'react';
// import '../styles/Home.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-grid">
//         <div>
//           <h5>Categories</h5>
//           <p>Fruits & Vegetables</p>
//           <p>Packaged Food</p>
//           <p>Frozen Food</p>
//         </div>
//         <div>
//           <h5>Company</h5>
//           <p>About Us</p>
//           <p>Careers</p>
//           <p>Privacy Policy</p>
//         </div>
//         <div>
//           <h5>Download App</h5>
//           <button className="store-btn">Play Store</button>
//           <button className="store-btn">App Store</button>
//         </div>
//       </div>
//       <p className="footer-bottom">© 2025 Zepto Clone. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "./Footer.css";
// import { Link } from "react-router-dom"; // 👈 Add this at the top

// const Footer = () => {
//   return (
//     <div className="zepto-footer mt-5 pt-4 pb-5" style={{ background: "#fafafa", fontSize: "14px" }}>
//       <Container>

//         {/* 🔧 How it Works */}
//         <h4 className="text-center fw-bold mb-4" style={{ fontSize: "22px" }}>How it Works</h4>
//         <Row className="g-4 text-center justify-content-center mb-5">
//           {[
//             {
//               img: "/Cards/place-order.svg",
//               title: "Open the app",
//               desc: "Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more"
//             },
//             {
//               img: "/Cards/Place-an-order.svg",
//               title: "Place an order",
//               desc: "Add your favourite items to the cart & avail the best offers"
//             },
//             {
//               img: "/Cards/get-free-delivery.svg",
//               title: "Get free delivery",
//               desc: "Experience lighting-fast speed & get all your items delivered in 10 minutes"
//             }
//           ].map((item, index) => (
//             <Col key={index} xs={12} md={4}>
//               <div className="p-4 bg-white shadow-sm rounded h-100">
//                 <img src={item.img} alt={item.title} style={{ height: "70px", marginBottom: "12px" }} />
//                 <h6 className="fw-bold mb-2">{item.title}</h6>
//                 <p className="text-muted small mb-0">{item.desc}</p>
//               </div>
//             </Col>
//           ))}
//         </Row>

//         {/* 🔍 Popular Searches */}
//         <div className="border-top pt-4">
//           <h6 className="fw-bold">Popular Searches</h6>
//           <div className="mb-2"><strong>Products</strong>: Avocado | Strawberry | Beetroot | Potato | Lemon | Blueberry | Papaya | Dragon fruit</div>
//           <div className="mb-2"><strong>Brands</strong>: Yakult | Amul | Aashirvaad Atta | Fortune Oil | Nandini Milk | Mother Dairy</div>
//           <div><strong>Categories</strong>: Grocery | Curd | Cheese slice | Fresh fruits | Eggs price | Paan shop near me</div>
//         </div>

//         {/* 📚 Categories
//         <div className="mt-4">
//           <h6 className="fw-bold">Categories</h6>
//           <Row xs={2} sm={3} md={6} className="text-muted">
//             {[
//               "Fruits & Vegetables", "Atta, Rice, Oil & Dals", "Masala & Dry Fruits", "Sweet Cravings", "Frozen Food & Ice Creams",
//               "Baby Food", "Dairy, Bread & Eggs", "Cold Drinks & Juices", "Munchies", "Meats, Fish & Eggs",
//               "Breakfast & Sauces", "Tea, Coffee & More", "Biscuits", "Makeup & Beauty", "Bath & Body",
//               "Cleaning Essentials", "Home Needs", "Electricals & Accessories", "Hygiene & Grooming", "Health & Baby Care",
//               "Homegrown Brands", "Paan Corner"
//             ].map((cat, i) => (
//               <Col key={i} className="mb-2">{cat}</Col>
//             ))}
//           </Row>
//         </div> */}

//         {/* 📚 Categories */}
// <div className="mt-4">
//   <h6 className="fw-bold">Categories</h6>
//   <Row xs={2} sm={3} md={6} className="text-muted">
//     {[
//       "Fruits & Vegetables", "Atta, Rice, Oil & Dals", "Masala & Dry Fruits", "Sweet Cravings", "Frozen Food & Ice Creams",
//       "Baby Food", "Dairy, Bread & Eggs", "Cold Drinks & Juices", "Munchies", "Meats, Fish & Eggs",
//       "Breakfast & Sauces", "Tea, Coffee & More", "Biscuits", "Makeup & Beauty", "Bath & Body",
//       "Cleaning Essentials", "Home Needs", "Electricals & Accessories", "Hygiene & Grooming", "Health & Baby Care",
//       "Homegrown Brands", "Paan Corner"
//     ].map((cat, i) => (
//       <Col key={i} className="mb-2">
//         <Link to={`/category/${encodeURIComponent(cat)}`} className="text-muted text-decoration-none">
//           {cat}
//         </Link>
//       </Col>
//     ))}
//   </Row>
// </div>

//         {/* 📌 Final Footer Section */}
//         <div className="border-top pt-4 mt-4 d-flex flex-wrap justify-content-between align-items-start">
//           {/* Logo + Social */}
//           {/* <div className="mb-3">
//             <img src="/icons/zepto-footer-logo.svg" alt="Zepto" style={{ height: "30px", marginBottom: "10px" }} />
//             <div className="d-flex gap-3">
//               <i className="bi bi-instagram"></i>
//               <i className="bi bi-twitter"></i>
//               <i className="bi bi-facebook"></i>
//               <i className="bi bi-linkedin"></i>
//             </div>
//             <p className="small mt-2 text-muted">© KiranaKart Technologies Private Limited</p>
//           </div> */}
          

//           {/* Links */}
//           <Row className="w-100 mt-3">
//             <Col sm={6} md={3}>
//               <p className="fw-bold">Company</p>
//               <ul className="list-unstyled text-muted small">
//                 <li>Home</li>
//                 <li>Delivery Areas</li>
//                 <li>Careers</li>
//                 <li>Customer Support</li>
//                 <li>Press</li>
//               </ul>
//             </Col>
//             <Col sm={6} md={3}>
//               <p className="fw-bold">Legal</p>
//               <ul className="list-unstyled text-muted small">
//                 <li>Privacy Policy</li>
//                 <li>Terms of Use</li>
//                 <li>Responsible Disclosure</li>
//                 <li>Mojo - Zepto Blog</li>
//                 <li>Sell on Zepto</li>
//               </ul>
//             </Col>
//             <Col sm={12} md={3}>
//               <p className="fw-bold">Download App</p>
//               <div className="d-flex flex-column gap-2">
//                 <img src="/icons/google-play-badge.png" alt="Play Store" style={{ height: "40px" }} />
//                 <img src="/icons/app-store-badge.png" alt="App Store" style={{ height: "40px" }} />
//               </div>
//             </Col>
//           </Row>
//         </div>

//       </Container>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="zepto-footer mt-5 pt-4 pb-5" style={{ background: "#fafafa", fontSize: "14px" }}>
      <Container>

        {/* 🛒 How it Works */}
        <h4 className="text-center fw-bold mb-4" style={{ fontSize: "22px" }}>How it Works</h4>
        <Row className="g-4 text-center justify-content-center mb-5">
          {[
            {
              img: "/cards/place-order.svg",
              title: "Open the app",
              desc: "Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more"
            },
            {
              img: "/cards/Place-an-order.svg",
              title: "Place an order",
              desc: "Add your favourite items to the cart & avail the best offers"
            },
            {
              img: "/cards/get-free-delivery.svg",
              title: "Get free delivery",
              desc: "Experience lightning-fast speed & get all your items delivered in 10 minutes"
            }
          ].map((item, index) => (
            <Col key={index} xs={12} md={4}>
              <div className="p-4 bg-white shadow-sm rounded h-100">
                <img src={item.img} alt={item.title} style={{ height: "150px", marginBottom: "12px" }} />
                <h6 className="fw-bold mb-2">{item.title}</h6>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* 🔍 Popular Searches */}
        {/* 🔍 Popular Searches */}
{/* 🔍 Popular Searches */}
<div className="popular-searches border-top pt-4 mt-4">
  <h6 className="fw-bold mb-3">Popular Searches</h6>

  <div className="mb-2">
    <strong>Products</strong> :{" "}
    <span className="search-items">
      Avocado | Strawberry | Pomegranate | Beetroot | Ash gourd | Bottle gourd | Lady finger | Potato | Lemon | Dalchini | Fennel seeds | Blueberry | Papaya | Dragon fruit | Mushroom 
    </span>
  </div>

  <div className="mb-2">
    <strong>Brands</strong> :{" "}
    <span className="search-items">
      Yakult | My Muse | Aashirvaad Atta | Too Yumm | Lays | Figaro Olive Oil | Nandini Milk | Amul | Mother Dairy Near Me | Fortune Oil | Superyou | Durex Condoms | Ferns and Petals
    </span>
  </div>

  <div className="mb-2">
    <strong>Categories</strong> :{" "}
    <span className="search-items">
      Grocery | Cigarettes | Chips | Curd | Hukka flavour | Paan shop near me | Eggs price | Cheese slice | Fresh fruits | Fresh vegetables | Refined oil | Butter price | Paneer price
    </span>
  </div>
</div>


       
        {/* 📚 Categories */}
       
        <div className="mt-4">
  <h6 className="fw-bold">Categories</h6>
  <Row xs={2} sm={3} md={6} className="text-muted">
    {[
      "Fruits & Vegetables", "Atta, Rice, Oil & Dals", "Masala & Dry Fruits", "Sweet Cravings", "Frozen Food & Ice Creams",
      "Baby Food", "Dairy, Bread & Eggs", "Cold Drinks & Juices", "Munchies", "Meats, Fish & Eggs",
      "Breakfast & Sauces", "Tea, Coffee & More", "Biscuits", "Makeup & Beauty", "Bath & Body",
      "Cleaning Essentials", "Home Needs", "Electricals & Accessories", "Hygiene & Grooming", "Health & Baby Care",
      "Homegrown Brands", "Paan Corner"
    ].map((cat, i) => (
      <Col key={i} className="mb-2">
        <Link
          to={`/category/${encodeURIComponent(cat)}`}
          className="category-link"
        >
          {cat}
        </Link>
      </Col>
    ))}
  </Row>
</div>


        {/* 📌 Final Footer Section */}
        <div className="border-top pt-4 mt-4 d-flex flex-wrap justify-content-between align-items-start">
          {/* 🚀 Logo + Social */}
          <div className="mb-3">
  {/* Zepto Logo */}
  <img src="/icons/zepto-footer-logo.svg" alt="Zepto" style={{ height: "30px", marginBottom: "10px" }} />

  {/* Social Icons BELOW logo */}
 <div className="d-flex gap-4 mt-3 social-icons">
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <i className="bi bi-instagram"></i>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
    <i className="bi bi-twitter"></i>
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <i className="bi bi-facebook"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <i className="bi bi-linkedin"></i>
  </a>
</div>



   <p className="small mt-2 text-muted">© Zepto Clone by Sourabh Basarikatti. All rights reserved.</p>

</div>


          {/* 🧭 Links */}
          <Row className="w-100 mt-3">
           
               <Col sm={6} md={3}>
    <p className="fw-bold mb-2">Company</p>
    <ul className="list-unstyled text-muted small">
      <li><a href="/" className="footer-link">Home</a></li>
      <li><a href="https://www.zepto.com/del-areas" target="_blank" rel="noopener noreferrer" className="footer-link">Delivery Areas</a></li>
      <li><a href="https://zepto.talentrecruit.com/career-page" target="_blank" rel="noopener noreferrer" className="footer-link">Careers</a></li>
      <li><a href="https://www.zepto.com/customer-support" target="_blank" rel="noopener noreferrer" className="footer-link">Customer Support</a></li>
      <li><a href="https://www.zepto.com/press" target="_blank" rel="noopener noreferrer" className="footer-link">Press</a></li>
    </ul>
  </Col>
            
             <Col sm={6} md={3}>
    <p className="fw-bold mb-2">Legal</p>
    <ul className="list-unstyled text-muted small">
      <li><a href="https://www.zepto.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="footer-link">Privacy Policy</a></li>
      <li><a href="https://www.zepto.com/terms-of-service" target="_blank" rel="noopener noreferrer" className="footer-link">Terms of Use</a></li>
      <li><a href="https://www.zepto.com/responsible-disclosure-policy" target="_blank" rel="noopener noreferrer" className="footer-link">Responsible Disclosure</a></li>
      <li><a href="https://blog.zeptonow.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Mojo - Zepto Blog</a></li>
      <li><a href="https://brands.zepto.co.in/zepto" target="_blank" rel="noopener noreferrer" className="footer-link">Sell on Zepto</a></li>
    </ul>
  </Col>
           <Col sm={12} md={3}>
    <p className="fw-bold mb-2">Download App</p>
    <div className="d-flex flex-column gap-2">
      <a href="https://play.google.com/store/apps/details?id=com.zeptoconsumerapp" target="_blank" rel="noopener noreferrer">
        <img src="/icons/play-store.png" alt="Play Store" style={{ height: "42px", width: "auto" }} />
      </a>
      <a href="https://apps.apple.com/in/app/zepto-10-minute-grocery-app/id1603610443" target="_blank" rel="noopener noreferrer">
        <img src="/icons/app-store.png" alt="App Store" style={{ height: "42px", width: "auto" }} />
      </a>
    </div>
  </Col>

          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;