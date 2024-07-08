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
        setProducts(response.data.data.products);
        console.log(response.data.data.products);
        response.request === 200 ? setLoading(false) : setLoading(true);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [productId]);

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!Array.isArray(products)) {
    return <div>No Product available</div>;
  }
  return (
    <div className="best-sellers">
      <h2 className="header-title">BEST SELLERS</h2>
      <h3 className="info">Items that prove useful to customers</h3>
      <div className="card-holder">
        {products.map((product, index) => (
          <div className="card" key={index} id={product.id}>
            <div className="photo">
              <img
                src={product.imageUrl}
                className="product-photo best-seller-photo"
                alt="product-info"
              />
            </div>
            <div className="product-info">
              <p className="product-name">
                {product.brand} {product.prodTitle}
              </p>
              <p className="product-price">
                <span className="prev-price">
                  ${parseFloat(product.price) + 10 + 0.0}
                </span>{' '}
                to ${product.price}{' '}
              </p>
            </div>
            <button className="product-view"> View Product</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bestseller;
