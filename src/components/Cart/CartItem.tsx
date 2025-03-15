import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      updateQuantity(product.id, newQuantity);
    }
  };

  const itemPrice = product.discountPrice || product.price;
  const itemTotal = itemPrice * quantity;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-gray-200">
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0 mr-4 mb-4 sm:mb-0">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover rounded-md"
          />
        </Link>
      </div>
      
      {/* Product Info */}
      <div className="flex-grow">
        <Link to={`/product/${product.id}`} className="text-lg font-medium text-gray-800 hover:text-green-600">
          {product.name}
        </Link>
        
        <div className="text-sm text-gray-500 mt-1">
          {product.discountPrice ? (
            <div className="flex items-center">
              <span className="font-medium text-green-600">${product.discountPrice.toFixed(2)}</span>
              <span className="line-through ml-2">${product.price.toFixed(2)}</span>
            </div>
          ) : (
            <span className="font-medium text-green-600">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center border border-gray-300 rounded-md mt-4 sm:mt-0 mr-4">
        <button 
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity <= 1}
          className="px-2 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        >
          <Minus size={16} />
        </button>
        <input
          type="number"
          min="1"
          max={product.stock}
          value={quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
          className="w-10 text-center border-x border-gray-300 py-1 focus:outline-none"
        />
        <button 
          onClick={() => handleQuantityChange(quantity + 1)}
          disabled={quantity >= product.stock}
          className="px-2 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
        >
          <Plus size={16} />
        </button>
      </div>
      
      {/* Item Total */}
      <div className="text-right min-w-[80px] font-medium text-gray-800 mt-4 sm:mt-0 mr-4">
        ${itemTotal.toFixed(2)}
      </div>
      
      {/* Remove Button */}
      <button 
        onClick={() => removeFromCart(product.id)}
        className="text-gray-500 hover:text-red-500 mt-4 sm:mt-0"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default CartItem;