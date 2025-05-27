import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, ChevronDown, Star } from 'lucide-react';
import OptimizedImage from '../../../components/common/OptimizedImage';

interface HeroSectionProps {
  scrollToContent?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToContent }) => {
  const [imageError, setImageError] = useState(false);

  // Without using onError directly on OptimizedImage, 
  // we'll use the standard img element with the fallback approach
  const handleImageError = () => {
    console.error('Hero image failed to load');
    setImageError(true);
  };

  const handleScrollToContent = () => {
    if (scrollToContent) {
      scrollToContent();
    } else {
      // Default scroll behavior
      const mainContent = document.getElementById('intro');
      if (mainContent) {
        mainContent.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative flex items-center min-h-screen py-8">
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <picture>
            <source
              srcSet="/assets/images/treatments/frequency/frequency_hero.webp"
              type="image/webp"
            />
            <OptimizedImage
              src="/assets/images/treatments/frequency/frequency_hero.jpg"
              alt="Frekvensterapi - Naturlig balans och läkning"
              isBackground
              priority
              className="absolute inset-0"
              objectFit="cover"
              objectPosition="center"
              quality={85}
              width={1920}
              height={1080}
            />
            {/* Hidden image to catch errors */}
            <img 
              src="/assets/images/treatments/frequency/frequency_hero.jpg"
              alt=""
              className="hidden"
              onError={handleImageError}
            />
          </picture>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-emerald-900"></div>
        )}
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
              CE-CERTIFIERAD TEKNOLOGI
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6"
          >
            Återställ Din Naturliga<br />
            <span className="text-[#10b981]">Balans & Energi</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl"
          >
            Upplev kraften i modern frekvensterapi. Holistiskt beprövad metod 
            för att återställa balans och välbefinnande.
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
                        alt={`Nöjd Frekvensterapi Kund ${i}`}
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
                  Över 100+ nöjda kunder senaste året
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
              "Frekvensterapi",
              "Energibalansering",
              "Holistisk Behandling",
              "Naturlig Läkning",
              "Stressreducering"
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
        onClick={handleScrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-white/80 transition-colors duration-300"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default HeroSection; 