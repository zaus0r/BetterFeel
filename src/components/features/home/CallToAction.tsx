import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-br from-[#064e3b] to-[#043927] rounded-2xl p-12 text-center text-white relative overflow-hidden shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Ta Första Steget mot Bättre Hälsa
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Boka en kostnadsfri konsultation för att diskutera dina behov och mål. 
              Vi hjälper dig att hitta den perfekta behandlingen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/konsultation-telefon-3124094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#064e3b] rounded-lg hover:bg-white/90 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Boka Konsultation
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="tel:+46737140860"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Ring Oss
                </a>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl from-white/10 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
