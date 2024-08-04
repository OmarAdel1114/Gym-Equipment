import React, { useContext } from 'react';
import './about-product.css';
import Nav from '../../Components/nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { ProductContext } from '../../Components/Context';
import itemPhoto from '../../assets/media/products/bar.webp';

function AboutProduct() {
  const product = useContext(ProductContext);

  // Sample data for product specs and reviews
  const productSpecs = [
    { label: 'Weight', value: '12kg' },
    { label: 'Length', value: '7ft' },
    { label: 'Material', value: 'Steel' },
  ];

  const reviews = [
    { user: 'John Doe', rating: 5, comment: 'Great quality product!' },
    { user: 'Jane Smith', rating: 4, comment: 'Very sturdy and well-made.' },
  ];

  return (
    <>
      <Nav />
      <div className="container-body about-product">
        <h1 className="header-title">{product.ProductName}</h1>
        <div className="item-wrapper">
          <img src={itemPhoto} alt="item-description" />
          <div className="item-info">
            <h2 className="item-name">7ft Hollow Axle Bar (12kg)</h2>
            <p className="item-price">$120</p>
            <p className="item-description par-default">
              The Heavy duty 5-Bar Vertical Barbell Hanger is a must-have for
              any gym or fitness facility looking to maximize floor space and
              keep equipment organized. This hanger bolts securely to the wall
              and can store up to five Olympic barbells vertically, saving
              valuable floor space for workouts. Made with durable 5mm thick
              precision laser cut steel, this hanger is designed to safely and
              securely hold your barbells in place, making it easy to grab the
              one you need for your next lift. Say goodbye to cluttered floors
              and hello to efficient organization with the 5-Bar Vertical
              Barbell Hanger.
            </p>
            <div className="item-button">
              <button className="add-to-cart-btn btn-default">Add To Cart</button>
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
                <p><strong>{review.user}</strong> ({review.rating} stars)</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutProduct;
