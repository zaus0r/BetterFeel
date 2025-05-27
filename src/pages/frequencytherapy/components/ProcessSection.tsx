import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Activity, Shield, Check } from 'lucide-react';

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Behandlingsprocess
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
            Din Resa till Balans & Välmående
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vi guidar dig genom hela processen, från konsultation till eftervård, 
            för att säkerställa bästa möjliga resultat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="font-medium text-2xl text-purple-900 mb-6">Förberedelse</h3>
            <ul className="space-y-4">
              {[
                "Kostnadsfri konsultation",
                "Personlig frekvensanalys",
                "Skräddarsydd behandlingsplan"
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#064e3b] text-white flex items-center justify-center text-sm">
                    {i + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="font-medium text-2xl text-purple-900 mb-6">Behandling</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#064e3b] mt-1" />
                <div>
                  <p className="font-medium text-purple-900">Behandlingstid</p>
                  <p className="text-gray-600">60-120 minuter</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="w-5 h-5 text-[#064e3b] mt-1" />
                <div>
                  <p className="font-medium text-purple-900">Komfortnivå</p>
                  <p className="text-gray-600">Avslappnande och behaglig</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#064e3b] mt-1" />
                <div>
                  <p className="font-medium text-purple-900">Säkerhet</p>
                  <p className="text-gray-600">CE-certifierad teknologi</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="font-medium text-2xl text-purple-900 mb-6">Eftervård</h3>
            <ul className="space-y-4">
              {[
                "Personliga rekommendationer",
                "Drick mycket vatten",
                "Undvik stress 24h",
                "Uppföljning vid behov"
              ].map((care, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#064e3b] mt-1" />
                  <span className="text-gray-700">{care}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 