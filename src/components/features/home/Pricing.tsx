import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from '../../common/OptimizedImage';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
      ],
      link: "/hifu"
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
      ],
      link: "/frekvens"
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
      ],
      link: "/plaxpot"
    },
    {
      name: "Microneedling",
      prices: [
        { 
          area: "Bio Pen Q2 Facial Treatment",
          competitorPrice: "1800 kr",
          price: "1495 kr",
          description: "Grundläggande behandling för förbättrad hudstruktur"
        },
        { 
          area: "Bio Pen Advanced",
          competitorPrice: "2295 kr",
          price: "1995 kr",
          description: "Avancerad behandling med EMS elektroporation"
        },
        { 
          area: "Behandlingspaket (3x)",
          competitorPrice: "5400 kr",
          price: "3588 kr",
          description: "Spara 20% på en serie behandlingar"
        }
      ],
      link: "/microneedling"
    },
    {
      name: "Hudvård",
      prices: [
        { 
          area: "Peeling",
          competitorPrice: "1295 kr",
          price: "895 kr",
          description: "Kemisk peeling för förnyad hudstruktur"
        },
        { 
          area: "GLASS SKIN",
          competitorPrice: "1200 kr",
          price: "895 kr",
          description: "Intensiv återfuktning och lyster"
        },
        { 
          area: "Premium behandling",
          competitorPrice: "2495 kr",
          price: "1749 kr",
          description: "Skräddarsydd lyxbehandling för ansiktet"
        }
      ],
      link: "/hudvard"
    }
  ]
};

// Calculate savings percentage
const calculateSavings = (marketPrice: string, ourPrice: string) => {
  const market = parseInt(marketPrice.replace(/[^0-9]/g, ''));
  const our = parseInt(ourPrice.replace(/[^0-9]/g, ''));
  if (isNaN(market) || isNaN(our) || market === 0) return 0;
  return Math.round(((market - our) / market) * 100);
};

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Våra Priser
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6 relative">
            Investera i Din Hälsa
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-sage-400"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vi erbjuder konkurrenskraftiga priser och flexibla betalningslösningar. 
            Boka en kostnadsfri konsultation för att diskutera dina behov och mål.
          </p>
        </div>

        {/* Value Proposition */}
        <div className="max-w-3xl mx-auto mb-16 bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-purple-200/30 shadow-lg">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-[#064e3b] font-bold text-2xl mb-2">30-60%</div>
              <p className="text-gray-600">Lägre priser än marknadssnittet</p>
            </div>
            <div>
              <div className="text-[#064e3b] font-bold text-2xl mb-2">100%</div>
              <p className="text-gray-600">Nöjd kund-garanti</p>
            </div>
            <div>
              <div className="text-[#064e3b] font-bold text-2xl mb-2">0 kr</div>
              <p className="text-gray-600">Kostnadsfri konsultation</p>
            </div>
          </div>
        </div>

        {/* Treatment Prices - Table Design */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-200/30">
            {/* Table Header */}
            <div className="bg-purple-50 p-4 border-b border-purple-100">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 md:col-span-4">
                  <h3 className="text-lg font-medium text-purple-900">Behandling</h3>
                </div>
                <div className="col-span-4 md:col-span-3 text-center">
                  <h3 className="text-lg font-medium text-gray-500">Marknadspris</h3>
                </div>
                <div className="col-span-5 md:col-span-5 text-center">
                  <h3 className="text-lg font-medium text-[#064e3b]">BetterFeel Pris</h3>
                </div>
              </div>
            </div>
            
            {/* Table Body */}
            <div>
              {pricingInfo.treatments.map((treatment, index) => {
                const savings = calculateSavings(
                  treatment.prices[0].competitorPrice, 
                  treatment.prices[0].price
                );
                
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`p-4 border-b border-purple-100 ${index % 2 === 0 ? 'bg-purple-50/30' : 'bg-white'}`}
                  >
                    <div className="grid grid-cols-12 gap-4 items-center">
                      {/* Treatment info */}
                      <div className="col-span-3 md:col-span-4">
                        <div className="flex flex-col">
                          <span className="font-medium text-purple-900">{treatment.name}</span>
                          <span className="text-sm text-gray-600 mt-1 line-clamp-1">{treatment.prices[0].area}</span>
                        </div>
                      </div>
                      
                      {/* Market price */}
                      <div className="col-span-4 md:col-span-3 text-center">
                        <span className="text-gray-500 line-through">{treatment.prices[0].competitorPrice}</span>
                      </div>
                      
                      {/* Our price with savings */}
                      <div className="col-span-5 md:col-span-5 flex justify-end md:justify-center items-center space-x-4">
                        <div className="flex items-center">
                          <span className="text-lg font-bold text-[#064e3b]">{treatment.prices[0].price}</span>
                          {savings > 0 && (
                            <span className="ml-2 text-xs font-medium px-2 py-1 bg-[#064e3b]/10 text-[#064e3b] rounded-full whitespace-nowrap">
                              {savings}% lägre
                            </span>
                          )}
                        </div>
                        <a 
                          href={treatment.link}
                          className="hidden md:flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-200"
                        >
                          <span className="text-sm">Läs mer</span>
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </div>
                    
                    {/* Mobile view link */}
                    <div className="block md:hidden mt-2 text-right">
                      <a 
                        href={treatment.link}
                        className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-200"
                      >
                        <span className="text-sm">Läs mer</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="px-4 py-3 bg-white/90 rounded-lg shadow-sm mt-6 border border-purple-100">
            <div className="flex items-start">
              <CheckCircle2 className="text-[#064e3b] h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                Alla prisjämförelser är baserade på genomsnittliga marknadspriser i Stockholm. 
                Vi erbjuder samma högkvalitativa behandlingar till markant lägre priser utan att kompromissa med kvalitet eller service.
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-medium text-center text-purple-900 mb-8">
            Flexibla Betalningsalternativ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bank Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-center justify-center h-full mt-4">
                <OptimizedImage 
                  src="/assets/images/payment/visa_mastercard_optimized.png"
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
              className="flex flex-col items-center p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-center justify-center h-full mt-4">
                <OptimizedImage 
                  src="/assets/images/payment/swish-logo_optimized.png"
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
              className="flex flex-col items-center p-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-center justify-center h-full mt-4">
                <OptimizedImage 
                  src="/assets/images/payment/klarna-logo_optimized.png"
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <a
              href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/konsultation-telefon-3124094"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
            >
              Boka Din Kostnadsfria Konsultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Inga förpliktelser - Vi hjälper dig hitta den perfekta behandlingen
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;