import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import FullCartPage from './pages/FullCartPage';
import Header from './components/Header';
import Footer from './components/Footer';
import MiniCart from './components/MiniCart';
import { CartProvider } from './context/CartContext';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header onCartClick={() => setCartOpen(!cartOpen)} />
          {cartOpen && <MiniCart />}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductListingPage />} />
              <Route path="/cart" element={<FullCartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
