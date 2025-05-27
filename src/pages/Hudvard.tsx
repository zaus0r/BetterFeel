import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CalendarDays, Phone, ChevronDown, Star, Shield, Heart, Sparkles, CheckCircle2, Check, ChevronUp, Clock } from 'lucide-react';
import OptimizedImage from '../components/common/OptimizedImage';
import Animation from '../components/common/Animation';
import ServiceSchema from '../components/common/ServiceSchema';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import FAQSchema from '../components/common/FAQSchema';
import ServiceSEO from '../components/common/ServiceSEO';
import ReviewSchema from '../components/common/ReviewSchema';
import AppointmentSchema from '../components/common/AppointmentSchema';
import TreatmentSchema from '../components/common/TreatmentSchema';
import { renderDurationVisual, SuitabilityIndicators, AftercareInfo, treatmentSuitability } from '../components/features/treatments/TreatmentCardEnhancements';

interface PeelingOption {
  name: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  ingredients: string;
  effects: string;
  suitableFor: string;
  frequency?: string;
  perfectFor?: string;
  bookingUrl: string;
}

interface Treatment {
  title: string;
  duration: string;
  price: string;
  description: string;
  benefits: string[];
  includes: string[] | PeelingOption[];
  bookingUrl: string;
}

const treatments: Treatment[] = [
  {
    title: "Anti Aging",
    duration: "60 min",
    price: "1095 kr",
    description: "En innovativ och naturlig ansiktsbehandling som erbjuder ett modernt alternativ till traditionella behandlingar som botox. Med hjälp av avancerade ingredienser som biomimetiska peptider, uppnås en naturlig muskelavslappning utan injektioner, vilket resulterar i en jämnare och mer avslappnad hudton.",
    benefits: [
      "Naturlig muskelavslappning utan injektioner",
      "Reducerar fina linjer och rynkor",
      "Förbättrar hudens densitet och elasticitet",
      "Ger en föryngrad och strålande look"
    ],
    includes: [
      "Djupgående rengöring",
      "V-Tox Higher Power Lift Mask",
      "Specialanpassat serum",
      "Avslappnande ansiktsmassage",
      "Närande avslutningskräm",
      "Glowigt Jelly Mist för glass skin-effekt"
    ],
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/ansiktsbehandling-anti-aging-3189699"
  },
  {
    title: "Glass Skin (Maximal Återfuktning)",
    duration: "60 min",
    price: "1079 kr",
    description: "En avancerad behandling som tillför näring på djupet, jämnar ut hudtonen och ger en fantastisk lyster – perfekt för dig som vill ha en felfri, återfuktad och ungdomlig hud.",
    benefits: [
      "Förbättrar hudens elasticitet och fuktbalans",
      "Reducerar fina linjer och minimerar porer",
      "Uppnår en silkeslen, fräsch och hälsosam lyster",
      "Ger en perfekt glasliknande finish"
    ],
    includes: [
      "Rengöring",
      "Glow Peel för extra glans",
      "Serum – jämnar ut hudtonen och ger lyster",
      "CICA Recovery – stärker hudens barriär, reparerar och tillför intensiv fukt",
      "Infuzion med hyaluronsyra",
      "Avslutande skydd & lyster"
    ],
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/glass-skin-maximal-aterfuktning-3192923"
  },
  {
    title: "Koreansk Kemisk Peeling",
    duration: "45 min",
    price: "från 895 kr",
    description: "Koreansk kemisk peeling är en effektiv metod för att förnya huden genom att exfoliera döda hudceller, stimulera cellförnyelse och förbättra hudens struktur och lyster. Vi erbjuder tre nivåer av koreansk peeling, anpassade för olika hudtyper och behov – från en skonsam exfoliering till en intensiv och djupgående föryngrande behandling.",
    benefits: [
      "Skräddarsydd behandling efter dina behov",
      "Synliga resultat redan efter första behandlingen",
      "Förbättrad hudstruktur och ökad cellförnyelse",
      "Professionell vägledning för rätt peelingtyp"
    ],
    includes: [
      {
        name: "Blue Peel",
        title: "Koreansk mild & skonsam exfoliering",
        price: "895 kr",
        duration: "45 min",
        description: "Blue Peel är en mild men effektiv koreansk kemisk peeling som passar alla hudtyper, även känslig hud. Med en kombination av glykolsyra, salicylsyra och antioxidanter exfolierar den huden på djupet samtidigt som den lugnar och återfuktar.",
        ingredients: "Glykolsyra (25%), Mjölksyra (2%), Vinsyra (2%), Citronsyra (1%), Salicylsyra (2%), Antioxidanter, Panthenol, Blomvatten",
        effects: "Avlägsnar döda hudceller, renar porer, förbättrar hudstrukturen och stimulerar kollagenproduktionen",
        suitableFor: "Ojämn hudton, fina linjer, förstorade porer, mild hyperpigmentering",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/koreansk-kemisk-peeling-mild-45-min-3197003"
      },
      {
        name: "Glow Peel",
        title: "Koreansk avancerad kemisk peeling för lyster & jämn hudton",
        price: "995 kr",
        duration: "45 min",
        description: "Glow Peel från KRX är en professionell koreansk kemisk peeling som kombinerar en hög koncentration av glykolsyra (40%) med retinol och grönt te-extrakt för en mer intensiv cellförnyelse och omedelbar lyster.",
        ingredients: "Glykolsyra (40%), Retinol, Grönt te-extrakt",
        effects: "Exfolierar på djupet, stimulerar kollagenproduktionen, förbättrar hudstrukturen och minskar hyperpigmentering",
        suitableFor: "Mogen hud, ojämn hudton, fina linjer, pigmentfläckar, grov hudstruktur",
        frequency: "Kan upprepas var 3-4 vecka",
        perfectFor: "Snabba och synliga resultat inför speciella tillfällen",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/koreansk-kemisk-peeling-medium-45-min-3223946"
      },
      {
        name: "Green Sea Peel",
        title: "Koreansk djupgående, kraftfull & naturlig peeling",
        price: "1395 kr",
        duration: "45 min",
        description: "Green Sea Peel är en innovativ koreansk peelingbehandling som kombinerar naturliga marina spikuler med en djupgående biologisk och mekanisk exfoliering. Den arbetar intensivt för att stimulera hudens egen reparationsprocess.",
        ingredients: "Marina spikuler, naturliga mineraler, vitaminer, antioxidanter",
        effects: "Skapar mikrokanaler i huden, stimulerar fibroblaster, ökar kollagenproduktionen, jämnar ut hudstrukturen och reducerar fina linjer, akneärr och hyperpigmentering",
        suitableFor: "Åldrande hud, akneärr, grov hudstruktur, kraftig hyperpigmentering",
        frequency: "Utförs var 6-8 vecka",
        perfectFor: "Kunder som önskar en kraftfull föryngring med naturliga ingredienser",
        bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/koreansk-kemisk-peeling-intensiv-3223949"
      }
    ],
    bookingUrl: "https://www.bokadirekt.se"
  },
  {
    title: "Premium/Skräddarsydd behandling",
    duration: "70 min",
    price: "1595 kr",
    description: "Upplev en hudvårdsritual i absolut toppklass, där varje steg är designat för att ge din hud maximal återfuktning, föryngring och en oslagbar lyster. Prestige Skin Perfection är den perfekta behandlingen för dig som vill ha det bästa av professionell hudvård och exklusiv teknologi.",
    benefits: [
      "Maximal återfuktning och föryngring",
      "Förbättrad elasticitet och hudstruktur",
      "Intensiv näring och lyster",
      "Komplett lyxbehandling för ansikte och hals"
    ],
    includes: [
      "Glow Gel Cleanser",
      "V-tox Mask",
      "Infuzion med hyaluronsyra",
      "Cica Sheet Mask",
      "Glow Quenching Toner",
      "Face Lift Serum",
      "Neck Lift Cream",
      "Glow Cream",
      "Jelly Mist"
    ],
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/ansiktsbehandling-premium-100-skraddarsydd-3216416"
  }
];

