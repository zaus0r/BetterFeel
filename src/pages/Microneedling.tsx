import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Phone, ChevronDown, Star, Shield, Heart, Sparkles, CheckCircle2, Check, Clock, Activity, Menu } from 'lucide-react';
import OptimizedImage from '../components/common/OptimizedImage';
import Animation from '../components/common/Animation';
import ServiceSchema from '../components/common/ServiceSchema';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import ServiceSEO from '../components/common/ServiceSEO';
import FAQSchema from '../components/common/FAQSchema';
import ReviewSchema from '../components/common/ReviewSchema';
import AppointmentSchema from '../components/common/AppointmentSchema';
import TreatmentSchema from '../components/common/TreatmentSchema';

interface Treatment {
  title: string;
  duration: string;
  price: string;
  description: string;
  benefits: string[];
  includes: string[];
  bookingUrl: string;
}

const treatments: Treatment[] = [
  {
    title: "Bio Pen Q2 Facial Treatment",
    duration: "60 min",
    price: "1495 kr",
    description: "En avancerad ansiktsbehandling som kombinerar tre kraftfulla teknologier (Microneedling, EMS och LED-ljusterapi) för att effektivt behandla flera hudproblem samtidigt. Perfekt för dig som vill se snabba resultat med minimal återhämtningstid.",
    benefits: [
      "Reducerar fina linjer och rynkor",
      "Förbättrar ärrbildning och acneärr",
      "Jämnar ut ojämn hudton och pigmentering",
      "Minskar förstorade porer",
      "Stimulerar kollagenproduktion"
    ],
    includes: [
      "Hudanalys med personliga inställningar",
      "Microneedling med anpassat nåldjup (0,25-1,0 mm)",
      "EMS elektroporation för förbättrad produktabsorption",
      "Dubbel LED-ljusterapi (rött för kollagen, blått för inflammation)",
      "Specialanpassat serum för din hudtyp",
      "Lugnande återfuktande mask",
      "Detaljerad eftervårdsinstruktion"
    ],
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/bio-pen-q2-microneedling-45-min-3228603"
  },
  {
    title: "Bio Pen Q2 Advanced Body Treatment",
    duration: "60 min",
    price: "1495 kr",
    description: "En specialiserad kroppsbehandling designad för att behandla områden som behöver extra fokus som celluliter, bristningar och slapp hud. Utnyttjar Bio Pen Q2:s trippelteknologi med förstärkta inställningar för tjockare hudområden.",
    benefits: [
      "Minskar synligheten av celluliter",
      "Förbättrar hudbristningar och ärr",
      "Ger fastare hud på kropp och dekolletage",
      "Ökar blodcirkulationen för bättre hudton",
      "Förstärker upptagning av aktiva ingredienser"
    ],
    includes: [
      "Omfattande hudanalys av behandlingsområdet",
      "Förstärkt microneedling för kroppsområden (0,5-1,5 mm djup)",
      "Intensiv EMS-behandling för muskelstimulering",
      "LED-ljusterapi för förbättrad läkning",
      "Specialserum för kroppsområden",
      "Återfuktande och närande kroppsbehandling",
      "Skräddarsydd hemvårdsvägledning"
    ],
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/bio-pen-q2-avancerad-microneedling-60-min-3216335"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Säker Teknologi",
    description: "CE-certifierad och kliniskt testad för optimal säkerhet"
  },
  {
    icon: Sparkles,
    title: "Synliga Resultat",
    description: "Märkbara förbättringar redan efter första behandlingen"
  },
  {
    icon: Heart,
    title: "Skonsam Behandling",
    description: "Minimal återhämtningstid med maximal effekt"
  }
];

