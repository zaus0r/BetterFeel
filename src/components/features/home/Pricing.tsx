import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';

const pricingInfo = {
  consultation: {
    title: "Kostnadsfri Konsultation",
    description: "30 minuter personlig genomgång av dina behov och mål",
    price: "0 kr"
  },
  treatments: [
    {
      name: "HIFU",
      prices: [
        { 
          area: "Ultimate Harmony (Kropp)",
          competitorPrice: "9000 kr",
          price: "4750 kr",
          description: "Mage + kärlekshandtag | stuss + ben"
        },
        { 
          area: "Supreme Sculpt (Ansikte)",
          competitorPrice: "4000 kr",
          price: "2350 kr",
          description: "Ansikte + hals"
        },
        { 
          area: "Glow Touch",
          competitorPrice: "3500 kr",
          price: "1495 kr",
          description: "Ögonområde | panna | hals"
        }
      ]
    },
    {
      name: "Frekvensterapi",
      prices: [
        { 
          area: "SENSO",
          competitorPrice: "995 kr",
          price: "749 kr",
          description: "60 minuters behandling på plats"
        },
        { 
          area: "HarmoniQ",
          competitorPrice: "1295 kr",
          price: "995 kr",
          description: "90 minuters distansbehandling med uppföljning"
        },
        { 
          area: "Balance Mastery",
          competitorPrice: "2495 kr",
          price: "1995 kr",
          description: "120 minuters premium distansbehandling med analys"
        }
      ]
    },
    {
      name: "Plaxpot",
      prices: [
        { 
          area: "Ögonlockslyft",
          competitorPrice: "5700 kr",
          price: "3500 kr",
          description: "Naturlig föryngring av ögonområdet"
        },
        { 
          area: "Rynkbehandling",
          competitorPrice: "3700-5700 kr",
          price: "2800 kr",
          description: "Effektiv behandling av rynkor och fina linjer"
        },
        { 
          area: "Infuzion",
          competitorPrice: "2295 kr",
          price: "995 - 1595 kr",
          description: "Djupgående hyaluronsyrabehandling utan nålar"
        }
      ]
    }
  ]
};

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Priser & Betalning
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-purple-900 mb-6 relative">
            Transparent Prissättning
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-sage-400"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vi erbjuder konkurrenskraftiga priser och flexibla betalningslösningar
          </p>
        </div>

        {/* Treatment Prices */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingInfo.treatments.map((treatment, index) => (
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
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
            >
              <h3 className="text-xl font-serif text-purple-900 mb-6">
                {treatment.name}
              </h3>
              <ul className="space-y-6">
                {treatment.prices.map((price, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="p-2 rounded-lg hover:bg-purple-50/50 transition-colors duration-200"
                  >
                    <div className="flex flex-col space-y-2">
                      <span className="text-lg font-medium text-purple-900">{price.area}</span>
                      {price.description && (
                        <span className="text-sm text-gray-600">{price.description}</span>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        {price.competitorPrice ? (
                          <div className="flex flex-col">
                            <span className="text-sm text-gray-500">Marknadspris</span>
                            <span className="line-through text-gray-400">{price.competitorPrice}</span>
                          </div>
                        ) : null}
                        <div className="flex flex-col items-end">
                          <span className="text-sm text-emerald-600">Vårt pris</span>
                          <span className="font-bold text-emerald-700">{price.price}</span>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif text-center text-purple-900 mb-8">
            Betalningsalternativ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bank Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-center justify-center h-full mt-4">
                <OptimizedImage 
                  src="/assets/images/payment/visa_mastercard.png"
                  alt="Visa & Mastercard"
                  className="w-20 h-20 mb-5"
                  objectFit="contain"
                  transparent
                />
                <h4 className="font-medium text-purple-900 mb-3 text-center">Bankkort</h4>
                <p className="text-sm text-gray-600 text-center">Alla vanliga bankkort accepteras</p>
              </div>
            </motion.div>

            {/* Swish */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-center justify-center h-full mt-4">
                <OptimizedImage 
                  src="/assets/images/payment/swish-logo.png"
                  alt="Swish"
                  className="w-20 h-20 mb-5"
                  objectFit="contain"
                  transparent
                />
                <h4 className="font-medium text-purple-900 mb-3 text-center">Swish</h4>
                <p className="text-sm text-gray-600 text-center">Snabb och säker mobilbetalning</p>
              </div>
            </motion.div>

            {/* Klarna */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-center justify-center h-full mt-4">
                <OptimizedImage 
                  src="/assets/images/payment/klarna-logo.png"
                  alt="Klarna"
                  className="w-20 h-20 mb-5"
                  objectFit="contain"
                  transparent
                />
                <h4 className="font-medium text-purple-900 mb-3 text-center">Klarna</h4>
                <p className="text-sm text-gray-600 text-center">Flexibla betalningsalternativ</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;