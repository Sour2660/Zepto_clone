import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from '../models/Product.js';

// ✅ Load environment variables
dotenv.config();

console.log("Loaded MONGO_URI:", process.env.MONGO_URI); // Debug line

const products = [
  {
    name: 'Muskmelon',
    image: '/products/muskmelon.png',
    price: 60,
    description: 'Juicy fresh muskmelon.',
    weight: '600-800g',
    discount: '4%',
    category: 'Fruits & Vegetables'
  },
  {
    name: 'Teddy Bear',
    image: '/products/teddy.png',
    price: 700,
    description: 'Soft and fluffy teddy bear.',
    weight: '-',
    discount: '20%',
    category: 'Toys & Sports'
  },
  { name: "Organic Ginger",
    image: "/products/ginger.png",
    description: 'Organic Ginger',
    price: 200, 
    weight: "200g",
    discount: "18%",
    category: 'Fruits & Vegetables'

 },
 {
    name: "Watermelon",
    image: "/products/Watermelon.webp",
    price: 60,
    weight: "600-800g",
    discount: "4%",
    description: "Fresh Watermelon from the farm.",
    category: "Fruits & Vegetables"
  },
  {
    name: "Mango Raspuri",
    image: "/products/Mango-Raspuri.webp",
    price: 200,
    weight: "200g",
    discount: "18%",
    description: "Sweet and juicy Raspuri Mango.",
    category: "Fruits & Vegetables"
  },
  {
    name: "Mango Totapuri Raw",
    image: "/products/Mango-Totapuri-Raw.webp",
    price: 60,
    weight: "600-800g",
    discount: "4%",
    description: "Tangy raw Totapuri Mango.",
    category: "Fruits & Vegetables"
  },
  {
    name: "Mushroom Button",
    image: "/products/Mushroom-Button.webp",
    price: 200,
    weight: "200g",
    discount: "18%",
    description: "Fresh Button Mushrooms.",
    category: "Fruits & Vegetables"
  },
  {
    name: "Fresh Roses",
    image: "/products/roses.png",
    price: 60,
    weight: "800g",
    discount: "4%",
    description: "Fragrant and colorful fresh roses.",
    category: "Fruits & Vegetables"
  },
  {
    name: "Beetroot",
    image: "/products/Beetroot.webp",
    price: 200,
    weight: "200g",
    discount: "18%",
    description: "Nutritious fresh beetroot.",
    category: "Fruits & Vegetables"
  },
  {
    name: "Banana Robusta",
    image: "/products/Banana-Robusta.webp",
    price: 60,
    weight: "600-800g",
    discount: "4%",
    description: "Robust and ripe bananas.",
    category: "Fruits & Vegetables"
  },
  {
    name: "Coconut Big",
    image: "/products/Coconut-Big.webp",
    price: 200,
    weight: "200g",
    discount: "18%",
    description: "Big fresh coconuts with water and meat.",
    category: "Fruits & Vegetables"
  },
  {
    name: "Toy Car",
    image: "/products/toy.png",
    price: 500,
    description: "Toy Car - Fun and engaging toy for all ages.",
    weight: "-",
    discount: "10%",
    category: "Toys & Sports"
  },
  {
    name: "Teddy Bear",
    image: "/products/teddy.png",
    price: 700,
    description: "Teddy Bear - Fun and engaging toy for all ages.",
    weight: "-",
    discount: "20%",
    category: "Toys & Sports"
  },
  {
    name: "Football",
    image: "/products/football.png",
    price: 999,
    description: "Football - Fun and engaging toy for all ages.",
    weight: "-",
    discount: "15%",
    category: "Toys & Sports"
  },
  {
    name: "Batman Toy",
    image: "/products/Batman.png",
    price: 1500,
    description: "Batman Toy - Fun and engaging toy for all ages.",
    weight: "-",
    discount: "10%",
    category: "Toys & Sports"
  },
  {
    name: "Cold Coffee",
    image: "/products/coffee1.png",
    price: 150,
    description: "Cold Coffee - Refreshing and energizing.",
    weight: "300ml",
    discount: "5%",
    category: "Zepto Cafe"
  },
  {
    name: "Hot Coffee",
    image: "/products/coffee2.png",
    price: 250,
    description: "Hot Coffee - Perfect for a cozy day.",
    weight: "150ml",
    discount: "5%",
    category: "Zepto Cafe"
  },
  {
    name: "Iced Latte",
    image: "/products/coffee3.png",
    price: 750,
    description: "Iced Latte - A cool coffee blend for summer.",
    weight: "300ml",
    discount: "5%",
    category: "Zepto Cafe"
  },
  {
    name: "Cappuccino",
    image: "/products/coffee4.png",
    price: 450,
    description: "Cappuccino - Classic Italian coffee.",
    weight: "200ml",
    discount: "5%",
    category: "Zepto Cafe"
  },
  {
    name: "Mocha",
    image: "/products/coffee1.png",
    price: 350,
    description: "Mocha - A delightful mix of coffee and chocolate.",
    weight: "150ml",
    discount: "5%",
    category: "Zepto Cafe"
  },
  {
    name: "Espresso Shot",
    image: "/products/espresso.png",
    price: 120,
    description: "Espresso Shot - Strong and bold caffeine fix.",
    weight: "60ml",
    discount: "4%",
    category: "Zepto Cafe"
  },
  {
    name: "Choco Frappe",
    image: "/products/choco-frappe.png",
    price: 300,
    description: "Choco Frappe - Cold chocolatey indulgence.",
    weight: "250ml",
    discount: "8%",
    category: "Zepto Cafe"
  },
  {
    name: "Vanilla Milkshake",
    image: "/products/vanilla-milkshake.png",
    price: 280,
    description: "Vanilla Milkshake - Creamy and sweet delight.",
    weight: "300ml",
    discount: "7%",
    category: "Zepto Cafe"
  },
  {
    name: "Cold Brew Coffee",
    image: "/products/cold-brew.png",
    price: 350,
    description: "Cold Brew Coffee - Slow-brewed perfection.",
    weight: "300ml",
    discount: "6%",
    category: "Zepto Cafe"
  },
  {
    name: "Green Tea",
    image: "/products/green-tea.png",
    price: 180,
    description: "Green Tea - Light and healthy beverage.",
    weight: "200ml",
    discount: "5%",
    category: "Zepto Cafe"
  },
  {
    name: "Daily Good Figs (Anjeer)",
    image: "/products/Daily-Good-Figs-Anjeer.webp",
    price: 500,
    description: "Premium quality dried figs (Anjeer).",
    weight: "-",
    discount: "10%",
    category: "Masala & Dry Fruits"
  },
  {
    name: "Catch Jeera Whole",
    image: "/products/Catch-Jeera-Whole.webp",
    price: 700,
    description: "Whole cumin seeds from Catch for rich aroma.",
    weight: "-",
    discount: "20%",
    category: "Masala & Dry Fruits"
  },
  {
    name: "Parrys White Label Sugar",
    image: "/products/Parrys-White-Label-Sugar.webp",
    price: 700,
    description: "Refined white sugar for everyday use.",
    weight: "-",
    discount: "20%",
    category: "Masala & Dry Fruits"
  },
  {
    name: "Aashirvaad Turmeric Powder",
    image: "/products/Aashirvaad-Turmeric-Haldi-Powder.webp",
    price: 500,
    description: "Pure and high-quality turmeric powder.",
    weight: "-",
    discount: "10%",
    category: "Masala & Dry Fruits"
  },
  {
    name: "Daily Good Mustard Seeds",
    image: "/products/Daily-Good-Mustard-Rai-Sarso-Small.webp",
    price: 700,
    description: "Aromatic mustard seeds for tempering and cooking.",
    weight: "-",
    discount: "20%",
    category: "Masala & Dry Fruits"
  },
  {
    name: "Daily Good Apricots",
    image: "/products/Daily-Good-Apricots-Khubani-Jardalu.webp",
    price: 700,
    description: "Dried apricots, rich in fiber and flavor.",
    weight: "-",
    discount: "20%",
    category: "Masala & Dry Fruits"
  },
  {
    name: "Aashirvaad Atta",
    image: "/products/Aashirvaad-Turmeric-Haldi-Powder.webp",
    price: 320,
    description: "Whole wheat flour for soft rotis and daily use.",
    weight: "5kg",
    discount: "8%",
    category: "Atta, Rice, Oil & Dals"
  },
  {
    name: "Kapiva-A2-Cow-Desi-Ghee",
    image: "/products/Kapiva-A2-Cow-Desi-Ghee.png",
    price: 1200,
    description: "Pure A2 cow desi ghee with rich aroma and taste.",
    weight: "5L",
    discount: "10%",
    category: "Atta, Rice, Oil & Dals"
  },
  {
    name: "India Gate Basmati Rice",
    image: "/products/IndiaGate.png",
    price: 800,
    description: "Premium long grain basmati rice, aged and aromatic.",
    weight: "5kg",
    discount: "12%",
    category: "Atta, Rice, Oil & Dals"
  },
  {
    name: "Fortune Chakki Fresh Atta",
    image: "/products/Fortune-Chakki-Atta.png",
    price: 350,
    description: "Chakki fresh atta for fluffy and soft rotis.",
    weight: "5kg",
    discount: "10%",
    category: "Atta, Rice, Oil & Dals"
  },
  {
    name: "Saffola Gold Oil",
    image: "/products/Saffola-Gold-Oil.png",
    price: 1400,
    description: "Heart-healthy cooking oil blend from Saffola.",
    weight: "5L",
    discount: "15%",
    category: "Atta, Rice, Oil & Dals"
  },
  {
    name: "Daawat Biryani Basmati Rice",
    image: "/products/Daawat-Pulav-Basmati-Rice-Long-Grain.png",
    price: 900,
    description: "Long grain rice perfect for delicious biryanis.",
    weight: "5kg",
    discount: "12%",
    category: "Atta, Rice, Oil & Dals"
  },
  {
    name: "Tata Sampann Toor Dal",
    image: "/products/Tata-Toor-Dal.png",
    price: 250,
    description: "Unpolished toor dal rich in protein and taste.",
    weight: "1kg",
    discount: "8%",
    category: "Atta, Rice, Oil & Dals"
  },
  {
    name: "Tata Sampann Moong Dal",
    image: "/products/Tata-Sampann-Unpolished-Moong-Dal.png",
    price: 280,
    description: "Unpolished moong dal for a healthy lifestyle.",
    weight: "1kg",
    discount: "10%",
    category: "Atta, Rice, Oil & Dals"
  },
  {
    name: "24 Mantra Organic Brown Rice",
    image: "/products/24Mantra-BrownRice.png",
    price: 450,
    description: "Organic brown rice, ideal for fitness enthusiasts.",
    weight: "1kg",
    discount: "12%",
    category: "Atta, Rice, Oil & Dals"
  },
  {
    name: "Nature Fresh Sampoorna Chakki Atta",
    image: "/products/Nature-Fresh-Sampoorna-Chakki-Atta.png",
    price: 1500,
    description: "High fiber atta for daily consumption.",
    weight: "5kg",
    discount: "10%",
    category: "Atta, Rice, Oil & Dals"
  },
  { name: "Gold Plated Necklace",
     price: 2500, 
     description: "Elegannt gold",
     weight: "-", 
     discount: "15%",
     image: "/products/Priyaasi-Quintessence-Rose-Gold-Plated-American-Diamond-Studded-Hoop-Earrings.webp",
     category: "Jewellery & Accessories"
     },
     { name: "Cold Coffee", image: "/products/coffee1.png", price: 150, description: "Cold Coffee", weight: "300ml", discount: "5%", category: "Zepto Cafe" },
     { name: "Cold Coffee", image: "/products/coffee1.png", price: 150, description: "Cold Coffee", weight: "300ml", discount: "5%", category: "Zepto Cafe" },
     { name: "Hot Coffee", image: "/products/coffee2.png", price: 250, description: "Hot Coffee", weight: "150ml", discount: "5%", category: "Zepto Cafe" },
     { name: "Iced Latte", image: "/products/coffee3.png", price: 750, description: "Iced Latte", weight: "300ml", discount: "5%", category: "Zepto Cafe" },
     { name: "Cappuccino", image: "/products/coffee4.png", price: 450, description: "Cappuccino", weight: "200ml", discount: "5%", category: "Zepto Cafe" },
     { name: "Mocha", image: "/products/coffee1.png", price: 350, description: "Mocha", weight: "150ml", discount: "5%", category: "Zepto Cafe" },
     { name: "Espresso Shot", image: "/products/espresso.png", price: 120, description: "Espresso", weight: "60ml", discount: "4%", category: "Zepto Cafe" },
     { name: "Choco Frappe", image: "/products/choco-frappe.png", price: 300, description: "Choco Frappe", weight: "250ml", discount: "8%", category: "Zepto Cafe" },
     { name: "Vanilla Milkshake", image: "/products/vanilla-milkshake.png", price: 280, description: "Vanilla Milkshake", weight: "300ml", discount: "7%", category: "Zepto Cafe" },
     { name: "Cold Brew Coffee", image: "/products/cold-brew.png", price: 350, description: "Cold Brew", weight: "300ml", discount: "6%", category: "Zepto Cafe" },
     { name: "Green Tea", image: "/products/green-tea.png", price: 180, description: "Green Tea", weight: "200ml", discount: "5%", category: "Zepto Cafe" },
     {
        name: "MAGGI-Pazzta-Instant-Pasta",
        image: "/products/MAGGI-Pazzta-Instant-Pasta-Cheese-Macaroni.webp",
        price: 500,
        description: "Delicious instant pasta with cheese macaroni flavor.",
        weight: "-",
        discount: "10%",
        category: "Packaged Food"
      },
      {
        name: "MTR-3-min-Poha",
        image: "/products/MTR-3-min-Poha.webp",
        price: 900,
        description: "Instant poha ready in 3 minutes by MTR.",
        weight: "-",
        discount: "20%",
        category: "Packaged Food"
      },
      {
        name: "NestleMilkmaid-Mini-Sweetened",
        image: "/products/NestleMilkmaid-Mini-Sweetened.webp",
        price: 999,
        description: "Mini pack of sweetened condensed milk by Nestle.",
        weight: "-",
        discount: "15%",
        category: "Packaged Food"
      },
      {
        name: "The-Naturik-Co-Ragi-Protein-Cheela",
        image: "/products/The-Naturik-Co-Ragi-Protein-Cheela.webp",
        price: 1500,
        description: "Healthy Ragi protein cheela mix from The Naturik Co.",
        weight: "-",
        discount: "10%",
        category: "Packaged Food"
      },
      {
        name: "Infino Comet Pecan Ice Cream Tub",
        image: "/products/Infino.png",
        price: 500,
        description: "Rich and creamy pecan-flavored ice cream by Infino.",
        weight: "-",
        discount: "10%",
        category: "Ice Creams & More"
      },
      {
        name: "Go-Zero-Belgian-Dark-Chocolate-Low-Calorie-Guilt-Free-Ice-Cream-Tub",
        image: "/products/Go-Zero.png",
        price: 900,
        description: "Low-calorie Belgian dark chocolate ice cream by Go Zero.",
        weight: "-",
        discount: "20%",
        category: "Ice Creams & More"
      },
      {
        name: "NIC Alphonso Mango Ice Cream Tub",
        image: "/products/iceream.png",
        price: 999,
        description: "Delicious Alphonso mango ice cream tub by NIC.",
        weight: "-",
        discount: "15%",
        category: "Ice Creams & More"
      },
      {
        name: "Cream-Pot-Chocolate-Tub",
        image: "/products/Cream-Pot-Chocolate-Tub.png",
        price: 1500,
        description: "Decadent chocolate ice cream in a tub from Cream Pot.",
        weight: "-",
        discount: "10%",
        category: "Ice Creams & More"
      },
      {
        name: "ITC Master Chef Medium Prawns",
        image: "/products/ITCmaster.png",
        price: 500,
        description: "Delicious medium prawns by ITC Master Chef.",
        weight: "-",
        discount: "10%",
        category: "Frozen Food"
      },
      {
        name: "Zorabian Chicken Spicy Sausages",
        image: "/products/Zorabin.png",
        price: 900,
        description: "Spicy and juicy chicken sausages by Zorabian.",
        weight: "-",
        discount: "20%",
        category: "Frozen Food"
      },
      {
        name: "Prasuma Vegetable And Paneer Momos",
        image: "/products/Prasuma-Vegetable-And-Paneer-Momos.png",
        price: 999,
        description: "Tasty veg and paneer momos by Prasuma.",
        weight: "-",
        discount: "15%",
        category: "Frozen Food"
      },
      {
        name: "ITC-Master-Chef-Crunchy-Chicken-Nuggets",
        image: "/products/ITC-Master-Chef-Crunchy-Chicken-Nuggets-Source-of-Protein-No-Added-Preservatives-25-pieces.webp",
        price: 1500,
        description: "Crunchy chicken nuggets by ITC Master Chef, 25 pieces.",
        weight: "-",
        discount: "10%",
        category: "Frozen Food"
      },
 

  




  
























































































































 
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('✅ Database seeded with products');
    process.exit();
  })
  .catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err);
    process.exit(1);
  });
