import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: [],
  subtotal: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exists = state.cartItems.findIndex(item => item.id === action.payload.id);
      let updatedItems;
      if (exists>=0) {
        updatedItems = state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedItems = [...state.cartItems, action.payload];
      }
      const updatedSubtotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return { ...state, cartItems: updatedItems, subtotal: updatedSubtotal };
    case 'REMOVE_FROM_CART':
      const filteredItems = state.cartItems.filter(item => item.id !== action.payload);
      const newSubtotal = filteredItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return { ...state, cartItems: filteredItems, subtotal: newSubtotal };
    case 'UPDATE_QUANTITY':
      const updatedCart = state.cartItems.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      const updatedTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return { ...state, cartItems: updatedCart, subtotal: updatedTotal };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
