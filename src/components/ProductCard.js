import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
