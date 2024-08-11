import React, { createContext, useEffect, useState } from 'react';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCartCont = (product) => {
    console.log('Adding product to cart:', product);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  useEffect(() => {
    console.log('Cart items updated:', cartItems);
  }, [cartItems]);

  return (
    <ProductContext.Provider value={{ cartItems, addToCartCont, removeItem }}>
      {children}
    </ProductContext.Provider>
  );
};
