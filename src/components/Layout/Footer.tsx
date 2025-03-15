import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-green-300" />
              <span className="ml-2 text-xl font-bold text-white">AloeVera Beauty</span>
            </div>
            <p className="text-green-200 mb-4">
              Premium medical cosmetics made with the finest aloe vera for natural beauty and skin health.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-200 hover:text-white">Home</Link></li>
              <li><Link to="/shop" className="text-green-200 hover:text-white">Shop</Link></li>
              <li><Link to="/bestsellers" className="text-green-200 hover:text-white">Best Sellers</Link></li>
              <li><Link to="/offers" className="text-green-200 hover:text-white">Special Offers</Link></li>
              <li><Link to="/about" className="text-green-200 hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-green-200 hover:text-white">Contact Us</Link></li>
              <li><Link to="/faq" className="text-green-200 hover:text-white">FAQs</Link></li>
              <li><Link to="/shipping" className="text-green-200 hover:text-white">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="text-green-200 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-green-200 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-green-300 mt-1" />
                <span className="text-green-200">123 Aloe Way, Botanical Gardens, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-green-300" />
                <span className="text-green-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-green-300" />
                <span className="text-green-200">info@aloebeauty.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 mb-8 border-t border-green-700 pt-8">
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-white text-center">Subscribe to Our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-r-md font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-green-300 text-sm mt-8 pt-6 border-t border-green-700">
          <p>&copy; {new Date().getFullYear()} AloeVera Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;