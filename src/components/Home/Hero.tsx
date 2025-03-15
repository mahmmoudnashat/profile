import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-green-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Natural Beauty with <span className="text-green-600">Aloe Vera</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Discover our premium range of medical-grade aloe vera cosmetics. 
              Scientifically formulated for effective results while being gentle on your skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/shop" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Shop Now
              </Link>
              <Link 
                to="/about" 
                className="bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-6 rounded-md border border-green-600 transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1625430036274-fda6a6a9e5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Aloe Vera Products" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-green-800 font-bold">100% Natural</p>
              <p className="text-gray-600 text-sm">Dermatologically Tested</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Bar */}
      <div className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <h3 className="font-semibold text-green-800">Natural Ingredients</h3>
              <p className="text-sm text-gray-600">100% pure aloe vera</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-green-800">Dermatologist Tested</h3>
              <p className="text-sm text-gray-600">Safe for all skin types</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-green-800">Cruelty Free</h3>
              <p className="text-sm text-gray-600">Never tested on animals</p>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-green-800">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;