
// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const existing = prev.find(item => item.name === product.name);
//       if (existing) {
//         return prev.map(item =>
//           item.name === product.name
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prev, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (productName) => {
//     setCartItems(prev => prev.filter(item => item.name !== productName));
//   };

//   const updateQuantity = (productName, newQty) => {
//     setCartItems(prev =>
//       prev.map(item =>
//         item.name === productName
//           ? { ...item, quantity: Math.max(1, newQty) }
//           : item
//       )
//     );
//   };

//   const getCartItemCount = () => {
//     return cartItems.reduce((acc, item) => acc + item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         getCartItemCount, 
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

import React, { createContext, useState, useContext } from 'react';

// 1. Create Context
export const CartContext = createContext();

// 2. Export a custom hook for easy use
export const useCart = () => useContext(CartContext);

// 3. Provider Component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productName) => {
    setCartItems(prev => prev.filter(item => item.name !== productName));
  };

  const updateQuantity = (productName, newQty) => {
    setCartItems(prev =>
      prev.map(item =>
        item.name === productName
          ? { ...item, quantity: Math.max(1, newQty) }
          : item
      )
    );
  };

  const getCartItemCount = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const clearCart = () => {
  setCartItems([]);
};

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartItemCount, 
         clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
