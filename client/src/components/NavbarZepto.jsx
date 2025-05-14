
// import React, { useState, useEffect } from 'react';


// import { CartContext } from '../context/CartContext';
// import { Navbar, Container, Form, FormControl, Button, Modal } from 'react-bootstrap';
// import { Cart, PersonCircle } from 'react-bootstrap-icons';
// import { Link, useNavigate } from 'react-router-dom';
// import ToggleSwitch from './ToggleSwitch';
// import LocationPopup from './LocationPopup';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import LoginRegisterPopup from './LoginRegisterPopup';
// import { useContext } from 'react';

// import './NavbarZepto.css';


// const NavbarZepto = () => {
//   const { getCartItemCount } = useContext(CartContext);
//   const totalItems = getCartItemCount();
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showLoginModal, setShowLoginModal] = useState(false); // not used anymore for popup, but retained for fallback
//   const [showLocationPopup, setShowLocationPopup] = useState(false);
//   const [suppressLoginModal, setSuppressLoginModal] = useState(false); // used to suppress popup from location button
//   const [showLoginPopup, setShowLoginPopup] = useState(false); // new login/register popup trigger
//   const navigate = useNavigate();
  

//   const categories = [
//     { image: "shopping-bag.png", name: "All" },
//     { image: "love.png", name: "Home" },
//     { image: "toys.png", name: "Toys" },
//     { image: "coffee.png", name: "Cafe" },
//     { image: "electronics_icon.png", name: "Electronics" },
//     { image: "mobile_icon.png", name: "Mobiles" },
//     { image: "beauty_icon.png", name: "Beauty" },
//     { image: "fashion_icon.png", name: "Fashion" },
//     { image: "dealzone_icon.png", name: "Deal Zone" },
//     { image: "baby_icon.png", name: "Baby Store" }
//   ];

