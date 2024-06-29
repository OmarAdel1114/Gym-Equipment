import React, { useState } from 'react';
import './bestseller.css';
import axios from 'axios';

function Bestseller() {
  const [productName, productPhoto, productPrice] = useState('');
  const getBestSeller = () => {
    try {
      const response = axios
        .get('https://gym-equipment.vercel.app/api/products/bestseller', {
          productPhoto,
          productName,
          productPrice,
        })
        .then((response) => {
          if (response.status !== 200) {
            console.log('error receiving data');
          } else {console.log(response)}
        });
    } catch {}
  };
  return (
    <div>
      <h2 className="header">BEST SELLERS</h2>
      <h3 className="info">
        Built to last and made in-house. Quality is always the number one
        priority.
      </h3>
      <div className="card-holder">

        <div className="card">
          <div className="photo"><img src={productPhoto} alt='product-photo'/></div>
          <div className='product-info'>
            <p>{productName}</p>
            <p> {productPrice} </p>
          </div>
          <button className='product-view'> View Product</button>
        </div>
      </div>
    </div>
  );
}

export default Bestseller;
