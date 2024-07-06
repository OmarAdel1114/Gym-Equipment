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
    { name: 'bars', photo: bar , price:"$250.00", },
    { name: 'treadmill', photo: treadmill , price:"$250.00", },
    { name: 'multigym Machine', photo: multigym , price:"$250.00", },
    { name: 'stairmaster', photo: stairmaster , price:"$250.00", },
    { name: 'dumbbells', photo: dumbbells , price:"$250.00", },
    { name: 'heavybag', photo: heavybag , price:"$250.00", },
    { name: 'Kettler & indoor Bikes', photo: IndoorBike , price:"$250.00", },
    { name: 'treadmill', photo: bar , price:"$250.00", },
  ];

  const swiperRef = useRef(null);

  return (
    <div className="container products">
      <h2 className="header-title">Featured products</h2>
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
            1: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            640: {
              slidesPerView: 2,
              // spaceBetween: -10,
            },
            768: {
              slidesPerView: 2,
              // spaceBetween: -10,
            },
            910: {
              slidesPerView: 3,
              // spaceBetween: -10,
            },
            1170: {
              slidesPerView: 4,
              // spaceBetween: -10,
            },
            1400: {
              slidesPerView: 5,
              // spaceBetween: -10,
            },
          }}
          direction="horizontal"
          // centeredSlides={true}
          slidesPerView={4}
          spaceBetween={15}
          // freeMode={true}
          mousewheel={{ forceToAxis: true }}
          // scrollbar={true}
          //  pagination={{ type: 'progressbar' }}
          loop={true}
          //   navigation
          //   scrollbar={{ draggable: true }}
        >
          {products.map((product, index) => {
            return (
              <div className="slide-holder">
                <SwiperSlide>
                  <div className="card">
                    <div className="product-info">
                     <div className="photo">
                      <img src={product.photo} alt="home" className='product-photo' />
                      </div> 
                      <p className="product-name">{product.name}</p>
                      <p className='product-price'>{product.price}</p>
                    </div>
                    <button>Veiw Product</button>
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
