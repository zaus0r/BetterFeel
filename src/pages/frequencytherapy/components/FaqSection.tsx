import React from 'react';
import { motion } from 'framer-motion';

interface FaqSectionProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Vanliga Frågor
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
            Allt Du Behöver Veta
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Här hittar du svar på de vanligaste frågorna om frekvensterapi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-medium text-purple-900 mb-4">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 