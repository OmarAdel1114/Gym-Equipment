import React, { useContext } from 'react';
import './cart.css';
import { ProductContext } from '../../Components/Context';

function Cart({ isOpen, closeCart }) {
  const { cartItems, removeItem } = useContext(ProductContext);
  
  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!isOpen) return null;

  if (!cartItems) {
    return <div>Error: Product context not found.</div>;
  }

  return (
    <div className={`cart-side-wrapper ${isOpen ? 'open' : ''}`}>
      <span onClick={closeCart} className="close-button">
        ×
      </span>
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
          <p>No items in the cart.</p>
        )}
      </div>
      <div className="checkout-action">
        <button className="btn">
          Secure Checkout <span className="final-price price">{totalPrice}$</span>
        </button>
        <a href="/shop" className="anchor">
          Continue shopping
        </a>
      </div>
    </div>
  );
}

export default Cart;
