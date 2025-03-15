import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingCart, Heart, Share2, Check } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import ProductReviews from './ProductReviews';
import RelatedProducts from './RelatedProducts';

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, relatedProducts }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">({product.reviews.length} reviews)</span>
            </div>
            
            <div className="mb-6">
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-green-600">${product.discountPrice.toFixed(2)}</span>
                  <span className="text-xl text-gray-500 line-through ml-3">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-green-600">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Stock Status */}
            <div className="flex items-center mb-6">
              <div className="mr-4 flex items-center">
                <span className="text-sm font-medium text-gray-700 mr-2">Availability:</span>
                {product.stock > 0 ? (
                  <span className="text-sm text-green-600 flex items-center">
                    <Check size={16} className="mr-1" /> In Stock ({product.stock} available)
                  </span>
                ) : (
                  <span className="text-sm text-red-600">Out of Stock</span>
                )}
              </div>
            </div>
            
            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="text-sm font-medium text-gray-700 mr-4">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                >
                  <Minus size={16} />
                </button>
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  className="w-12 text-center border-x border-gray-300 py-2 focus:outline-none"
                />
                <button 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= product.stock}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-4 rounded-md border border-gray-300 transition duration-300">
                <Heart size={18} />
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-4 rounded-md border border-gray-300 transition duration-300">
                <Share2 size={18} />
              </button>
            </div>
            
            {/* Product Categories & Tags */}
            <div className="text-sm text-gray-600">
              <p className="mb-1"><span className="font-medium">Category:</span> {product.category}</p>
              <p><span className="font-medium">Tags:</span> {product.tags.join(', ')}</p>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="border-t border-gray-200 mt-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'description' 
                  ? 'text-green-600 border-b-2 border-green-600' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('ingredients')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'ingredients' 
                  ? 'text-green-600 border-b-2 border-green-600' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Ingredients
            </button>
            <button
              onClick={() => setActiveTab('how-to-use')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'how-to-use' 
                  ? 'text-green-600 border-b-2 border-green-600' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              How to Use
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'reviews' 
                  ? 'text-green-600 border-b-2 border-green-600' 
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Reviews ({product.reviews.length})
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-700">{product.description}</p>
                
                {product.benefits && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-700">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ingredients</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.ingredients?.map((ingredient, index) => (
                    <li key={index} className="text-gray-700">{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'how-to-use' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Use</h3>
                <p className="text-gray-700">{product.howToUse}</p>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <ProductReviews product={product} />
            )}
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

export default ProductDetail;