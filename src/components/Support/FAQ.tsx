import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What are the benefits of aloe vera for skin?',
    answer: 'Aloe vera offers numerous benefits for skin including hydration, soothing irritated skin, reducing inflammation, promoting healing, and providing antioxidant protection. It\'s suitable for all skin types and can help with various skin concerns from dryness to acne.'
  },
  {
    id: 2,
    question: 'Are your products suitable for sensitive skin?',
    answer: 'Yes, our products are specifically formulated to be gentle and suitable for sensitive skin. We avoid common irritants, artificial fragrances, and harsh chemicals. All our products undergo dermatological testing to ensure they are non-irritating.'
  },
  {
    id: 3,
    question: 'How often should I use aloe vera products?',
    answer: 'This depends on the specific product and your skin needs. Most of our facial products can be used daily, while treatments like masks may be used 2-3 times per week. Always follow the specific usage instructions on each product for best results.'
  },
  {
    id: 4,
    question: 'Do you test on animals?',
    answer: 'No, we are proudly cruelty-free. We never test our products or ingredients on animals, and we don\'t work with suppliers who conduct animal testing. We use alternative testing methods to ensure product safety and efficacy.'
  },
  {
    id: 5,
    question: 'What is your shipping policy?',
    answer: 'We offer free standard shipping on all orders over $50. Orders under $50 have a flat shipping rate of $5.99. Standard shipping typically takes 3-5 business days. We also offer expedited shipping options at checkout for an additional fee.'
  },
  {
    id: 6,
    question: 'Can I return products if I\'m not satisfied?',
    answer: 'Yes, we offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with your purchase, you can return it within 30 days for a full refund. Products must be in their original packaging and at least 75% full to qualify for a refund.'
  },
  {
    id: 7,
    question: 'Are your products organic?',
    answer: 'Many of our products contain certified organic ingredients, including our aloe vera. We prioritize organic sourcing whenever possible and clearly label which ingredients are organic on our product packaging and website.'
  },
  {
    id: 8,
    question: 'Do your products contain parabens or sulfates?',
    answer: 'No, all our products are formulated without parabens, sulfates, phthalates, and other potentially harmful chemicals. We believe in clean formulations that are effective without compromising on safety.'
  }
];

const FAQ: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="divide-y divide-gray-200">
        {faqs.map(faq => (
          <div key={faq.id} className="py-4 px-6">
            <button
              onClick={() => toggleFaq(faq.id)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <h3 className="font-medium text-gray-800">{faq.question}</h3>
              {openFaqId === faq.id ? (
                <ChevronUp size={18} className="text-green-600" />
              ) : (
                <ChevronDown size={18} className="text-gray-600" />
              )}
            </button>
            
            {openFaqId === faq.id && (
              <div className="mt-2 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;