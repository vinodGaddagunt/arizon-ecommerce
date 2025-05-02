import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // Add default quantity of 1 to each product
      const productsWithQuantity = data.map(product => ({ ...product, quantity: 1 }));
      setFeaturedProducts(productsWithQuantity);
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
