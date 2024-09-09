import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './about-product.css';
import axios from 'axios';
import AppLayout from '../../Components/appLayout';
import { ProductContext } from '../../Components/Context';
import StarRating from '../starRating/StarRating';

function AboutProduct() {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [errors, setErrors] = useState(null);
  const { addToCartCont } = useContext(ProductContext);
  const { rating, setRating } = useState([]);

  const description = `
  Lorem ipsum dolor sit amet, consectetur
   adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua Lorem ipsum dolor sit amet, consectetur
   adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua.
`;

  const productSpecs = [
    { label: 'Weight', value: '12kg' },
    { label: 'Length', value: '7ft' },
    { label: 'Material', value: 'Steel' },
  ];

  const reviews = [
    {
      user: 'John Doe',
      rating: 5,
      comment: 'Great quality product!',
      date: '29/2/2023',
    },
    {
      user: 'Jane Smith',
      rating: 4,
      comment: 'Very sturdy and well-made.',
      date: '10/8/2024',
    },
  ];

  useEffect(() => {
    if (!id) return;

    const url = `https://gym-equipment.vercel.app/api/products/${id}`;
    axios
      .get(url)
      .then((res) => {
        setProductInfo(res.data.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
        setErrors(error);
      });

    
  }, [id]);



  const location = useLocation();
  const path = location.pathname.split('/');
  path.pop();
  const newPath = path.join('/');
  // console.log(productInfo);
  // setRating(productInfo.stars);
  

  if (errors) {
    return <div>Error loading product details.</div>;
  }

  if (!productInfo) {
    return <div>Loading...</div>;
  }

  if (!addToCartCont) {
    return <div>Error: Product context not found.</div>;
  }

  return (
    <AppLayout>
      <div className="container-body about-product">
        <p className="header-title">Home/ Shop {newPath}</p>
        <div className="item-wrapper">
          <img src={productInfo.imageUrl} alt="item-description" />
          <div className="item-info">
            <h2 className="item-name">
              <span className="brand">{productInfo.brand}</span>
              {productInfo.color} {productInfo.prodTitle}
              <StarRating
                rating={(productInfo.stars)}
                totalStars={5}
              />
            </h2>
            <p className="stars"></p>
            <p className="product-price">
              <span className="prev-price">2100$</span> {productInfo.price}$
            </p>
            {productInfo.description ? (
              <p className="item-description par-default">
                {productInfo.description}
              </p>
            ) : (
              <p className="item-description par-default">{description}</p>
            )}
            <div className="item-button">
              <button
                className="add-to-cart-btn btn-default"
                onClick={() => addToCartCont(productInfo)}
              >
                Add To Cart
              </button>
              <button className="buy-now-btn btn-default">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="specs-reviews-wrapper">
          <div className="product-specs">
            <h3>Specifications</h3>
            <ul>
              {productSpecs.map((spec, index) => (
                <li key={index}>
                  <strong>{spec.label}:</strong> {spec.value}
                </li>
              ))}
            </ul>
          </div>
          <div className="product-reviews">
            <h3>Reviews</h3>
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <p>
                  <strong>{review.user}</strong> ({review.rating} stars)
                </p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default AboutProduct;
