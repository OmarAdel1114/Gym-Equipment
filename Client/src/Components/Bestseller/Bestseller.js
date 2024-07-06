import React, { useEffect, useState } from 'react';
import './bestseller.css';
import axios from 'axios';

function Bestseller({ productId }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://gym-equipment.vercel.app/api/products';

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        response.request === 200? 
        setLoading(false): setLoading(true);
        console.log(response);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="best-sellers">
      <h2 className="header-title">BEST SELLERS</h2>
      <h3 className="info">Items that prove useful to customers</h3>
      {products.map((product, id) => (
        <div className="card-holder">
          <div className="card">
            <div className="photo">
              <img src={product.photo} alt="product-info" />
            </div>
            <div className="product-info">
              <p>{product.name}</p>
              <p> {product.price} </p>
            </div>
            <button className="product-view"> View Product</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bestseller;
