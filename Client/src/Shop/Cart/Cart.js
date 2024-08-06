import React, { useContext } from 'react';
import './cart.css';
import { ProductContext } from '../../Components/Context';

function Cart({ isOpen, closeCart }) {
  const { cartItems, removeItem } = useContext(ProductContext);

  // const totalPrice = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // );
  if (!isOpen) return null

  return (
    <div className={`cart-side-wrapper ${isOpen ? 'open' : ''}`}>
      <span onClick={closeCart} className="close-button">
        ×
      </span>
      {/* <h3>We Have in your Cart</h3> */}
      <div className="cart-items-holder">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>{item.price}$</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      <div className="checkout-action">
        <button className='btn'>
          Secure Checkout{' '}
          <span className="final-price price">{3500}$</span>
        </button>
        <a href="/Shop" className='anchor'>Continue shopping</a>
      </div>
    </div>
  );
}

export default Cart;
