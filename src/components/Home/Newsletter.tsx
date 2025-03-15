import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Newsletter</h2>
          <p className="text-green-100 mb-8">
            Subscribe to get special offers, free giveaways, and product launches.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You for Subscribing!</h3>
              <p className="text-gray-600">
                You've been added to our newsletter. Look out for exclusive offers in your inbox soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md sm:rounded-r-none focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-md sm:rounded-l-none transition duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-green-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;