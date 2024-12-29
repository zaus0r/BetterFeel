import React from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import OptimizedImage from '../components/common/OptimizedImage';

const About = () => {
  const mainContentRef = React.useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Om Oss | BetterFeel"
        description="Lär känna BetterFeel - din partner för holistisk hälsa och välbefinnande i Stockholm. Vi erbjuder moderna behandlingsmetoder och personlig service."
        keywords="om betterfeel, holistisk hälsa, välbefinnande, stockholm, behandlingar"
        url="https://betterfeel.se/about"
        preloadImages={['/assets/images/hero/about_hero.webp']}
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Om Oss", item: "/om-oss" }
        ]}
      />
      <main className="min-h-[60vh]">
        <section className="relative min-h-screen md:min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <picture>
              <source
                srcSet="/assets/images/hero/about_hero.webp"
                type="image/webp"
              />
              <OptimizedImage
                src="/assets/images/hero/about_hero.jpg"
                alt="BetterFeel Om Oss - Holistisk hälsa och välbefinnande"
                isBackground
                priority
                className="absolute inset-0"
                objectFit="cover"
                width={1920}
                height={1280}
                quality={85}
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-sage-800/50"></div>
          </div>
          <div className="relative z-10 w-full text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-16 md:pt-32 pb-12 sm:pb-20 mt-[-12rem] sm:mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center justify-center mb-6"
              >
                <div className="h-px w-8 bg-rose-300 mr-4"></div>
                <span className="text-rose-200 uppercase tracking-wider text-base sm:text-lg font-medium">Om Oss</span>
                <div className="h-px w-8 bg-rose-300 ml-4"></div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6"
              >
                Om BetterFeel
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Där hälsa möter skönhet
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <a
                  href="#about-content"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToContent();
                  }}
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Läs mer
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section ref={mainContentRef} className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-purple-100"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-20 bg-gradient-to-b from-purple-50 via-white to-white backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
            >
              <OptimizedImage 
                src="/assets/branding/logos/BetterFeel_Stamp.png"
                alt="BetterFeel Stamp"
                className="w-12 h-12 mx-auto mb-6"
                objectFit="contain"
                transparent
              />
              <p className="text-base text-gray-700 leading-relaxed">
                Jag heter Irene Nilsson, grundare av BetterFeel AB. Min passion är att hjälpa människor att nå sin fulla potential – både genom att må bra och se fantastiska ut. Med ett djupt intresse för hälsa och välmående har jag valt att fokusera på holistiska metoder och alternativa vägar som stärker både kropp och själ på ett naturligt och hållbart sätt. Med en kombination av avancerad teknologi och ett holistiskt tänk erbjuder jag behandlingar som gör skillnad – på riktigt.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
              >
                <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-purple-200 to-transparent"></div>
                <div className="space-y-6">
                  <p className="text-base text-gray-700 leading-relaxed pl-8">
                    Som certifierad HIFU- och Plaxpot-terapeut är jag expert inom hudföryngring och estetisk hudvård. Med precision och omsorg använder jag beprövade metoder som stramar upp huden, reducerar ålderstecken och ger ett naturligt fräscht resultat. Men skönhet är bara en del av helheten.
                  </p>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <OptimizedImage
                      src="/assets/images/team/Irene-10.png"
                      alt="Irene utför behandling"
                      className="w-full h-[700px]"
                      objectFit="cover"
                      objectPosition="center 20%"
                      hover="scale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
              >
                <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-purple-200 to-transparent"></div>
                <div className="space-y-6">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <OptimizedImage
                      src="/assets/images/team/Irene-22.png"
                      alt="Irene i kliniken"
                      className="w-full h-[700px]"
                      objectFit="cover"
                      objectPosition="center 15%"
                      hover="scale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed pl-8">
                    På BetterFeel tror jag att verkligt välmående handlar om balans – där hälsa och skönhet går hand i hand. Därför erbjuder jag också frekvensterapi, en kraftfull behandling som stärker kroppens inre system, minskar stress och främjar återhämtning.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-20 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
                <p className="text-base text-gray-700 leading-relaxed px-8 relative">
                  Min filosofi är enkel: när du mår bra inifrån och ut, syns det. Därför är varje behandling jag erbjuder noggrant utformad för att ge både yttre skönhet och inre harmoni. Jag tror på att möta varje kund med lyhördhet, expertis och skräddarsydda lösningar som passar just deras behov.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 max-w-xl mx-auto"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-purple-900 mb-8 leading-tight">
                  Varmt välkommen till en mer naturlig vardag!
              </h2>

              <div className="inline-flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
                <Heart className="w-5 h-5 text-rose-400" />
                <span className="text-xl font-serif text-purple-900">Iréne Nilsson</span>
                <div className="h-4 w-px bg-purple-200"></div>
                <span className="text-base text-gray-600">Grundare, BetterFeel</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;