import React from 'react';
import { Clock, Star, Shield, ArrowRight, CheckCircle2, Heart, ChevronDown, Activity, Sun, Repeat, CalendarDays, Eye, Palette, Timer } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import ServiceSEO from '../components/common/ServiceSEO';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import ServiceSchema from '../components/common/ServiceSchema';
import OptimizedImage from '../components/common/OptimizedImage';

const treatments = [
  {
    title: "Plaxpot Ögonlockslyft",
    duration: "60 minuter",
    areas: [
      "Övre ögonlock",
      "Undre ögonlock",
      "Kråksparkar",
      "Ögonbrynslyft"
    ],
    benefits: [
      "Reducerar överflödig hud",
      "Minskar påsar under ögonen",
      "Ger ett piggare utseende",
      "Naturligt resultat"
    ],
    price: "3500 kr",
    sessions: "1-2 behandlingar beroende på ditt utgångsläge",
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/plaxpot-ogonlockslyft-kraksparvar-3189649"
  },
  {
    title: "Plaxpot Rynkbehandling",
    duration: "45 minuter",
    areas: [
      "Rynkor runt munnen",
      "Nasolabialveck",
      "Glabellarlinjer (arga rynkan)",
      "Pannrynkor"
    ],
    benefits: [
      "Utslätning av rynkor",
      "Förbättrad hudstruktur",
      "Ökad kollagenproduktion",
      "Långvariga resultat"
    ],
    price: "2800 kr",
    sessions: "1-3 behandlingar beroende på ditt utgångsläge",
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/plaxpot-rynkbehandling-3189651"
  },
  {
    title: "Infuzion",
    duration: "60 minuter",
    areas: [
      "Intensiv återfuktning",
      "Hudföryngring",
      "Elasticitetsförbättring",
      "Rynkreducering"
    ],
    benefits: [
      "Djupgående hyaluronsyrabehandling",
      "Naturligt strålande resultat",
      "Helt smärtfri behandling",
      "Omedelbar fräschör och lyster"
    ],
    description: "Lyxen av intensiv återfuktning utan nålar. En banbrytande fuktboost som förenar de bästa egenskaperna hos skinboosters och fillers, men helt utan nålar eller injektioner.",
    price: "Från 995 kr",
    sessions: "Regelbunden behandling rekommenderas för bästa resultat",
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/plasma-infuzion-fuktboost-3167599"
  }
];

