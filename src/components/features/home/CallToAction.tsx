import React from 'react';
import { Calendar, Phone, Clock, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-br from-[#064e3b] to-[#043927] rounded-2xl p-12 text-center text-white relative overflow-hidden shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
        >
          <div className="relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              Begränsat Antal Tider
            </span>
            
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Börja Din Resa mot Bättre Hälsa Idag
            </h2>
            
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Ta första steget mot ett friskare och mer balanserat liv. 
              Boka en kostnadsfri konsultation och få en personlig behandlingsplan.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              {[
                'Kostnadsfri konsultation',
                'Personlig behandlingsplan',
                'Flexibla tider',
                'Erfaren terapeut'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-center sm:justify-start gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
                >
                  <Check className="w-5 h-5 text-white/90" />
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Urgency Indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <Clock className="w-5 h-5 text-white/90" />
              <span className="text-white/90">Boka din tid idag</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none"
              >
                <a
                  href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/konsultation-telefon-3124094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-[#064e3b] rounded-lg hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium leading-none h-[60px]"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Boka Kostnadsfri Konsultation
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 sm:flex-none"
              >
                <a
                  href="tel:+46737140860"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium leading-none h-[60px]"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Ring Oss
                </a>
              </motion.div>
            </div>

            {/* Trust Indicator */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-purple-200 flex items-center justify-center overflow-hidden"
                    >
                      <OptimizedImage
                        src={`/assets/images/avatars/avatar-${i}.jpg`}
                        alt={`Nöjd kund ${i}`}
                        className="w-full h-full object-cover"
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/90">
                  Gå med över 100+ nöjda kunder som redan har börjat sin resa mot bättre hälsa
                </p>
              </div>
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
