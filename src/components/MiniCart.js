import React from 'react';
import { useCart } from '../context/CartContext';

const MiniCart = () => {
  const { cartItems, removeFromCart, subtotal } = useCart();
  
  return (
    <div className="absolute right-0 top-0 bg-white shadow-lg w-64 p-4">
      <h3 className="font-bold mb-2">Mini Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.title}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between mt-4">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default MiniCart;
