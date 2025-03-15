import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
        <div className="relative">
          {/* Product Image */}
          <div className="h-64 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.onSale && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                SALE
              </span>
            )}
            {product.isNew && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            )}
          </div>
          
          {/* Quick Actions */}
          <div className="absolute top-2 right-2">
            <button 
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
              aria-label="Add to wishlist"
            >
              <Heart size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <div className="flex items-center mb-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">({product.reviews.length})</span>
          </div>
          
          <h3 className="font-medium text-gray-800 mb-1 group-hover:text-green-600 transition-colors duration-300">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.shortDescription}
          </p>
          
          <div className="flex items-center justify-between">
            <div>
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-lg font-bold text-green-600">${product.discountPrice.toFixed(2)}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors duration-300"
              aria-label="Add to cart"
            >
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;