//   // Load user session
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       try {
//         setLoggedInUser(JSON.parse(userData));
//       } catch (err) {
//         console.error('Error parsing user data:', err);
//         setLoggedInUser(null);
//       }
//     } else {
//       setLoggedInUser(null);
//     }
//   }, []);
    
  

//   const handleLogout = () => {
//     localStorage.clear();
//     setLoggedInUser(null);
//     toast.success('Logged out successfully! 👋', { position: 'top-center' });
//     navigate('/');
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
//     }
//   };
  
  
  
//   return (
//     <>
//       <Navbar expand="lg" className="navbar-zepto shadow-sm">
//         <Container fluid className="px-4 align-items-center">
//           {/* Logo */}
//           <Navbar.Brand as={Link} to="/">
//             <img src="/logo/zepto-logo.png.svg" width="90" height="30" alt="Zepto Logo" />
//           </Navbar.Brand>

//           {/* Location Selector */}
//           <Button
//             variant="link"
//             className="text-black fw-bold ms-3"
//             onClick={() => {
//               setSuppressLoginModal(true);
//               setShowLocationPopup(true);
//             }}
//           >
//             Select Location
//           </Button>

//           {/* Toggle + Search */}
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll" className="justify-content-end">
//             <Form className="d-flex mx-3 my-2" onSubmit={handleSearch} style={{ maxWidth: "700px", width: "100%" }}>
//               <FormControl
//                 type="search"
//                 placeholder="Search products..."
//                 className="me-2 rounded-pill"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <Button variant="outline-dark" type="submit" className="rounded-pill">Search</Button>
//             </Form>

//             {/* Login/Profile/Cart */}
//             <div className="d-flex align-items-center ms-3">
//               {loggedInUser ? (
//                 <>
//                   <Link to="/account" className="text-black text-decoration-none d-flex align-items-center gap-2">
//                     <PersonCircle size={25} />
//                     <div><b>{loggedInUser.name || "Account"}</b></div>
//                   </Link>
//                   <Button variant="link" className="text-danger ms-2" onClick={handleLogout}>Logout</Button>
//                 </>
//               ) : (
//                 <Button
//                   variant="link"
//                   className="text-black d-flex align-items-center gap-2"
//                   onClick={() => {
//                     if (!suppressLoginModal) setShowLoginPopup(true);
//                     setSuppressLoginModal(false);
//                   }}
//                 >
//                   <PersonCircle size={25} />
//                   <div><b>Login</b></div>
//                 </Button>
//               )}

//               {/* <Link to="/cart" className="text-black ms-3 text-decoration-none d-flex align-items-center gap-2">
//                 <Cart size={25} />
//                 <div><b>Cart</b></div>
//               </Link> */}
//                <Link to="/cart" className="text-black ms-3 text-decoration-none d-flex align-items-center gap-2 position-relative">
//                        <Cart size={25} />
//                     <div><b>Cart</b></div>

//                   {totalItems > 0 && (
//              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                 {totalItems}
//                   </span>
//             )}
//                      </Link>


//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Category Scroll */}
//       <div className="category-row" style={{ overflowX: "auto", whiteSpace: "nowrap", background: "#fff", padding: "10px 20px" }}>
//         {categories.map((item, idx) => (
//           <div key={idx} className="d-inline-block text-center mx-3">
//             <img
//               src={`/icons/${item.image}`}
//               alt={item.name}
//               style={{ width: "40px", height: "40px", objectFit: "contain" }}
//             />
//             <div style={{ fontSize: "12px", marginTop: "5px" }}>{item.name}</div>
//           </div>
//         ))}
//       </div>

//       {/* 🔐 Modern Login/Register Popup */}
//       {showLoginPopup && (
//         <LoginRegisterPopup onClose={() => setShowLoginPopup(false)} />
//       )}

//       {/* 📍 Location Modal */}
//       {showLocationPopup && <LocationPopup onClose={() => setShowLocationPopup(false)} />}

//       {/* ✅ Toast Notifications */}
//       <ToastContainer />
//     </>
//   );
// };

// export default NavbarZepto;



// ✅ Updated NavbarZepto.jsx with logout, role check, and user name
// import React, { useState, useEffect, useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import { Navbar, Container, Form, FormControl, Button, Modal } from 'react-bootstrap';
// import { Cart, PersonCircle } from 'react-bootstrap-icons';
// import { Link, useNavigate } from 'react-router-dom';
// import ToggleSwitch from './ToggleSwitch';
// import LocationPopup from './LocationPopup';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// //import LoginRegisterPopup from './LoginRegisterPopup';
// import './NavbarZepto.css';
// import LoginPage from '../pages/LoginPage';

// const NavbarZepto = () => {
//   const { getCartItemCount } = useContext(CartContext);
//   const totalItems = getCartItemCount();
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const [showLocationPopup, setShowLocationPopup] = useState(false);
//   const [suppressLoginModal, setSuppressLoginModal] = useState(false);
//   const navigate = useNavigate();

//   const categories = [
//     { image: "shopping-bag.png", name: "All" },
//     { image: "love.png", name: "Home" },
//     { image: "toys.png", name: "Toys" },
//     { image: "coffee.png", name: "Cafe" },
//     { image: "electronics_icon.png", name: "Electronics" },
//     { image: "mobile_icon.png", name: "Mobiles" },
//     { image: "beauty_icon.png", name: "Beauty" },
//     { image: "fashion_icon.png", name: "Fashion" },
//     { image: "dealzone_icon.png", name: "Deal Zone" },
//     { image: "baby_icon.png", name: "Baby Store" }
//   ];

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');
//     if (token && userData) {
//       try {
//         setLoggedInUser(JSON.parse(userData));
//       } catch (err) {
//         console.error('Error parsing user data:', err);
//         setLoggedInUser(null);
//       }
//     } else {
//       setLoggedInUser(null);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     setLoggedInUser(null);
//     toast.success('Logged out successfully! 👋', { position: 'top-center' });
//     navigate('/login');
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
//     }
//   };

//   return (
//     <>
//       <Navbar expand="lg" className="navbar-zepto shadow-sm">
//         <Container fluid className="px-4 align-items-center">
//           <Navbar.Brand as={Link} to="/">
//             <img src="/logo/zepto-logo.png.svg" width="90" height="30" alt="Zepto Logo" />
//           </Navbar.Brand>

//           <Button
//             variant="link"
//             className="text-black fw-bold ms-3"
//             onClick={() => {
//               setSuppressLoginModal(true);
//               setShowLocationPopup(true);
//             }}
//           >
//             Select Location
//           </Button>

//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll" className="justify-content-end">
//             <Form className="d-flex mx-3 my-2" onSubmit={handleSearch} style={{ maxWidth: "700px", width: "100%" }}>
//               <FormControl
//                 type="search"
//                 placeholder="Search products..."
//                 className="me-2 rounded-pill"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <Button variant="outline-dark" type="submit" className="rounded-pill">Search</Button>
//             </Form>

//             <div className="d-flex align-items-center ms-3">
//               {loggedInUser ? (
//                 <>
//                   <span className="me-2">Hello, {loggedInUser.name} ({loggedInUser.role})</span>
//                   <Button variant="link" className="text-danger" onClick={handleLogout}>Logout</Button>
//                 </>
//               ) : (
//                 <Button
//                   variant="link"
//                   className="text-black d-flex align-items-center gap-2"
//                   onClick={() => {
//                     if (!suppressLoginModal) setShowLoginPage(true);
//                     setSuppressLoginModal(false);
//                   }}
//                 >
//                   <PersonCircle size={25} />
//                   <div><b>Login</b></div>
//                 </Button>
//               )}

//               <Link to="/cart" className="text-black ms-3 text-decoration-none d-flex align-items-center gap-2 position-relative">
//                 <Cart size={25} />
//                 <div><b>Cart</b></div>
//                 {totalItems > 0 && (
//                   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                     {totalItems}
//                   </span>
//                 )}
//               </Link>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <div className="category-row" style={{ overflowX: "auto", whiteSpace: "nowrap", background: "#fff", padding: "10px 20px" }}>
//         {categories.map((item, idx) => (
//           <div key={idx} className="d-inline-block text-center mx-3">
//             <img src={`/icons/${item.image}`} alt={item.name} style={{ width: "40px", height: "40px" }} />
//             <div style={{ fontSize: "12px", marginTop: "5px" }}>{item.name}</div>
//           </div>
//         ))}
//       </div>

//       {showLoginPopup && <LoginRegisterPopup onClose={() => setShowLoginPopup(false)} />}
//       {showLocationPopup && <LocationPopup onClose={() => setShowLocationPopup(false)} />}
//       <ToastContainer />
//     </>
//   );
// };

// export default NavbarZepto;


import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Cart, PersonCircle } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';
import LocationPopup from './LocationPopup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './NavbarZepto.css';

