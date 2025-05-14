// // src/components/Sidebar.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css'; // we'll also write a CSS file

// const categories = [
//   "Fruits & Vegetables",
//   "Toys & Sports",
//   "Zepto Cafe",
//   "Masala & Dry Fruits",
//   "Atta, Rice, Oil & Dals",
//   "Sweet Cravings",
//   "Jewellery & Accessories",
//   "Apparel & Lifestyle",
//   "Frozen Food",
//   "Ice Creams & More",
//   "Packaged Food"
// ];

// const Sidebar = ({ onClose }) => {
//   return (
//     <div className="sidebar-container">
//       <h4 className="sidebar-title">Categories</h4>

//       <ul className="sidebar-list">
//         {categories.map((category, idx) => (
//           <li key={idx} className="sidebar-item">
//             <Link to={`/category/${encodeURIComponent(category)}`} className="sidebar-link">
//               {category}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {onClose && (
//         <button className="sidebar-close-btn" onClick={onClose}>
//           Close
//         </button>
//       )}
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

// Add corresponding slug routes for each category
const categories = [
  { label: "Fruits & Vegetables", slug: "fruits-vegetables" },
  { label: "Toys & Sports", slug: "toys-sports" },
  { label: "Zepto Cafe", slug: "zepto-cafe" },
  { label: "Masala & Dry Fruits", slug: "masala-dry-fruits" },
  { label: "Atta, Rice, Oil & Dals", slug: "atta-rice-oil-dals" },
  { label: "Sweet Cravings", slug: "sweet-cravings" },
  { label: "Jewellery & Accessories", slug: "jewellery-accessories" },
  { label: "Apparel & Lifestyle", slug: "apparel-lifestyle" },
  { label: "Frozen Food", slug: "frozen-food" },
  { label: "Ice Creams & More", slug: "ice-creams" },
  { label: "Packaged Food", slug: "packaged-food" }
];

const Sidebar = ({ onClose }) => {
  return (
    <div className="sidebar-container">
      <h4 className="sidebar-title">🗂️ Categories</h4>
      <ul className="sidebar-list">
        {categories.map((cat, idx) => (
          <li key={idx} className="sidebar-item">
            <Link to={`/category/${cat.slug}`} className="sidebar-link">
              {cat.label}
            </Link>
          </li>
        ))}
      </ul>

      {onClose && (
        <button className="sidebar-close-btn" onClick={onClose}>
          ❌ Close
        </button>
      )}
    </div>
  );
};

export default Sidebar;

