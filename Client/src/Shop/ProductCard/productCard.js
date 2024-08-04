import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card" id={product.id}>
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
            ${parseFloat(product.price) + 10.0}
          </span>{' '}
          to ${product.price}{' '}
        </p>
      </div>
      <button
        className="product-view"
        onClick={() => (window.location.href = '/AboutProduct')}
      >
        View Product
      </button>
    </div>
  );
}

export default ProductCard;
