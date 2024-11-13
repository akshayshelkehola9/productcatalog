// ProductCatalog.js
import React, { useState } from 'react';
import './ProductCatalog.css';
import { productData } from '../components/assets/product_data';

const ProductCatalog = () => {
  const [sortOrder, setSortOrder] = useState('');
  const [sortedProducts, setSortedProducts] = useState(productData);

  
  const handleSort = (event) => {
    const selectedSort = event.target.value;
    setSortOrder(selectedSort);

    const sortedList = [...productData].sort((a, b) => {
      if (selectedSort === 'lowToHigh') return a.price - b.price;
      if (selectedSort === 'highToLow') return b.price - a.price;
      return 0;
    });
    setSortedProducts(sortedList);
  };

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Product Catalog</h1>

      <div className="sort-section">
        <label htmlFor="sortOrder" className="sort-label">Sort by:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSort} className="sort-dropdown">
          <option value="">Select</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
