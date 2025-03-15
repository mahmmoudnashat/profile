import React from 'react';
import { Product } from '../../types';
import ProductCard from './ProductCard';

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  if (products.length === 0) return null;
  
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;