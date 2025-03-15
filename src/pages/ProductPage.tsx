import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ProductDetail from '../components/Product/ProductDetail';
import { getProductById, getRelatedProducts } from '../data/products';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = product ? getRelatedProducts(product) : [];
  
  useEffect(() => {
    if (!product && id) {
      // Product not found, redirect to shop page
      navigate('/shop');
    }
    
    // Scroll to top when product page loads
    window.scrollTo(0, 0);
  }, [product, id, navigate]);
  
  if (!product) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <Layout>
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </Layout>
  );
};

export default ProductPage;