import React, { useMemo } from 'react';
import './Products.css';
import Product1 from "./alex-lvrs-aX_ljOOyWJY-unsplash.jpg";
import Product2 from "./american-heritage-chocolate-ghtwiDUu5ro-unsplash.jpg";
import Product3 from "./honey-yanibel-minaya-cruz-fPWxYxfBVYM-unsplash.jpg";
import Product4 from "./jacob-thomas-6jHpcBPw7i8-unsplash.jpg";
import Product5 from "./sarah-elizabeth-dLNu65g0jMA-unsplash.jpg";

const Products = () => {
  const products = [
    { id: 1, title: 'CAKES', image: Product1 },
    { id: 2, title: 'BROWNIES', image: Product2 },
    { id: 3, title: 'DESSERTS', image: Product3 },
    { id: 4, title: 'PASTRIES', image: Product4 },
    { id: 5, title: 'CUPCAKES', image: Product5 },
  ];

  const memoizedProducts = useMemo(() => {
    return products.map((product) => (
      <div className="product-card" key={product.id}>
        <div className="image-container">
          <img 
            src={product.image} 
            alt={product.title} 
            className="product-image"
          />
          <div className="image-overlay"></div>
        </div>
        <h3 className="product-title">{product.title}</h3>
      </div>
    ));
  }, [products]);

  return (
    <section className="products-section">
      <h2 className="section-title">Our Products</h2>
      <div className="products-grid">
        {memoizedProducts}
      </div>
    </section>
  );
};

export default Products;
