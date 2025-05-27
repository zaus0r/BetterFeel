import React from 'react';
import { ChevronDown, ArrowRight, Phone, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../../common/OptimizedImage';
import { motion } from 'framer-motion';

const Hero = () => {
  const mainContentRef = React.useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative flex items-center min-h-screen py-8">
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full">
            <source
              srcSet="/assets/images/hero/BetterFeel_Hero.webp"
              type="image/webp"
            />
            <OptimizedImage
              src="/assets/images/hero/BetterFeel_Hero.jpg"
              alt="BetterFeel Hero Image - Holistisk behandling och välbefinnande"
              isBackground
              priority
              className="absolute inset-0"
              objectFit="cover"
              width={1920}
              height={1080}
              quality={85}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-8 pb-16 sm:pb-20 md:pb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center mb-6"
            >
              <span className="text-[#10b981] uppercase tracking-wider text-base sm:text-lg font-medium">
                VÄLKOMMEN TILL BETTERFEEL
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6"
            >
              Föryngra din hud &<br />
              <span className="text-[#10b981]">Återställ din balans</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl"
            >
              Upplev kraften i modern teknologi och holistisk behandling. 
              Våra beprövade metoder ger synliga resultat från första behandlingen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/konsultation-telefon-3124094"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl"
              >
                Boka Gratis Konsultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="tel:+46737140860"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 text-base font-medium backdrop-blur-sm"
              >
                <Phone className="mr-2 h-4 w-4" />
                Ring Oss
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-8 pt-6 border-t border-white/10"
            >
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-purple-200 flex items-center justify-center overflow-hidden"
                    >
                      <picture>
                        <source srcSet={`/assets/images/avatars/avatar-${i}.webp`} type="image/webp" />
                        <img
                          src={`/assets/images/avatars/avatar-${i}.jpg`}
                          alt={`Nöjd kund ${i}`}
                          className="w-full h-full object-cover"
                          width={40}
                          height={40}
                        />
                      </picture>
                    </div>
                  ))}
                </div>
                <div className="text-white">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-white/90">
                    Över 100+ nöjda kunder med 5-stjärniga omdömen
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                "HIFU-Behandling",
                "Plaxpot",
                "Frekvensterapi",
                "Microneedling",
                "Hudvård",
                "Holistisk Coaching"
              ].map((feature, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm border border-white/20"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-white/80 transition-colors duration-300"
          aria-label="Scroll to content"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </motion.button>
      </section>
      <div ref={mainContentRef} />
    </>
  );
};

export default Hero;
