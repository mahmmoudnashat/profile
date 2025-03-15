import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import CategorySection from '../components/Home/CategorySection';
import Testimonials from '../components/Home/Testimonials';
import Newsletter from '../components/Home/Newsletter';
import { categories } from '../data/categories';
import { 
  getFeaturedProducts, 
  getBestSellerProducts,
  getNewProducts
} from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const bestSellerProducts = getBestSellerProducts();
  const newProducts = getNewProducts();

  return (
    <Layout>
      <Hero />
      
      <CategorySection categories={categories} />
      
      <FeaturedProducts 
        products={featuredProducts} 
        title="Featured Products" 
        subtitle="Discover our specially selected aloe vera products for your skincare routine"
        viewAllLink="/shop"
      />
      
      <div className="bg-green-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">The Power of Aloe Vera</h2>
          <p className="text-lg text-gray-700 mb-8">
            For centuries, aloe vera has been revered for its exceptional healing and rejuvenating properties. 
            Our medical-grade formulations harness the full potential of this remarkable plant to deliver 
            effective, gentle solutions for all skin types.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Scientifically Proven</h3>
              <p className="text-gray-600">
                Our formulations are backed by scientific research and dermatological testing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Pure & Natural</h3>
              <p className="text-gray-600">
                We use only the highest quality aloe vera, harvested at peak potency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Effective Results</h3>
              <p className="text-gray-600">
                See visible improvements in skin health, texture, and appearance.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <FeaturedProducts 
        products={bestSellerProducts} 
        title="Best Sellers" 
        subtitle="Our most popular products loved by customers"
        viewAllLink="/bestsellers"
      />
      
      <FeaturedProducts 
        products={newProducts} 
        title="New Arrivals" 
        subtitle="Explore our latest aloe vera formulations"
        viewAllLink="/shop"
      />
      
      <Testimonials />
      
      <Newsletter />
    </Layout>
  );
};

export default HomePage;