import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import ProductCard from '../Product/ProductCard';

interface FeaturedProductsProps {
  products: Product[];
  title: string;
  subtitle?: string;
  viewAllLink?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  products, 
  title, 
  subtitle,
  viewAllLink = '/shop'
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-2">{title}</h2>
          {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {viewAllLink && (
          <div className="text-center mt-10">
            <Link 
              to={viewAllLink}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
            >
              View All
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;