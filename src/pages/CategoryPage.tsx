import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ProductCard from '../components/Product/ProductCard';
import { products } from '../data/products';
import { getCategoryById } from '../data/categories';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const category = id ? getCategoryById(id) : undefined;
  
  if (!category) {
    // Category not found, redirect to shop page
    navigate('/shop');
    return null;
  }
  
  // Filter products by category
  const categoryProducts = products.filter(product => product.category === category.id);
  
  return (
    <Layout>
      <div className="bg-green-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-green-800 mb-2">{category.name}</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No products found</h2>
            <p className="text-gray-600">
              We couldn't find any products in this category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;