const Microneedling = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const treatmentsRef = useRef<HTMLDivElement>(null);
  const treatmentInfoRef = useRef<HTMLDivElement>(null);
  const treatmentAreasRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "Vad är Bio Pen Q2 Microneedling?",
      answer: "Bio Pen Q2 Microneedling är en avancerad hudföryngringsbehandling som kombinerar tre kraftfulla teknologier: microneedling, EMS elektroporation och LED-ljusterapi. Behandlingen stimulerar hudens naturliga kollagenproduktion och förbättrar upptagningen av aktiva ingredienser."
    },
    {
      question: "Är Bio Pen Q2 Microneedling smärtsam?",
      answer: "Nej, behandlingen är relativt smärtfri tack vare den fina nåltekniken och möjligheten att anpassa nåldjupet. De flesta klienter upplever endast en lätt stickande känsla. Vi använder även bedövande kräm vid behov för att säkerställa maximal komfort."
    },
    {
      question: "Hur lång är återhämtningstiden?",
      answer: "Återhämtningstiden är minimal. De flesta kan återgå till sina normala aktiviteter direkt efter behandlingen. En lätt rodnad kan uppstå men försvinner vanligtvis inom 24 timmar. Huden kan även kännas något torr och stram de första dagarna."
    },
    {
      question: "Hur många behandlingar behövs för att se resultat?",
      answer: "De flesta klienter ser förbättringar redan efter första behandlingen. För optimala resultat rekommenderar vi dock en serie på 3-6 behandlingar med 3-4 veckors mellanrum, beroende på hudens tillstånd och önskat resultat."
    },
    {
      question: "Vilka hudproblem kan behandlas med Bio Pen Q2?",
      answer: "Bio Pen Q2 är effektiv för en rad hudproblem, inklusive fina linjer och rynkor, acneärr, ojämn hudton, förstorade porer, bristningar, och för att förbättra hudens övergripande kvalitet och lyster."
    },
    {
      question: "Kan alla hudtyper behandlas?",
      answer: "Ja, Bio Pen Q2 är säker för alla hudtyper. Vi anpassar behandlingen efter din specifika hudtyp och hudtillstånd för att säkerställa optimala resultat och minimal risk för biverkningar."
    }
  ];

  const microneedlingReviews = [
    {
      name: "Sofia K.",
      date: "2024-12-01",
      text: "Fantastisk Bio Pen Q2 behandling hos BetterFeel! Såg märkbar skillnad redan efter första behandlingen. Huden känns spänstigare och rynkorna har minskat.",
      rating: 5
    },
    {
      name: "Petra M.",
      date: "2024-11-15",
      text: "Proffsig microneedling behandling. Personalen är kunnig och tog sig verkligen tid att förklara processen. Rekommenderar varmt!",
      rating: 5
    },
    {
      name: "Johan L.",
      date: "2024-10-20",
      text: "Testade Bio Pen Q2 för att reducera ärrbildning från acne. Är redan imponerad av resultaten efter bara två behandlingar. Huden ser jämnare ut.",
      rating: 5
    },
    {
      name: "Camilla H.",
      date: "2024-09-05",
      text: "Gjorde en microneedling behandling för första gången. Lite nervös först men terapeuten var lugn och professionell. Huden känns förnyad och fräsch!",
      rating: 5
    },
    {
      name: "Anders P.",
      date: "2024-08-12",
      text: "Toppbetyg för Bio Pen Q2 behandlingen. Har provat många olika hudbehandlingar tidigare men den här känns verkligen effektiv. Ser fram emot nästa session.",
      rating: 5
    }
  ];

  return (
    <>
      <ServiceSchema
        name="Bio Pen Q2 Microneedling"
        description="Avancerad hudföryngring med Bio Pen Q2 - en revolutionerande behandling som kombinerar microneedling, EMS elektroporation och LED-ljusterapi för att effektivt behandla rynkor, ärr, porer och ojämn hudton."
        image="/assets/images/hero/microneedling_hero_optimized.webp?v=2"
        url="https://betterfeel.se/microneedling"
        provider="BetterFeel"
        areaServed="Vasastan, Stockholm"
        price="1495"
        priceCurrency="SEK"
      />
      <ServiceSEO
        title="Bio Pen Q2 Microneedling | Hudföryngring | BetterFeel Vasastan"
        description="Upptäck Bio Pen Q2 microneedling hos BetterFeel i Vasastan, Stockholm. Avancerad hudföryngring med tre kraftfulla teknologier: microneedling, EMS elektroporation och LED-ljusterapi. Behandlar rynkor, ärr, ojämn hudton och bristningar. Boka din kostnadsfria konsultation idag!"
        keywords="microneedling, bio pen q2, hudföryngring, ems elektroporation, led-ljusterapi, rynkor, ärr, porer, Stockholm, Vasastan"
        url="https://betterfeel.se/microneedling"
        serviceName="Bio Pen Q2 Microneedling"
        servicePrice="1495 kr"
        preloadImages={['/assets/images/hero/microneedling_hero_optimized.webp?v=2']}
        treatments={[
          {
            name: "Bio Pen Q2 Facial Treatment",
            description: "En avancerad ansiktsbehandling som kombinerar tre kraftfulla teknologier (Microneedling, EMS och LED-ljusterapi) för att effektivt behandla flera hudproblem samtidigt.",
            duration: "60 min",
            price: "1495 kr",
            url: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/bio-pen-q2-microneedling-45-min-3228603"
          },
          {
            name: "Bio Pen Q2 Advanced Body Treatment",
            description: "En specialiserad kroppsbehandling designad för att behandla områden som behöver extra fokus som celluliter, bristningar och slapp hud.",
            duration: "60 min",
            price: "1495 kr",
            url: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/bio-pen-q2-avancerad-microneedling-60-min-3216335"
          }
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Behandlingar", item: "/behandlingar" },
          { name: "Microneedling", item: "/microneedling" }
        ]}
      />
      <FAQSchema questions={faqs} />
      <ReviewSchema 
        reviews={microneedlingReviews}
        itemReviewed={{
          name: "Bio Pen Q2 Microneedling",
          description: "Avancerad hudföryngring med Bio Pen Q2 - kombinerar microneedling, EMS elektroporation och LED-ljusterapi för hudföryngring och problembehandling.",
          image: "/assets/images/hero/microneedling_hero_optimized.webp?v=2"
        }}
      />
      <AppointmentSchema
        serviceName="Microneedling Behandling"
        serviceUrl="https://betterfeel.se/microneedling"
        businessName="BetterFeel"
        businessUrl="https://betterfeel.se"
        description="Boka tid för microneedling behandling hos BetterFeel i Vasastan, Stockholm. Effektiv behandling för att reducera ärr, fina linjer och förbättra hudens struktur."
        areaServed="Vasastan, Stockholm"
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/microneedling-70-min-supreme-renewal-rynkreduktion-fastare-hy-3189637"
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
        name="Bio Pen Q2 Facial Treatment"
        description="En avancerad ansiktsbehandling som kombinerar tre kraftfulla teknologier (Microneedling, EMS och LED-ljusterapi) för att effektivt behandla flera hudproblem samtidigt. Perfekt för dig som vill se snabba resultat med minimal återhämtningstid."
        url="https://betterfeel.se/microneedling"
        image="/assets/images/hero/microneedling_hero_optimized.webp?v=2"
        provider="BetterFeel"
        providerUrl="https://betterfeel.se"
        price="1495"
        priceCurrency="SEK"
        duration="PT1H"
        treatmentCategory="CosmeticProcedure"
        suitableFor={["Rynkor", "acneärr", "ojämn hudton", "förstorade porer"]}
        benefitsDescription="Reducerar fina linjer och rynkor, förbättrar ärrbildning, jämnar ut hudton och minskar porer"
        aftercare={["Undvik direkt solljus", "använd solskydd", "undvik stark värme och ansträngande träning under 24 timmar efter behandling"]}
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/bio-pen-q2-microneedling-45-min-3228603"
      />
      <TreatmentSchema
        name="Bio Pen Q2 Advanced Body Treatment"
        description="En specialiserad kroppsbehandling designad för att behandla områden som behöver extra fokus som celluliter, bristningar och slapp hud. Utnyttjar Bio Pen Q2:s trippelteknologi med förstärkta inställningar för tjockare hudområden."
        url="https://betterfeel.se/microneedling"
        image="/assets/images/hero/microneedling_hero_optimized.webp?v=2"
        provider="BetterFeel"
        providerUrl="https://betterfeel.se"
        price="1495"
        priceCurrency="SEK"
        duration="PT1H"
        treatmentCategory="CosmeticProcedure"
        suitableFor={["Celluliter", "hudbristningar", "slapp hud", "ärr på kroppen"]}
        benefitsDescription="Minskar synligheten av celluliter, förbättrar hudbristningar, ger fastare hud, ökar blodcirkulationen"
        aftercare={["Undvik direkt solljus på behandlade områden", "använd återfuktande kräm", "drick mycket vatten", "undvik varma bad under 24-48 timmar"]}
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/bio-pen-q2-avancerad-microneedling-body-treatment-3237284"
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative flex items-center min-h-screen py-8">
          <div className="absolute inset-0 z-0">
            <picture>
              <source
                srcSet="/assets/images/hero/microneedling_hero_optimized.webp?v=2"
                type="image/webp"
              />
              <OptimizedImage
                src="/assets/images/hero/microneedling_hero_optimized.png?v=2"
                alt="Bio Pen Q2 Microneedling - Avancerad hudföryngring"
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
                  AVANCERAD HUDFÖRYNGRING
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6"
              >
                Bio Pen Q2 <span className="text-[#10b981]">Microneedling</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl"
              >
                Upplev kraften i tre revolutionerande teknologier i en behandling. 
                Förbättra hudens struktur, reducera rynkor och få en strålande lyster.
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
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Boka Gratis Konsultation
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
                  "Microneedling",
                  "EMS Elektroporation",
                  "LED-ljusterapi",
                  "Kollagenproduktion",
                  "Hudföryngring"
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
            onClick={() => {
              const element = document.getElementById('intro');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-white/80 transition-colors duration-300"
            aria-label="Scrolla till innehåll"
          >
            <ChevronDown className="h-8 w-8 animate-bounce" />
          </motion.button>
        </section>

        {/* Quick Navigation Section - Added for better UX */}
        <section className="py-6 bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center flex-wrap gap-4">
              <button 
                onClick={() => benefitsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-sm font-medium text-purple-900 hover:text-[#064e3b] transition-colors duration-300 flex items-center gap-1"
              >
                <Sparkles className="w-4 h-4" /> Fördelar
              </button>
              <button 
                onClick={() => treatmentsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-sm font-medium text-purple-900 hover:text-[#064e3b] transition-colors duration-300 flex items-center gap-1"
              >
                <Menu className="w-4 h-4" /> Behandlingar
              </button>
              <button 
                onClick={() => treatmentInfoRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-sm font-medium text-purple-900 hover:text-[#064e3b] transition-colors duration-300 flex items-center gap-1"
              >
                <Clock className="w-4 h-4" /> Behandlingsinfo
              </button>
              <button 
                onClick={() => treatmentAreasRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 text-sm font-medium text-purple-900 hover:text-[#064e3b] transition-colors duration-300 flex items-center gap-1"
              >
                <Shield className="w-4 h-4" /> Behandlingsområden
              </button>
              <a
                href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/3-x-bio-pen-q2-microneedling-ansikte-elle-kropp-3238653"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-sm font-medium flex items-center gap-1"
              >
                <CalendarDays className="w-4 h-4" /> Boka Behandling
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                  Revolutionerande Teknologi
                </span>
                <h2 className="text-3xl font-medium text-purple-900 mb-6">
                  Tre Kraftfulla Teknologier i En Behandling
                </h2>
                <p className="text-gray-600 mb-8">
                  Bio Pen Q2 kombinerar microneedling, EMS elektroporation och LED-ljusterapi 
                  för att ge dig marknadens mest effektiva hudföryngring. Behandlingen är 
                  skonsam men ger kraftfulla resultat.
                </p>
                <div className="grid gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-[#064e3b]" />
                      </div>
                      <div>
                        <h3 className="font-medium text-purple-900 mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <picture>
                  <source
                    srcSet="/assets/images/location/BioPen_Q2_device_optimized.webp"
                    type="image/webp"
                  />
                  <OptimizedImage
                    src="/assets/images/location/BioPen_Q2_device_optimized.png"
                    alt="Bio Pen Q2 Device - Modern teknologi för optimal hudföryngring"
                    className="w-full h-full"
                    objectFit="contain"
                    objectPosition="center"
                    quality={85}
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-medium mb-2">Bio Pen Q2 Device</h3>
                  <p className="text-lg opacity-90">Avancerad teknologi för optimala resultat</p>
                </div>
              </Animation>
            </div>
          </div>
        </section>

        {/* Treatment Packages Section */}
        <section ref={treatmentsRef} id="behandlingar" className="py-20 bg-gradient-to-b from-purple-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                Våra Behandlingar
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
                Välj Den Behandling Som Passar Dig
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vi erbjuder specialanpassade behandlingspaket för att möta dina specifika behov. 
                Varje paket inkluderar kostnadsfri konsultation.
              </p>
            </div>

            <div className="mx-auto">
              <div className="grid md:grid-cols-2 gap-8 justify-center">
                {treatments.map((treatment, index) => (
                  <Animation
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-purple-200/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      {/* Header with Price */}
                      <div className="bg-gradient-to-br from-[#064e3b] to-[#043927] p-6 text-white relative overflow-hidden">
                        {/* Technology Icons */}
                        <div className="absolute top-2 right-2 flex space-x-1">
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center" title="Microneedling">
                            <span className="text-xs font-bold">M</span>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center" title="EMS Elektroporation">
                            <span className="text-xs font-bold">E</span>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center" title="LED-ljusterapi">
                            <span className="text-xs font-bold">L</span>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-medium mb-2">{treatment.title}</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1.5 text-white/80" />
                            <p className="text-white/90">{treatment.duration}</p>
                          </div>
                          <div className="text-lg font-medium">
                            {treatment.price}
                          </div>
                        </div>
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        {/* Description */}
                        <div className="mb-6 bg-purple-50/50 p-4 rounded-lg">
                          <p className="text-gray-600">{treatment.description}</p>
                        </div>
                        
                        {/* Modified to use a more horizontal layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                          {/* Triple Technology Visualization */}
                          <div className="flex flex-col space-y-2">
                            <p className="font-medium text-purple-900 mb-1">Trippelteknologi:</p>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="bg-green-50 p-3 rounded-lg flex flex-col items-center text-center">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
                                  <span className="text-[#064e3b] font-bold">M</span>
                                </div>
                                <span className="text-xs font-medium text-gray-700">Microneedling</span>
                                <span className="text-xs text-gray-500 mt-1">
                                  {treatment.title.includes("Facial") ? "0,25-1,0 mm" : "0,5-1,5 mm"}
                                </span>
                              </div>
                              
                              <div className="bg-blue-50 p-3 rounded-lg flex flex-col items-center text-center">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                                  <span className="text-blue-600 font-bold">E</span>
                                </div>
                                <span className="text-xs font-medium text-gray-700">EMS</span>
                                <span className="text-xs text-gray-500 mt-1">
                                  {treatment.title.includes("Facial") ? "Nivå 2-3" : "Nivå 3-4"}
                                </span>
                              </div>
                              
                              <div className="bg-purple-50 p-3 rounded-lg flex flex-col items-center text-center">
                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                                  <span className="text-purple-600 font-bold">L</span>
                                </div>
                                <span className="text-xs font-medium text-gray-700">LED-ljus</span>
                                <span className="text-xs text-gray-500 mt-1">
                                  {treatment.title.includes("Facial") ? "Röd + Blå" : "Förstärkt Röd"}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Ideal Treatment Areas - Side by side with tech visualization */}
                          <div className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] p-4 rounded-lg h-full flex flex-col justify-center">
                            <p className="font-medium text-[#064e3b] mb-2 flex items-center">
                              <Shield className="w-4 h-4 mr-1" />
                              Idealiska behandlingsområden:
                            </p>
                            <div className="flex justify-center">
                              {treatment.title.includes("Facial") ? (
                                <div className="flex items-center space-x-2">
                                  <div className="flex flex-col items-center">
                                    <div className="text-xs text-gray-600 mb-1">Ansikte</div>
                                    <div className="w-16 h-16 rounded-full border-2 border-[#064e3b] flex items-center justify-center bg-white">
                                      <div className="w-12 h-12 flex flex-col items-center justify-center">
                                        <div className="w-6 h-3 rounded-t-full bg-[#dcfce7]"></div>
                                        <div className="w-8 h-6 border border-[#064e3b] rounded-lg mt-1"></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-center">
                                    <div className="text-xs text-gray-600 mb-1">Hals</div>
                                    <div className="w-10 h-16 rounded-lg border-2 border-[#064e3b] bg-white"></div>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex items-center space-x-2">
                                  <div className="flex flex-col items-center">
                                    <div className="text-xs text-gray-600 mb-1">Kropp</div>
                                    <div className="w-24 h-24 border-2 border-[#064e3b] rounded-lg bg-white flex flex-col items-center justify-center p-1">
                                      <div className="w-12 h-4 bg-[#dcfce7] rounded-t-lg mx-auto"></div>
                                      <div className="w-14 h-8 bg-[#dcfce7] mt-1 rounded-lg"></div>
                                      <div className="flex mt-1">
                                        <div className="w-5 h-8 bg-[#dcfce7] rounded-lg mr-1"></div>
                                        <div className="w-5 h-8 bg-[#dcfce7] rounded-lg"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Two-column layout for benefits and includes */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                          {/* Benefits */}
                          <div>
                            <p className="font-medium text-purple-900 mb-3">Fördelar:</p>
                            <ul className="space-y-2">
                              {treatment.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                  <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Includes */}
                          <div>
                            <p className="font-medium text-purple-900 mb-3">Detta ingår:</p>
                            <ul className="space-y-2">
                              {treatment.includes.slice(0, 4).map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                  <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {/* Show additional includes in a single column if there are more than 4 */}
                        {treatment.includes.length > 4 && (
                          <div className="mb-6">
                            <ul className="space-y-2">
                              {treatment.includes.slice(4).map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600">
                                  <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Flexible spacer to push button to bottom */}
                        <div className="flex-grow"></div>

                        {/* Book Button */}
                        <a
                          href={treatment.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-base font-medium w-full mt-auto"
                        >
                          Boka Behandling <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </Animation>
                ))}
              </div>
            </div>

            {/* Treatment Comparison Table */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-purple-200/30">
                <div className="p-6 bg-purple-50">
                  <h3 className="text-xl font-medium text-purple-900">Jämför Våra Behandlingar</h3>
                  <p className="text-gray-600">Se vilken behandling som passar dina behov bäst</p>
                </div>
                
                {/* Desktop Table - Hidden on Mobile */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-purple-50/50">
                        <th className="px-6 py-4 text-left text-sm font-medium text-purple-900">Funktion</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-purple-900">Bio Pen Q2 Facial Treatment</th>
                        <th className="px-6 py-4 text-center text-sm font-medium text-purple-900">Bio Pen Q2 Advanced Body Treatment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Microneedling</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">
                          <div className="flex flex-col items-center">
                            <CheckCircle2 className="w-5 h-5 text-[#064e3b] mx-auto" />
                            <span className="text-xs mt-1">0,25-1,0 mm djup</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">
                          <div className="flex flex-col items-center">
                            <CheckCircle2 className="w-5 h-5 text-[#064e3b] mx-auto" />
                            <span className="text-xs mt-1">0,5-1,5 mm djup</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">EMS Elektroporation</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">
                          <div className="flex flex-col items-center">
                            <CheckCircle2 className="w-5 h-5 text-[#064e3b] mx-auto" />
                            <span className="text-xs mt-1">Nivå 2-3</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">
                          <div className="flex flex-col items-center">
                            <CheckCircle2 className="w-5 h-5 text-[#064e3b] mx-auto" />
                            <span className="text-xs mt-1">Nivå 3-4 (intensiv)</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">LED-ljusterapi</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">
                          <div className="flex flex-col items-center">
                            <CheckCircle2 className="w-5 h-5 text-[#064e3b] mx-auto" />
                            <span className="text-xs mt-1">Dubbla våglängder</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">
                          <div className="flex flex-col items-center">
                            <CheckCircle2 className="w-5 h-5 text-[#064e3b] mx-auto" />
                            <span className="text-xs mt-1">Förbättrad penetration</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Fokusområden</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">
                          <div className="flex flex-col items-start text-xs space-y-1 max-w-[180px] mx-auto">
                            <span>• Fina linjer och rynkor</span>
                            <span>• Acneärr och oren hud</span>
                            <span>• Pigmentering</span>
                            <span>• Förstorade porer</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">
                          <div className="flex flex-col items-start text-xs space-y-1 max-w-[180px] mx-auto">
                            <span>• Celluliter</span>
                            <span>• Hudbristningar</span>
                            <span>• Slapp hud på kroppen</span>
                            <span>• Ärr på kroppsområden</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Behandlingstid</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">60 min</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">60 min</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Rekommenderad kur</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">3-6 behandlingar<br/><span className="text-xs">(var 3-4 vecka)</span></td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">4-8 behandlingar<br/><span className="text-xs">(var 4 vecka)</span></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Rekommenderad frekvens</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">4-8 behandlingar<br/><span className="text-xs">(var 4 vecka)</span></td>
                        <td className="px-6 py-4 text-center text-sm text-gray-700">4-8 behandlingar<br/><span className="text-xs">(var 4 vecka)</span></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Pris</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-[#064e3b]">1495 kr</td>
                        <td className="px-6 py-4 text-center text-sm font-medium text-[#064e3b]">1495 kr</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700"></td>
                        <td className="px-6 py-4 text-center">
                          <a
                            href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/bio-pen-q2-microneedling-45-min-3228603"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-sm font-medium"
                          >
                            Boka Behandling
                          </a>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <a
                            href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/bio-pen-q2-advanced-microneedling-body-treatment-3237284"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-sm font-medium"
                          >
                            Boka Behandling
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Mobile Card View - Visible only on Mobile */}
                <div className="md:hidden">
                  {/* Facial Treatment Card */}
                  <div className="p-5 border-b border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#064e3b]/10 flex items-center justify-center mr-3">
                        <Sparkles className="w-6 h-6 text-[#064e3b]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-900 text-lg">Bio Pen Q2 Facial</h4>
                        <div className="text-sm font-medium text-[#064e3b]">1 495 kr</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-4">
                      {/* Microneedling */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-medium text-gray-900">Microneedling</div>
                          <div className="text-sm text-gray-600">0,25-1,0 mm djup</div>
                        </div>
                      </div>
                      
                      {/* EMS */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-medium text-gray-900">EMS Elektroporation</div>
                          <div className="text-sm text-gray-600">Nivå 2-3</div>
                        </div>
                      </div>
                      
                      {/* LED */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-medium text-gray-900">LED-ljusterapi</div>
                          <div className="text-sm text-gray-600">Dubbla våglängder</div>
                        </div>
                      </div>
                      
                      {/* Fokusområden */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm font-medium text-gray-900 mb-2">Fokusområden</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-start gap-1">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="w-3 h-3 text-[#064e3b]" />
                            </div>
                            <span className="text-xs text-gray-600">Fina linjer och rynkor</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="w-3 h-3 text-[#064e3b]" />
                            </div>
                            <span className="text-xs text-gray-600">Acneärr och oren hud</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="w-3 h-3 text-[#064e3b]" />
                            </div>
                            <span className="text-xs text-gray-600">Pigmentering</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="w-3 h-3 text-[#064e3b]" />
                            </div>
                            <span className="text-xs text-gray-600">Förstorade porer</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Behandlingstid & Rekommenderad kur */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-gray-900 mb-1">Behandlingstid</div>
                          <div className="text-sm text-gray-600">60 min</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-gray-900 mb-1">Rekommenderad kur</div>
                          <div className="text-sm text-gray-600">3-6 behandlingar<br/><span className="text-xs">(var 3-4 vecka)</span></div>
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/bio-pen-q2-microneedling-45-min-3228603"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-sm font-medium"
                    >
                      Boka Ansiktsbehandling
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                  
                  {/* Body Treatment Card */}
                  <div className="p-5">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#064e3b]/10 flex items-center justify-center mr-3">
                        <Star className="w-6 h-6 text-[#064e3b]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-900 text-lg">Bio Pen Q2 Body</h4>
                        <div className="text-sm font-medium text-[#064e3b]">1 495 kr</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-4">
                      {/* Microneedling */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-medium text-gray-900">Microneedling</div>
                          <div className="text-sm text-gray-600">0,5-1,5 mm djup</div>
                        </div>
                      </div>
                      
                      {/* EMS */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-medium text-gray-900">EMS Elektroporation</div>
                          <div className="text-sm text-gray-600">Nivå 3-4 (intensiv)</div>
                        </div>
                      </div>
                      
                      {/* LED */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-medium text-gray-900">LED-ljusterapi</div>
                          <div className="text-sm text-gray-600">Förbättrad penetration</div>
                        </div>
                      </div>
                      
                      {/* Fokusområden */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm font-medium text-gray-900 mb-2">Fokusområden</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-start gap-1">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="w-3 h-3 text-[#064e3b]" />
                            </div>
                            <span className="text-xs text-gray-600">Celluliter</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="w-3 h-3 text-[#064e3b]" />
                            </div>
                            <span className="text-xs text-gray-600">Hudbristningar</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="w-3 h-3 text-[#064e3b]" />
                            </div>
                            <span className="text-xs text-gray-600">Slapp hud på kroppen</span>
                          </div>
                          <div className="flex items-start gap-1">
                            <div className="flex-shrink-0 mt-1">
                              <Check className="w-3 h-3 text-[#064e3b]" />
                            </div>
                            <span className="text-xs text-gray-600">Ärr på kroppsområden</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Behandlingstid & Rekommenderad kur */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-gray-900 mb-1">Behandlingstid</div>
                          <div className="text-sm text-gray-600">60 min</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <div className="text-sm font-medium text-gray-900 mb-1">Rekommenderad kur</div>
                          <div className="text-sm text-gray-600">4-8 behandlingar<br/><span className="text-xs">(var 4 vecka)</span></div>
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/bio-pen-q2-advanced-microneedling-body-treatment-3237284"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-sm font-medium"
                    >
                      Boka Kroppsbehandling
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid sm:grid-cols-3 gap-8">
              <div className="flex items-center justify-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                <Shield className="w-8 h-8 text-[#064e3b]" />
                <div>
                  <p className="font-medium text-purple-900">100% Tryggt</p>
                  <p className="text-gray-600">CE-certifierad behandling</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                <Star className="w-8 h-8 text-[#064e3b]" />
                <div>
                  <p className="font-medium text-purple-900">5.0 Betyg</p>
                  <p className="text-gray-600">Från över 100+ kunder</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
                <Heart className="w-8 h-8 text-[#064e3b]" />
                <div>
                  <p className="font-medium text-purple-900">Nöjd Kund-Garanti</p>
                  <p className="text-gray-600">Din trygghet är viktig</p>
                </div>
              </div>
            </div>

            {/* Special Bundle Offer */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#064e3b]/10 to-purple-100/30 rounded-2xl overflow-hidden shadow-lg border border-[#064e3b]/20 p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-2/3">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#064e3b] text-white text-sm font-medium mb-4">
                      Specialerbjudande
                    </span>
                    <h3 className="text-2xl font-medium text-purple-900 mb-4">
                      Boka Behandlingspaket & Spara
                    </h3>
                    <p className="text-gray-600 mb-6">
                      För bästa resultat rekommenderar vi en serie behandlingar. Boka ett paket med tre behandlingar och få 20% rabatt. Gäller för både ansikts- och kroppsbehandlingar.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#064e3b] mt-0.5" />
                        <div>
                          <p className="font-medium text-purple-900">3 behandlingar: 20% rabatt</p>
                          <p className="text-sm text-gray-600">Spara upp till 897 kr</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/3-x-bio-pen-q2-microneedling-ansikte-elle-kropp-3238653"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-base font-medium"
                      >
                        Boka Paket <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                      <a
                        href="tel:+46737140860"
                        className="inline-flex items-center justify-center px-6 py-3 border border-[#064e3b] text-[#064e3b] rounded-lg hover:bg-[#064e3b]/5 transition-all duration-300 text-base font-medium"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Ring För Info
                      </a>
                    </div>
                  </div>
                  
                  <div className="md:w-1/3 relative">
                    <div className="bg-white rounded-xl p-6 shadow-lg transform rotate-3 relative z-10">
                      <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SPARA 20%
                      </div>
                      <h4 className="text-xl font-medium text-purple-900 mb-2">3x Bio Pen Q2 Treatments</h4>
                      <div className="flex items-center gap-2 mb-4">
                        <p className="text-2xl font-bold text-[#064e3b]">3588 kr</p>
                        <p className="text-lg text-gray-400 line-through">4485 kr</p>
                      </div>
                      <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-[#064e3b] mt-0.5" />
                          <span>3x 60 min behandlingar (ansikte eller kropp)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-[#064e3b] mt-0.5" />
                          <span>Gratis konsultation</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-[#064e3b] mt-0.5" />
                          <span>Personlig behandlingsplan</span>
                        </li>
                      </ul>
                      <a
                        href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/3-x-bio-pen-q2-microneedling-ansikte-elle-kropp-3238653"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300 text-sm font-medium"
                      >
                        Boka Paket
                      </a>
                    </div>
                    <div className="absolute top-3 left-3 w-full h-full bg-[#064e3b]/20 rounded-xl -z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Info Section */}
        <section ref={treatmentInfoRef} className="py-20 bg-gradient-to-b from-purple-100 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-purple-200/30"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Behandling</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Behandlingstid</p>
                      <p className="text-gray-600">60 minuter</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Komfortnivå</p>
                      <p className="text-gray-600">Mild till måttlig</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Säkerhet</p>
                      <p className="text-gray-600">CE-certifierad teknologi</p>
                    </div>
                  </div>
                </div>
              </Animation>

              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-purple-200/30"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Resultat</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Synligt resultat</p>
                      <p className="text-gray-600">Direkt med fortsatt förbättring</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Hållbarhet</p>
                      <p className="text-gray-600">Detta blir din nya utgångspunkt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Återhämtning</p>
                      <p className="text-gray-600">48-72 timmar</p>
                    </div>
                  </div>
                </div>
              </Animation>

              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-purple-200/30"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Rekommendation</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Antal behandlingar</p>
                      <p className="text-gray-600">Bedömning av antalet behandlingar görs vid första besöket på kliniken</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Intervall</p>
                      <p className="text-gray-600">4 veckor mellan behandlingar</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Underhåll</p>
                      <p className="text-gray-600">Var 3:e till 6:e månad</p>
                    </div>
                  </div>
                </div>
              </Animation>
            </div>
          </div>
        </section>

        {/* Treatment Benefits Section */}
        <section ref={treatmentAreasRef} className="py-20 bg-gradient-to-b from-purple-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                Behandlingsområden
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
                Behandla Specifika Hudproblem
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bio Pen Q2 microneedling är en mångsidig behandling som effektivt kan adressera 
                flera olika hudproblem. Här är några av de vanligaste problemen vi kan hjälpa dig med.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Fine Lines & Wrinkles */}
              <div id="fina-linjer" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-medium text-purple-900 mb-4">Fina Linjer & Rynkor</h3>
                <p className="text-gray-600 mb-6">
                  Microneedling stimulerar kollagenproduktionen i huden, vilket hjälper till att minska 
                  synligheten av fina linjer och rynkor. Behandlingen ger en naturlig föryngring och 
                  förbättrar hudens elasticitet och fasthet.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Stimulerar kollagenproduktion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Minskar synligheten av fina linjer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Förbättrar hudens elasticitet</span>
                  </li>
                </ul>
              </div>

              {/* Acne Scars & Other Scars */}
              <div id="arr" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-medium text-purple-900 mb-4">Acneärr & Andra Ärr</h3>
                <p className="text-gray-600 mb-6">
                  Microneedling är särskilt effektiv för att behandla acneärr och andra typer av ärr. 
                  Genom att skapa kontrollerade mikroskador i huden stimuleras hudens naturliga läkningsprocess, 
                  vilket bryter ner ärrvävnad och främjar ny, frisk hudvävnad.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Bryter ner ärrvävnad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Jämnar ut hudstrukturen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Minskar synligheten av ärr</span>
                  </li>
                </ul>
              </div>

              {/* Hyperpigmentation & Sun Damage */}
              <div id="pigmentering" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-medium text-purple-900 mb-4">Pigmentfläckar & Solskador</h3>
                <p className="text-gray-600 mb-6">
                  Microneedling kan effektivt behandla hyperpigmentering och solskador genom att 
                  främja cellförnyelse och bryta ner överflödigt pigment. Behandlingen hjälper till 
                  att jämna ut hudtonen och minska synligheten av mörka fläckar.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Jämnar ut hudtonen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Minskar pigmentfläckar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Främjar cellförnyelse</span>
                  </li>
                </ul>
              </div>

              {/* Large Pores */}
              <div id="porer" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-medium text-purple-900 mb-4">Förstorade Porer</h3>
                <p className="text-gray-600 mb-6">
                  Microneedling kan hjälpa till att minska synligheten av förstorade porer genom att 
                  stimulera kollagenproduktionen, vilket förbättrar hudens struktur och gör att porerna 
                  dras samman och blir mindre synliga.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Minskar synligheten av porer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Förbättrar hudens textur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Ger en jämnare hudstruktur</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                Kundrecensioner
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
                Vad Våra Kunder Säger
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Läs vad våra kunder säger om sina upplevelser med Bio Pen Q2 microneedling behandlingar.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <div className="bg-[#064e3b] text-white px-3 py-1 rounded-full text-sm font-medium">
                    ★★★★★
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#064e3b]">
                    <picture>
                      <source srcSet="/assets/images/avatars/microneedling-woman1-optimized.webp" type="image/webp" />
                      <OptimizedImage
                        src="/assets/images/avatars/microneedling-woman1-optimized.jpg"
                        alt="Kund: Emma Johansson"
                        className="w-full h-full object-cover"
                        width={64}
                        height={64}
                      />
                    </picture>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Efter att ha provat flera olika behandlingar för mina acneärr, är Bio Pen Q2 den enda som verkligen gett resultat. Min hud är nu jämnare och ärren mycket mindre synliga. Jag är så tacksam!"
                </p>
                <div>
                  <p className="font-medium text-purple-900">Emma Johansson</p>
                  <p className="text-sm text-gray-500">Bio Pen Q2 Advanced Body Treatment, 6 behandlingar</p>
                </div>
              </Animation>

              {/* Testimonial 2 */}
              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <div className="bg-[#064e3b] text-white px-3 py-1 rounded-full text-sm font-medium">
                    ★★★★★
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#064e3b]">
                    <picture>
                      <source srcSet="/assets/images/avatars/microneedling-man1-optimized.webp" type="image/webp" />
                      <OptimizedImage
                        src="/assets/images/avatars/microneedling-man1-optimized.jpg"
                        alt="Kund: Anders Lindberg"
                        className="w-full h-full object-cover"
                        width={64}
                        height={64}
                      />
                    </picture>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Jag var skeptisk till en början, men efter bara 3 behandlingar med Bio Pen Q2 ser jag redan en märkbar skillnad i min huds textur och lyster. Personalen är professionell och behandlingen är nästan smärtfri."
                </p>
                <div>
                  <p className="font-medium text-purple-900">Anders Lindberg</p>
                  <p className="text-sm text-gray-500">Bio Pen Q2 Facial Treatment, 3 behandlingar</p>
                </div>
              </Animation>

              {/* Testimonial 3 */}
              <Animation
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <div className="bg-[#064e3b] text-white px-3 py-1 rounded-full text-sm font-medium">
                    ★★★★★
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#064e3b]">
                    <picture>
                      <source srcSet="/assets/images/avatars/microneedling-woman2-new-optimized.webp" type="image/webp" />
                      <OptimizedImage
                        src="/assets/images/avatars/microneedling-woman2-new-optimized.jpg"
                        alt="Kund: Maria Svensson"
                        className="w-full h-full object-cover"
                        width={64}
                        height={64}
                      />
                    </picture>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Vid 45 års ålder började jag se fina linjer och rynkor. Efter en serie behandlingar ser min hud yngre och fräschare ut. Jag får ofta komplimanger för min hud nu!"
                </p>
                <div>
                  <p className="font-medium text-purple-900">Maria Svensson</p>
                  <p className="text-sm text-gray-500">Bio Pen Q2 Advanced Body Treatment, 5 behandlingar</p>
                </div>
              </Animation>
            </div>

            <div className="mt-12 text-center">
              <div className="relative overflow-hidden bg-gradient-to-r from-purple-100/70 via-white to-green-50/70 p-10 rounded-xl shadow-lg border border-purple-200/30 hover:shadow-xl transition-all duration-500">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full transform translate-x-8 -translate-y-8 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-200/20 rounded-full transform -translate-x-6 translate-y-6 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/50 rounded-full opacity-20 blur-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium text-purple-900 mb-4">Upplev BIO PEN Q2 teknologin</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    Upptäck nästa generations microneedling som kombinerar tre kraftfulla teknologier 
                    för att ge din hud en naturlig och långvarig föryngring.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-600">Kliniskt beprövad</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-600">CE-certifierad teknik</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-600">Expertbehandlingar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                Vanliga Frågor
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
                Allt Du Behöver Veta
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Här hittar du svar på de vanligaste frågorna om Bio Pen Q2 Microneedling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-medium text-purple-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-b from-purple-50 to-purple-100">
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
                  Redo att Förbättra Din Hud?
                </h2>
                
                <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                  Boka en kostnadsfri konsultation för att diskutera hur Bio Pen Q2 kan hjälpa dig uppnå dina hudvårdsmål.
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

                {/* Trust Indicators */}
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
                              alt={`Nöjd kund ${i}`}
                              className="w-full h-full object-cover"
                              width={40}
                              height={40}
                            />
                          </picture>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-white/90">
                      Gå med över 100+ nöjda kunder som redan har börjat sin resa mot föryngrad hud
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Microneedling; 

