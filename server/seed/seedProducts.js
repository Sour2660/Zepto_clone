import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from '../models/Product.js';

// ✅ Load environment variables
dotenv.config();

console.log("Loaded MONGO_URI:", process.env.MONGO_URI); // Debug line

// ✅ Use your existing vendor ObjectId
const vendorId = "682dba773aeb447a9bd861e0";

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
       {
        name: "SFP Chicken Burger Patty",
        image: "https://i.postimg.cc/6qGCmzzG/SFP-Chicken-Burger-Patty.jpg",
        price: 399,
        description: "Crispy and delicious, no artificial colors or flavors, made from premium chicken, perfect for burgers",
        weight: "-",
        discount: "15%",
        category: "Frozen Food"
      },
       {
        name: "Hersheys-Kisses",
        image: "https://i.postimg.cc/CxYnYwm1/Hersheys-Kisses.webp",
        price: 399,
        description: "Sugar, Interesterified Vegetable Fat, Refined Wheat Flour (Maida), Milk Solids, Starch, Cocoa Solids (5%), Palmolein, Emulsifiers (442, 322, 476), Iodised Salt, Yeast, Flavours (Natural, Natural Identical and",
        weight: "-",
        discount: "11",
        category: "Sweet Cravings"
      },
       {
        name: "Badam-Coconut-Barfi",
        image: "https://i.postimg.cc/sfJpnV73/Badam-Coconut-Barfi-8-Pcs-Burfi-Sweets-By-GO-DESi.webp",
        price: 300,
        description: "Sugar, Interesterified Vegetable Fat, Refined Wheat Flour (Maida), Milk Solids, Starch, Cocoa Solids (5%), Palmolein, Emulsifiers (442, 322, 476), Iodised Salt, Yeast, Flavours (Natural, Natural Identical and",
        weight: "-",
        discount: "18",
        category: "Sweet Cravings"
      },
       {
        name: "Bansiwala-Kesar-Angoori-Petha",
        image: "https://i.postimg.cc/vHH5kptf/Bansiwala-Kesar-Angoori-Petha.webp",
        price: 599,
        description: "Sugar, Interesterified Vegetable Fat, Refined Wheat Flour (Maida), Milk Solids, Starch, Cocoa Solids (5%), Palmolein, Emulsifiers (442, 322, 476), Iodised Salt, Yeast, Flavours (Natural, Natural Identical and",
        weight: "-",
        discount: "12",
        category: "Sweet Cravings"
      },
      {
        name: "Bansiwala-Nariyal-Barfi",
        image: "https://i.postimg.cc/jdgybZM9/Bansiwala-Nariyal-Barfi.webp",
        price: 599,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "9",
        category: "Sweet Cravings"
      },
      {
        name: "Son Papadi",
        image: "https://i.postimg.cc/fR1X3knf/Charliee-Soan-Papdi-Premium.webp",
        price: 599,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "12",
        category: "Sweet Cravings"
      },
      {
        name: "Dry-Fruit-Barfi-6-Pcs",
        image: "https://i.postimg.cc/y8DcYc5N/Dry-Fruit-Barfi-6-Pcs-No-Added-Refined-Sugar-Single-Packs-Burfi-Sweets-By-GO-DESi.webp ",
        price: 399,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "10",
        category: "Sweet Cravings"
      },
    {
        name: " Laddo",
        image: " https://i.postimg.cc/B6B1wg8m/ea8859bd-3a63-4c2f-a0b3-de580fbb5bfa.webp",
        price: 799,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "20",
        category: "Sweet Cravings"
      },
    {
        name: "Eat-Better-Co-Coffee-Almond-Laddoos",
        image: "https://i.postimg.cc/26DZwJ5q/Eat-Better-Co-Coffee-Almond-Laddoos-No-Added-Sugar-High-Protein-100-Natural.webp",
        price: 799,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "17",
        category: "Sweet Cravings"
      },
    {
        name: "Farmley-Classic-Delight-Date-Bites- ",
        image: "https://i.postimg.cc/c1TnRFGH/Farmley-Classic-Delight-Date-Bites-Dry-Fruit-Burfi-Dates-Almonds-Cashews-Pistachios-Ghee.webp",
        price: 799,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "9",
        category: "Sweet Cravings"
      },
      {
        name: " Haladiram Gulabgam",
        image: " https://i.postimg.cc/fTL0BYMv/Haldiram-s-Gulab-Jamun.webp",
        price: 299,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "8",
        category: "Sweet Cravings"
      },
    {
        name: "Gits Gulab Jamun ",
        image: "https://i.postimg.cc/N01y54xQ/Mini-Gulab-Jamun-Tin.webp ",
        price: 199,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "5",
        category: "Sweet Cravings"
      },
    {
        name: "Namaskaram-Sesame-Till-Chikki ",
        image: " https://i.postimg.cc/W4RFNKg9/Namaskaram-Sesame-Till-Chikki.webp",
        price: 799,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "17",
        category: "Sweet Cravings"
      },
      {
    name: "Fablue-Construction-Vehicles-Trucks-Toy-for-Kids-4-Pcs-Truck-Cars-for-Kids",
    image: " https://i.postimg.cc/0jh4FJyj/Fablue-Construction-Vehicles-Trucks-Toy-for-Kids-4-Pcs-Truck-Cars-for-Kids.webp",
    price: 1500,
    description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
    weight: "-",
    discount: "9%",
    category: "Toys & Sports"
  },
{
    name: " Hungry-Frogs-Tabletop-Game-Toy-For-Kids-2-",
    image: " https://i.postimg.cc/Vsh2d2Ww/Fablue-Hungry-Frogs-Tabletop-Game-Toy-For-Kids-2-Players-Interactive-Indoor-Fun-Game.webp",
    price: 700,
    description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
    weight: "-",
    discount: "5%",
    category: "Toys & Sports"
  },
  {
    name: " Remote-Control-Small-Stunt-Car-For-Kids-360-Degree-Rotating-Car-Toy-Assorted-Colour-Designs",
    image: " https://i.postimg.cc/zGCQ2vZD/Fablue-Remote-Control-Small-Stunt-Car-For-Kids-360-Degree-Rotating-Car-Toy-Assorted-Colour-Designs.webp",
    price: 900,
    description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
    weight: "-",
    discount: "5%",
    category: "Toys & Sports"
  },
  {
    name: "Spider-Web-Shooters-Toy-For-Kids-Hero-Launcher-Wrist-Toy-Set ",
    image: "https://i.postimg.cc/rpgPcHwv/Fablue-Spider-Web-Shooters-Toy-For-Kids-Hero-Launcher-Wrist-Toy-Set.webp ",
    price: 8000,
    description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
    weight: "-",
    discount: "9%",
    category: "Toys & Sports"
  },
  {
    name: " Bharat-Model-Scooty-Toy-Multicolour",
    image: "https://i.postimg.cc/XvnzRW4f/Toy-Bharat-Model-Scooty-Toy-Multicolour.webp ",
    price: 2000,
    description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
    weight: "-",
    discount: "9%",
    category: "Toys & Sports"
  },
  {
    name: "Toyshine-3-Pcs-Suction-Cup-Glass-Sticking-Bath-Toy-Stick-To-Window-Table-Baby-High-Chair ",
    image: "https://i.postimg.cc/yddrNTJW/Toyshine-3-Pcs-Suction-Cup-Glass-Sticking-Bath-Toy-Stick-To-Window-Table-Baby-High-Chair.webp ",
    price: 999,
    description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
    weight: "-",
    discount: "12%",
    category: "Toys & Sports"
  },
  {
    name: "shine-Beautiful-Summer-Magic-Couple-Fashion-Doll-Toy-Set-For-Baby-Kids-Dolls-House-Collection ",
    image: "https://i.postimg.cc/sxG6YD4r/Toyshine-Beautiful-Summer-Magic-Couple-Fashion-Doll-Toy-Set-For-Baby-Kids-Dolls-House-Collection.webp ",
    price: 5000,
    description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
    weight: "-",
    discount: "34%",
    category: "Toys & Sports"
  },
  {
    name: " Toyshine-Music-And-Lights-Guitar-Toy-Big-Red-Colour-May-Vary",
    image: "https://i.postimg.cc/PNG62sS8/Toyshine-Music-And-Lights-Guitar-Toy-Big-Red-Colour-May-Vary.webp ",
    price: 500,
    description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
    weight: "-",
    discount: "11%",
    category: "Toys & Sports"
  },

  {
    name: "yshine-Pull-Back-Realistic-Design-Aircraft-Toy-with-Display-Stand-Kids-Assorted ",
    image: " https://i.postimg.cc/wxtgfXW6/Toyshine-Pull-Back-Realistic-Design-Aircraft-Toy-with-Display-Stand-Kids-Assorted.webp",
    price: 1700,
    description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
    weight: "-",
    discount: "65%",
    category: "Toys & Sports"
  },
  {
    name: " shine-Rabbits-Musical-Piano-Musical-Toy-Multicolor-",
    image: " https://i.postimg.cc/RCj9jW8w/Toyshine-Rabbits-Musical-Piano-Musical-Toy-Multicolor.webp",
    price: 799,
    description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
    weight: "-",
    discount: "33%",
    category: "Toys & Sports"
  },

  {
    name: "Racer-Ramp-Toy-With-4-Cars-4-Ramps-And-Race-Track-For-1-2-3-Toddlers-Boys-Girls ",
    image: "https://i.postimg.cc/PrYhhts9/Toyshine-Racer-Ramp-Toy-With-4-Cars-4-Ramps-And-Race-Track-For-1-2-3-Toddlers-Boys-Girls.webp ",
    price: 899,
    description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
    weight: "-",
    discount: "22%",
    category: "Toys & Sports"
  },
     { 
     name: " Karatcart-Women-s-Jewellery-Set-Gold-11014814",
     image: "https://i.postimg.cc/VLysSzM9/Karatcart-Women-s-Jewellery-Set-Gold-11014814.webp", 
     price: 800,
     discount: "17%",
     description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
     weight: "-", 
     category: "Jewellery & Accessories"
     },
   { 
     name: "Karatcart-Women-s-Jewellery-Set-White-and-Silver-11014938",
     image: "https://i.postimg.cc/gkvz81qC/Karatcart-Women-s-Jewellery-Set-White-and-Silver-11014938.webp", 
     price: 7000,
     discount: "19%",
     description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
     weight: "-", 
     category: "Jewellery & Accessories"
     },
   { 
     name: "Scintillare-By-Sukkhi-Unique-Style-Gold-Plated-Multilayered-Pendant-Necklace-For-Women",
     image: "https://i.postimg.cc/bwpzTLms/Scintillare-By-Sukkhi-Unique-Style-Gold-Plated-Multilayered-Pendant-Necklace-For-Women.webp", 
     price: 5000,
     discount: "15%",
     description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
     weight: "-", 
     category: "Jewellery & Accessories"
     },
   { 
     name: "Sukkhi-Classic-Gold-Plated-Red-Green-Bracelet-Bangle-Set-Jewellery-for-Women-Girls-2-6",
     image: "https://i.postimg.cc/wBB9KM8z/Sukkhi-Classic-Gold-Plated-Red-Green-Bracelet-Bangle-Set-Jewellery-for-Women-Girls-2-6.webp", 
     price: 900,
     discount: "8%",
     description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
     weight: "-", 
     category: "Jewellery & Accessories"
     },
   { 
     name: "Sukkhi-Floral-Gold-Plated-Red-And-Green-Broad-Bracelets-Bangle-Set-Jewellery-for-Women-2-4",
     image: "https://i.postimg.cc/rwjqYWHg/Sukkhi-Floral-Gold-Plated-Red-And-Green-Broad-Bracelets-Bangle-Set-Jewellery-for-Women-2-4.webp", 
     price: 899,
     discount: "5%",
     description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
     weight: "-", 
     category: "Jewellery & Accessories"
     },
   { 
     name: "Sukkhi-Gold-Plated-Red-Green-Color-White-Thin-Bracelet-Bangle-Set-Jewellery-for-Women-2-6",
     image: "https://i.postimg.cc/ZqD4Jm4d/Sukkhi-Gold-Plated-Red-Green-Color-White-Thin-Bracelet-Bangle-Set-Jewellery-for-Women-2-6.webp", 
     price: 600,
     discount: "19%",
     description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
     weight: "-", 
     category: "Jewellery & Accessories"
     },
   { 
     name: "Sukkhi-Gold-Tone-Plated-White-Broad-Bracelet-Bangle-Set-Jewellery-for-Women-2-6",
     image: "https://i.postimg.cc/ZRBZRQ5D/Sukkhi-Gold-Tone-Plated-White-Broad-Bracelet-Bangle-Set-Jewellery-for-Women-2-6.webp", 
     price: 500,
     discount: "11%",
     description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
     weight: "-", 
     category: "Jewellery & Accessories"
     },
   { 
     name: "Sukkhi-Incredible-Gold-Plated-Austrian-Diamond-Bangles-for-Women-2-8",
     image: "https://i.postimg.cc/852GrbFk/Sukkhi-Incredible-Gold-Plated-Austrian-Diamond-Bangles-for-Women-2-8.webp", 
     price: 5500,
     discount: "15%",
     description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
     weight: "-", 
     category: "Jewellery & Accessories"
     },
   { 
     name: "Sukkhi-Multicolor-Gold-Tone-Plated-Hanging-Beadded-Bangle-Set-Jewellery-for-Women-2-6",
     image: "https://i.postimg.cc/D01TQbsr/Sukkhi-Multicolor-Gold-Tone-Plated-Hanging-Beadded-Bangle-Set-Jewellery-for-Women-2-6.webp", 
     price: 900,
     discount: "18%",
     description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
     weight: "-", 
     category: "Jewellery & Accessories"
     },
{ 
     name: "Traditional-Gold-Plated-Red-Green-Bracelet-Bangle-Set-Jewellery-for-Women-2-6",
     image: "https://i.postimg.cc/PrzHPYdh/Sukkhi-Traditional-Gold-Plated-Red-Green-Bracelet-Bangle-Set-Jewellery-for-Women-2-6.webp", 
     price: 900,
     discount: "18%",
     description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
     weight: "-", 
     category: "Jewellery & Accessories"
     },
{ 
     name: "Youbella-Fashion-Jewellery-Golden-Enamel-Crystal-Bracelets-Bangle-For-Women-Ybbn-91502-",
     image: "https://i.postimg.cc/Gh1rLqwq/Youbella-Fashion-Jewellery-Golden-Enamel-Crystal-Bracelets-Bangle-For-Women-Ybbn-91502.webp", 
     price: 500,
     discount: "15%",
     description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
     weight: "-", 
     category: "Jewellery & Accessories"
     },
     { 
     name: "Rhodium-Plated-Pink-American-Diamond-Necklace-Earrings-Jewellery-Set-for-Women-Girls",
     image: "https://i.postimg.cc/Mp6SRHGB/Zeneme-Rhodium-Plated-Pink-American-Diamond-Necklace-Earrings-Jewellery-Set-for-Women-Girls.webp", 
     price: 5000,
     discount: "11%",
     description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
     weight: "-", 
     category: "Jewellery & Accessories"
     },
       {
    name: "Farmley-Mix-Dry-Fruits ",
    image: "https://i.postimg.cc/rFySZdqj/Farmley-Mix-Dry-Fruits-Panchmeva-Almonds-Cashews-Dates-Black-Raisins-Green-Raisins.webp ",
    price: 700,
    description: "After opening the pack, transfer the contents to an airtight container. Store in a cool and dry place. Keep away from direct sunlight.",
    weight: "-",
    discount: "30%",
    category: "Masala & Dry Fruits"
  },
    {
    name: " Farmley-Satva-Mix-Dry-Fruit",
    image: "https://i.postimg.cc/yYf0MVdH/Farmley-Satva-Mix-Dry-Fruit-Snack-Peanuts-Green-Raisins-Almonds-Cashews-Makhana-More.webp ",
    price: 999,
    description: "After opening the pack, transfer the contents to an airtight container. Store in a cool and dry place. Keep away from direct sunlight.",
    weight: "-",
    discount: "45%",
    category: "Masala & Dry Fruits"
  },
    {
    name: "Snack-Mix-Dry-Fruits-Mexican-Peri-Peri ",
    image: " https://i.postimg.cc/BnX2sdL1/Farmley-Snack-Mix-Dry-Fruits-Mexican-Peri-Peri.webp",
    price: 100,
    description: "After opening the pack, transfer the contents to an airtight container. Store in a cool and dry place. Keep away from direct sunlight.",
    weight: "-",
    discount: "12%",
    category: "Masala & Dry Fruits"
  },  {
    name: "Farmley-Trail-Mix-Dry-Fruit-Almonds-Cashews-Cranberries ",
    image: " https://i.postimg.cc/wMqsrPYM/Farmley-Trail-Mix-Dry-Fruit-Almonds-Cashews-Cranberries-Blueberries-Blackcurrant-More.webp",
    price: 125,
    description: "After opening the pack, transfer the contents to an airtight container. Store in a cool and dry place. Keep away from direct sunlight.",
    weight: "-",
    discount: "10%",
    category: "Masala & Dry Fruits"
  },  {
    name: "Nutraj-California-Walnut-Akhrot-kernels ",
    image: " https://i.postimg.cc/bwWkv3kV/Nutraj-California-Walnut-Akhrot-kernels-Halves.webp",
    price: 766,
    description: "After opening the pack, transfer the contents to an airtight container. Store in a cool and dry place. Keep away from direct sunlight.",
    weight: "-",
    discount: "7%",
    category: "Masala & Dry Fruits"
  }, 
   {
    name: "Secret-Panchmeva-Dry-Fruit-Mix-Healthy-Snacks ",
    image: "https://i.postimg.cc/25WvLhxk/Open-Secret-Panchmeva-Dry-Fruit-Mix-Healthy-Snacks.webp ",
    price: 200,
    description: "After opening the pack, transfer the contents to an airtight container. Store in a cool and dry place. Keep away from direct sunlight.",
    weight: "-",
    discount: "9%",
    category: "Masala & Dry Fruits"
  }, 
   {
    name: "Tata-Sampann-100-Pure-California-Almonds ",
    image: "https://i.postimg.cc/50MzByPw/Tata-Sampann-100-Pure-California-Almonds-Badam-Giri-Whole-Premium-Quality.webp ",
    price: 800,
    description: "After opening the pack, transfer the contents to an airtight container. Store in a cool and dry place. Keep away from direct sunlight.",
    weight: "-",
    discount: "5%",
    category: "Masala & Dry Fruits"
  }, 
   {
    name: "True-Elements-Premium-Dry-Fruits-Mix-Panchmeva ",
    image: " https://i.postimg.cc/XJcCQWht/True-Elements-Premium-Dry-Fruits-Mix-Panchmeva-Superfood.webp",
    price: 677,
    description: "After opening the pack, transfer the contents to an airtight container. Store in a cool and dry place. Keep away from direct sunlight.",
    weight: "-",
    discount: "7%",
    category: "Masala & Dry Fruits"
  },
  
      {
        name: "Bambino-Vermicelli-Premium ",
        image: " https://i.postimg.cc/rwdGkKKk/Bambino-Vermicelli-Premium.webp",
        price: 90,
        discount: "2%",
        description: "Delicious instant pasta with cheese macaroni flavor.",
        weight: "-",
        category: "Packaged Food"
      },

      
      {
        name: "Gits-Dahi-Vada-Instant-Snack-Mix ",
        image: "https://i.postimg.cc/VNnjJpqZ/Gits-Dahi-Vada-Instant-Snack-Mix.webp ",
        price: 89,
        discount: "7%",
        description: "Delicious instant pasta with cheese macaroni flavor.",
        weight: "-",
        category: "Packaged Food"
      },

      {
        name: " MTR-Vada-Breakfast-Mix",
        image: " https://i.postimg.cc/KzbtBfQG/MTR-Vada-Breakfast-Mix.webp",
        price: 125,
        discount: "8%",
        description: "Delicious instant pasta with cheese macaroni flavor.",
        weight: "-",
        category: "Packaged Food"
      },

      {
        name: "MTR-Vermicelli ",
        image: " https://i.postimg.cc/KjvLsYdC/MTR-Vermicelli.webp",
        price: 80,
        discount: "10%",
        description: "Delicious instant pasta with cheese macaroni flavor.",
        weight: "-",
        category: "Packaged Food"
      },

      {
        name: "Yu-100-Whole-Wheat-Hakka-Noodles ",
        image: "https://i.postimg.cc/qqbnfTrq/Yu-100-Whole-Wheat-Hakka-Noodles.webp ",
        price: 80,
        discount: "9%",
        description: "Delicious instant pasta with cheese macaroni flavor.",
        weight: "-",
        category: "Packaged Food"
      },

      {
        name: "Yu-Korean-Red-Hot-Cheese-Instant-Cup-Noodles ",
        image: " https://i.postimg.cc/4xhc0qS4/Yu-Korean-Red-Hot-Cheese-Instant-Cup-Noodles.webp",
        price: 250,
        discount: "5%",
        description: "Delicious instant pasta with cheese macaroni flavor.",
        weight: "-",
        category: "Packaged Food"
      },

      {
        name: " Yu-Veg-Hakka-Noodles-Family-Pack",
        image: "https://i.postimg.cc/R07HSfmj/Yu-Veg-Hakka-Noodles-Family-Pack.webp ",
        price: 55,
        discount: "17%",
        description: "Delicious instant pasta with cheese macaroni flavor.",
        weight: "-",
        category: "Packaged Food"
      },
       {
        name: " A-Way-Red-Velvet-Ice-Cream-Pastry",
        image: " https://i.postimg.cc/FHck9qXP/Get-A-Way-Red-Velvet-Ice-Cream-Pastry-1.webp",
        price: 200,
        description: "Ice Cream (62.5%): Water, Milk Solids, Sugar, Liquid Glucose, Emulsifier (E471), Stabilisers (E410, E412, E407), In case of any issue, contact us E-mail address: support@zeptonow.com",
        weight: "-",
        discount: "11%",
        category: "Ice Creams & More"
      },
       {
        name: " Hocco-Bix-Cake-Cookies-Cream-Ice-Cream-Sandwich",
        image: " https://i.postimg.cc/63HyjxCQ/Hocco-Bix-Cake-Cookies-Cream-Ice-Cream-Sandwich.webp",
        price: 100,
        description: "Ice Cream (62.5%): Water, Milk Solids, Sugar, Liquid Glucose, Emulsifier (E471), Stabilisers (E410, E412, E407), In case of any issue, contact us E-mail address: support@zeptonow.com",
        weight: "-",
        discount: "10%",
        category: "Ice Creams & More"
      },
       {
        name: " Huber-Holly-Coconut-And-Macaroons-Ice-Cream-Tub",
        image: "https://i.postimg.cc/XvkZ5CJd/Huber-Holly-Coconut-And-Macaroons-Ice-Cream-Tub.webp ",
        price: 250,
        description: "Ice Cream (62.5%): Water, Milk Solids, Sugar, Liquid Glucose, Emulsifier (E471), Stabilisers (E410, E412, E407), In case of any issue, contact us E-mail address: support@zeptonow.com",
        weight: "-",
        discount: "9%",
        category: "Ice Creams & More"
      },
       {
        name: " Huber-Holly-Salted-Caramel-Popcorn-Ice-Cream-Tub",
        image: "https://i.postimg.cc/MTZnmpM4/Huber-Holly-Salted-Caramel-Popcorn-Ice-Cream-Tub.webp ",
        price: 150,
        description: "Ice Cream (62.5%): Water, Milk Solids, Sugar, Liquid Glucose, Emulsifier (E471), Stabilisers (E410, E412, E407), In case of any issue, contact us E-mail address: support@zeptonow.com",
        weight: "-",
        discount: "15%",
        category: "Ice Creams & More"
      },
       {
        name: " Kwality-Walls-Cassata",
        image: " https://i.postimg.cc/zv63NwtZ/Kwality-Walls-Cassata.webp",
        price: 90,
        description: "Ice Cream (62.5%): Water, Milk Solids, Sugar, Liquid Glucose, Emulsifier (E471), Stabilisers (E410, E412, E407), In case of any issue, contact us E-mail address: support@zeptonow.com",
        weight: "-",
        discount: "1%",
        category: "Ice Creams & More"
      },
       {
        name: "Kwality-Walls-Magnum ",
        image: "https://i.postimg.cc/8k07LD1K/Kwality-Walls-Magnum-Mini-Multipack-Almond-And-Chocolate-Truffle-Ice-Cream-Stick.webp ",
        price: 250,
        description: "Ice Cream (62.5%): Water, Milk Solids, Sugar, Liquid Glucose, Emulsifier (E471), Stabilisers (E410, E412, E407), In case of any issue, contact us E-mail address: support@zeptonow.com",
        weight: "-",
        discount: "10%",
        category: "Ice Creams & More"
      },
        {
        name: "Hyfun-Chilli-Garlic-Potato-Poppers ",
        image: "https://i.postimg.cc/qqgnTxr4/Hyfun-Chilli-Garlic-Potato-Poppers.webp ",
        price: 400,
        discount: "11%",
        description: "An easy-to-make shareable snack made with onions and a blend of spices, layered with a perfect crisp on the outside. For restaurant-style starters at home, a go-to snack for unforgettable get-togethers",
        weight: "-",
        category: "Frozen Food"
      },
        {
        name: " ITC-Master-Chef-Crispy-Chicken-Fries",
        image: "https://i.postimg.cc/7hczYJP7/ITC-Master-Chef-Crispy-Chicken-Fries.webp ",
        price: 677,
        discount: "14%",
        description: "An easy-to-make shareable snack made with onions and a blend of spices, layered with a perfect crisp on the outside. For restaurant-style starters at home, a go-to snack for unforgettable get-togethers",
        weight: "-",
        category: "Frozen Food"
      },
        {
        name: " Mc-Cain-Crazy-Fries-Masala-Mix-Hot-n-Tangy",
        image: "https://i.postimg.cc/DyJsp65c/Mc-Cain-Crazy-Fries-Masala-Mix-Hot-n-Tangy.webp ",
        price: 790,
        discount: "50%",
        description: "An easy-to-make shareable snack made with onions and a blend of spices, layered with a perfect crisp on the outside. For restaurant-style starters at home, a go-to snack for unforgettable get-togethers",
        weight: "-",
        category: "Frozen Food"
      },
        {
        name: "Pluckk-Frozen-Cranberry ",
        image: "https://i.postimg.cc/Wpfg7Cm3/Pluckk-Frozen-Cranberry.webp ",
        price: 900,
        discount: "18%",
        description: "An easy-to-make shareable snack made with onions and a blend of spices, layered with a perfect crisp on the outside. For restaurant-style starters at home, a go-to snack for unforgettable get-togethers",
        weight: "-",
        category: "Frozen Food"
      },
        {
        name: "Prasuma-Pizza-Minis-Veg-Supreme ",
        image: "https://i.postimg.cc/m2v9v95W/Prasuma-Pizza-Minis-Veg-Supreme.webp ",
        price: 600,
        discount: "15%",
        description: "An easy-to-make shareable snack made with onions and a blend of spices, layered with a perfect crisp on the outside. For restaurant-style starters at home, a go-to snack for unforgettable get-togethers",
        weight: "-",
        category: "Frozen Food"
      },
        {
        name: "SPT-Frozen-Green-Peas ",
        image: " https://i.postimg.cc/2SnWr5sb/SPT-Frozen-Green-Peas.webp",
        price: 150,
        discount: "13%",
        description: "An easy-to-make shareable snack made with onions and a blend of spices, layered with a perfect crisp on the outside. For restaurant-style starters at home, a go-to snack for unforgettable get-togethers",
        weight: "-",
        category: "Frozen Food"
      },
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
       {
        name: "SFP Chicken Burger Patty",
        image: "https://i.postimg.cc/6qGCmzzG/SFP-Chicken-Burger-Patty.jpg",
        price: 399,
        description: "Crispy and delicious, no artificial colors or flavors, made from premium chicken, perfect for burgers",
        weight: "-",
        discount: "15%",
        category: "Frozen Food"
      },
       {
        name: "Hersheys-Kisses",
        image: "https://i.postimg.cc/CxYnYwm1/Hersheys-Kisses.webp",
        price: 399,
        description: "Sugar, Interesterified Vegetable Fat, Refined Wheat Flour (Maida), Milk Solids, Starch, Cocoa Solids (5%), Palmolein, Emulsifiers (442, 322, 476), Iodised Salt, Yeast, Flavours (Natural, Natural Identical and",
        weight: "-",
        discount: "11",
        category: "Sweet Cravings"
      },
       {
        name: "Badam-Coconut-Barfi",
        image: "https://i.postimg.cc/sfJpnV73/Badam-Coconut-Barfi-8-Pcs-Burfi-Sweets-By-GO-DESi.webp",
        price: 300,
        description: "Sugar, Interesterified Vegetable Fat, Refined Wheat Flour (Maida), Milk Solids, Starch, Cocoa Solids (5%), Palmolein, Emulsifiers (442, 322, 476), Iodised Salt, Yeast, Flavours (Natural, Natural Identical and",
        weight: "-",
        discount: "18",
        category: "Sweet Cravings"
      },
       {
        name: "Bansiwala-Kesar-Angoori-Petha",
        image: "https://i.postimg.cc/vHH5kptf/Bansiwala-Kesar-Angoori-Petha.webp",
        price: 599,
        description: "Sugar, Interesterified Vegetable Fat, Refined Wheat Flour (Maida), Milk Solids, Starch, Cocoa Solids (5%), Palmolein, Emulsifiers (442, 322, 476), Iodised Salt, Yeast, Flavours (Natural, Natural Identical and",
        weight: "-",
        discount: "12",
        category: "Sweet Cravings"
      },
      {
        name: "Bansiwala-Nariyal-Barfi",
        image: "https://i.postimg.cc/jdgybZM9/Bansiwala-Nariyal-Barfi.webp",
        price: 599,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "9",
        category: "Sweet Cravings"
      },
      {
        name: "Son Papadi",
        image: "https://i.postimg.cc/fR1X3knf/Charliee-Soan-Papdi-Premium.webp",
        price: 599,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "12",
        category: "Sweet Cravings"
      },
      {
        name: "Dry-Fruit-Barfi-6-Pcs",
        image: "https://i.postimg.cc/y8DcYc5N/Dry-Fruit-Barfi-6-Pcs-No-Added-Refined-Sugar-Single-Packs-Burfi-Sweets-By-GO-DESi.webp ",
        price: 399,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "10",
        category: "Sweet Cravings"
      },
    {
        name: " Laddo",
        image: " https://i.postimg.cc/B6B1wg8m/ea8859bd-3a63-4c2f-a0b3-de580fbb5bfa.webp",
        price: 799,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "20",
        category: "Sweet Cravings"
      },
    {
        name: "Eat-Better-Co-Coffee-Almond-Laddoos",
        image: "https://i.postimg.cc/26DZwJ5q/Eat-Better-Co-Coffee-Almond-Laddoos-No-Added-Sugar-High-Protein-100-Natural.webp",
        price: 799,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "17",
        category: "Sweet Cravings"
      },
    {
        name: "Farmley-Classic-Delight-Date-Bites- ",
        image: "https://i.postimg.cc/c1TnRFGH/Farmley-Classic-Delight-Date-Bites-Dry-Fruit-Burfi-Dates-Almonds-Cashews-Pistachios-Ghee.webp",
        price: 799,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "9",
        category: "Sweet Cravings"
      },
      {
        name: " Haladiram Gulabgam",
        image: " https://i.postimg.cc/fTL0BYMv/Haldiram-s-Gulab-Jamun.webp",
        price: 299,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "8",
        category: "Sweet Cravings"
      },
    {
        name: "Gits Gulab Jamun ",
        image: "https://i.postimg.cc/N01y54xQ/Mini-Gulab-Jamun-Tin.webp ",
        price: 199,
        description: "Store in a cool, hygienic, and dry place. Avoid exposure to direct sunlight and keep in air tight container",
        weight: "-",
        discount: "5",
        category: "Sweet Cravings"
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
        name: "Bewakoof-Official-Rick-Morty-Women",
        image: " https://i.postimg.cc/Px0qwcJ7/Bewakoof-Official-Rick-Morty-Women-s-Graphic-Printed-Oversized-T-Shirt-Purple-XL.webp",
        price: 900,
        discount: "10%",
        description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
        weight: "-",
        category: "Apparel & Lifestyle"
      },
       {
        name: " Bullmer-Men-s-Oversized-T-shirt",
        image: "https://i.postimg.cc/mkMgNwFg/Bullmer-Men-s-Oversized-T-shirt-Front-and-Back-Printed-Olive-M.webp",
        price: 1500,
        discount: "23%",
        description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
        weight: "-",
        category: "Apparel & Lifestyle"
      },
       {
        name: " Clovia-Button-Down-Anchor-Print-Shirt",
        image: "https://i.postimg.cc/WbG4d5v9/Clovia-Button-Down-Anchor-Print-Shirt-Pyjama-Set-Cotton-Blue-Xxl.webp ",
        price: 999,
        discount: "45%",
        description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
        weight: "-",
        category: "Apparel & Lifestyle"
      },
       {
        name: " Divena-Women-s-Bottle-Green-Floral",
        image: "https://i.postimg.cc/SxmxCcQm/Divena-Women-s-Bottle-Green-Floral-Print-Cotton-Kurta-Set-DK2069-M.webp ",
        price: 2700,
        discount: "11%",
        description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
        weight: "-",
        category: "Apparel & Lifestyle"
      },
       {
        name: " JACK-JONES-Men-s-Abstract-Print-",
        image: " https://i.postimg.cc/3J5RrPP4/JACK-JONES-Men-s-Abstract-Print-Short-Sleeves-Shirt-Black-L.webp",
        price: 900,
        discount: "56%",
        description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
        weight: "-",
        category: "Apparel & Lifestyle"
      },
       {
        name: " Libas-Women-s-Pink-Printed-Cotton-Anarkali",
        image: "https://i.postimg.cc/Z5jKc00p/Libas-Women-s-Pink-Printed-Cotton-Anarkali-Kurta-With-Palazzos-Dupatta-S.webp ",
        price: 3000,
        discount: "55%",
        description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
        weight: "-",
        category: "Apparel & Lifestyle"
      },
       {
        name: " Libas-Women-s-Pink-Woven-Design-Silk",
        image: "https://i.postimg.cc/zfBDP5RM/Libas-Women-s-Pink-Woven-Design-Silk-Blend-Straight-Kurta-With-Palazzos-Dupatta-XL.webp ",
        price: 6700,
        discount: "45%",
        description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
        weight: "-",
        category: "Apparel & Lifestyle"
      },
       {
        name: " Libas-Women-s-Purple-Embroidered",
        image: " https://i.postimg.cc/mD1LBwjy/Libas-Women-s-Purple-Embroidered-Silk-Blend-Straight-Kurta-With-Trousers-Dupatta-S.webp",
        price: 4500,
        discount: "23%",
        description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
        weight: "-",
        category: "Apparel & Lifestyle"
      },
       {
        name: "The-Bear-House-Men-Slim-Fit-Checked-Flannel-Cotton-Casual ",
        image: " https://i.postimg.cc/nrvnQh6s/The-Bear-House-Men-Slim-Fit-Checked-Flannel-Cotton-Casual-Shirt-Ravelo-White-and-Red-M.webp",
        price: 1800,
        discount: "36%",
        description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
        weight: "-",
        category: "Apparel & Lifestyle"
      },
       {
        name: "Libas-Women-s-Turquoise-Printed-Cotton-A-Line-Kurta ",
        image: " https://i.postimg.cc/5ycx0Ckd/Libas-Women-s-Turquoise-Printed-Cotton-A-Line-Kurta-With-Palazzos-Dupatta-L.webp",
        price: 2456,
        discount: "17%",
        description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
        weight: "-",
        category: "Apparel & Lifestyle"
      },
       {
        name: "Highlander-Men-s-Tapered-Fit-Mid-Rise-Mildly-Distressed-Stretchable-Jeans ",
        image: "https://i.postimg.cc/j57PFBWH/Highlander-Men-s-Tapered-Fit-Mid-Rise-Mildly-Distressed-Stretchable-Jeans-Light-Blue-36.webp ",
        price: 899,
        discount: "10%",
        description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
        weight: "-",
        category: "Apparel & Lifestyle"
      },
       {
        name: " Fabflee-Women-Oversize-Cotton-Printed",
        image: "https://i.postimg.cc/MH10vgq6/Fabflee-Women-Oversize-Cotton-Printed-Round-Neck-Tshirt-Red-FAB-OS-521-L.webp ",
        price: 999,
        discount: "10%",
        description: "Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com",
        weight: "-",
        category: "Apparel & Lifestyle"
      },




  


    
    
    
    
    

      ].map(p => ({
  ...p,
  vendor: vendorId // ✅ inject vendor
}));

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
 

  




  
























































































































 
