import { useCart } from '../context/CartContext';

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onCartClick }) => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Arizon E-commerce
        </Link>
        <nav>
          <Link to="/products" className="mr-6">Products</Link>
          <button onClick={onCartClick} className="relative">
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">{itemCount}</span>
            Cart
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;


