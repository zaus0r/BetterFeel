import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Shield, Brain, Activity, Zap, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceSEO from '../components/common/ServiceSEO';
import FAQSchema from '../components/common/FAQSchema';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import ServiceSchema from '../components/common/ServiceSchema';
import OptimizedImage from '../components/common/OptimizedImage';

const FrequencyTherapy: React.FC = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const sensoCardRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSenso = () => {
    if (sensoCardRef.current) {
      const headerOffset = 80;
      const elementPosition = sensoCardRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const faqs = [
    {
      question: "Vad är frekvensterapi?",
      answer: "Frekvensterapi är en holistisk behandlingsmetod som använder specifika frekvenser för att balansera kroppens energifält och stödja naturlig läkning."
    },
    {
      question: "Hur lång tid tar en behandling?",
      answer: "En standardbehandling tar 60 minuter, medan mer omfattande sessioner kan vara upp till 90-120 minuter."
    },
    {
      question: "Är behandlingen säker?",
      answer: "Ja, frekvensterapi är en helt säker och icke-invasiv behandlingsmetod som är CE-certifierad och följer alla säkerhetsstandarder."
    },
    {
      question: "Hur många behandlingar behövs?",
      answer: "Antalet behandlingar varierar beroende på individuella behov. Vissa upplever förbättring efter en session, medan andra kan behöva flera behandlingar."
    }
  ];

  return (
    <>
      <ServiceSchema
        name="Frekvensbehandling"
        description="Holistisk frekvensbehandling för balans och välbefinnande. En modern behandlingsmetod som använder bioresonans för att stödja kroppens naturliga läkningsprocesser."
        url="https://betterfeel.se/frekvensterapi"
        image="/assets/images/treatments/frequency/hero.jpg"
        provider="BetterFeel"
        areaServed="Stockholm"
        price="1495"
        priceCurrency="SEK"
      />
      <ServiceSEO 
        title="Frekvensterapi | BetterFeel"
        description="Upptäck kraften i frekvensterapi hos BetterFeel. Vi erbjuder SENSO-behandlingar och distansbehandlingar för optimal hälsa och välbefinnande."
        keywords="frekvensterapi, SENSO-behandling, distansbehandling, biofeedback, Stockholm"
        url="https://betterfeel.se/frekvensterapi"
        serviceName="Frekvensterapi"
        preloadImages={['/assets/images/treatments/frequency/frequency_hero.webp']}
        treatments={[
          {
            name: "SENSO Frekvensterapi",
            description: "En 60-minuters behandling som främjar djup avslappning genom subtila vibrationer och balansering.",
            duration: "PT60M",
            price: "749",
            url: "https://betterfeel.se/frekvensterapi#senso"
          },
          {
            name: "HarmoniQ Distansbehandling",
            description: "En 90-minuters distansbehandling som ger exakt det din kropp behöver för att återfå balans och styrka.",
            duration: "PT90M",
            price: "995",
            url: "https://betterfeel.se/frekvensterapi#harmoniq"
          },
          {
            name: "Balance Mastery Premium",
            description: "En omfattande 120-minuters premiumbehandling med personlig analys, rapport och uppföljning.",
            duration: "PT120M",
            price: "1995",
            url: "https://betterfeel.se/frekvensterapi#balance-mastery"
          }
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Behandlingar", item: "/behandlingar" },
          { name: "Frekvensterapi", item: "/frekvensterapi" }
        ]}
      />
      <FAQSchema questions={faqs} />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen md:min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <picture>
              <source
                srcSet="/assets/images/treatments/frequency/frequency_hero.webp"
                type="image/webp"
              />
              <OptimizedImage
                src="/assets/images/treatments/frequency/frequency_hero.jpg"
                alt="Frekvens Terapi - Naturlig läkning genom frekvenser"
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-16 md:pt-32 pb-12 sm:pb-20 mt-[-8rem] sm:mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center justify-center mb-4 sm:mb-6"
              >
                <div className="h-px w-8 bg-rose-300 mr-4"></div>
                <span className="text-base sm:text-lg text-rose-200 uppercase tracking-wider">Holistisk Hälsa</span>
                <div className="h-px w-8 bg-rose-300 ml-4"></div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl font-serif text-white mb-6 leading-tight"
              >
                Återställ Din Hälsa med Frekvensterapi
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Känn dig balanserad, fylld av energi och fri från stress
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <button
                  onClick={scrollToContent}
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white text-base rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Läs mer
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        <div ref={mainContentRef}></div>

        {/* Info Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif text-purple-900 mb-6">
                  Vad är Frekvensterapi?
                </h2>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <OptimizedImage
                    src="/assets/images/location/clinic-odenplan-exterior.png"
                    alt="BetterFeel Klinik i Vasastan - Modern och välkomnande miljö"
                    className="w-full h-[400px]"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-2xl font-serif mb-2">Välkommen till vår klinik</h3>
                    <p className="text-lg opacity-90">En oas av lugn och harmoni</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Frekvensterapi (eller Bioresonans) är en kraftfull, naturlig behandling som hjälper din kropp att återfå balans genom att använda specifika frekvenser. Det här är en metod som arbetar med kroppens energifält för att återställa harmoni och stödja självläkning—utan att du behöver vara fysiskt närvarande.
                </p>
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300">
                  <h3 className="text-2xl font-serif text-purple-900 mb-4">
                    Så fungerar det
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Frekvensterapi skickar specifika frekvenser till din kropp, som hjälper till att identifiera och åtgärda obalanser. Genom avancerad teknologi kan vi analysera din kropp och hjälpa den att återhålla sig, stärka immunförsvaret och lindra stress. Behandlingen är enkel, effektiv och kan göras på distans—från var du än är.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-serif text-purple-900 mb-6">
                  Fördelar med Frekvensterapi
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <Activity className="w-6 h-6 text-purple-500 mr-4 mt-1" />
                      <div>
                        <h4 className="text-lg font-medium text-purple-900 mb-2">Ökad energi</h4>
                        <p className="text-gray-700 leading-relaxed">Återställ kroppens naturliga flöde och känn dig mer vital</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <Brain className="w-6 h-6 text-purple-500 mr-4 mt-1" />
                      <div>
                        <h4 className="text-lg font-medium text-purple-900 mb-2">Stressreducering</h4>
                        <p className="text-gray-700 leading-relaxed">Upplev djup avslappning och inre balans</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 text-purple-500 mr-4 mt-1" />
                      <div>
                        <h4 className="text-lg font-medium text-purple-900 mb-2">Bättre sömn</h4>
                        <p className="text-gray-700 leading-relaxed">Förbättra din sömnkvalitet och vakna upp utvilad</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <Shield className="w-6 h-6 text-purple-500 mr-4 mt-1" />
                      <div>
                        <h4 className="text-lg font-medium text-purple-900 mb-2">Stärkt immunförsvar</h4>
                        <p className="text-gray-700 leading-relaxed">Hjälp kroppen att motverka infektioner och hålla sig frisk</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300">
                  <h3 className="text-2xl font-serif text-purple-900 mb-4">
                    Distansbehandling – Enkelt och Bekvämt
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Du kan ta emot behandlingen var du än befinner dig. Oavsett om du är hemma eller på resande fot, skickas frekvenserna till din kropp via energifältet. Du behöver bara slappna av och ta emot vi gör resten.
                  </p>
                  <div className="flex justify-center mt-8">
                    <Link
                      to="/kunskapsbank?section=frekvensterapi&tab=overview"
                      className="inline-flex items-center px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-colors duration-300"
                    >
                      Läs mer i kunskapsbanken
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Cards Section */}
        <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 mb-20 text-center"
            >
              <div className="flex justify-center mb-6">
                <OptimizedImage 
                  src="/assets/branding/logos/BetterFeel_Stamp.png"
                  alt="BetterFeel Stamp"
                  className="w-12 h-12 mx-auto mb-6"
                  objectFit="contain"
                  transparent
                />
              </div>
              <strong className="block text-3xl font-serif text-purple-900 mb-6">
                Klar att må bättre?
              </strong>
              <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
                Boka din första session idag och upplev kraften av frekvensterapi
              </p>
              <button
                onClick={scrollToSenso}
                className="inline-flex items-center px-8 py-4 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-colors duration-300"
              >
                Boka din första session
                <ChevronDown className="ml-2 h-6 w-6 animate-bounce" />
              </button>
            </motion.div>

            <h2 className="text-4xl font-serif text-purple-900 mb-6 text-center">
              Våra Behandlingar
            </h2>

            <div className="grid md:grid-cols-1 gap-4 max-w-4xl mx-auto">
              {/* SENSO Card */}
              <motion.div
                ref={sensoCardRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <Sparkles className="w-6 h-6 text-purple-500" />
                      <h3 className="text-2xl font-serif text-purple-900">SENSO</h3>
                      <span className="text-sm bg-purple-100 text-purple-600 rounded-full px-3 py-1">På salongen</span>
                    </div>
                    <div className="flex items-center text-sage-600 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-base">60 minuter</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-medium text-purple-900 mb-2">Skönhet & balans för hela kroppen</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Genom at främja djup avslappning genom subtila vibrationer och balansering som är nyckeln skapas 
                        positiva förändringar i livet. Genom att släppa gamla tankemönster och övertygelser som formats av 
                        vår uppväxt och omgivning, öppnar vi upp för att skapa nya, hälsosamma tankebanor. S-ENSO använder 
                        guidade visualiseringar och noggrant komponerade ljud, inklusive de unika Solfeggio-tonerna, för att 
                        stödja en meditativ och avslappnad sinnesstämning.
                      </p>
                    </div>

                    <div className="space-y-3 mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        Behandlingen hjälper till att bearbeta inre övertygelser och mönster som skapar stress och spänning, 
                        vilket ger både yttre och inre välmående.
                      </p>

                      <p className="text-gray-700 leading-relaxed">
                        En populär, lugn och avkopplande behandling som ger din kropp möjlighet att återställa balans och 
                        energi på djupet. Under behandlingen är du uppkopplad med mjuka elektroder på hand- och fotleder, 
                        som förmedlar de frekvenser din kropp behöver för att stödja cellförnyelse, reducera stress och 
                        stärka skönheten på cellernas energinivå.
                      </p>

                      <p className="text-gray-700 leading-relaxed">
                        SENSO kombinerar frekvensteknologi med skönhetsvärd och cellförnyelse på energinivå som arbetar i 
                        samklang med din kropp för att återställa balans, minska stress och stödja självläkning. Behandlingen 
                        är utformad för hela kroppen med fokus på skönhet, genom att stärka cellernas och hudens elasticitet 
                        som främjar cellförnyelse.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-medium text-purple-900 mb-2">Passar dig som vill:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="text-gray-700 leading-relaxed">Få en lugnande stund av inre och yttre balans</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="text-gray-700 leading-relaxed">Stärka kroppens självläkning och förnya cellerna</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="text-gray-700 leading-relaxed">Minska stress och uppnå en fräschare, strålande hud</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <div className="border-t border-purple-100 pt-6 mb-6">
                        <div className="bg-purple-50/50 rounded-lg p-4 text-center">
                          <div className="text-3xl font-serif text-purple-900">749 kr</div>
                        </div>
                      </div>
                      <a
                        href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/frekvens-senso-2-3189643"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-colors duration-200"
                      >
                        Boka SENSO
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* HarmoniQ Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-3 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <Sparkles className="w-6 h-6 text-purple-500" />
                      <h3 className="text-2xl font-serif text-purple-900">HarmoniQ</h3>
                      <span className="text-sm bg-purple-100 text-purple-600 rounded-full px-3 py-1">Distans</span>
                    </div>
                    <div className="flex items-center text-sage-600 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-base">90 minuter</span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      HarmoniQ är som att vattna en törstig växt – din kropp får exakt det den behöver för att återfå balans 
                      och styrka vid den angivna tidpunkten. Precis som växten suger upp vattnet och livas upp från rötterna, 
                      tar din kropp emot dessa frekvenser som når på djupet och stärker din naturliga självläkande förmåga. 
                      En skonsam och naturlig process som ger energi och välmående, inifrån och ut.
                    </p>

                    <div className="mb-8">
                      <h4 className="text-xl font-medium text-purple-900 mb-2">Passar dig som vill:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-purple-900 leading-relaxed">Helt anpassad för dig:</span>
                            <span className="text-gray-700 leading-relaxed"> Behandlingen skrddarsys efter din hälsostatus och dina specifika behov.</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-purple-900 leading-relaxed">Djupgående och effektiv:</span>
                            <span className="text-gray-700 leading-relaxed"> Frekvenserna arbetar på en energinivå för att stödja kroppen på ett naturligt sätt.</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-purple-900 leading-relaxed">Skonsam och avslappnande:</span>
                            <span className="text-gray-700 leading-relaxed"> Du kan koppla av helt medan kroppen balanseras och stärker sin självläkning.</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-purple-900 leading-relaxed">Flexibel och bekväm:</span>
                            <span className="text-gray-700 leading-relaxed"> Behandlingen sker på distans, vilket gör det enkelt att få den hjälp du behöver var du än är.</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      Ett verktyg för långsiktigt välmående. HarmoniQ hjälper inte bara i stunden utan stärker kroppens egen 
                      förmåga att hantera stress och obalanser över tid.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Metoden är skonsam och trygg, anpassad till din kropps aktuella kapacitet, och ger en avslappnande 
                      upplevelse som stärker dig utan att överbelasta.
                    </p>

                    <div className="mt-auto">
                      <div className="border-t border-purple-100 pt-6 mb-6">
                        <div className="bg-purple-50/50 rounded-lg p-4 text-center">
                          <div className="text-3xl font-serif text-purple-900">995 kr</div>
                        </div>
                      </div>
                      <a
                        href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/frekvens-harmoniq-distans-3189647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-colors duration-200"
                      >
                        Boka HarmoniQ
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Balance Mastery Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <Sparkles className="w-6 h-6 text-purple-500" />
                      <h3 className="text-2xl font-serif text-purple-900">Balance Mastery</h3>
                      <span className="text-sm bg-purple-100 text-purple-600 rounded-full px-3 py-1">Distans</span>
                    </div>
                    <div className="flex items-center text-sage-600 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-base">120 minuter + uppföljning</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-medium text-purple-900 mb-2">För dig som söker det allra bästa för din hälsa</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Ge dig själv en lyxig och exklusiv hälsoupplevelse med vårt Balance Mastery paket. 
                        Denna behandling är skapad för dig som värdesätter djupgående insikter, personlig vägledning 
                        och långsiktig balans. Det här är en behandling som inte bara förbättrar ditt välmående här 
                        och nu, utan också ger dig verktygen för att stärka din hälsa ver tid.
                      </p>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div>
                        <h4 className="text-xl font-medium text-purple-900 mb-2">Det börjar med dig</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Premiumupplevelsen inleds med en noggrann föranalys där vi tillsammans på telefon går igenom 
                          hälsofrågor och dina specifika behov. Detta ger oss en helhetsbild av din hälsa och skapar 
                          grunden för en behandling som är helt skräddarsydd efter dig.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-medium text-purple-900 mb-2">Detaljerad analys och rapport</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Under behandlingen använder vi avancerad frekvensteknologi för att läsa av hur din kropp mår 
                          på djupet samtidigt som vi skickar läkande frekvenser till dig som får din kropp att börja 
                          reparera sig själv. Efteråt får du en hälsorapport som sammanfattar resultaten 
                          allt från 
                          kroppens energibalans till näringsstatus och funktionsnivåer. Detta ger dig en omfattande 
                          inblick i din hälsa som hjälper dig förstå hur din kropp och själ egentligen mår.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-medium text-purple-900 mb-2">Personlig uppföljning</h4>
                        <p className="text-gray-700 leading-relaxed">
                          För att du ska känna dig trygg och säker i din resa mot bättre hälsa ingår en uppföljning 
                          per telefon, där vi går igenom dina resultat och ger dig skräddarsydda rekommendationer för 
                          hur du kan fortsätta stärka din kropp och balans. Vi finns där för att guida dig hela vägen.
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xl font-medium text-purple-900 mb-2">Passar dig som vill:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="text-gray-700 leading-relaxed">Vill ha en exklusiv och personlig hälsoupplevelse</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="text-gray-700 leading-relaxed">Söker insikter och verktyg för långsiktig balans och välmående</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <span className="text-gray-700 leading-relaxed">Värdesätter premiumtjänster där varje detalj är anpassad efter dina behov</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <p className="text-gray-700 leading-relaxed font-medium italic">
                      Balance Mastery är mycket mer än en behandling – det är en investering i dig själv och ditt välmående.
                    </p>

                    <div className="mt-auto">
                      <div className="border-t border-purple-100 pt-6 mb-6">
                        <div className="bg-purple-50/50 rounded-lg p-4">
                          <div className="mb-4">
                            <div className="text-gray-600 text-center mb-1">Första behandlingen</div>
                            <div className="text-3xl font-serif text-purple-900 text-center">1995 kr</div>
                          </div>
                          <div className="border-t border-purple-100 pt-4">
                            <div className="text-gray-600 text-center mb-1">Återkommande</div>
                            <div className="text-3xl font-serif text-purple-900 text-center">1595 kr</div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/frekvens-balance-mastery-premium-paket-distans-3189646"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-colors duration-200"
                      >
                        Boka Balance Mastery
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg text-center"
            >
              <img 
                src="/assets/branding/logos/BetterFeel_Stamp.png" 
                alt="BetterFeel Stamp" 
                className="w-16 h-16 object-contain mx-auto mb-6" 
              />
              <h2 className="text-2xl font-serif text-purple-900 mb-4">Certifierad Frekvensterapi i Stockholm</h2>
              <p className="text-gray-700">
                Vår frekvensterapi använder den senaste teknologin och fljer strikta säkerhetsprotokoll för att garantera bästa möjliga resultat.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FrequencyTherapy;