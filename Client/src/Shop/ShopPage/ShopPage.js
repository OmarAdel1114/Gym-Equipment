import React, { useState, useEffect } from 'react';
import './shop-page.css';
import axios from 'axios';
import Nav from '../../Components/nav/Nav';
import Footer from '../../Components/Footer/Footer';
import ProductCard from '../ProductCard/productCard';
import Search from '../searchbar/SearchBar';
import Filter from '../FilterSidebar/FilterBar';
import { useLocation, useNavigate } from 'react-router-dom';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');

  const navigate = useNavigate();

  const handleProductClick = (id) => {
    if (id) {
      navigate(`/product/${id}`);
    }
    else {
      console.error('product ID is undefined')
    }
  };

  useEffect(() => {
    // Fetch products from API
    const url = 'https://gym-equipment.vercel.app/api/products/?page=1&perPage=3';
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.data.products);
        console.log('fetched data : ' ,response.data.data.products)
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;


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
            {products.map((product, index) => (
              <ProductCard
                // key={product.id}
                key={index}
                // omar adel 3amel 3 products b nfs al id
                product={product}
                onClick={() => handleProductClick(product._id)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopPage;
