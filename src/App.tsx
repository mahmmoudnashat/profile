import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import SearchPage from './pages/SearchPage';
import CategoryPage from './pages/CategoryPage';
import BestSellersPage from './pages/BestSellersPage';
import OffersPage from './pages/OffersPage';
import AboutPage from './pages/AboutPage';
import SupportPage from './pages/SupportPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/bestsellers" element={<BestSellersPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;