import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ScrollToTopButton from '../scrolltotop/ScrollToTopButton';

const products = {
  brownies: [
    { name: "Choco Chip Brownie", price: 110, image: "https://via.placeholder.com/150", bestseller: true },
    { name: "Cookie Brownie", price: 110, image: "https://via.placeholder.com/150" },
    { name: "Millionaire Brownie", price: 120, image: "https://via.placeholder.com/150" },
  ],
  breads: [
    { name: "Garlic Bread", price: 80, image: "https://via.placeholder.com/150" },
    { name: "Baguette", price: 90, image: "https://via.placeholder.com/150", bestseller: true },
    { name: "Whole Wheat Loaf", price: 100, image: "https://via.placeholder.com/150" },
  ],
};

const Breadcrumb = ({ category }) => (
  <nav className="text-sm text-gray-500 mb-4">
    <Link to="/">Home</Link> &gt; <Link to="/collections">Collections</Link> &gt; {category}
  </nav>
);

function ProductList() {
  const { category } = useParams();
  const productList = products[category] || [];
  const [showFilters, setShowFilters] = useState(false);
  const [showBestsellers, setShowBestsellers] = useState(false);
  const [priceRange, setPriceRange] = useState(150);

  const filteredProducts = productList.filter(product => 
    (!showBestsellers || product.bestseller) && product.price <= priceRange
  );

  return (
    <div className="container mx-auto py-12 flex">
      {/* Sidebar Filters */}
      <div className={`w-1/4 p-4 bg-gray-100 ${showFilters ? 'block' : 'hidden'} md:block`}>
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <label className="block mb-2">
          <input 
            type="checkbox" 
            checked={showBestsellers} 
            onChange={() => setShowBestsellers(!showBestsellers)} 
          /> Bestseller
        </label>
        <label className="block">
          Price: ₹{priceRange}
          <input 
            type="range" 
            min="50" max="150" 
            value={priceRange} 
            onChange={e => setPriceRange(e.target.value)} 
            className="w-full" 
          />
        </label>
      </div>
      
      {/* Product List */}
      <div className="w-3/4 px-4">
        <Breadcrumb category={category} />
        <h1 className="text-4xl font-bold text-center mb-8">{category.toUpperCase()}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="text-center relative cursor-pointer">
              {product.bestseller && (
                <span className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
                  Bestseller
                </span>
              )}
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
              <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">₹ {product.price}</p>
              <button className="mt-2 px-4 py-2 border border-gray-400 rounded-full text-sm hover:bg-gray-200">
              <Link to="/ProductPageDashboard">ORDER ONLINE</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default ProductList;