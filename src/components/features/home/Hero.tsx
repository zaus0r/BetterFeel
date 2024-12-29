import React from 'react';
import { ChevronDown } from 'lucide-react';
import OptimizedImage from '../../common/OptimizedImage';
import Animation from '../../common/Animation';

const Hero = () => {
  const mainContentRef = React.useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 z-0 bg-gray-100">
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
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 sm:mt-0 md:-mt-8 lg:mt-0">
            <div className="max-w-3xl mx-auto text-center">
              <div className="min-h-[400px] bg-black/40 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-white/10 shadow-lg">
                <Animation 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="inline-block px-4 py-1 rounded-full bg-white/20 text-sm font-medium mb-6 text-white"
                >
                  Välkommen till BetterFeel
                </Animation>

                <Animation 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight"
                >
                  Upptäck naturlig balans genom holistisk behandling
                </Animation>

                <Animation 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg md:text-xl text-white/90 mb-8 font-light"
                >
                  Vi kombinerar modern teknologi med traditionell visdom för att hjälpa dig uppnå optimal hälsa och välbefinnande.
                </Animation>

                <Animation
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <button
                    onClick={scrollToContent}
                    className="group inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                  >
                    Läs mer
                    <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                  </button>
                </Animation>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div ref={mainContentRef} />
    </>
  );
};

export default Hero;
