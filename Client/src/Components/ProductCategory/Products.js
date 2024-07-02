import React, { useEffect, useRef } from 'react';
import './products.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Mousewheel,
} from 'swiper/modules';

import treadmill from '../../assets/media/products/treadmill.jpg';
import bar from '../../assets/media/products/bar.webp';
import multigym from '../../assets/media/products/multigym.jpg';
import heavybag from '../../assets/media/products/heavybag.jpg';
import stairmaster from '../../assets/media/products/stairmaster.jpg';
import dumbbells from '../../assets/media/products/dumbbells.jpg';
import IndoorBike from '../../assets/media/products/kettler indoor bike.jpg';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/bundle';

function Products() {
  const products = [
    { name: 'bars', photo: bar },
    { name: 'treadmill', photo: treadmill },
    { name: 'multigym Machine', photo: multigym },
    { name: 'stairmaster', photo: stairmaster },
    { name: 'dumbbells', photo: dumbbells },
    { name: 'heavybag', photo: heavybag },
    { name: 'Kettler & indoor Bikes', photo: IndoorBike },
    { name: 'treadmill', photo: bar },
  ];

  const swiperRef = useRef(null);

  return (
    <div className="container products">
      <h2 className="header">BEST SELLERS</h2>
      <h3 className="info">
        Built to last and made in-house. Quality is always the number one
        priority.
      </h3>
      <div className="products-holder">
        <Swiper
          ref={swiperRef}
          modules={[
            Navigation,
            // Scrollbar,
            A11y,
            FreeMode,
            Mousewheel,
            Pagination,
          ]}
          breakpoints={{
            428: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          direction="horizontal"
          centeredSlides={true}
          slidesPerView={4}
          spaceBetween={-50}
          freeMode={true}
          mousewheel={{ forceToAxis: true }}
          scrollbar={true}
          //  pagination={{ type: 'progressbar' }}
          // loop={true}
          //   navigation
          //   scrollbar={{ draggable: true }}
        >
          {products.map((product, index) => {
            return (
              <div className="slide-holder">
                <SwiperSlide>
                  <div className="product-holder">
                    <img
                      src={product.photo}
                      alt="home"
                      className="product-photo"
                    />
                    <p className="product-name">{product.name}</p>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Products;