const faqs = [
  {
    question: "Vilken hudvårdsbehandling passar mig bäst?",
    answer: "Det beror på dina specifika hudvårdsbehov. V-TOX LIFT passar för dig som vill ha ett naturligt lyft, GLASS SKIN för en strålande lyster, DIMOND PEEL för djup peeling och återfuktning, och PRESTIGE SKIN för en komplett lyxbehandling. Vi rekommenderar en kostnadsfri konsultation för personlig rådgivning."
  },
  {
    question: "Hur ofta bör jag göra en hudvårdsbehandling?",
    answer: "För bästa resultat rekommenderar vi en behandling var 4-6 vecka. Detta kan variera beroende på din hudtyp och vilken behandling du väljer. Vid specifika hudproblem kan tätare behandlingar behövas initialt."
  },
  {
    question: "Är behandlingarna säkra för känslig hud?",
    answer: "Ja, våra behandlingar är anpassningsbara för olika hudtyper, inklusive känslig hud. Vi använder högkvalitativa koreanska produkter som är kända för sin skonsamma men effektiva verkan. Vid känslig hud rekommenderar vi att börja med en mild behandling."
  },
  {
    question: "Hur länge håller resultatet?",
    answer: "Resultatet är synligt direkt efter behandlingen och kan hålla i flera veckor. För långvarigt resultat rekommenderar vi regelbundna behandlingar och en anpassad hudvårdsrutin hemma. Vi ger dig gärna råd om lämpliga produkter för hemmabruk."
  }
];

