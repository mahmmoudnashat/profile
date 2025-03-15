import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import ProductCard from '../components/Product/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { Filter, SlidersHorizontal, ChevronDown, X } from 'lucide-react';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on selected criteria
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const price = product.discountPrice || product.price;
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  // Sort products based on selected criteria
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = a.discountPrice || a.price;
    const priceB = b.discountPrice || b.price;

    switch (sortBy) {
      case 'price-low-high':
        return priceA - priceB;
      case 'price-high-low':
        return priceB - priceA;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id.localeCompare(a.id); // Using ID as a proxy for newness
      default: // 'featured'
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[index] = value;
      return newRange;
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 100]);
    setSortBy('featured');
  };

  return (
    <Layout>
      <div className="bg-green-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Shop All Products</h1>
          <p className="text-gray-600">
            Discover our complete range of aloe vera-based products
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md py-2 px-4"
            >
              <Filter size={18} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          {/* Filters Sidebar */}
          <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                  <SlidersHorizontal size={18} className="mr-2" /> Filters
                </h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-green-600 hover:text-green-800"
                >
                  Clear All
                </button>
              </div>

              {/* Categories Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-800 mb-3">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="all-categories"
                      name="category"
                      checked={selectedCategory === null}
                      onChange={() => handleCategoryChange(null)}
                      className="mr-2"
                    />
                    <label htmlFor="all-categories" className="text-gray-700">All Categories</label>
                  </div>
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${category.id}`}
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => handleCategoryChange(category.id)}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${category.id}`} className="text-gray-700">{category.name}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">${priceRange[0]}</span>
                    <span className="text-gray-600">${priceRange[1]}</span>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <label htmlFor="min-price" className="text-sm text-gray-600">Min</label>
                      <input
                        type="number"
                        id="min-price"
                        min="0"
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="max-price" className="text-sm text-gray-600">Max</label>
                      <input
                        type="number"
                        id="max-price"
                        min={priceRange[0]}
                        max="100"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full px-2 py-1 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:w-3/4">
            {/* Sort Controls */}
            <div className="flex flex-wrap justify-between items-center mb-6">
              <p className="text-gray-600 mb-4 md:mb-0">
                Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="flex items-center">
                <label htmlFor="sort-by" className="text-gray-600 mr-2">Sort by:</label>
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={handleSortChange}
                  className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">No products found</h2>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopPage;