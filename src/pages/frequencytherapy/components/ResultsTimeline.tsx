import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Repeat, Heart, CalendarDays } from 'lucide-react';

const ResultsTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Resultatutveckling
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
            Din Väg till Optimal Balans
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Följ din kropps naturliga läkningsprocess och se hur resultaten utvecklas över tid.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="font-medium text-2xl text-purple-900 mb-6">Resultatutveckling</h3>
            <div className="space-y-6">
              {[
                { day: "Direkt efter", desc: "Ökad avslappning och energi" },
                { day: "Dag 1-3", desc: "Kroppen börjar återbalansera sig" },
                { day: "Vecka 1-2", desc: "Märkbar förbättring i välmående" },
                { day: "Månad 1", desc: "Djupgående balansering" },
                { day: "Månad 2-3", desc: "Optimal balans uppnådd" }
              ].map((phase, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-24">
                    <span className="text-sm font-medium text-[#064e3b]">{phase.day}</span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="font-medium text-2xl text-purple-900 mb-6">Långsiktiga Resultat</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Timer className="w-5 h-5 text-[#064e3b] mt-1" />
                <div>
                  <p className="font-medium text-purple-900">Varaktighet</p>
                  <p className="text-gray-600">Individuellt, beroende på livsstil och behov</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Repeat className="w-5 h-5 text-[#064e3b] mt-1" />
                <div>
                  <p className="font-medium text-purple-900">Underhållsbehandling</p>
                  <p className="text-gray-600">Rekommenderas 1-2 gånger per månad</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#064e3b] mt-1" />
                <div>
                  <p className="font-medium text-purple-900">Livsstilspåverkan</p>
                  <p className="text-gray-600">Hälsosam livsstil förlänger resultatet</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-purple-50/50 rounded-xl">
              <p className="text-purple-900 font-medium mb-4">
                Vill du veta mer om hur frekvensterapi kan hjälpa dig?
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/konsultation-telefon-3124094"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
              >
                <CalendarDays className="mr-2 h-5 w-5" />
                Boka Kostnadsfri Konsultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResultsTimeline; 