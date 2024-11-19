import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { isAuthenticated, userId, token } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    console.log('isAuthenticated changed:', isAuthenticated);
  }, [isAuthenticated]);

  const addToCartCont = (product) => {
    console.log('isAuthenticated changed:', isAuthenticated);

    // Show popup
    setIsPopupVisible(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000);

    // if (!isAuthenticated) {
    //   console.log('user Is Not Authenticated. Delaying adding cart...');
    //   return;
    // }

    console.log('Adding product to cart:', product);
    const url = 'https://gym-equipment.vercel.app/api/cart/add';

    axios
      .post(
        url,
        { productId: product._id, userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log('Product added to cart:', res.data);

        // Update local cart items only if the request is successful
        setCartItems((prevItems) => {
          const existingItem = prevItems.find(
            (item) => item._id === product._id
          );
          if (existingItem) {
            return prevItems.map((item) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          }
          return [...prevItems, { ...product, quantity: 1 }];
        });
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
        // You might want to show an error message to the user
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
