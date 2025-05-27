import React from 'react';
import SEO from '../../components/common/SEO';
import BreadcrumbSchema from '../../components/common/BreadcrumbSchema';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Sparkles, Circle } from 'lucide-react';
import ServiceSchema from '../../components/common/ServiceSchema';
import OptimizedImage from '../../components/common/OptimizedImage';

const Coaching = () => {
  const mainContentRef = React.useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ServiceSchema
        name="Holistisk Coaching"
        description="Personlig coaching för optimal hälsa och välbefinnande. Vi erbjuder skräddarsydda coachingprogram som hjälper dig att nå dina mål genom holistiska metoder och strategier."
        url="https://betterfeel.se/coaching"
        image="/assets/images/coaching/hero.jpg"
        provider="BetterFeel"
        areaServed="Stockholm"
        price="1495"
        priceCurrency="SEK"
      />
      <SEO
        title="Coaching | BetterFeel"
        description="Upptäck våra coachingprogram hos BetterFeel. Vi erbjuder personlig coaching för att hjälpa dig nå dina mål och förbättra ditt välbefinnande."
        url="https://betterfeel.se/coaching"
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Coaching", item: "/coaching" }
        ]}
      />
      <main className="min-h-screen">
        {/* Background Image Container */}
        <section className="relative min-h-screen md:min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <OptimizedImage
              src="/assets/images/hero/coaching_hero.jpg"
              alt="Coaching - Personlig utveckling och professionell vägledning"
              isBackground
              priority
              className="absolute inset-0 w-full h-full"
              objectFit="cover"
            />
            <div className="absolute inset-0 backdrop-blur-sm"></div>
          </div>
          
        {/* Content Container */}
          <div className="relative z-10 w-full text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-16 md:pt-32 pb-12 sm:pb-20">
              {/* Semi-transparent backdrop for better text readability */}
              <div className="bg-black/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto mt-[-4rem] sm:mt-0">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center mb-4 sm:mb-6"
                >
                  <div className="h-px w-6 sm:w-8 bg-purple-300 mr-3 sm:mr-4"></div>
                  <span className="text-purple-200 uppercase tracking-wider text-base sm:text-lg font-medium">Personlig Utveckling</span>
                  <div className="h-px w-6 sm:w-8 bg-purple-300 ml-3 sm:ml-4"></div>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-4 sm:mb-6 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]"
                >
                  Känner du att något håller dig tillbaka?
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto mb-4 sm:mb-6 leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]"
                >
                  Många upplever att de har potential till mer, men något står i vägen. Kanske känner du dig fast i karriären, 
                  saknar självförtroende för att ta nästa steg, eller har svårt att hitta balansen i livet?
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]"
                >
                  Med över tio års erfarenhet har jag hjälpt människor precis som du att övervinna dessa hinder och nå sin fulla potential.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <button
                    onClick={scrollToContent}
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-medium"
                  >
                    Upptäck hur jag kan hjälpa dig
                    <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <div ref={mainContentRef}></div>
        
        {/* Profile Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-b from-purple-50 via-white to-white backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl shadow-xl max-w-md mx-auto">
                    <OptimizedImage
                      src="/assets/images/team/irene-nilsson.png"
                      alt="Irene - Din Coach"
                      className="w-full"
                      objectFit="contain"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-50 z-0"></div>
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center mb-6">
                    <div className="h-px w-8 bg-purple-300 mr-4"></div>
                    <span className="text-purple-400 uppercase tracking-wider text-sm">Din Guide till Framgång</span>
                    <div className="h-px w-8 bg-purple-300 ml-4"></div>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-purple-900 mb-6">Irene Nilsson</h2>
                  <p className="text-gray-700 mb-6">
                    Med mer än ett decennium av erfarenhet inom arbetsrelaterad psykometri, karriärutveckling och mentorskap, 
                    har jag haft förmånen att coacha otaliga individer genom både små och stora utmaningar. Genom att kombinera 
                    min erfarenhet med djupgående kunskap inom personlig utveckling har jag hjälpt människor att nå sina mål, 
                    övervinna hinder och skapa verklig förändring i sina liv.
                  </p>
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 via-purple-100/20 to-purple-200/20 transform -skew-y-2"></div>
                    <div className="relative border-l-4 border-purple-400 pl-6 py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                        <span className="font-serif text-xl text-purple-900">Proctor Gallagher Institute</span>
                        <span className="inline-flex items-center bg-purple-100 text-purple-900 px-3 py-1 rounded-full text-sm font-medium">
                          <Sparkles className="w-4 h-4 mr-1" />
                          Världsledande inom personlig utveckling
                        </span>
                      </div>
                      <p className="text-gray-700">
                        Min resa inom personlig utveckling har formats genom studier vid detta prestigefyllda institut, 
                        där jag lade grunden och har de senaste åren integrerat en rad olika läror och metoder.
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Jag har även fördjupat mig i shamanismens värld – en resa som har berikat min syn på balans och helhet.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div className="max-w-3xl mx-auto text-center">
                <OptimizedImage 
                  src="/assets/branding/logos/BetterFeel_Stamp.png"
                  alt="BetterFeel Stamp"
                  className="w-12 h-12 mx-auto mb-6"
                  objectFit="contain"
                  transparent
                />
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-purple-900 mb-6">
                  Min Metodik
                </h2>
                <p className="text-gray-700 mb-6">
                  Genom mina studier har jag upptäckt hur de mjuka och intuitiva aspekterna av livet (det feminina) 
                  på ett harmoniskt sätt kan flätas samman med den yttre världens mer strukturerade och ofta krävande 
                  natur (det maskulina). Denna balans skapar ett kraftfullt fundament för både personlig och professionell utveckling.
                </p>
                <p className="text-gray-700">
                  Som certifierad inom karriär/personlighetstester och arbetsrelaterad psykometri vägleder jag mina klienter 
                  att förstå sig själva, maximera sina styrkor och omvandla utmaningar till möjligheter. Min metodik förenar 
                  psykologiska insikter, praktiska strategier och en djupare förståelse för den unika dynamiken mellan det inre och det yttre.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 12-Week Program Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-b from-purple-50 via-white to-white backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100/20 to-transparent rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full blur-3xl -z-10"></div>
                <div className="max-w-3xl mx-auto relative z-10">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-purple-900 mb-6 text-center">
                    Coachingprogrammet - Från klarhet till framgång
                  </h2>
                  <p className="text-gray-700 mb-8 text-center">
                    Vårt 12-veckors coachingprogram är designat för att hjälpa dig att nå nya höjder både personligt 
                    och professionellt. Genom sex djupgående moduler får du verktyg för att stärka din självkännedom, 
                    sätta tydliga mål, hantera utmaningar och skapa balans mellan det inre och yttre.
                  </p>

                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-2xl font-serif text-purple-900 mb-4">För vem passar programmet?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">För dig som vill ta ägarskap över din egen utveckling, men samtidigt uppskattar stöd från en erfaren coach.</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">För dig som söker flexibilitet att studera och reflektera på egna villkor, men ändå vill ha tydliga riktlinjer och uppföljning.</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">För dig som är redo att skapa verklig förändring i livet, både personligt och professionellt.</span>
                        </li>
                      </ul>
                    </motion.div>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-serif text-purple-900 mb-8 text-center">Modulerna - Din resa mot förändring</h3>
                      
                      <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-purple-200 via-purple-300 to-purple-200"></div>

                        {/* Timeline items */}
                        <div className="space-y-24">
                          {/* Module 1 */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative grid grid-cols-2 gap-8 items-center"
                          >
                            <div className="text-right pr-8">
                              <h4 className="text-xl font-medium text-purple-900 mb-3">Självkännedom</h4>
                              <p className="text-gray-700">
                                Kartlägg dina styrkor och skapa en personlig utvecklingsplan. Vi inleder med en personlighetstest 
                                med analys som utgör en grund för din fortsatta resa.
                              </p>
                            </div>
                            <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-300 shadow-lg flex items-center justify-center">
                                <Circle className="w-5 h-5 text-white" />
                              </div>
                            </div>
                            <div></div>
                          </motion.div>

                          {/* Module 2 */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative grid grid-cols-2 gap-8 items-center"
                          >
                            <div></div>
                            <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-300 shadow-lg flex items-center justify-center">
                                <Circle className="w-5 h-5 text-white" />
                              </div>
                            </div>
                            <div className="pl-8">
                              <h4 className="text-xl font-medium text-purple-900 mb-3">Mål och vision</h4>
                              <p className="text-gray-700">
                                Definiera din framtid och skapa en konkret handlingsplan. Vi jobbar med vision board, guidande 
                                frågor och SMART-modellen för tydliga mål och deadlines.
                              </p>
                            </div>
                          </motion.div>

                          {/* Module 3 */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative grid grid-cols-2 gap-8 items-center"
                          >
                            <div className="text-right pr-8">
                              <h4 className="text-xl font-medium text-purple-900 mb-3">Balans och energi</h4>
                              <p className="text-gray-700">
                                Utforska och integrera det feminina och maskulina för hållbar framgång. Kartlägg olika livsområden 
                                och lär dig balansera struktur med intuition.
                              </p>
                            </div>
                            <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-300 shadow-lg flex items-center justify-center">
                                <Circle className="w-5 h-5 text-white" />
                              </div>
                            </div>
                            <div></div>
                          </motion.div>

                          {/* Module 4 */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative grid grid-cols-2 gap-8 items-center"
                          >
                            <div></div>
                            <div className="absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-300 shadow-lg flex items-center justify-center">
                                <Circle className="w-5 h-5 text-white" />
                              </div>
                            </div>
                            <div className="pl-8">
                              <h4 className="text-xl font-medium text-purple-900 mb-3">Långsiktig förändring</h4>
                              <p className="text-gray-700">
                                Vi identifierar nuvarande vanemönster och ersätter dem med nya vanor som stöder ditt långsiktiga mål. 
                                Här skapas din grund för fortsatt tillväxt.
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Program includes section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="mt-16 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-8 border border-purple-100/50 shadow-lg"
                    >
                      <h3 className="text-2xl font-serif text-purple-900 mb-6 text-center">Programmet inkluderar</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="flex items-center bg-white/80 rounded-lg p-4 shadow-sm"
                        >
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                          </div>
                          <span className="text-gray-700 font-medium">Kursmaterial</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="flex items-center bg-white/80 rounded-lg p-4 shadow-sm"
                        >
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                          </div>
                          <span className="text-gray-700 font-medium">1:1-coachingsessioner</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="flex items-center bg-white/80 rounded-lg p-4 shadow-sm"
                        >
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                          </div>
                          <span className="text-gray-700 font-medium">Reflektionsövningar</span>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          className="flex items-center bg-white/80 rounded-lg p-4 shadow-sm"
                        >
                          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <Sparkles className="w-5 h-5 text-purple-600" />
                          </div>
                          <span className="text-gray-700 font-medium">Personlighetstester</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits/Challenges Section - Redesigned */}
        <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-purple-100">
          <div className="max-w-7xl mx-auto">
            {/* Add image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden max-w-4xl mx-auto"
            >
              <img
                src="/assets/images/treatments/coaching-mindset.jpeg"
                alt="Coaching Mindset - Personlig utveckling och mental styrka"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>
            
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-serif text-purple-900 mb-4">Vanliga Utmaningar Jag Hjälper Klienter Med</h2>
                  <p className="text-lg text-gray-600">
                    Känner du igen dig i något av detta?
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left column */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    {/* Challenge cards */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-purple-50 to-purple-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100/30"
                    >
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 shadow-md">
                          <ArrowRight className="w-5 h-5 text-purple-600" />
                        </div>
                        <p className="ml-4 text-gray-700 font-medium">Känslan av att vara fast i karriären utan tydlig väg framåt</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-purple-50 to-purple-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100/30"
                    >
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 shadow-md">
                          <ArrowRight className="w-5 h-5 text-purple-600" />
                        </div>
                        <p className="ml-4 text-gray-700 font-medium">Rädsla och tvivel som hindrar dig från att ta nästa steg</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-purple-50 to-purple-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100/30"
                    >
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 shadow-md">
                          <ArrowRight className="w-5 h-5 text-purple-600" />
                        </div>
                        <p className="ml-4 text-gray-700 font-medium">Stress och obalans mellan arbete och privatliv</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-purple-50 to-purple-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100/30"
                    >
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 shadow-md">
                          <ArrowRight className="w-5 h-5 text-purple-600" />
                        </div>
                        <p className="ml-4 text-gray-700 font-medium">Svårigheter att fatta viktiga beslut och stå för dem</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Right column */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="space-y-6"
                  >
                    {/* Challenge cards */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-purple-50 to-purple-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100/30"
                    >
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 shadow-md">
                          <ArrowRight className="w-5 h-5 text-purple-600" />
                        </div>
                        <p className="ml-4 text-gray-700 font-medium">Osäkerhet kring vad du egentligen vill med ditt liv</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-purple-50 to-purple-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100/30"
                    >
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 shadow-md">
                          <ArrowRight className="w-5 h-5 text-purple-600" />
                        </div>
                        <p className="ml-4 text-gray-700 font-medium">Brist på självförtroende i viktiga situationer</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-purple-50 to-purple-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100/30"
                    >
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 shadow-md">
                          <ArrowRight className="w-5 h-5 text-purple-600" />
                        </div>
                        <p className="ml-4 text-gray-700 font-medium">Känslan av att inte nå din fulla potential</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="mt-16"
                >
                  <div className="bg-gradient-to-b from-purple-50 via-white to-purple-100 rounded-t-2xl p-8 md:p-12 shadow-lg">
                    <div className="max-w-4xl mx-auto">
                      <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-serif text-purple-900 mb-4">Redo att ta första steget?</h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                          Låt oss tillsammans utforska hur du kan övervinna dina hinder och skapa det liv du längtar efter.
                        </p>
                      </div>

                      {/* Program Details */}
                      <div className="mb-12">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
                          <div>
                            <h4 className="text-2xl font-serif text-purple-900 mb-2">12-veckors Coachingprogram</h4>
                            <p className="text-gray-600">Din resa mot personlig utveckling och framgång</p>
                          </div>
                          <div className="mt-4 md:mt-0">
                            <p className="text-2xl font-medium text-[#064e3b]">18 800 kr</p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                <Sparkles className="w-4 h-4 text-purple-600" />
                              </div>
                              <span className="text-gray-700">Personlighetstester & Analys</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                <Sparkles className="w-4 h-4 text-purple-600" />
                              </div>
                              <span className="text-gray-700">1:1 Coachingsessioner</span>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                <Sparkles className="w-4 h-4 text-purple-600" />
                              </div>
                              <span className="text-gray-700">Skräddarsytt Kursmaterial</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                <Sparkles className="w-4 h-4 text-purple-600" />
                              </div>
                              <span className="text-gray-700">Kontinuerlig Uppföljning</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/konsultation-telefon-3124094"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-[#064e3b] text-white rounded-xl hover:bg-[#043927] transition-all duration-300 shadow-md hover:shadow-xl"
                          >
                            <Shield className="w-5 h-5 mr-2" />
                            Boka ett kostnadsfritt introduktionssamtal
                          </motion.a>
                          <p className="mt-4 text-sm text-gray-600">
                            Ta första steget mot din personliga utveckling idag
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Coaching;