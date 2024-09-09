import React, { useContext, useEffect, useState } from 'react';
import './cart.css';
import { ProductContext } from '../../Components/Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Components/AuthContext';
import { jwtDecode } from 'jwt-decode';

function Cart({ isOpen, closeCart }) {
  const { cartItems, setCartItems, removeItem } = useContext(ProductContext); // Include setCartItems
  const { isAuthenticated } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const expectedUserId = decodedToken.id;

        if (userId === expectedUserId) {
          setUser(userId);
        } else {
          console.log('User is not authenticated');
          // Optionally, navigate to the login page
          // navigate('/login');
        }
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, [token, userId]);

  // Fetch cart data from API and update cartItems state
  useEffect(() => {
    if (user) {
      axios
        .get(`https://gym-equipment.vercel.app/api/cart/${user}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log('Cart data:', res.data);
          // Update the cartItems state with the fetched data
          setCartItems(res.data.cartItems);
        })
        .catch((err) => {
          console.error('Error fetching cart data:', err);
        });
    }
  }, [user, token, setCartItems]); // Ensure setCartItems is included in the dependency array

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  console.log(isOpen)
  if (!isOpen) return null;

  return (
    <div className={`cart-side-wrapper ${isOpen ? 'open' : ''}`}>
      <span onClick={closeCart} className="close-button">
        ×
      </span>
      {user ? (
        <div className="cart-items-holder">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="item-info">
                  <h4>{item.prodTitle}</h4>
                  <p>{item.price}$</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => removeItem(item._id)}>Remove</button>
              </div>
            ))
          ) : (
            <p className='no-items'>No items in the cart.</p>
          )}
        </div>
      ) : (
        <p>Please login to view cart items.</p>
      )}

      <div className="checkout-action">
        <button className="btn">
          Secure Checkout{' '}
          <span className="final-price price">{totalPrice}$</span>
        </button>

        <a href="/shop" className="anchor btn-opp">
          Continue shopping
        </a>
      </div>
    </div>
  );
}

export default Cart;
