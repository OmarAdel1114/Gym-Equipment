import React, { useEffect, useMemo, useRef } from 'react';
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

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/bundle';
import ProductCard from '../../Shop/ProductCard/productCard';

import treadmill from '../../assets/media/products/Commercial Treadmill Gymmost 98,900LE.webp';
import bar from '../../assets/media/products/bar.webp';
import multigym from '../../assets/media/products/multigym.webp';
import heavybag from '../../assets/media/products/heavybag.webp';
import stairmaster from '../../assets/media/products/stairmaster.webp';
import dumbbellsBbundle from '../../assets/media/products/hex-dumbbell-bundle-45kg-433168_360x.webp';
import IndoorBike from '../../assets/media/products/kettler indoor bike.webp';
import dumbbells from '../../assets/media/products/hex-dumbbells-5-25kg-600662_360x.webp';
import airHockey from '../../assets/media/products/airhockey_01.webp';

function Products() {
  const productsArr = useMemo(
    () => [
      { id: 1, prodTitle: 'bars', imageUrl: bar, price: '250.00' },
      {
        id: 2,
        prodTitle: 'Hex Dumbbell Bundle [195kg]',
        imageUrl: dumbbellsBbundle,
        price: '549.00',
      },
      {
        id: 3,
        prodTitle: 'Hex Dumbbells [5-40kg]',
        imageUrl: dumbbells,
        price: '39.00',
      },
      { id: 4, prodTitle: 'multigym Machine', imageUrl: multigym, price: '250.00' },
      { id: 5, prodTitle: 'treadmill', imageUrl: treadmill, price: '250.00' },
      { id: 6, prodTitle: 'heavybag', imageUrl: heavybag, price: '250.00' },
      { id: 7, prodTitle: 'stairmaster', imageUrl: stairmaster, price: '250.00' },
      {
        id: 8,
        prodTitle: 'Air Hockey Table Game',
        imageUrl: airHockey,
        price: '250.00',
      },
      {
        id: 9,
        prodTitle: 'Kettler & indoor Bikes',
        imageUrl: IndoorBike,
        price: '250.00',
      },
    ],
    []
  );

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
    }
  }, [productsArr]);

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
          modules={[Navigation, A11y, FreeMode, Mousewheel, Pagination]}
          breakpoints={{
            1: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
            },
            910: {
              slidesPerView: 3,
            },
            1170: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
          direction="horizontal"
          slidesPerView={4}
          spaceBetween={15}
          mousewheel={{ forceToAxis: true }}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {productsArr.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} onClick={() => window.location.href = '/shop'}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
}

export default Products;
