import React, { useContext } from 'react';
import './cart.css';
import { ProductContext } from '../../Components/Context';

function Cart() {
  // const productInfo = useContext(ProductContext);

  // console.log(productInfo.productInfo)
  return (
    <div className="cart-side-wrapper">
      <span>x</span>
      <h3>We Have in your Cart</h3>
      {/* <div className="cart-items-holder">{productInfo}</div> */}
      <div className="checkout-action">
        <button>
          Secure Checkout <span className="final-price price">2910$</span>
        </button>
        <a href="/" onClick={() => (window.location.href = '/Shop')}>
          Continue shopping
        </a>
      </div>
    </div>
  );
}

export default Cart;
