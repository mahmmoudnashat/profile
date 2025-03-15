import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-green-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-green-800">AloeVera Beauty</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-green-800 hover:text-green-600 font-medium">Home</Link>
            <Link to="/shop" className="text-green-800 hover:text-green-600 font-medium">Shop</Link>
            <Link to="/bestsellers" className="text-green-800 hover:text-green-600 font-medium">Best Sellers</Link>
            <Link to="/offers" className="text-green-800 hover:text-green-600 font-medium">Offers</Link>
            <Link to="/about" className="text-green-800 hover:text-green-600 font-medium">About</Link>
            <Link to="/support" className="text-green-800 hover:text-green-600 font-medium">Support</Link>
          </nav>

          {/* Search, Cart, and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white rounded-full px-3 py-1">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none focus:outline-none text-sm w-40"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="text-green-600 hover:text-green-800">
                <Search size={18} />
              </button>
            </form>

            {/* Cart Link */}
            <Link to="/cart" className="relative text-green-800 hover:text-green-600">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-green-800" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-green-100">
            <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full px-3 py-2 mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none focus:outline-none text-sm flex-grow"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="text-green-600 hover:text-green-800">
                <Search size={18} />
              </button>
            </form>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-green-800 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/shop" className="text-green-800 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link to="/bestsellers" className="text-green-800 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>Best Sellers</Link>
              <Link to="/offers" className="text-green-800 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>Offers</Link>
              <Link to="/about" className="text-green-800 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/support" className="text-green-800 hover:text-green-600 font-medium" onClick={() => setIsMenuOpen(false)}>Support</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;