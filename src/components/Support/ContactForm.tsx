import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="grid md:grid-cols-3">
        {/* Contact Info */}
        <div className="bg-green-600 text-white p-8">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin size={20} className="mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Our Location</h3>
                <p className="text-green-100">123 Aloe Way, Botanical Gardens, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone size={20} className="mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Phone Number</h3>
                <p className="text-green-100">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail size={20} className="mr-3 mt-1" />
              <div>
                <h3 className="font-semibold">Email Address</h3>
                <p className="text-green-100">support@aloebeauty.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="font-semibold mb-2">Business Hours</h3>
            <p className="text-green-100">Monday - Friday: 9am - 6pm</p>
            <p className="text-green-100">Saturday: 10am - 4pm</p>
            <p className="text-green-100">Sunday: Closed</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="md:col-span-2 p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products or need assistance? Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-status">Order Status</option>
                    <option value="returns">Returns & Refunds</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;