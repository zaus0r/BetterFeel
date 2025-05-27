import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Star, Heart } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  return (
    <section id="intro" className="py-20 bg-gradient-to-b from-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Shield className="w-8 h-8 text-[#064e3b] mx-auto mb-3" />
              <h3 className="text-lg font-medium text-purple-900">CE-Certifierad</h3>
              <p className="text-gray-600">Säker teknologi</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Activity className="w-8 h-8 text-[#064e3b] mx-auto mb-3" />
              <h3 className="text-lg font-medium text-purple-900">Beprövad Metod</h3>
              <p className="text-gray-600">10+ års erfarenhet</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Star className="w-8 h-8 text-[#064e3b] mx-auto mb-3" />
              <h3 className="text-lg font-medium text-purple-900">5.0 Betyg</h3>
              <p className="text-gray-600">Över 100+ kunder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Heart className="w-8 h-8 text-[#064e3b] mx-auto mb-3" />
              <h3 className="text-lg font-medium text-purple-900">100% Nöjd</h3>
              <p className="text-gray-600">Kundgaranti</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 