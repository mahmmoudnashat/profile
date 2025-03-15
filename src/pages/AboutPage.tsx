import React from 'react';
import Layout from '../components/Layout/Layout';
import { Leaf, Award, Users, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-green-800 mb-4">About AloeVera Beauty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to harnessing the healing power of aloe vera through science-backed formulations.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                AloeVera Beauty was founded in 2020 by a team of dermatologists and botanists who recognized the 
                extraordinary potential of aloe vera for skin health. What began as a small research project 
                has grown into a comprehensive line of medical-grade cosmetic products.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to create effective, gentle skincare solutions that harness the natural healing 
                properties of aloe vera. We believe in the perfect balance between nature and science, 
                combining traditional botanical wisdom with cutting-edge dermatological research.
              </p>
              <p className="text-gray-700">
                Every product in our range is carefully formulated to deliver maximum benefits while being 
                suitable for all skin types, including the most sensitive. We're committed to ethical 
                practices, sustainability, and transparency in everything we do.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Aloe Vera Plants" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center bg-green-100 p-3 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Natural Ingredients</h3>
              <p className="text-gray-600">
                We prioritize natural, high-quality ingredients that work in harmony with your skin.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center bg-green-100 p-3 rounded-full mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Scientific Excellence</h3>
              <p className="text-gray-600">
                All our formulations are backed by rigorous research and dermatological testing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center bg-green-100 p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Customer-Centric</h3>
              <p className="text-gray-600">
                We listen to our customers and continuously improve our products based on feedback.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center bg-green-100 p-3 rounded-full mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Ethical Practices</h3>
              <p className="text-gray-600">
                We're committed to sustainability, cruelty-free testing, and ethical sourcing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Our Process</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-semibold text-green-800 mb-3 mt-2">Sustainable Harvesting</h3>
                <p className="text-gray-600">
                  We carefully select and harvest aloe vera plants at their peak potency from our partner organic farms. 
                  Our harvesting methods ensure the plants continue to thrive for future generations.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-semibold text-green-800 mb-3 mt-2">Scientific Formulation</h3>
                <p className="text-gray-600">
                  Our team of dermatologists and cosmetic scientists develop formulations that maximize the 
                  benefits of aloe vera while ensuring stability, efficacy, and sensory appeal.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="absolute -top-4 -left-4 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-semibold text-green-800 mb-3 mt-2">Rigorous Testing</h3>
                <p className="text-gray-600">
                  Every product undergoes extensive testing for safety, stability, and efficacy. 
                  We use alternative testing methods that don't involve animals and conduct human trials 
                  to ensure real-world effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Sarah Johnson" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-1">Dr. Sarah Johnson</h3>
                <p className="text-green-600 mb-3">Founder & Chief Dermatologist</p>
                <p className="text-gray-600">
                  With over 15 years of experience in dermatology, Dr. Johnson leads our product development 
                  and ensures all formulations meet the highest standards of efficacy and safety.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Michael Rodriguez" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-1">Michael Rodriguez</h3>
                <p className="text-green-600 mb-3">Botanical Specialist</p>
                <p className="text-gray-600">
                  Michael's expertise in plant science and sustainable agriculture ensures we source 
                  the highest quality aloe vera and other botanical ingredients.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Emily Chen" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-1">Dr. Emily Chen</h3>
                <p className="text-green-600 mb-3">Research Director</p>
                <p className="text-gray-600">
                  Dr. Chen leads our research initiatives, exploring new applications of aloe vera 
                  and developing innovative formulations that push the boundaries of skincare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;