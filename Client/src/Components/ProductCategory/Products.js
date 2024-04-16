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

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/bundle';

function Products() {
  const products = [
    { name: 'bar', photo: bar },
    { name: 'treadmill', photo: treadmill },
    { name: 'multigym', photo: multigym },
    { name: 'stairmaster', photo: stairmaster },
    { name: 'dumbbells', photo: dumbbells },
    { name: 'heavybag', photo: heavybag },
    { name: 'treadmill', photo: treadmill },
    { name: 'treadmill', photo: bar },
  ];

  return (
    <div className="container products">
      <h2 className="header">BLUE SHELL EGYPT</h2>
      <h3>Products Category</h3>
      <div className="products-holder">
        <Swiper
          modules={[
            Navigation,
            // Scrollbar,
            A11y,
            FreeMode,
            Mousewheel,
            Pagination,
          ]}
          slidesPerView={4}
          spaceBetween={-50}
          freeMode={true}
          mousewheel={true}
          direction={'horizontal'}
        //   navigation
          pagination={{ type: 'progressbar' }}
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
