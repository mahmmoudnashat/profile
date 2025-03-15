import React from 'react';
import { useCart } from '../../context/CartContext';

interface CartSummaryProps {
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ onCheckout }) => {
  const { cartItems, cartTotal } = useCart();
  
  // Calculate subtotal, shipping, and tax
  const subtotal = cartTotal;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax;
  
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({cartItems.length} items)</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          {shipping === 0 ? (
            <span className="text-green-600">Free</span>
          ) : (
            <span>${shipping.toFixed(2)}</span>
          )}
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between font-bold text-gray-800">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      {subtotal < 50 && (
        <div className="bg-green-50 text-green-800 p-3 rounded-md mb-6 text-sm">
          Add ${(50 - subtotal).toFixed(2)} more to qualify for free shipping!
        </div>
      )}
      
      <button
        onClick={onCheckout}
        disabled={cartItems.length === 0}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-md transition duration-300"
      >
        Proceed to Checkout
      </button>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>We accept:</p>
        <div className="flex justify-center space-x-2 mt-2">
          <span className="px-2 py-1 bg-blue-600 text-white rounded">Visa</span>
          <span className="px-2 py-1 bg-red-600 text-white rounded">Mastercard</span>
          <span className="px-2 py-1 bg-blue-800 text-white rounded">PayPal</span>
          <span className="px-2 py-1 bg-yellow-500 text-white rounded">Amex</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;