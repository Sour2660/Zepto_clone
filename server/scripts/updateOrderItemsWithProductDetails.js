// scripts/updateOrderItemsWithProductDetails.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Order from '../models/Order.js';
import Product from '../models/Product.js';

dotenv.config();

const updateOrders = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    const orders = await Order.find({});
    let updatedCount = 0;

    for (const order of orders) {
      let modified = false;

      for (let item of order.items) {
        const product = await Product.findById(item.productId);

        if (product) {
          if (!item.name || !item.price) {
            item.name = product.name;
            item.price = product.price;
            modified = true;
          }
        }
      }

      if (modified) {
        await order.save();
        updatedCount++;
      }
    }

    console.log(`✅ Updated ${updatedCount} orders with product name & price`);
    mongoose.disconnect();
  } catch (err) {
    console.error('❌ Error updating orders:', err.message);
    mongoose.disconnect();
  }
};

updateOrders();
