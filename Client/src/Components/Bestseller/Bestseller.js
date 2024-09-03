import React, { useEffect, useState } from 'react';
import './bestseller.css';
import axios from 'axios';
import ProductCard from '../../Shop/ProductCard/productCard';
import { useNavigate } from 'react-router-dom';

function Bestseller() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleProductClick = (id, product) => {
    if (id) {
      navigate(`/${product}/${id}`);
    } else {
      console.error('Product ID is undefined');
    }
  };

  useEffect(() => {
    const url = 'https://gym-equipment.vercel.app/api/products';

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.data.products);
        // console.log(response.data.data.products);
        response.status === 200 ? setLoading(false) : setLoading(true);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="best-sellers" id="best-Sellers">
      <h2 className="header-title">BEST SELLERS</h2>
      <h3 className="info">Items that prove useful to customers</h3>
      <div className="card-holder">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onClick={() => handleProductClick(product._id, product.prodTitle)}
          />
        ))}
      </div>
    </div>
  );
}

export default Bestseller;
