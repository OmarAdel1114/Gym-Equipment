import React, { useEffect, useState } from 'react';
import './shop-page.css';
import axios from 'axios';
import AppLayout from '../../Components/appLayout';
import ProductCard from '../ProductCard/productCard';
import Filter from '../FilterSidebar/FilterBar';
import { useLocation, useNavigate } from 'react-router-dom';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Stores filtered products

  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery);

  const [filter, setFilter] = useState(''); // Stores applied filters

  const navigate = useNavigate();

  const handleProductClick = (id, product) => {
    if (id) {
      navigate(`/${product}/${id}`);
    } else {
      console.error('Product ID is undefined');
    }
  };

  useEffect(() => {
    // Fetch products from API
    const url =
      'https://gym-equipment.vercel.app/api/products/?page=1&perPage=12';
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.data.products);
        setFilteredProducts(response.data.data.products); // Initial state for filtering
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;

  // Function to handle filter changes from Filter component
  const handleFilterChange = (appliedFilter) => {
    setFilter(appliedFilter);

    // Apply filter to products based on selected criteria
    const filteredProducts = products.filter((product) => {
      // Implement logic based on your filter criteria (e.g., price range, category)
      // This example assumes a simple "inStock" filter
      return appliedFilter === 'all' || product.inStock;
    });
    setFilteredProducts(filteredProducts);
  };

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
              <input
                type="text"
                placeholder="Search products..."
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Filter onFilter={handleFilterChange} />
            </div>
            <div className="products-grid">
              {filteredProducts
                .filter((item) => {
                  return searchQuery.toLowerCase() === ''
                    ? item
                    : item.prodTitle
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase());
                })
                .map((product) => (
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
