import React, { useEffect } from 'react';
import './shop-page.css';
import axios from 'axios';
import AppLayout from '../../Components/appLayout';
import ProductCard from '../ProductCard/productCard';
import Search from '../searchbar/SearchBar';
import Filter from '../FilterSidebar/FilterBar';
import { useLocation, useNavigate } from 'react-router-dom';

function ShopPage() {
  const [products, setProducts] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filter, setFilter] = React.useState('');

  const navigate = useNavigate();

  const handleProductClick = (id, product) => {
    if (id) {
      navigate(`/${product}/${id}`);
    } else {
      console.error('Product ID is undefined');
    }
  };

  React.useEffect(() => {
    // Fetch products from API
    const url =
      'https://gym-equipment.vercel.app/api/products/?page=1&perPage=10';
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const isAuthenticated = true; // Replace with your authentication logic
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login page if user is not authenticated
    }
    axios
      .get('https://gym-equipment.vercel.app/api/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [isAuthenticated, navigate, token]);

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <AppLayout>
      <div className="shop">
        <div className="container-body">
          <div className="head-shop">
            <h2 className="header-title">All Products</h2>
            <p className="info">Home {currentPath}</p>
          </div>
          <div className="shop-page-content">
            <div className="search-filter">
              <Search onSearch={setSearchQuery} />
              <Filter onFilter={setFilter} />
            </div>
            <div className="products-grid">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  onClick={() =>
                    handleProductClick(product._id, product.prodTitle)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default ShopPage;
