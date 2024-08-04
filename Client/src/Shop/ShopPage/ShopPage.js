import React, { useState, useEffect } from 'react';
import './shop-page.css';
import axios from 'axios';
import Nav from '../../Components/nav/Nav';
import Footer from '../../Components/Footer/Footer';
import ProductCard from '../ProductCard/productCard';
import Search from '../searchbar/SearchBar';
import Filter from '../FilterSidebar/FilterBar';

import { useLocation } from 'react-router-dom';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch products from API
    const url = 'https://gym-equipment.vercel.app/api/products';
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;

  // const filteredProducts = products
  //   .filter((product) => {
  //     return (
  //       product.name.includes(searchQuery) &&
  //       (filter === '' || product.category === filter)
  //     );
  //   });


  return (
    <div className="shop">
      <Nav />
      <div className="container-body">
        <div className="head-shop">
          <h2 className="header-title"> All Products </h2>
          <p className="info"> Home {currentPath} </p>
        </div>
        <div className="shop-page-content">
          <div className="search-filter">
            <Search onSearch={setSearchQuery} />
            <Filter onFilter={setFilter} />
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopPage;
