import React from 'react';
import Layout from '../components/Layout/Layout';
import ContactForm from '../components/Support/ContactForm';
import FAQ from '../components/Support/FAQ';

const SupportPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-green-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-green-800 mb-2">Customer Support</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help with any questions or concerns about our aloe vera products
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products or need assistance with your order? 
              Our customer support team is ready to help you.
            </p>
            
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-8">
              Find quick answers to common questions about our products, shipping, returns, and more.
            </p>
            
            <FAQ />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;