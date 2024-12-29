import React from 'react';
import { Shield, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const certifications = [
  {
    icon: Shield,
    title: "CE-Certifierad Utrustning",
    description: "All vår behandlingsutrustning är CE-märkt och uppfyller EU:s höga säkerhetskrav."
  },
  {
    icon: Award,
    title: "Certifierade Terapeuter",
    description: "Våra terapeuter är utbildade och certifierade inom respektive behandlingsmetod."
  },
  {
    icon: CheckCircle,
    title: "Kvalitetssäkrade Metoder",
    description: "Våra behandlingsmetoder är vetenskapligt dokumenterade och följer branschens riktlinjer."
  }
];

const Certifications = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-4">
            Kvalitet & Säkerhet
          </span>
          <h2 className="text-4xl font-serif text-purple-900 mb-6 relative">
            Certifieringar & Kvalitetsgarantier
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-sage-400"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Din trygghet är vår högsta prioritet. Vi arbetar endast med certifierad 
            utrustning och utbildad personal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-transparent opacity-50 rounded-bl-full"></div>
              <cert.icon className="w-12 h-12 text-purple-600 mx-auto mb-6 relative z-10" />
              <h3 className="text-2xl font-serif text-purple-900 mb-4">
                {cert.title}
              </h3>
              <p className="text-gray-600">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