const isPeelingOption = (includes: unknown): includes is PeelingOption[] => {
  return Array.isArray(includes) && 
         includes.length > 0 && 
         typeof includes[0] === 'object' &&
         includes[0] !== null &&
         'name' in includes[0];
};

// Add this type guard for string arrays
const isStringArray = (includes: unknown): includes is string[] => {
  return Array.isArray(includes) && 
         includes.length > 0 && 
         typeof includes[0] === 'string';
};

const Hudvard: React.FC = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const [activePeeling, setActivePeeling] = useState(0);
  const [expandedPeeling, setExpandedPeeling] = useState(-1);

  const scrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ServiceSchema
        name="Hudvård"
        description="Professionell hudvård och ansiktsbehandlingar i Vasastan, Stockholm. Från Anti Aging och Glass Skin till Koreansk Kemisk Peeling och Premium-behandlingar. Avancerade behandlingar som förbättrar hudens lyster, elasticitet och reducerar rynkor och fläckar."
        image="/assets/images/hero/skincare_optimized.jpg"
        url="https://betterfeel.se/hudvard"
        provider="BetterFeel"
        areaServed="Vasastan, Stockholm"
        price="895"
        priceCurrency="SEK"
      />
      <ServiceSEO
        title="Hudvårdsbehandlingar | Professionell Ansiktsbehandling | BetterFeel Vasastan"
        description="Upptäck exklusiva hudvårdsbehandlingar hos BetterFeel i Vasastan, Stockholm. Vi erbjuder skräddarsydda ansiktsbehandlingar som kombinerar koreansk hudvårdsteknologi med svensk expertis."
        keywords="hudvård, ansiktsbehandling, glass skin, anti aging, koreansk hudvård, Stockholm, Vasastan"
        url="https://betterfeel.se/hudvard"
        serviceName="Hudvårdsbehandlingar"
        servicePrice="från 895 kr"
        preloadImages={['/assets/images/hero/skincare_optimized.webp']}
        treatments={[
          {
            name: "Anti Aging Behandling",
            description: "En innovativ och naturlig ansiktsbehandling som erbjuder ett modernt alternativ till traditionella behandlingar som botox.",
            duration: "60 min",
            price: "1095 kr",
            url: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/ansiktsbehandling-anti-aging-3189699"
          },
          {
            name: "Glass Skin Behandling",
            description: "En avancerad behandling som tillför näring på djupet, jämnar ut hudtonen och ger en fantastisk lyster.",
            duration: "60 min",
            price: "1079 kr",
            url: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/glass-skin-maximal-aterfuktning-3192923"
          },
          {
            name: "Koreansk Kemisk Peeling",
            description: "Effektiv metod för att förnya huden genom att exfoliera döda hudceller och stimulera cellförnyelse.",
            duration: "45 min",
            price: "från 895 kr",
            url: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/koreansk-kemisk-peeling-mild-45-min-3197003"
          },
          {
            name: "Premium Hudvårdsbehandling",
            description: "En komplett lyxbehandling för ansikte och hals med maximal återfuktning och föryngring.",
            duration: "70 min",
            price: "1595 kr",
            url: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/ansiktsbehandling-premium-100-skraddarsydd-3216416"
          }
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Behandlingar", item: "/behandlingar" },
          { name: "Hudvård", item: "/hudvard" }
        ]}
      />
      <FAQSchema questions={faqs} />
      
      {/* Customer reviews for SEO */}
      <ReviewSchema 
        reviews={[
          {
            name: "Anna K.",
            date: "2024-12-05",
            text: "Jag har provat flera av hudvårdsbehandlingarna och jag blir alltid imponerad av resultaten. Min hud känns fräschare och ser yngre ut. Personalen är kunnig och professionell!",
            rating: 5
          },
          {
            name: "Lisa M.",
            date: "2024-11-20",
            text: "Glass Skin-behandlingen är fantastisk! Min hud har aldrig varit så återfuktad och glansig. Hela upplevelsen var avkopplande och resultatet överträffade mina förväntningar.",
            rating: 5
          },
          {
            name: "Johan B.",
            date: "2024-10-15",
            text: "Koreansk Kemisk Peeling gjorde underverk för min problematiska hud. Efter bara tre behandlingar är min acne betydligt bättre och huden ser friskare ut.",
            rating: 5
          },
          {
            name: "Sophie L.",
            date: "2024-09-25",
            text: "Premium-behandlingen är verkligen en lyxupplevelse. Jag kände mig ompysslad från början till slut och min hud har aldrig sett bättre ut. Absolut värt pengarna!",
            rating: 5
          },
          {
            name: "Erik H.",
            date: "2024-08-30",
            text: "Anti-Aging behandlingen gav synbara resultat redan efter första sessionen. Ser yngre ut och huden känns fastare. Kommer definitivt att boka fler behandlingar.",
            rating: 5
          }
        ]}
        itemReviewed={{
          name: "Hudvårdsbehandlingar hos BetterFeel",
          description: "Professionella hudvårdsbehandlingar och ansiktsbehandlingar i Vasastan, Stockholm. Specialiserade behandlingar för alla hudtyper och behov.",
          image: "/assets/images/hero/skincare_optimized.jpg"
        }}
      />

      {/* Booking appointment schema */}
      <AppointmentSchema 
        serviceName="Hudvårdsbehandlingar"
        serviceUrl="https://betterfeel.se/hudvard"
        businessName="BetterFeel"
        businessUrl="https://betterfeel.se"
        description="Boka en professionell hudvårdsbehandling hos BetterFeel i Vasastan, Stockholm. Vi erbjuder Anti Aging, Glass Skin, Koreansk Kemisk Peeling och Premium-behandlingar."
        areaServed="Vasastan, Stockholm"
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180"
        telephoneNumber="+46737140860"
        address={{
          street: "Kungstensgatan 59",
          city: "Stockholm",
          region: "Vasastan",
          postalCode: "113 29",
          country: "SE"
        }}
      />

      {/* Treatment specific schemas */}
      <TreatmentSchema 
        name="Anti Aging Behandling"
        description="En innovativ och naturlig ansiktsbehandling som erbjuder ett modernt alternativ till traditionella behandlingar som botox. Med hjälp av avancerade ingredienser som biomimetiska peptider, uppnås en naturlig muskelavslappning utan injektioner."
        url="https://betterfeel.se/hudvard#anti-aging"
        image="/assets/images/hero/skincare_optimized.jpg"
        provider="BetterFeel"
        providerUrl="https://betterfeel.se"
        price="1095 kr"
        priceCurrency="SEK"
        duration="60 min"
        treatmentCategory="hudföryngringsbehandling"
        suitableFor={["Vuxna", "Alla hudtyper", "Speciellt för åldrande hud"]}
        benefitsDescription="Reducerar fina linjer och rynkor, förbättrar hudens densitet och elasticitet, ger en föryngrad och strålande look."
        aftercare={["Använd solskydd", "Undvik kraftiga peelingprodukter 1-2 dagar efter behandlingen", "Håll huden återfuktad"]}
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/ansiktsbehandling-anti-aging-3189699"
      />

      <TreatmentSchema 
        name="Glass Skin Behandling"
        description="En avancerad behandling som tillför näring på djupet, jämnar ut hudtonen och ger en fantastisk lyster – perfekt för dig som vill ha en felfri, återfuktad och ungdomlig hud."
        url="https://betterfeel.se/hudvard#glass-skin"
        image="/assets/images/hero/skincare_optimized.jpg"
        provider="BetterFeel"
        providerUrl="https://betterfeel.se"
        price="1079 kr"
        priceCurrency="SEK"
        duration="60 min"
        treatmentCategory="intensiv återfuktningsbehandling"
        suitableFor={["Alla hudtyper", "Torr hud", "Glåmig hud"]}
        benefitsDescription="Förbättrar hudens elasticitet och fuktbalans, reducerar fina linjer och minimerar porer, uppnår en silkeslen, fräsch och hälsosam lyster."
        aftercare={["Undvik makeup i 4-6 timmar efter behandlingen", "Använd solskydd", "Fortsätt med fuktgivande produkter"]}
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/glass-skin-maximal-aterfuktning-3192923"
      />

      <TreatmentSchema 
        name="Koreansk Kemisk Peeling"
        description="Effektiv metod för att förnya huden genom att exfoliera döda hudceller, stimulera cellförnyelse och förbättra hudens struktur och lyster med koreanska professionella produkter."
        url="https://betterfeel.se/hudvard#koreansk-peeling"
        image="/assets/images/hero/skincare_optimized.jpg"
        provider="BetterFeel"
        providerUrl="https://betterfeel.se"
        price="från 895 kr"
        priceCurrency="SEK"
        duration="45 min"
        treatmentCategory="kemisk peeling"
        suitableFor={["Alla hudtyper", "Acnebenägen hud", "Hyperpigmentering", "Grov hudstruktur"]}
        benefitsDescription="Exfolierar på djupet, stimulerar kollagenproduktionen, förbättrar hudstrukturen och minskar hyperpigmentering."
        aftercare={["Undvik sol och solarium i minst 7 dagar", "Använd hög solskyddsfaktor", "Använd milda produkter de första dagarna"]}
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/koreansk-kemisk-peeling-mild-45-min-3197003"
      />

      <TreatmentSchema 
        name="Premium Hudvårdsbehandling"
        description="Upplev en hudvårdsritual i absolut toppklass, där varje steg är designat för att ge din hud maximal återfuktning, föryngring och en oslagbar lyster."
        url="https://betterfeel.se/hudvard#premium"
        image="/assets/images/hero/skincare_optimized.jpg"
        provider="BetterFeel"
        providerUrl="https://betterfeel.se"
        price="1595 kr"
        priceCurrency="SEK"
        duration="70 min"
        treatmentCategory="lyxbehandling för ansikte och hals"
        suitableFor={["Alla hudtyper", "Mogen hud", "Torr hud", "Speciella tillfällen"]}
        benefitsDescription="Maximal återfuktning och föryngring, förbättrad elasticitet och hudstruktur, intensiv näring och lyster."
        aftercare={["Använd solskydd", "Följ din personliga hudvårdsrutin", "Undvik kraftig träning eller bastu samma dag"]}
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/ansiktsbehandling-premium-100-skraddarsydd-3216416"
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative flex items-center min-h-screen py-8">
          <div className="absolute inset-0 z-0">
            <picture>
              <source
                srcSet="/assets/images/hero/skincare_optimized.webp"
                type="image/webp"
              />
              <OptimizedImage
                src="/assets/images/hero/skincare_optimized.jpg"
                alt="Hudvård - Professionell hudvård"
                isBackground
                priority
                className="absolute inset-0"
                objectFit="cover"
                objectPosition="center"
                quality={85}
                width={1920}
                height={1080}
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
                  PROFESSIONELL HUDVÅRD
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6"
              >
                Förnya Din Hud & <br />
                <span className="text-[#10b981]">Återfå Din Lyster</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl"
              >
                Upptäck våra exklusiva hudvårdsbehandlingar som kombinerar det bästa från koreansk hudvårdsteknologi med svensk expertis.
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
                      Över 100+ nöjda kunder
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
                  "Ansiktsbehandlingar",
                  "Koreansk Hudvård",
                  "Hudföryngring",
                  "Lyster",
                  "Återfuktning"
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
            aria-label="Scrolla till innehåll"
          >
            <ChevronDown className="h-8 w-8 animate-bounce" />
          </motion.button>
        </section>

        {/* Quick Benefits Section */}
        <section id="intro" ref={mainContentRef} className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl hover:shadow-3xl border border-purple-200/30 transition-all duration-300"
              >
                <Shield className="w-10 h-10 text-[#064e3b] mb-4" />
                <h3 className="text-2xl font-medium text-gray-900 mb-2">
                  Säkra Behandlingar
                </h3>
                <p className="text-gray-600">
                  Alla våra behandlingar är kliniskt testade och CE-certifierade
                </p>
              </Animation>

              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl hover:shadow-3xl border border-purple-200/30 transition-all duration-300"
              >
                <Heart className="w-10 h-10 text-[#064e3b] mb-4" />
                <h3 className="text-2xl font-medium text-gray-900 mb-2">
                  Personlig Omsorg
                </h3>
                <p className="text-gray-600">
                  Skräddarsydda behandlingar efter dina unika behov
                </p>
              </Animation>

              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl hover:shadow-3xl border border-purple-200/30 transition-all duration-300"
              >
                <Sparkles className="w-10 h-10 text-[#064e3b] mb-4" />
                <h3 className="text-2xl font-medium text-gray-900 mb-2">
                  Synliga Resultat
                </h3>
                <p className="text-gray-600">
                  Märkbara förbättringar redan efter första behandlingen
                </p>
              </Animation>

              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl hover:shadow-3xl border border-purple-200/30 transition-all duration-300"
              >
                <CheckCircle2 className="w-10 h-10 text-[#064e3b] mb-4" />
                <h3 className="text-2xl font-medium text-gray-900 mb-2">
                  Nöjd Kund-Garanti
                </h3>
                <p className="text-gray-600">
                  100% kundnöjdhet är vår högsta prioritet
                </p>
              </Animation>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                Estetisk Hudvård
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
                Resultatinriktade Behandlingar med Verksamma Ingredienser ✨
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Modern hudvård handlar om mer än yta – det är en vetenskap där aktiva, högkoncentrerade ingredienser möter avancerad teknologi för att skapa synliga och långvariga resultat.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Vi erbjuder estetiska hudvårdsbehandlingar som arbetar på djupet, stärker hudens barriär, förbättrar elasticiteten och ger huden en ungdomlig lyster. Genom en holistisk kombination av dermatologiska ingredienser och koreansk hudvårdsinnovation skapas en balanserad, frisk och strålande hud.
              </p>
            </div>

            {/* Product Images Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg"
              >
                <picture>
                  <source
                    srcSet="/assets/images/treatments/skincare/skincare_optimized.webp"
                    type="image/webp"
                  />
                  <img
                    src="/assets/images/treatments/skincare/skincare_optimized.jpg"
                    alt="Professionella hudvårdsprodukter"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </Animation>
              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg"
              >
                <picture>
                  <source
                    srcSet="/assets/images/treatments/skincare/skincare_2_optimized.webp"
                    type="image/webp"
                  />
                  <img
                    src="/assets/images/treatments/skincare/skincare_2_optimized.jpg"
                    alt="Avancerade hudvårdsprodukter"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </Animation>
              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg"
              >
                <picture>
                  <source
                    srcSet="/assets/images/treatments/skincare/skincare_3_optimized.webp"
                    type="image/webp"
                  />
                  <img
                    src="/assets/images/treatments/skincare/skincare_3_optimized.jpg"
                    alt="Professionell hudvårdsbehandling"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </Animation>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl hover:shadow-3xl border border-purple-200/30 transition-all duration-300"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Aktiva Ingredienser</h3>
                <ul className="space-y-4">
                  {[
                    "Högkoncentrerade formler",
                    "Kliniskt beprövade resultat",
                    "Dermatologiskt testade"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#064e3b] text-white flex items-center justify-center text-sm">
                        {i + 1}
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Animation>

              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl hover:shadow-3xl border border-purple-200/30 transition-all duration-300"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Koreansk Innovation</h3>
                <ul className="space-y-4">
                  {[
                    "Avancerad teknologi",
                    "Skonsamma metoder",
                    "Holistiskt synsätt"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#064e3b] text-white flex items-center justify-center text-sm">
                        {i + 1}
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Animation>

              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl hover:shadow-3xl border border-purple-200/30 transition-all duration-300"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Synliga Resultat</h3>
                <ul className="space-y-4">
                  {[
                    "Förbättrad hudstruktur",
                    "Ökad elasticitet",
                    "Långvarig effekt"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#064e3b] text-white flex items-center justify-center text-sm">
                        {i + 1}
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Animation>
            </div>
          </div>
        </section>

        {/* Treatment Cards Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                Skräddarsydda Hudvårdsbehandlingar
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
                Skräddarsydda Hudvårdsbehandlingar
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Välj den behandling som passar dina behov bäst. Alla behandlingar inkluderar kostnadsfri konsultation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {treatments.map((treatment, index) => (
                <Animation
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative flex flex-col"
                >
                  {treatment.title === "Koreansk Kemisk Peeling" && isPeelingOption(treatment.includes) ? (
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                      {/* Header */}
                      <div className="bg-gradient-to-br from-[#064e3b] to-[#043927] p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-2xl font-medium text-white">{treatment.title}</h3>
                            {renderDurationVisual(treatment.duration, true)}
                          </div>
                          <span className="px-3 py-1 bg-white/10 rounded-lg text-white font-medium">
                            {treatment.price}
                          </span>
                        </div>
                        <p className="text-white/90 text-sm">{treatment.description}</p>
                      </div>

                      <div className="p-6 pb-8 flex-grow flex flex-col">
                        {/* Tab Navigation */}
                        <div className="flex space-x-2 mb-6">
                          {(treatment.includes as PeelingOption[]).map((option, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActivePeeling(idx)}
                              className={`relative flex-1 px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                                activePeeling === idx
                                  ? 'bg-[#064e3b] text-white shadow-md'
                                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                              }`}
                            >
                              <div className="flex flex-col items-center">
                                <span className="font-medium mb-1">{option.name}</span>
                                <span className="text-xs opacity-90">{option.price}</span>
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* Active Peeling Content */}
                        <div className={`bg-gray-50 rounded-xl p-6 ${
                          treatment.title.includes("Premium") || treatment.title === "Koreansk Kemisk Peeling" ? 'pb-16' : ''
                        } mb-6 min-h-[200px]`}>
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-lg font-medium text-purple-900">
                                {(treatment.includes as PeelingOption[])[activePeeling].title}
                              </h4>
                              {renderDurationVisual((treatment.includes as PeelingOption[])[activePeeling].duration)}
                            </div>
                          </div>

                          {/* Quick Overview */}
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h5 className="text-sm font-medium text-purple-900 mb-1">Passar för</h5>
                              <p className="text-sm text-gray-600 line-clamp-2">
                                {(treatment.includes as PeelingOption[])[activePeeling].suitableFor}
                              </p>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-purple-900 mb-1">Perfekt för</h5>
                              <p className="text-sm text-gray-600 line-clamp-2">
                                {(treatment.includes as PeelingOption[])[activePeeling].perfectFor || "Alla hudtyper"}
                              </p>
                            </div>
                          </div>

                          {/* Expandable Content */}
                          <div className="relative">
                            <div className="overflow-hidden">
                              <p className="text-gray-600">
                                {(treatment.includes as PeelingOption[])[activePeeling].description}
                              </p>

                              <AnimatePresence>
                                {expandedPeeling === activePeeling && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ 
                                      height: { duration: 0.2 },
                                      opacity: { duration: 0.1 }
                                    }}
                                    className="overflow-hidden"
                                  >
                                    <div className="space-y-4 mt-6">
                                      <div>
                                        <h5 className="text-sm font-medium text-purple-900 mb-1">Huvudingredienser</h5>
                                        <p className="text-sm text-gray-600">
                                          {(treatment.includes as PeelingOption[])[activePeeling].ingredients}
                                        </p>
                                      </div>
                                      <div>
                                        <h5 className="text-sm font-medium text-purple-900 mb-1">Effekt</h5>
                                        <p className="text-sm text-gray-600">
                                          {(treatment.includes as PeelingOption[])[activePeeling].effects}
                                        </p>
                                      </div>
                                      {(treatment.includes as PeelingOption[])[activePeeling].frequency && (
                                        <div>
                                          <h5 className="text-sm font-medium text-purple-900 mb-1">Rekommenderad frekvens</h5>
                                          <p className="text-sm text-gray-600">
                                            {(treatment.includes as PeelingOption[])[activePeeling].frequency}
                                          </p>
                                        </div>
                                      )}
                                      
                                      {/* Aftercare Information for Peeling */}
                                      <div>
                                        <h5 className="text-sm font-medium text-purple-900 mb-1">Eftervård</h5>
                                        <ul className="space-y-1 mt-2">
                                          {treatmentSuitability["Koreansk Kemisk Peeling"].aftercare.map((tip, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                              <Check className="w-3 h-3 text-[#064e3b] mt-1 flex-shrink-0" />
                                              <span className="text-xs text-gray-600">{tip}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>

                            <button
                              onClick={() => setExpandedPeeling(expandedPeeling === activePeeling ? -1 : activePeeling)}
                              className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm bg-white border border-gray-200 rounded-lg text-[#064e3b] hover:text-[#043927] hover:bg-gray-50 font-medium transition-all duration-200"
                            >
                              {expandedPeeling === activePeeling ? (
                                <>
                                  <ChevronUp className="w-4 h-4 mr-1" />
                                  Visa mindre
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-4 h-4 mr-1" />
                                  Läs mer
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-6 pt-2">
                          <h4 className="font-medium text-purple-900 mb-3">Fördelar:</h4>
                          <ul className="space-y-2">
                            {treatment.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600">
                                <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Book Button */}
                        <a
                          href={(treatment.includes as PeelingOption[])[activePeeling].bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-7 inline-flex items-center justify-center px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-base font-medium w-full"
                        >
                          Boka {(treatment.includes as PeelingOption[])[activePeeling].name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 flex flex-col">
                      {/* Header */}
                      <div className="bg-gradient-to-br from-[#064e3b] to-[#043927] p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-2xl font-medium text-white">{treatment.title}</h3>
                            {renderDurationVisual(treatment.duration, true)}
                          </div>
                          <span className="px-3 py-1 bg-white/10 rounded-lg text-white font-medium">
                            {treatment.price}
                          </span>
                        </div>
                        <p className="text-white/90 text-sm">{treatment.description}</p>
                      </div>

                      <div className="p-6 pb-8 flex-grow flex flex-col">
                        {/* Content Box to match peeling card */}
                        <div className={`bg-gray-50 rounded-xl p-6 ${
                          treatment.title.includes("Premium") || treatment.title === "Koreansk Kemisk Peeling" ? 'pb-8' : 
                          treatment.title.includes("Anti Aging") || treatment.title.includes("Glass Skin") ? 'pb-6' : ''
                        } mb-6 min-h-[200px]`}>
                          {/* Suitability Indicators */}
                          <SuitabilityIndicators treatmentTitle={treatment.title} />
                        </div>

                        {/* Benefits */}
                        <div className={`${
                          treatment.title.includes("Premium") ? 'mb-4' : 
                          treatment.title.includes("Anti Aging") || treatment.title.includes("Glass Skin") ? 'mb-3' : 'mb-6'
                        }`}>
                          <h4 className="font-medium text-purple-900 mb-3">Fördelar:</h4>
                          <ul className={`${
                            treatment.title.includes("Premium") ? 'grid grid-cols-2 gap-x-2 gap-y-1 space-y-0' : 
                            treatment.title.includes("Anti Aging") || treatment.title.includes("Glass Skin") ? 'grid grid-cols-2 gap-x-2 gap-y-1 space-y-0' : 'space-y-2'
                          }`}>
                            {treatment.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600">
                                <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Includes */}
                        {isStringArray(treatment.includes) && (
                          <div>
                            <h4 className="font-medium text-purple-900 mb-3">Detta ingår:</h4>
                            <ul className={`${
                              treatment.title.includes("Premium") ? 'grid grid-cols-2 gap-x-2 gap-y-1 space-y-0' : 
                              treatment.title.includes("Anti Aging") || treatment.title.includes("Glass Skin") ? 'grid grid-cols-2 gap-x-2 gap-y-1 space-y-0' : 'space-y-2'
                            }`}>
                              {treatment.includes.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                  <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Aftercare Information */}
                        <AftercareInfo treatmentTitle={treatment.title} />
                        
                        {/* Book Button */}
                        <a
                          href={treatment.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-base font-medium w-full"
                        >
                          Boka Nu <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </Animation>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Process Section */}
        <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                Behandlingsprocess
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
                Din Resa till Strålande Hud
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vi guidar dig genom hela processen, från konsultation till eftervård, 
                för att säkerställa bästa möjliga resultat.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl hover:shadow-3xl border border-purple-200/30 transition-all duration-300"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Förberedelse</h3>
                <ul className="space-y-4">
                  {[
                    "Kostnadsfri konsultation",
                    "Hudanalys och behandlingsplan",
                    "Personliga rekommendationer"
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#064e3b] text-white flex items-center justify-center text-sm">
                        {i + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </Animation>

              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl hover:shadow-3xl border border-purple-200/30 transition-all duration-300"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Behandling</h3>
                <ul className="space-y-4">
                  {[
                    "Djupgående rengöring",
                    "Specialanpassad behandling",
                    "Avslutande hudvård"
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#064e3b] text-white flex items-center justify-center text-sm">
                        {i + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </Animation>

              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl hover:shadow-3xl border border-purple-200/30 transition-all duration-300"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Eftervård</h3>
                <ul className="space-y-4">
                  {[
                    "Personliga hudvårdsråd",
                    "Produktrekommendationer",
                    "Uppföljning vid behov"
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#064e3b] text-white flex items-center justify-center text-sm">
                        {i + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </Animation>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Animation
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#064e3b] to-[#043927] rounded-2xl p-12 text-center text-white relative overflow-hidden shadow-lg hover:shadow-2xl border border-purple-200/30 transition-all duration-300"
            >
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                  Begränsat Antal Tider
                </span>
                
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  Börja Din Resa mot Strålande Hud Idag
                </h2>
                
                <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                  Ta första steget mot en naturligt strålande hud. 
                  Boka en kostnadsfri konsultation och få en personlig behandlingsplan.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
                  {[
                    'Kostnadsfri konsultation',
                    'Personlig behandlingsplan',
                    'Flexibla tider',
                    'Erfaren terapeut'
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-center sm:justify-start gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
                    >
                      <CheckCircle2 className="w-5 h-5 text-white/90" />
                      <span className="text-white/90">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Urgency Indicator */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  <Clock className="w-5 h-5 text-white/90" />
                  <span className="text-white/90">Boka din tid idag</span>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Animation
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/konsultation-telefon-3124094"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#064e3b] rounded-lg hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
                    >
                      <CalendarDays className="mr-2 h-5 w-5" />
                      Boka Kostnadsfri Konsultation
                    </a>
                  </Animation>
                  <Animation
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href="tel:+46737140860"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Ring Oss
                    </a>
                  </Animation>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-center gap-6">
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
                              alt={`Happy Client ${i}`}
                              className="w-full h-full object-cover"
                              width={40}
                              height={40}
                            />
                          </picture>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-white/90">
                      Gå med över 100+ nöjda kunder som redan har börjat sin resa mot strålande hud
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl from-white/10 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              </div>
            </Animation>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hudvard; 