const Plaxpot = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ServiceSchema
        name="Plaxpot Behandling"
        description="Effektiv och säker Plaxpot-behandling för hudföryngring och hudförbättring. En innovativ metod som använder plasma för att behandla olika hudproblem."
        url="https://betterfeel.se/plaxpot"
        image="/assets/images/treatments/plaxpot/plaxpot_hero.jpg"
        provider="BetterFeel"
        areaServed="Stockholm"
        price="1495"
        priceCurrency="SEK"
      />
      <ServiceSEO
        title="Plaxpot Behandling | BetterFeel"
        description="Upptäck fördelarna med Plaxpot-behandling hos BetterFeel. Effektiv och skonsam behandling för hudföryngring och hudförbättring."
        keywords="plaxpot, hudföryngring, hudförbättring, plasma behandling, Stockholm"
        url="https://betterfeel.se/plaxpot"
        serviceName="Plaxpot Behandling"
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Behandlingar", item: "/behandlingar" },
          { name: "Plaxpot", item: "/plaxpot" }
        ]}
      />
      <main className="min-h-screen">
        <section className="relative min-h-screen md:min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <picture>
              <source
                srcSet="/assets/images/treatments/plaxpot/plaxpot_hero.webp"
                type="image/webp"
              />
              <OptimizedImage
                src="/assets/images/treatments/plaxpot/plaxpot_hero.jpg"
                alt="Plaxpot Behandling - Naturlig hudföryngring"
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
                className="inline-flex items-center justify-center mb-4 sm:mb-6"
              >
                <div className="h-px w-8 bg-rose-300 mr-4"></div>
                <span className="text-base sm:text-lg font-medium text-rose-300 uppercase tracking-wider">Avancerad Hudföryngring</span>
                <div className="h-px w-8 bg-rose-300 ml-4"></div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight"
              >
                Plaxpot Behandlingar
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Naturlig hudföryngring och hudförbättring utan nålar
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <button
                  onClick={scrollToContent}
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Läs mer
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <div ref={mainContentRef}></div>

        <section className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-purple-900 mb-6">Vad är Plaxpot?</h2>
                <div className="max-w-3xl mx-auto">
                  <p className="text-base md:text-lg text-gray-700 mb-6">
                    Plaxpot plasma är en banbrytande, icke-kirurgisk behandlingsmetod som ger exceptionella 
                    och långvariga resultat för hudföryngring. Tekniken använder äkta plasma, genererad av 
                    en specialutvecklad plasmagenerator, för att effektivt sublimera rynkor och reducera 
                    överskottshud.
                  </p>
                  <p className="text-base md:text-lg text-gray-700">
                    En precis plasma-blixt i mikro-millimeterstorlek skapas mellan apparatens spets och 
                    huden. Detta resulterar i en kontrollerad sammandragning av huden som effektivt 
                    reducerar överskottshud i det behandlade området.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="max-w-6xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl overflow-hidden shadow-2xl"
              >
                <OptimizedImage
                  src="/assets/images/location/clinic-odenplan-treatment-room.jpeg"
                  alt="BetterFeel Behandlingsrum - Modern och rofylld miljö i Vasastan"
                  className="w-full h-[500px]"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-serif mb-2">Välkommen till vår klinik i Vasastan</h3>
                  <p className="text-lg md:text-xl opacity-90">En rofylld miljö för din behandling</p>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="space-y-4 h-full">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-purple-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-2xl text-purple-900 mb-1">Säker & Kontrollerad</h3>
                      <p className="text-base md:text-lg text-gray-600">CE-certifierad teknologi med dokumenterad säkerhetsprofil</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Heart className="w-6 h-6 text-purple-400 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-2xl text-purple-900 mb-1">Precisa Resultat</h3>
                      <p className="text-base md:text-lg text-gray-600">Målriktad behandling med exakt kontroll över behandlingsområdet</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 relative overflow-hidden"
              >
                    <h3 className="font-medium text-2xl text-purple-900 mb-3">Eftervård & Läkningsprocess</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Konvalescenstid: 5-7 dagar</p>
                      </div>
                      <div className="flex items-start">
                        <Activity className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Träningsuppehåll: 1 vecka</p>
                      </div>
                      <div className="flex items-start">
                        <Sun className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Solskydd: SPF 50 krävs på behandlat område</p>
                      </div>
                      <div className="flex items-start">
                        <Repeat className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Daglig vård: Desinficering 2 gånger/dag i minst 3 dagar</p>
                      </div>
                      <div className="flex items-start">
                        <Palette className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Smink: Undvik helt tills vävnaden normaliserats (mineralpuder tillåtet efter 48h)</p>
                      </div>
                    </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 relative overflow-hidden"
              >
                    <h3 className="font-medium text-2xl text-purple-900 mb-3">Läkningsförloppet dag för dag</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CalendarDays className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Dag 1: Bruna märken och rodnad, viss ömhet</p>
                      </div>
                      <div className="flex items-start">
                        <CalendarDays className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Dag 2-3: Möjlig svullnad, rodnad och krustbildning</p>
                      </div>
                      <div className="flex items-start">
                        <CalendarDays className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Dag 4: Minskad rodnad, reducerad svullnad, början till fjällning</p>
                      </div>
                      <div className="flex items-start">
                        <CalendarDays className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Dag 5-8: Avtagande fjällning, ökad hudspänst</p>
                      </div>
                      <div className="flex items-start">
                        <CalendarDays className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Dag 9-14: Normalisering av vävnad</p>
                      </div>
                    </div>
              </motion.div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 relative overflow-hidden"
              >
                    <h3 className="font-medium text-2xl text-purple-900 mb-3">Behandlingsresultat</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Eye className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Första synliga resultat: Efter 7 dagar</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Slutgiltigt resultat: 1-3 månader efter behandling</p>
                      </div>
                      <div className="flex items-start">
                        <Timer className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Hållbarhet: Permanent, men påverkas av naturligt åldrande</p>
                      </div>
                      <div className="flex items-start">
                        <Repeat className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base md:text-lg text-gray-700">Vid djupa rynkor kan upprepad behandling rekommenderas</p>
                      </div>
                    </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 relative overflow-hidden"
              >
                    <h3 className="font-medium text-2xl text-purple-900 mb-3">Behandlingsprocedur</h3>
                    <p className="text-base md:text-lg text-gray-700">
                      Varje session inleds med konsultation följt av bedövning som verkar i 30 minuter 
                      innan behandlingen påbörjas.
                    </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Programs */}
        <section className="py-20 bg-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 h-px bg-purple-100"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-purple-900 text-center mb-12">Våra Plaxpot-behandlingar</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => (
                <div 
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-transparent opacity-50 rounded-bl-full"></div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    className="flex flex-col h-full"
                  >
                  <h3 className="text-2xl font-serif text-purple-900 mb-4">{treatment.title}</h3>
                  <div className="flex items-center text-sage-600 mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm md:text-base">{treatment.duration}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-purple-800 mb-2">Behandlingsområden:</h4>
                    <ul className="space-y-2">
                      {treatment.areas.map((area, i) => (
                        <li key={i} className="flex items-center text-base md:text-lg text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-sage-500 mr-2" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-purple-800 mb-2">Fördelar:</h4>
                    <ul className="space-y-2">
                      {treatment.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-base md:text-lg text-gray-600">
                          <ArrowRight className="w-4 h-4 text-rose-400 mr-2 mt-1 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="border-t border-purple-100 pt-6 mb-6">
                      <div className="bg-purple-50/50 rounded-lg p-4">
                        <div className="flex items-center justify-center gap-2 mb-3 text-gray-600">
                          <Star className="w-5 h-5 text-purple-400" />
                          <span className="text-purple-900 font-medium">{treatment.sessions}</span>
                        </div>
                        <div className="text-3xl font-serif text-purple-900 text-center">{treatment.price}</div>
                      </div>
                    </div>
                    <a
                      href={treatment.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-colors duration-200"
                    >
                      Boka {treatment.title.split('–')[0].trim()}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Plaxpot;