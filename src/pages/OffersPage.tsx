import React from 'react';
import Layout from '../components/Layout/Layout';
import ProductCard from '../components/Product/ProductCard';
import { getOnSaleProducts } from '../data/products';

const OffersPage: React.FC = () => {
  const onSaleProducts = getOnSaleProducts(8); // Get more products for this page
  
  return (
    <Layout>
      <div className="bg-green-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Special Offers</h1>
          <p className="text-gray-600">
            Take advantage of our limited-time discounts on premium aloe vera products
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {onSaleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OffersPage;