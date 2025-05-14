// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext'; // ✅ correct path
// import './Cart.css';

// const Cart = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   return (
//     <div className="cart-container">
//       <h2>My Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         <div>
//           {cartItems.map((item, idx) => (
//             <div key={idx}>
//               <h4>{item.name}</h4>
//               <p>{item.price}</p>
//               <p>Quantity: {item.quantity}</p>
//               <button onClick={() => removeFromCart(item.name)}>Remove</button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  // const getTotalAmount = () =>
  //   cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  const getTotalAmount = () =>
    cartItems.reduce((acc, item) => {
      const numericPrice = parseFloat(item.price); // remove ₹ if included
      const quantity = item.quantity || 1;
      return acc + (isNaN(numericPrice) ? 0 : numericPrice * quantity);
    }, 0).toFixed(2);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate('/payment');
  };

  return (
    <div className="cart-container">
      <h2>🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item, idx) => (
            <div key={idx} className="cart-item">
              {/* <img src={item.img} alt={item.name} className="cart-item-img" /> */}
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.name, item.quantity - 1)} disabled={item.quantity <= 1}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.name, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item.name)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: ₹{getTotalAmount()}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
