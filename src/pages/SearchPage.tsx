import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import SearchResults from '../components/Search/SearchResults';
import { searchProducts } from '../data/products';
import { Product } from '../types';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Product[]>([]);
  
  useEffect(() => {
    if (query) {
      const searchResults = searchProducts(query);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query]);
  
  return (
    <Layout>
      <SearchResults query={query} products={results} />
    </Layout>
  );
};

export default SearchPage;