import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { Leaf } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center">
        <Leaf className="h-16 w-16 text-green-600 mx-auto mb-6" />
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
          >
            Back to Home
          </Link>
          <Link 
            to="/shop" 
            className="bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-6 rounded-md border border-green-600 transition duration-300"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;