const NavbarZepto = () => {
  const { getCartItemCount } = useContext(CartContext);
  const totalItems = getCartItemCount();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [suppressLoginModal, setSuppressLoginModal] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { image: "shopping-bag.png", name: "All" },
    { image: "love.png", name: "Home" },
    { image: "toys.png", name: "Toys" },
    { image: "coffee.png", name: "Cafe" },
    { image: "electronics_icon.png", name: "Electronics" },
    { image: "mobile_icon.png", name: "Mobiles" },
    { image: "beauty_icon.png", name: "Beauty" },
    { image: "fashion_icon.png", name: "Fashion" },
    { image: "dealzone_icon.png", name: "Deal Zone" },
    { image: "baby_icon.png", name: "Baby Store" }
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      try {
        setLoggedInUser(JSON.parse(userData));
      } catch (err) {
        console.error('Error parsing user data:', err);
        setLoggedInUser(null);
      }
    } else {
      setLoggedInUser(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setLoggedInUser(null);
    toast.success('Logged out successfully! 👋', { position: 'top-center' });
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-zepto shadow-sm">
        <Container fluid className="px-4 align-items-center">
          <Navbar.Brand as={Link} to="/">
            <img src="/logo/zepto-logo.png.svg" width="90" height="30" alt="Zepto Logo" />
          </Navbar.Brand>

          <Button
            variant="link"
            className="text-black fw-bold ms-3"
            onClick={() => {
              setSuppressLoginModal(true);
              setShowLocationPopup(true);
            }}
          >
            Select Location
          </Button>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Form className="d-flex mx-3 my-2" onSubmit={handleSearch} style={{ maxWidth: "700px", width: "100%" }}>
              <FormControl
                type="search"
                placeholder="Search products..."
                className="me-2 rounded-pill"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="outline-dark" type="submit" className="rounded-pill">Search</Button>
            </Form>

            <div className="d-flex align-items-center ms-3">
              {loggedInUser ? (
                <>
                  <span className="me-2">Hello, {loggedInUser.name} ({loggedInUser.role})</span>
                  <Button variant="link" className="text-danger" onClick={handleLogout}>Logout</Button>
                </>
              ) : (
                <Button
                  variant="link"
                  className="text-black d-flex align-items-center gap-2"
                  onClick={() => {
                    setSuppressLoginModal(false);
                    navigate('/login');
                  }}
                >
                  <PersonCircle size={25} />
                  <div><b>Login</b></div>
                </Button>
              )}
               <Link to="/my-orders">My Orders</Link>

              <Link to="/cart" className="text-black ms-3 text-decoration-none d-flex align-items-center gap-2 position-relative">
                <Cart size={25} />
                <div><b>Cart</b></div>
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="category-row" style={{ overflowX: "auto", whiteSpace: "nowrap", background: "#fff", padding: "10px 20px" }}>
        {categories.map((item, idx) => (
          <div key={idx} className="d-inline-block text-center mx-3">
            <img src={`/icons/${item.image}`} alt={item.name} style={{ width: "40px", height: "40px" }} />
            <div style={{ fontSize: "12px", marginTop: "5px" }}>{item.name}</div>
          </div>
        ))}
      </div>

      {showLocationPopup && <LocationPopup onClose={() => setShowLocationPopup(false)} />}
      <ToastContainer />
    </>
  );
};

export default NavbarZepto;