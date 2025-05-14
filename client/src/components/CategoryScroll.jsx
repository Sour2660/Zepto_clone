import React from 'react';
import '../styles/Home.css'; // Correct CSS path

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

const CategoryScroll = () => {
  return (
    <div className="category-scroll">
      {categories.map((cat, index) => (
        <div key={index} className="category-card">
          <img
            src={process.env.PUBLIC_URL + cat.img}
            alt={cat.name}
            className="category-image"
          />
          <div className="category-name">{cat.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryScroll;
