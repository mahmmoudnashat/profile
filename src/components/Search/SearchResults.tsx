import React from 'react';
import { Product } from '../../types';
import ProductCard from '../Product/ProductCard';

interface SearchResultsProps {
  query: string;
  products: Product[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, products }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Search Results for "{query}"
        </h1>
        <p className="text-gray-600">
          {products.length} {products.length === 1 ? 'product' : 'products'} found
        </p>
      </div>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">No products found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find any products matching "{query}".
          </p>
          <p className="text-gray-600">
            Try using different keywords or browse our categories.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;