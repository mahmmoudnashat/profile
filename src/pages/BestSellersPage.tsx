import React from 'react';
import Layout from '../components/Layout/Layout';
import ProductCard from '../components/Product/ProductCard';
import { getBestSellerProducts } from '../data/products';

const BestSellersPage: React.FC = () => {
  const bestSellerProducts = getBestSellerProducts(8); // Get more products for this page
  
  return (
    <Layout>
      <div className="bg-green-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Best Sellers</h1>
          <p className="text-gray-600">
            Our most popular aloe vera products loved by customers
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellerProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BestSellersPage;