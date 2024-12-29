import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Clock, Shield, Heart, AlertCircle, ChevronDown, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import ServiceSEO from '../components/common/ServiceSEO';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import ServiceSchema from '../components/common/ServiceSchema';
import OptimizedImage from '../components/common/OptimizedImage';
import FAQSchema from '../components/common/FAQSchema';

interface Treatment {
  title: string;
  duration: string;
  areas: string[];
  benefits: string[];
  price: string;
  sessions: string;
  bookingUrl: string;
}

const benefits = [
  {
    icon: Shield,
    title: "FDA-Godkänd",
    description: "Certifierad och säker teknologi med över 10 års klinisk dokumentation"
  },
  {
    icon: Sparkles,
    title: "Naturliga Resultat",
    description: "Synliga förbättringar som utvecklas gradvis under 2-3 månader"
  },
  {
    icon: Clock,
    title: "Ingen Återhämtning",
    description: "Återgå till vardagliga aktiviteter direkt efter behandlingen"
  }
];

const treatments: Treatment[] = [
  {
    title: "Glow Touch – Förfining & Uppstramning",
    duration: "45 minuter",
    areas: [
      "Kinder",
      "Hals (dubbelhaka eller kalkonhals)",
      "Kärlekshandtag",
      "Touch up-behandling (Ansikte)",
      "Panna",
      "Ögonområdet"
    ],
    benefits: [
      "Omfattande hudåtstramning",
      "Definierad käklinje",
      "Naturligt resultat",
      "Förbättrad hudkvalitet"
    ],
    price: "1495 kr",
    sessions: "Skräddarsydd behandlingsplan utifrån hudens tillstånd.",
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/hifu-45-min-glow-touch-forfining-uppstramning-3189638"
  },
  {
    title: "Supreme Sculpt – Kroppsformning & Lyft",
    duration: "70 minuter",
    areas: [
      "Ansikte (lyft) + hals",
      "Mage",
      "Överarmar (gäddhäng)"
    ],
    benefits: [
      "Effektiv kroppskonturering",
      "Synlig uppstramning",
      "Långvariga resultat",
      "Minimal återhämtningstid"
    ],
    price: "2350 kr",
    sessions: "Skräddarsydd behandlingsplan utifrån hudens tillstånd.",
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/hifu-70-min-supreme-sculpt-kroppsformning-lyft-3189639"
  },
  {
    title: "Ultimate Harmony – Helhet & Total Transformation",
    duration: "90 minuter",
    areas: [
      "Stuss + Ben (fram & baksida)",
      "Mage + Kärlekshandtag",
      "Ansikte + dubbelhaka + Hals + Dekolletage"
    ],
    benefits: [
      "Komplett kroppsföryngring",
      "Omfattande hudåtstramning",
      "Helhetslösning",
      "Optimala resultat"
    ],
    price: "4750 kr",
    sessions: "Skräddarsydd behandlingsplan utifrån hudens tillstånd.",
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/hifu-90-min-ultimate-harmony-helhet-total-transformation-3189640"
  }
];

