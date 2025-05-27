import React, { useRef, useState } from 'react';
import { Clock, Star, Shield, ArrowRight, CheckCircle2, Heart, ChevronDown, Activity, Sun, Repeat, CalendarDays, Eye, Palette, Timer, Quote, Phone, Check, Info, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceSEO from '../components/common/ServiceSEO';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import ServiceSchema from '../components/common/ServiceSchema';
import OptimizedImage from '../components/common/OptimizedImage';
import FAQSchema from '../components/common/FAQSchema';
import AppointmentSchema from '../components/common/AppointmentSchema';
import TreatmentSchema from '../components/common/TreatmentSchema';
import ReviewSchema from '../components/common/ReviewSchema';

const treatments = [
  {
    title: "Ögonlockslyft",
    duration: "60-90 minuter",
    areas: ["Övre ögonlock", "Undre ögonlock"],
    benefits: [
      "Naturlig föryngring av ögonområdet",
      "Reducerar överflödig hud",
      "Minskar påsar under ögonen",
      "Ger ett piggare utseende"
    ],
    includes: [
      "Konsultation och hudanalys",
      "Bedövning av behandlingsområdet",
      "Precisionsbehandling med plasmateknik",
      "Kylande och återfuktande mask",
      "Eftervårdskit med specialprodukter",
      "Detaljerad eftervårdsinstruktion"
    ],
    results: [
      "Synligt resultat direkt efter första behandlingen",
      "Full effekt efter 4-6 veckor",
      "Skapar en ny utgångspunkt för hudens åldrande som varar långsiktigt"
    ],
    technology: {
      mechanism: "Sublimering",
      effect: "Skapar mikropunkter som stramar åt huden",
      recovery: "7-10 dagar"
    },
    price: "3500 kr",
    sessions: "1-2 behandlingar rekommenderas",
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/plaxpot-ogonlockslyft-hela-ogon-3189649"
  },
  {
    title: "Rynkbehandling",
    duration: "60-90 minuter",
    areas: ["Ansiktsrynkor", "Kragetårtor", "Rökrynkor"],
    benefits: [
      "Effektiv behandling av rynkor",
      "Förbättrar hudens struktur",
      "Naturligt resultat",
      "Minimal återhämtningstid"
    ],
    includes: [
      "Noggrann analys av rynkmönster",
      "Bedövning av behandlingsområdet",
      "Exakt plasmabehandling av rynkor",
      "Lugnande och antiinflammatorisk mask",
      "Specialserum för optimal läkning",
      "Detaljerad hemvårdsplan"
    ],
    results: [
      "Gradvis förbättring under 2-3 veckor",
      "Optimal effekt efter 4 veckor",
      "Skapar en ny utgångspunkt för hudens åldrande som varar långsiktigt"
    ],
    technology: {
      mechanism: "Plasmaenergi",
      effect: "Stimulerar kollagenproduktion djupt i huden",
      recovery: "3-5 dagar"
    },
    price: "1 995 kr",
    sessions: "1-3 behandlingar rekommenderas",
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/plaxpot-rynkbehandling-3189651"
  },
  {
    title: "Infuzion",
    duration: "60 minuter",
    areas: ["Ansikte", "Hals", "Dekolletage"],
    benefits: [
      "Djupgående hyaluronsyrabehandling",
      "Återfuktar huden",
      "Ökar hudens elasticitet",
      "Ger en fräsch lyster"
    ],
    includes: [
      "Hudanalys och fuktighetstest",
      "Djuprengöring av huden",
      "Elektroporation med aktivt hyaluronsyra-serum",
      "LED-ljusterapi för ökad absorption",
      "Avslutande skyddande fuktbarriär",
      "Personlig hemvårdsrutin"
    ],
    results: [
      "Omedelbar återfuktning och lyster",
      "Förbättrad hudton och ökad spänst",
      "Intensiv effekt i 2-4 veckor med kontinuerlig förbättring vid regelbundna behandlingar"
    ],
    technology: {
      mechanism: "Elektroporation",
      effect: "Öppnar hudcellernas membran för optimal absorption",
      recovery: "Ingen återhämtningstid"
    },
    price: "995 kr",
    sessions: "Rekommendation baserad på hudens tillstånd. Torr och livlös hud tyder på fuktbrist.",
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/infuzion-intensiv-fuktbomb-3167599"
  }
];

const Plaxpot = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const [showPriceModal, setShowPriceModal] = useState(false);
  // Add new state for mobile tabs
  const [openTabs, setOpenTabs] = useState<number[]>([0]);
  const [selectedTreatment, setSelectedTreatment] = useState<number | null>(0);

  const toggleTab = (index: number) => {
    if (window.innerWidth < 768) {
      // Mobile behavior: toggle tab in openTabs array
      setOpenTabs(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      // Desktop behavior: single tab selection
      setSelectedTreatment(selectedTreatment === index ? null : index);
    }
  };

  const scrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ServiceSchema
        name="Plaxpot Behandling"
        description="Plaxpot är en innovativ behandling som använder den senaste plasma-teknologin för hudföryngring och hudförbättring i vår moderna klinik."
        image="/assets/images/hero/plaxpot_hero_clinic_optimized.jpg"
        url="https://betterfeel.se/plaxpot"
        provider="BetterFeel"
        areaServed="Stockholm"
        price="995"
        priceCurrency="SEK"
      />
      <ServiceSEO
        title="Plaxpot Behandling | Naturlig Hudföryngring | BetterFeel Vasastan"
        description="Upptäck fördelarna med Plaxpot-behandling hos BetterFeel i Vasastan, Stockholm. Effektiv och skonsam behandling för rynkor och hudföryngring utan kirurgi. Från 995 kr. Boka din kostnadsfria konsultation idag!"
        keywords="plaxpot, hudföryngring, rynkor, rynkbehandling, plasma behandling, Stockholm, Vasastan, naturlig hudföryngring"
        url="https://betterfeel.se/plaxpot"
        serviceName="Plaxpot Behandling"
        servicePrice="från 995 kr"
        preloadImages={['/assets/images/hero/plaxpot_hero_clinic_optimized.webp']}
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Behandlingar", item: "/behandlingar" },
          { name: "Plaxpot", item: "/plaxpot" }
        ]}
      />
      <FAQSchema 
        questions={[
          {
            question: "Hur länge håller resultatet?",
            answer: "Resultaten från Plaxpot-behandling är långvariga och kan hålla i 4-6 år, beroende på hudtyp och livsstilsfaktorer."
          },
          {
            question: "Är behandlingen smärtsam?",
            answer: "Vi använder effektiv lokalbedövning som gör behandlingen bekväm. De flesta patienter upplever endast en mild värmekänsla."
          },
          {
            question: "Hur lång är återhämtningstiden?",
            answer: "Återhämtningstiden är vanligtvis 5-7 dagar då små krustor bildas och faller av naturligt. Full social aktivitet kan återupptas efter denna period."
          },
          {
            question: "Vilka områden kan behandlas?",
            answer: "Plaxpot är effektiv för behandling av ögonlock, rynkor runt munnen, ärr, pigmentfläckar och andra hudförändringar."
          },
          {
            question: "Hur många behandlingar behövs?",
            answer: "De flesta ser tydliga resultat efter en behandling, men för optimalt resultat kan 2-3 behandlingar rekommenderas med 6-8 veckors mellanrum."
          },
          {
            question: "Är behandlingen säker?",
            answer: "Ja, Plaxpot är en CE-certifierad behandling som utförs av våra erfarna terapeuter. Vi följer strikta säkerhetsprotokoll och gör alltid en noggrann bedömning före behandling."
          }
        ]} 
      />
      <AppointmentSchema
        serviceName="Plaxpot Behandling"
        serviceUrl="https://betterfeel.se/plaxpot"
        businessName="BetterFeel"
        businessUrl="https://betterfeel.se"
        description="Boka tid för Plaxpot behandling hos BetterFeel i Vasastan, Stockholm. Effektiv och skonsam behandling för hudföryngring utan kirurgi."
        areaServed="Vasastan, Stockholm"
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/plaxpot-60-min-rejuvenation-hudforyngring-3206538"
        telephoneNumber="+46737140860"
        address={{
          street: "Kungstensgatan 59",
          city: "Stockholm",
          region: "Stockholm",
          postalCode: "113 29",
          country: "SE"
        }}
      />
      <TreatmentSchema
        name="Plaxpot Ögonlockslyft"
        description="En specialiserad behandling som använder plasmateknik för att stramar åt huden och reducera överflödig hud kring ögonlocken, vilket ger ett piggare utseende utan kirurgi."
        url="https://betterfeel.se/plaxpot"
        image="/assets/images/hero/plaxpot_hero_clinic_optimized.jpg"
        provider="BetterFeel"
        providerUrl="https://betterfeel.se"
        price="3500"
        priceCurrency="SEK"
        duration="PT1H30M"
        treatmentCategory="CosmeticProcedure"
        suitableFor={["Överflödig hud på ögonlock", "Påsar under ögonen", "Åldrande hud", "Trötta ögon"]}
        benefitsDescription="Naturlig föryngring av ögonområdet, reducerar överflödig hud, minskar påsar under ögonen, ger ett piggare utseende"
        aftercare={["Applicera svalkande gel", "Undvik starka solljus i 2 veckor", "Använd solskydd SPF50", "Undvik smink i 48 timmar"]}
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/plaxpot-ogonlockslyft-hela-ogon-3189649"
      />
      <TreatmentSchema
        name="Plaxpot Rynkbehandling"
        description="En effektiv behandling som använder plasmaenergi för att reducera rynkor och förbättra hudens struktur med minimal återhämtningstid."
        url="https://betterfeel.se/plaxpot"
        image="/assets/images/hero/plaxpot_hero_clinic_optimized.jpg"
        provider="BetterFeel"
        providerUrl="https://betterfeel.se"
        price="1995"
        priceCurrency="SEK"
        duration="PT1H30M"
        treatmentCategory="CosmeticProcedure"
        suitableFor={["Ansiktsrynkor", "Kragetårtor", "Rökrynkor", "Åldrande hud"]}
        benefitsDescription="Effektiv behandling av rynkor, förbättrar hudens struktur, naturligt resultat, minimal återhämtningstid"
        aftercare={["Applicera svalkande gel", "Undvik starka solljus i 1 vecka", "Använd solskydd SPF50", "Håll området rent och torrt"]}
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/plaxpot-rynkbehandling-3189651"
      />
      <TreatmentSchema
        name="Infuzion Fuktbehandling"
        description="En djupgående behandling med hyaluronsyra som återfuktar huden, ökar hudens elasticitet och ger en fräsch lyster genom elektroporation."
        url="https://betterfeel.se/plaxpot"
        image="/assets/images/hero/plaxpot_hero_clinic_optimized.jpg"
        provider="BetterFeel"
        providerUrl="https://betterfeel.se"
        price="995"
        priceCurrency="SEK"
        duration="PT1H"
        treatmentCategory="CosmeticProcedure"
        suitableFor={["Torr hud", "Åldrande hud", "Fuktfattig hud", "Livlös hudton"]}
        benefitsDescription="Djupgående hyaluronsyrabehandling, återfuktar huden, ökar hudens elasticitet, ger en fräsch lyster"
        aftercare={["Fortsätt med daglig återfuktning", "Drick mycket vatten", "Undvik uttorkande miljöer", "Använd fuktboostande serum"]}
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/infuzion-intensiv-fuktbomb-3167599"
      />
      <ReviewSchema
        reviews={[
          {
            name: "Signe Holmberg",
            date: "2025-01-15",
            text: "Jag är mycket nöjd med resultatet av min Plaxpot behandling. Ögonlockslyftet blev fantastiskt naturligt och behandlingen var nästan helt smärtfri med bedövningen.",
            rating: 5
          },
          {
            name: "Melker Nyström",
            date: "2024-11-20",
            text: "Rynkbehandlingen med Plaxpot var mycket effektiv. Jag såg märkbar förbättring redan efter en vecka. Professionellt utförd och bra återkoppling från personalen.",
            rating: 5
          },
          {
            name: "Tindra Wickström",
            date: "2024-12-05",
            text: "Infuzion behandlingen gav min torra hud precis den återfuktning den behövde. Huden känns spänstigare och har fått tillbaka sin lyster. Kommer definitivt boka fler behandlingar.",
            rating: 5
          },
          {
            name: "Viggo Ljungqvist",
            date: "2024-09-10",
            text: "Genomgick ögonlockslyft med Plaxpot för tre månader sedan och resultatet håller fortfarande i sig. Fantastiskt att det kunde göras utan kirurgi. Rekommenderas starkt!",
            rating: 5
          },
          {
            name: "Linnéa Dahlberg",
            date: "2024-08-25",
            text: "Haft problem med rynkor kring läpparna i flera år. Efter bara två Plaxpot behandlingar ser de betydligt mindre ut. Smidigt och effektivt med minimal återhämtning.",
            rating: 5
          }
        ]}
        itemReviewed={{
          name: "Plaxpot Behandling",
          description: "Plaxpot är en innovativ behandling som använder den senaste plasma-teknologin för hudföryngring och hudförbättring.",
          image: "/assets/images/hero/plaxpot_hero_clinic_optimized.jpg"
        }}
      />
      <main className="min-h-screen">
        {/* Hero Section - Enhanced for Conversion */}
        <section className="relative flex items-center min-h-screen py-8">
          <div className="absolute inset-0 z-0">
            <picture>
              <source
                srcSet="/assets/images/hero/plaxpot_hero_clinic_optimized.webp"
                type="image/webp"
              />
              <OptimizedImage
                src="/assets/images/hero/plaxpot_hero_clinic_optimized.jpg"
                alt="BetterFeel Plaxpot Behandling - Modern och effektiv hudföryngring"
                isBackground
                priority
                className="absolute inset-0"
                objectFit="cover"
                objectPosition="15% center"
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
                  REVOLUTIONERANDE HUDFÖRYNGRING
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6"
              >
                Föryngra Din Hud<br />
                <span className="text-[#10b981]">utan Kirurgi</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl"
              >
                Upplev kraften i modern plasmateknik. Naturlig hudföryngring med 
                dokumenterade resultat från första behandlingen.
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
                            alt={`Nöjd Plaxpot Kund ${i}`}
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
                      Över 50+ nöjda Plaxpot-kunder senaste året
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
                  "Plasmateknik",
                  "Ögonlockslyft",
                  "Rynkbehandling",
                  "Hudföryngring",
                  "Icke-kirurgisk"
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

        {/* Quick Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="bg-white/90 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Clock className="w-8 h-8 text-[#064e3b] mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-purple-900">Snabb Behandling</h3>
                  <p className="text-gray-600">30-60 minuter</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-white/90 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Shield className="w-8 h-8 text-[#064e3b] mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-purple-900">CE-Certifierad</h3>
                  <p className="text-gray-600">Säker teknologi</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-white/90 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Star className="w-8 h-8 text-[#064e3b] mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-purple-900">5.0 Betyg</h3>
                  <p className="text-gray-600">Från våra kunder</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-center"
              >
                <div className="bg-white/90 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Heart className="w-8 h-8 text-[#064e3b] mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-purple-900">100% Nöjd</h3>
                  <p className="text-gray-600">Kundgaranti</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is Plaxpot Section */}
        <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-[1.5fr,1fr] gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl"
              >
                <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">Vad är Plaxpot?</h2>
                <div className="prose prose-lg prose-purple">
                  <p className="text-gray-700 mb-6">
                    Plaxpot är en banbrytande, icke-kirurgisk behandlingsmetod som använder plasmateknik 
                    för hudföryngring. Tekniken skapar mikroperforationer i huden som stimulerar kroppens 
                    naturliga kollagenproduktion.
                  </p>
                  <p className="text-gray-700">
                    En precis plasma-blixt i mikro-millimeterstorlek skapas mellan apparatens spets och 
                    huden. Detta resulterar i en kontrollerad sammandragning av huden som effektivt 
                    reducerar överskottshud i det behandlade området.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div className="bg-purple-50/50 rounded-xl p-6">
                    <Shield className="w-8 h-8 text-[#064e3b] mb-4" />
                    <h3 className="text-xl font-medium text-purple-900 mb-2">Säker & Kontrollerad</h3>
                    <p className="text-gray-600">CE-certifierad teknologi med dokumenterad säkerhetsprofil</p>
            </div>
                  <div className="bg-purple-50/50 rounded-xl p-6">
                    <Heart className="w-8 h-8 text-[#064e3b] mb-4" />
                    <h3 className="text-xl font-medium text-purple-900 mb-2">Precisa Resultat</h3>
                    <p className="text-gray-600">Målriktad behandling med exakt kontroll över behandlingsområdet</p>
                  </div>
                </div>
              </motion.div>
            
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <picture>
                  <source
                    srcSet="/assets/images/location/plaxpot_device_optimized.webp"
                    type="image/webp"
                  />
                <OptimizedImage
                    src="/assets/images/location/plaxpot_device_optimized.jpg"
                    alt="Plaxpot Behandlingsutrustning - Modern teknologi för optimal behandling"
                    className="w-full h-full"
                  objectFit="cover"
                    objectPosition="center"
                    quality={85}
                />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-medium mb-2">Vår Plaxpot-utrustning</h3>
                  <p className="text-lg opacity-90">Modern teknologi för optimal behandling</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Cards Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                Våra Behandlingar
              </span>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Skräddarsydda Plaxpot-behandlingar
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Välj den behandling som passar dina behov bäst. Alla behandlingar inkluderar kostnadsfri konsultation.
              </p>
            </div>

            {/* Treatment Tabs for Improved Layout */}
            <div className="mb-12">
              {/* Desktop layout - tabs at top, content below */}
              <div className="hidden md:grid md:grid-cols-3 gap-4 mb-8">
                {treatments.map((treatment, index) => (
                  <motion.button
                    key={`tab-desktop-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => toggleTab(index)}
                    className={`px-6 py-4 rounded-xl text-left transition-all duration-300 ${
                      selectedTreatment === index
                        ? 'bg-[#064e3b] text-white shadow-xl'
                        : 'bg-white text-purple-900 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-medium">{treatment.title}</h3>
                        <p className={selectedTreatment === index ? 'text-white/80' : 'text-gray-600'}>
                          {treatment.price}
                        </p>
                      </div>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        selectedTreatment === index ? 'bg-white/20' : 'bg-purple-50'
                      }`}>
                        <ChevronDown 
                          className={`w-5 h-5 ${
                            selectedTreatment === index ? 'text-white transform rotate-180' : 'text-[#064e3b]'
                          } transition-transform duration-300`} 
                        />
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Mobile layout - accordion style with content after each tab */}
              <div className="grid grid-cols-1 gap-4 md:hidden">
                {treatments.map((treatment, index) => (
                  <div key={`accordion-item-${index}`}>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => toggleTab(index)}
                      id={`tab-mobile-${index}`}
                      className={`w-full px-6 py-4 rounded-xl text-left transition-all duration-300 ${
                        openTabs.includes(index)
                          ? 'bg-[#064e3b] text-white shadow-xl'
                          : 'bg-white text-purple-900 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-medium">{treatment.title}</h3>
                          <p className={openTabs.includes(index) ? 'text-white/80' : 'text-gray-600'}>
                            {treatment.price}
                          </p>
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          openTabs.includes(index) ? 'bg-white/20' : 'bg-purple-50'
                        }`}>
                          <ChevronDown 
                            className={`w-5 h-5 ${
                              openTabs.includes(index) ? 'text-white transform rotate-180' : 'text-[#064e3b]'
                            } transition-transform duration-300`} 
                          />
                        </div>
                      </div>
                    </motion.button>
                    
                    {/* Content displayed immediately after its tab on mobile */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: openTabs.includes(index) ? 1 : 0,
                        height: openTabs.includes(index) ? 'auto' : 0
                      }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeInOut"
                      }}
                      className="overflow-hidden mt-4"
                    >
                      {openTabs.includes(index) && (
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                          <div className="grid md:grid-cols-[1fr,2fr] gap-8">
                            {/* Left Column - Visual Information */}
                            <div className="space-y-6">
                              {/* Treatment Tag and Duration */}
                              <div className="flex flex-col space-y-4">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#064e3b]/10 text-[#064e3b] text-sm font-medium self-start">
                                  Plaxpot Behandling
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-5 h-5 text-[#064e3b]" />
                                  <span className="text-gray-700">{treatment.duration}</span>
                                </div>
                              </div>
                              
                              {/* Treatment Visualization */}
                              <div className="bg-purple-50/50 p-6 rounded-xl">
                                <p className="font-medium text-purple-900 mb-4 text-center">Behandlingsprocess</p>
                                <div className="flex flex-col space-y-6 items-center">
                                  {/* Before */}
                                  <div className="flex flex-col items-center">
                                    <span className="text-sm text-gray-500 mb-2">Före</span>
                                    <div className="w-24 h-24 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                                      {treatment.title === "Ögonlockslyft" && (
                                        <div className="w-16 h-16 flex flex-col items-center justify-center">
                                          <div className="w-12 h-6 rounded-full border-b-2 border-gray-400"></div>
                                          <div className="w-8 h-4 bg-gray-200 rounded-full mt-2"></div>
                                        </div>
                                      )}
                                      {treatment.title === "Rynkbehandling" && (
                                        <div className="w-16 h-16 flex flex-col items-center justify-center">
                                          <div className="w-12 h-8 flex flex-col justify-center">
                                            <div className="w-full h-0.5 bg-gray-400 mb-2"></div>
                                            <div className="w-full h-0.5 bg-gray-400 mb-2"></div>
                                            <div className="w-full h-0.5 bg-gray-400"></div>
                                          </div>
                                        </div>
                                      )}
                                      {treatment.title === "Infuzion" && (
                                        <div className="w-16 h-16 flex flex-col items-center justify-center">
                                          <div className="w-12 h-12 rounded-full border border-dashed border-gray-400 flex items-center justify-center">
                                            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  
                                  {/* Arrow */}
                                  <div className="flex flex-col items-center">
                                    <ArrowRight className="w-8 h-8 text-[#064e3b]" />
                                    <div className="text-sm font-medium text-[#064e3b] mt-1">
                                      {treatment.technology.mechanism}
                                    </div>
                                    <p className="text-xs text-gray-600 text-center mt-1 max-w-[200px]">
                                      {treatment.technology.effect}
                                    </p>
                                  </div>
                                  
                                  {/* After */}
                                  <div className="flex flex-col items-center">
                                    <span className="text-sm text-gray-500 mb-2">Efter</span>
                                    <div className="w-24 h-24 rounded-lg bg-green-50 flex items-center justify-center border border-green-200">
                                      {treatment.title === "Ögonlockslyft" && (
                                        <div className="w-16 h-16 flex flex-col items-center justify-center">
                                          <div className="w-12 h-4 rounded-full border-b-2 border-green-600"></div>
                                          <div className="w-8 h-3 bg-green-100 rounded-full mt-2"></div>
                                        </div>
                                      )}
                                      {treatment.title === "Rynkbehandling" && (
                                        <div className="w-16 h-16 flex flex-col items-center justify-center">
                                          <div className="w-12 h-8 flex flex-col justify-center">
                                            <div className="w-full h-0.5 bg-green-400 mb-3 opacity-50"></div>
                                            <div className="w-full h-0.5 bg-green-400 mb-3 opacity-30"></div>
                                            <div className="w-full h-0.5 bg-green-400 opacity-20"></div>
                                          </div>
                                        </div>
                                      )}
                                      {treatment.title === "Infuzion" && (
                                        <div className="w-16 h-16 flex flex-col items-center justify-center">
                                          <div className="w-12 h-12 rounded-full border border-green-400 flex items-center justify-center bg-green-100">
                                            <div className="w-8 h-8 rounded-full bg-green-200"></div>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Results and Sessions Info */}
                              <div className="space-y-4">
                                <div className="bg-purple-50/50 rounded-xl p-4">
                                  <p className="font-medium text-purple-900 mb-2">Information:</p>
                                  <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-start gap-2">
                                      <Clock className="w-4 h-4 text-[#064e3b] mt-0.5" />
                                      <p>Rekommendation: {treatment.sessions}</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <RotateCcw className="w-4 h-4 text-[#064e3b] mt-0.5" />
                                      <p>Återhämtning: {treatment.technology.recovery}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Call-to-action */}
                    <div>
                                <a
                                  href={treatment.bookingUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-base font-medium"
                                >
                                  Boka Behandling <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                    </div>
                  </div>
                            
                            {/* Right Column - Treatment Details */}
                            <div className="space-y-6">
                    <div>
                                <h3 className="text-2xl font-medium text-purple-900 mb-4">{treatment.title}</h3>
                                <p className="text-gray-600 mb-6">
                                  En avancerad Plaxpot-behandling för {treatment.title.toLowerCase()} som ger naturliga resultat utan kirurgi eller injektioner.
                                </p>
                    </div>
                              
                              {/* Benefits */}
                              <div>
                                <h4 className="text-lg font-medium text-purple-900 mb-2">Fördelar</h4>
                                <ul className="grid grid-cols-1 gap-3">
                                  {treatment.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <Check className="w-5 h-5 text-[#064e3b] mt-0.5" />
                                      <span className="text-gray-600">{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                  </div>
                              
                              {/* What's Included */}
                              <div>
                                <h4 className="text-lg font-medium text-purple-900 mb-2">Detta ingår</h4>
                                <ul className="space-y-2">
                                  {treatment.includes.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle2 className="w-5 h-5 text-[#064e3b] mt-0.5" />
                                      <span className="text-gray-600">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                </div>
                              
                              {/* Results */}
                              <div>
                                <h4 className="text-lg font-medium text-purple-900 mb-2">Resultat</h4>
                                <ul className="space-y-2">
                                  {treatment.results.map((result, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <Star className="w-5 h-5 text-[#064e3b] mt-0.5" />
                                      <span className="text-gray-600">{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
              </motion.div>
                  </div>
                ))}
              </div>

              {/* Treatment Content for Desktop */}
              <div className="hidden md:block relative min-h-[800px] mt-8">
                <div className="absolute inset-0">
                  {treatments.map((treatment, index) => (
              <motion.div
                      key={`content-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: selectedTreatment === index ? 1 : 0,
                        pointerEvents: selectedTreatment === index ? 'auto' : 'none'
                      }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 ${selectedTreatment === index ? 'block' : 'hidden'}`}
                    >
                      <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="grid md:grid-cols-[1fr,2fr] gap-8">
                          {/* Treatment content (same as original) */}
                          {/* Left Column - Visual Information */}
                          <div className="space-y-6">
                            {/* Treatment Tag and Duration */}
                            <div className="flex flex-col space-y-4">
                              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#064e3b]/10 text-[#064e3b] text-sm font-medium self-start">
                                Plaxpot Behandling
                      </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-5 h-5 text-[#064e3b]" />
                                <span className="text-gray-700">{treatment.duration}</span>
                      </div>
                      </div>
                            
                            {/* Treatment Visualization */}
                            <div className="bg-purple-50/50 p-6 rounded-xl">
                              <p className="font-medium text-purple-900 mb-4 text-center">Behandlingsprocess</p>
                              <div className="flex flex-col space-y-6 items-center">
                                {/* Before */}
                                <div className="flex flex-col items-center">
                                  <span className="text-sm text-gray-500 mb-2">Före</span>
                                  <div className="w-24 h-24 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-200">
                                    {treatment.title === "Ögonlockslyft" && (
                                      <div className="w-16 h-16 flex flex-col items-center justify-center">
                                        <div className="w-12 h-6 rounded-full border-b-2 border-gray-400"></div>
                                        <div className="w-8 h-4 bg-gray-200 rounded-full mt-2"></div>
                      </div>
                                    )}
                                    {treatment.title === "Rynkbehandling" && (
                                      <div className="w-16 h-16 flex flex-col items-center justify-center">
                                        <div className="w-12 h-8 flex flex-col justify-center">
                                          <div className="w-full h-0.5 bg-gray-400 mb-2"></div>
                                          <div className="w-full h-0.5 bg-gray-400 mb-2"></div>
                                          <div className="w-full h-0.5 bg-gray-400"></div>
                                        </div>
                                      </div>
                                    )}
                                    {treatment.title === "Infuzion" && (
                                      <div className="w-16 h-16 flex flex-col items-center justify-center">
                                        <div className="w-12 h-12 rounded-full border border-dashed border-gray-400 flex items-center justify-center">
                                          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                {/* Arrow */}
                                <div className="flex flex-col items-center">
                                  <ArrowRight className="w-8 h-8 text-[#064e3b]" />
                                  <div className="text-sm font-medium text-[#064e3b] mt-1">
                                    {treatment.technology.mechanism}
                                  </div>
                                  <p className="text-xs text-gray-600 text-center mt-1 max-w-[200px]">
                                    {treatment.technology.effect}
                                  </p>
                                </div>
                                
                                {/* After */}
                                <div className="flex flex-col items-center">
                                  <span className="text-sm text-gray-500 mb-2">Efter</span>
                                  <div className="w-24 h-24 rounded-lg bg-green-50 flex items-center justify-center border border-green-200">
                                    {treatment.title === "Ögonlockslyft" && (
                                      <div className="w-16 h-16 flex flex-col items-center justify-center">
                                        <div className="w-12 h-4 rounded-full border-b-2 border-green-600"></div>
                                        <div className="w-8 h-3 bg-green-100 rounded-full mt-2"></div>
                                      </div>
                                    )}
                                    {treatment.title === "Rynkbehandling" && (
                                      <div className="w-16 h-16 flex flex-col items-center justify-center">
                                        <div className="w-12 h-8 flex flex-col justify-center">
                                          <div className="w-full h-0.5 bg-green-400 mb-3 opacity-50"></div>
                                          <div className="w-full h-0.5 bg-green-400 mb-3 opacity-30"></div>
                                          <div className="w-full h-0.5 bg-green-400 opacity-20"></div>
                                        </div>
                                      </div>
                                    )}
                                    {treatment.title === "Infuzion" && (
                                      <div className="w-16 h-16 flex flex-col items-center justify-center">
                                        <div className="w-12 h-12 rounded-full border border-green-400 flex items-center justify-center bg-green-100">
                                          <div className="w-8 h-8 rounded-full bg-green-200"></div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Results and Sessions Info */}
                            <div className="space-y-4">
                              <div className="bg-purple-50/50 rounded-xl p-4">
                                <p className="font-medium text-purple-900 mb-2">Information:</p>
                                <div className="space-y-2 text-sm text-gray-600">
                                  <div className="flex items-start gap-2">
                                    <Clock className="w-4 h-4 text-[#064e3b] mt-0.5" />
                                    <p>Rekommendation: {treatment.sessions}</p>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <RotateCcw className="w-4 h-4 text-[#064e3b] mt-0.5" />
                                    <p>Återhämtning: {treatment.technology.recovery}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Right Column - Treatment Details */}
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-2xl font-medium text-purple-900 mb-4">{treatment.title}</h3>
                              <p className="text-gray-600 mb-6">
                                En avancerad Plaxpot-behandling för {treatment.title.toLowerCase()} som ger naturliga resultat utan kirurgi eller injektioner.
                              </p>
                            </div>
                            
                            {/* Benefits */}
                            <div>
                              <h4 className="text-lg font-medium text-purple-900 mb-2">Fördelar</h4>
                              <ul className="grid grid-cols-1 gap-3">
                                {treatment.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-[#064e3b] mt-0.5" />
                                    <span className="text-gray-600">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* What's Included */}
                            <div>
                              <h4 className="text-lg font-medium text-purple-900 mb-2">Detta ingår</h4>
                              <ul className="space-y-2">
                                {treatment.includes.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#064e3b] mt-0.5" />
                                    <span className="text-gray-600">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Results */}
                            <div>
                              <h4 className="text-lg font-medium text-purple-900 mb-2">Resultat</h4>
                              <ul className="space-y-2">
                                {treatment.results.map((result, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <Star className="w-5 h-5 text-[#064e3b] mt-0.5" />
                                    <span className="text-gray-600">{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Call-to-action */}
                            <div className="pt-4">
                              <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                  href={treatment.bookingUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-base font-medium"
                                >
                                  Boka Behandling <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
              </motion.div>
                  ))}
                </div>
              </div>
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
                Din Resa till Föryngrad Hud
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vi guidar dig genom hela processen, från konsultation till eftervård, 
                för att säkerställa bästa möjliga resultat.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Förberedelse</h3>
                <ul className="space-y-4">
                  {[
                    "Konsultation och bedömning",
                    "Applicering av lokalbedövning (30 min)",
                    "Markering av behandlingsområden"
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#064e3b] text-white flex items-center justify-center text-sm">
                        {i + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Behandling</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Behandlingstid</p>
                      <p className="text-gray-600">60-90 minuter</p>
                      </div>
                      </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Smärtnivå</p>
                      <p className="text-gray-600">Minimal med bedövning</p>
                      </div>
                      </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Första resultat</p>
                      <p className="text-gray-600">Synligt efter 7 dagar</p>
                    </div>
                      </div>
                    </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Eftervård</h3>
                <ul className="space-y-4">
                  {[
                    "Desinficering 2 gånger/dag",
                    "SPF 50 på behandlat område",
                    "Undvik smink i 48 timmar",
                    "Träningsuppehåll: 1 vecka"
                  ].map((care, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#064e3b] mt-1" />
                      <span className="text-gray-700">{care}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Results Timeline */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                Läkningsprocess
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
                Din Väg till Föryngring
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Följ din kropps naturliga läkningsprocess och se hur resultaten utvecklas över tid.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Läkningsförloppet</h3>
                <div className="space-y-6">
                  {[
                    { day: "Dag 1-2", desc: "Bruna märken och rodnad, viss ömhet" },
                    { day: "Dag 3-4", desc: "Möjlig svullnad, rodnad och krustbildning" },
                    { day: "Dag 5-7", desc: "Minskad rodnad, början till fjällning" },
                    { day: "Dag 8-14", desc: "Avtagande fjällning, ökad hudspänst" },
                    { day: "Efter 2-3 veckor", desc: "Normalisering av vävnad" }
                  ].map((phase, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-20">
                        <span className="text-sm font-medium text-[#064e3b]">{phase.day}</span>
                      </div>
                      <div className="flex-grow">
                        <p className="text-gray-700">{phase.desc}</p>
                      </div>
                      </div>
                  ))}
                    </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Behandlingsresultat</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Första synliga resultat</p>
                      <p className="text-gray-600">Efter 7 dagar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Slutgiltigt resultat</p>
                      <p className="text-gray-600">1-3 månader efter behandling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Timer className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Hållbarhet</p>
                      <p className="text-gray-600">Permanent, men påverkas av naturligt åldrande</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Repeat className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Upprepning</p>
                      <p className="text-gray-600">Vid djupa rynkor kan upprepad behandling rekommenderas</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                Vanliga Frågor
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
                Allt Du Behöver Veta
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Här hittar du svar på de vanligaste frågorna om Plaxpot-behandlingar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: "Hur länge håller resultatet?",
                  a: "Resultaten från Plaxpot-behandling är långvariga och kan hålla i 4-6 år, beroende på hudtyp och livsstilsfaktorer."
                },
                {
                  q: "Är behandlingen smärtsam?",
                  a: "Vi använder effektiv lokalbedövning som gör behandlingen bekväm. De flesta patienter upplever endast en mild värmekänsla."
                },
                {
                  q: "Hur lång är återhämtningstiden?",
                  a: "Återhämtningstiden är vanligtvis 5-7 dagar då små krustor bildas och faller av naturligt. Full social aktivitet kan återupptas efter denna period."
                },
                {
                  q: "Vilka områden kan behandlas?",
                  a: "Plaxpot är effektiv för behandling av ögonlock, rynkor runt munnen, ärr, pigmentfläckar och andra hudförändringar."
                },
                {
                  q: "Hur många behandlingar behövs?",
                  a: "De flesta ser tydliga resultat efter en behandling, men för optimalt resultat kan 2-3 behandlingar rekommenderas med 6-8 veckors mellanrum."
                },
                {
                  q: "Är behandlingen säker?",
                  a: "Ja, Plaxpot är en CE-certifierad behandling som utförs av våra erfarna terapeuter. Vi följer strikta säkerhetsprotokoll och gör alltid en noggrann bedömning före behandling."
                }
              ].map((faq, i) => (
                  <motion.div
                  key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <h3 className="text-xl font-medium text-purple-900 mb-4">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </motion.div>
              ))}
                  </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#064e3b] to-[#043927] rounded-2xl p-12 text-center text-white relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                  Begränsat Antal Tider
                </span>
                
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  Börja Din Resa mot Föryngrad Hud Idag
                </h2>
                
                <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                  Ta första steget mot en naturligt föryngrad hud. 
                  Boka en kostnadsfri konsultation och få en personlig behandlingsplan.
                </p>

                {/* Benefits Grid */}
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
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/konsultation-telefon-3124094"
                      target="_blank"
                      rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#064e3b] rounded-lg hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
                  >
                    <CalendarDays className="mr-2 h-5 w-5" />
                    Boka Kostnadsfri Konsultation
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:+46737140860"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Ring Oss
                  </motion.a>
                  </div>

                {/* Trust Indicator */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-center gap-6">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full border-2 border-white bg-purple-200 flex items-center justify-center overflow-hidden"
                        >
                          <OptimizedImage
                            src={`/assets/images/avatars/avatar-${i}.jpg`}
                            alt={`Nöjd Plaxpot Kund ${i}`}
                            className="w-full h-full object-cover"
                            width={40}
                            height={40}
                          />
                </div>
              ))}
            </div>
                    <p className="text-sm text-white/90">
                      Gå med över 50+ nöjda kunder som redan har börjat sin resa mot föryngrad hud
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl from-white/10 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Plaxpot;