import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    // In a real app, you would redirect to checkout page or show checkout form
    setTimeout(() => {
      alert('This is a demo. In a real application, you would proceed to payment.');
      setIsCheckingOut(false);
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Cart Items ({cartItems.length})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-600 hover:text-red-800"
                  >
                    Clear Cart
                  </button>
                </div>
                
                <div>
                  {cartItems.map(item => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link 
                    to="/shop" 
                    className="inline-flex items-center text-green-600 hover:text-green-800"
                  >
                    <ArrowLeft size={16} className="mr-1" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Cart Summary */}
            <div className="md:col-span-1">
              <CartSummary onCheckout={handleCheckout} />
              
              {isCheckingOut && (
                <div className="mt-4 bg-white rounded-lg shadow-sm p-4 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-2"></div>
                  <p className="text-gray-600">Processing your order...</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <ShoppingCart size={64} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link 
              to="/shop" 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
            >
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;