const Hifu = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);

  const scrollToInfo = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "Vad är HIFU-behandling?",
      answer: "HIFU (High-Intensity Focused Ultrasound) är en icke-kirurgisk behandling som använder fokuserat ultraljud för att strama åt huden och stimulera kollagenproduktion."
    },
    {
      question: "Hur länge håller resultatet?",
      answer: "Resultaten från HIFU-behandling kan hålla i 12-18 månader, beroende på individuella faktorer som ålder, hudtyp och livsstil."
    },
    {
      question: "Är behandlingen smärtsam?",
      answer: "HIFU-behandlingen kan upplevas som värmande och stickande, men de flesta kunder tolererar behandlingen väl. Vi anpassar intensiteten efter din känslighet."
    },
    {
      question: "När ser man resultat?",
      answer: "Vissa ser en initial förbättring direkt efter behandlingen, men det fullständiga resultatet utvecklas gradvis över 2-3 månader när ny kollagenproduktion sker."
    }
  ];

  return (
    <>
      <ServiceSEO
        title="HIFU Behandling | BetterFeel"
        description="Upptäck kraften i HIFU-behandling hos BetterFeel. Vi erbjuder modern hudföryngring med ultraljud för naturligt resultat."
        keywords="HIFU, hudföryngring, ultraljud, ansiktsbehandling, Stockholm"
        url="https://betterfeel.se/hifu"
        serviceName="HIFU Behandling"
        preloadImages={['/assets/images/treatments/hifu/hifu-treatment-preview.webp']}
        treatments={[
          {
            name: "HIFU Ansiktsbehandling",
            description: "En effektiv 60-minuters behandling för naturlig hudföryngring med ultraljud.",
            duration: "PT60M",
            price: "2495",
            url: "https://betterfeel.se/hifu#ansiktsbehandling"
          },
          {
            name: "HIFU Premium Plus",
            description: "En omfattande 90-minuters premiumbehandling med personlig analys och uppföljning.",
            duration: "PT90M",
            price: "3495",
            url: "https://betterfeel.se/hifu#premium-plus"
          }
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Behandlingar", item: "/behandlingar" },
          { name: "HIFU", item: "/hifu" }
        ]}
      />
      <ServiceSchema
        name="HIFU Behandling"
        description="Professionell HIFU-behandling för naturlig hudföryngring. En effektiv och icke-kirurgisk metod som använder ultraljud för att strama upp huden."
        url="https://betterfeel.se/hifu"
        image="/assets/images/treatments/hifu/hero.jpg"
        provider="BetterFeel"
        areaServed="Stockholm"
        price="1495"
        priceCurrency="SEK"
      />
      <FAQSchema questions={faqs} />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen md:min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <picture>
              <source
                srcSet="/assets/images/treatments/hifu/hero.webp"
                type="image/webp"
              />
              <OptimizedImage
                src="/assets/images/treatments/hifu/hero.jpg"
                alt="HIFU Behandling - Ultraljudsbehandling för naturlig hudföryngring"
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
                <span className="text-base sm:text-lg font-medium text-rose-300 uppercase tracking-wider">HIFU</span>
                <div className="h-px w-8 bg-rose-300 ml-4"></div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight"
              >
                Ultraljudsbehandling för<br />naturlig hudföryngring
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
              >
                Upptäck kraften i HIFU-teknologi för en naturlig och långvarig hudföryngring utan kirurgiska ingrepp.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <button
                  onClick={scrollToInfo}
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Läs mer
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </button>
              </motion.div>
            </div>
          </div>
          <div ref={mainContentRef}></div>
        </section>
        {/* HIFU Information Section */}
        <section ref={mainContentRef} id="hifu-info" className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-purple-900 mb-8 leading-tight">
                  HIFU Ultraljudsbehandling - Så Fungerar Det
                </h2>
                <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <OptimizedImage
                      src="/assets/images/treatments/hifu/hifu-treatment-preview.jpg"
                      alt="HIFU Treatment Preview - Modern hudföryngring med ultraljud"
                      className="w-full h-[600px]"
                      objectFit="cover"
                      objectPosition="center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-serif mb-3">Modern HIFU-teknologi</h3>
                      <p className="text-lg md:text-xl leading-relaxed opacity-90">Avancerad hudföryngring utan kirurgi</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                      Behandlingen är en avancerad icke invasivt estetisk åtgärd. Behandlingen innebär ett
                      icke kirurgiskt lyft för att strama åt lös hud i ansikte och kropp. Genom denna behandling
                      levereras hög värmeenergi till huden och underliggande vävnader. Behandlingen når till
                      samma hudlager som ett kirurgiskt ingrepp innebär, för att strama åt huden genom att
                      direkt skada under huden för att sedan producera nya starkare fibrer.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                      När väl behandlingen görs, markeras behandlingsområdet och en ultraljudsgelé
                      appliceras på huden för att det högintensiva fokuserade ultraljudet ska kunna ledas in i
                      huden till det valda hudlagret samt musklerna under. Detta påverkar kollagen- och
                      elastinfibrerna samt orsakar en sammandragning av vävnader.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      HIFU kan behandla lös hud som framträder på ansikte och kropp. Det är även möjligt att
                      effektivt behandla envisa fettdepåer och celluliter.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
                >
                  <h3 className="text-2xl font-serif text-purple-900 mb-4">{benefit.title}</h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 h-full"
              >
                <h3 className="text-2xl font-serif text-purple-900 mb-6 leading-tight">
                  Viktigt att Veta Innan HIFU Behandling
                </h3>
                <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">Vem bör inte behandlas:</p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">Personer med hjärtsjukdom eller som har gjort hjärtoperation</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">Kvinnor som är gravida eller ammande</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">Personer med hudinfektion/abscess</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-base md:text-lg text-gray-700 leading-relaxed">Personer med högt blodtryck, högt blodsocker, höga blodfetter och diabetiker</span>
                  </li>
                </ul>

              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 h-full"
              >
                <h3 className="text-2xl font-serif text-purple-900 mb-6 leading-tight">
                  Förberedelser Inför HIFU Behandling
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Undvik alkohol 24 timmar före och efter behandlingen
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Sparkles className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Öka vätskeintaget till ca 2 dl vatten/timme, 48 timmar före behandlingen
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Minska kolhydratintaget så mycket som möjligt 48 timmar före behandlingen
                    </p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Minst fyra veckors uppehåll krävs mellan filler och HIFU-behandling
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300 h-full"
              >
                <h3 className="text-2xl font-serif text-purple-900 mb-6 leading-tight">
                  Efter HIFU Behandling
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Heart className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Resultatet kommer gradvis och når sin topp efter 2-3 månader
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Resultatet håller i 12-18 månader beroende på hudtyp och livsstil
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Undvik direkt solexponering och använd solskydd (SPF50) i minst 2 veckor
                    </p>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Vid eventuellt obehag kan paracetamol användas
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Packages Section */}
        <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-purple-900 mb-8 leading-tight">
                Våra HIFU Behandlingspaket
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
                Vi erbjuder skräddarsydda behandlingspaket för att möta dina specifika behov och önskemål
              </p>
            </div>

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
                      <h4 className="text-lg font-medium text-purple-800 mb-2">Behandlingsområden:</h4>
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
                      <h4 className="text-lg font-medium text-purple-800 mb-2">Fördelar:</h4>
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
                            <Star className="w-4 h-4 text-purple-400" />
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

        {/* Trust Indicators */}
        <section className="py-16 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center"
            >
              <OptimizedImage 
                src="/assets/branding/logos/BetterFeel_Stamp.png"
                alt="BetterFeel Stamp"
                className="w-12 h-12 mx-auto mb-6"
                objectFit="contain"
                transparent
              />
              <h2 className="text-2xl font-serif text-purple-900 mb-4">FDA-Godkänd HIFU Behandling i Stockholm</h2>
              <p className="text-gray-700">
                Vår HIFU-behandling är FDA-godkänd och CE-certifierad. Vi använder endast den senaste
                teknologin och följer strikta säkerhetsprotokoll för att garantera bästa möjliga resultat.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hifu;