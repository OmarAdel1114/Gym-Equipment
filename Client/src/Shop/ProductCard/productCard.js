import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product, onClick }) {
  return (
    <div className="card" id={product._id} onClick={onClick}>
      <div className="photo">
        <img
          src={
            Array.isArray(product.imageUrl)
              ? product.imageUrl[0]
              : product.imageUrl
          } // array of images i want the first if it is array
          // make sure to modify the indexing of the photos
          className="product-photo best-seller-photo"
          alt="product-info"
        />
      </div>
      <div className="product-info">
        <p className="product-name">
          {/* {product.brand}  */}
          {product.prodTitle}
        </p>
        <p className="product-price">
          <span className="prev-price">
            ${parseFloat(product.price) + 10.0}
          </span>{' '}
          to ${product.price}{' '}
        </p>
      </div>
      <button className="product-view" onClick={onClick}>
        View Product
      </button>
    </div>
  );
}

export default ProductCard;
