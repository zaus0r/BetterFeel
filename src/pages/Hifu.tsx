import React, { useRef, useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Phone, 
  Star,
  CalendarDays,
  Shield,
  Sparkles,
  Clock,
  Heart,
  Check,
  Activity,
  Timer,
  Repeat,
  Sun,
  Quote,
  ZoomIn
} from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceSEO from '../components/common/ServiceSEO';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import ServiceSchema from '../components/common/ServiceSchema';
import OptimizedImage from '../components/common/OptimizedImage';
import FAQSchema from '../components/common/FAQSchema';
import AppointmentSchema from '../components/common/AppointmentSchema';
import TreatmentSchema from '../components/common/TreatmentSchema';
import ReviewSchema from '../components/common/ReviewSchema';

interface Treatment {
  title: string;
  duration: string;
  areas: string[];
  benefits: string[];
  price: string;
  sessions: string;
  bookingUrl: string;
  description: string;
  suitableFor: string[];
  technology: {
    name: string;
    description: string;
    mechanism: string;
    cartridges: string[];
    depths: string[];
    recovery: string;
  };
  aftercare: string[];
  results: string[];
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
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/hifu-45-min-glow-touch-forfining-uppstramning-3189638",
    description: "Glow Touch är vår populära introduktionsbehandling som ger en omedelbar förbättring av hudens elasticitet och lyster. Perfekt för dig som vill motverka första tecken på åldrande eller för specifika problemområden.",
    suitableFor: [
      "Första tecken på åldrande",
      "Lätt hudfaskhet",
      "Fina linjer och rynkor",
      "Specificika problemområden som behöver behandlas"
    ],
    technology: {
      name: "Laxus 8D HIFU",
      description: "Använder precisionsinriktad ultraljudsteknologi som stimulerar kollagenproduktion på djupet utan att skada hudytan.",
      mechanism: "Fokuserat ultraljud",
      cartridges: ["1.5mm", "3.0mm", "4.5mm"],
      depths: ["SMAS-nivå (muskelfascian)", "Dermis (mellersta hudlagret)", "Yttre hudlager"],
      recovery: "Ingen återhämtningstid"
    },
    aftercare: [
      "Använd hög SPF (50+) dagligen i 2 veckor efter behandlingen",
      "Undvik extremt varma miljöer (bastu, ångbad) 48h efter behandlingen",
      "Återfukta huden noggrant under första veckan",
      "Undvik starka hudvårdsprodukter 2-3 dagar efter behandlingen"
    ],
    results: [
      "Omedelbar uppstramningseffekt som synlig direkt efter behandlingen",
      "Gradvis förbättring under 4-12 veckor",
      "Optimal effekt efter 3 månader",
      "Skapar en ny utgångspunkt för hudens åldrande som varar långsiktigt"
    ]
  },
  {
    title: "Supreme Sculpt – Kroppsformning & Lyft",
    duration: "70 minuter",
    areas: [
      "Ansikte (lyft)",
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
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/hifu-70-min-supreme-sculpt-kroppsformning-lyft-3189639",
    description: "Supreme Sculpt är vår kraftfulla kroppsformningsbehandling, specifikt utvecklad för områden som behöver extra hjälp med uppstramning och konturering. Idealisk för både ansikte och kropp.",
    suitableFor: [
      "Medelsvår till svår hudslapphet",
      "Synliga rynkor och linjer",
      "Områden med celluliter",
      "Dubbelhaka och slapp hals",
      "Överskottshud på armar och mage"
    ],
    technology: {
      name: "Laxus 8D HIFU",
      description: "Omfattande behandling med avancerade ultraljudskartridger som ger en djupgående effekt på flera nivåer i huden och vävnaden.",
      mechanism: "Multi-djup fokuserat ultraljud",
      cartridges: ["1.5mm", "3.0mm", "4.5mm", "8.0mm", "13.0mm"],
      depths: ["SMAS-nivå (muskelfascian)", "Dermis (mellersta hudlagret)", "Yttre hudlager", "Djupare vävnad (kropp)"],
      recovery: "Minimal återhämtningstid, 24-48 timmar med möjlig lätt rodnad"
    },
    aftercare: [
      "Använd hög SPF (50+) dagligen i 2 veckor efter behandlingen",
      "Undvik intensiv fysisk aktivitet 24-48 timmar efter behandling",
      "Drick mycket vatten de första 48 timmarna",
      "Använd fuktgivande produkter på behandlade områden",
      "Undvik starka hudvårdsprodukter 3-4 dagar efter behandlingen"
    ],
    results: [
      "Första synliga resultat efter 2-4 veckor",
      "Gradvis förbättring under 4-12 veckor",
      "Optimal effekt efter 3 månader",
      "Skapar en ny utgångspunkt för hudens åldrande som varar långsiktigt"
    ]
  },
  {
    title: "Ultimate Harmony – Helhet & Total Transformation",
    duration: "100 minuter",
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
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/hifu-100-min-ultimate-harmony-helhet-total-transformation-3189640",
    description: "Ultimate Harmony är vår mest omfattande behandling, utvecklad för dig som önskar en total transformation. Denna premiumbehandling kombinerar alla fördelar med HIFU-teknologin för både ansikte och kropp.",
    suitableFor: [
      "Kombinerade ålderstecken i ansikte och på kropp",
      "Omfattande hudslapphet",
      "Generell kroppskonturering",
      "Multipla problemområden som behöver behandlas samtidigt",
      "Förebyggande och upprätthållande hudvård"
    ],
    technology: {
      name: "Laxus 8D HIFU Premium",
      description: "Den mest avancerade HIFU-behandlingen som kombinerar alla tillgängliga kartridger för en komplett behandling av både ansikte och kropp.",
      mechanism: "Multi-djup och multi-fokuserat ultraljud",
      cartridges: ["1.5mm", "3.0mm", "4.5mm", "8.0mm", "13.0mm"],
      depths: ["SMAS-nivå (muskelfascian)", "Dermis (mellersta hudlagret)", "Yttre hudlager", "Djupare vävnad (kropp)"],
      recovery: "48-72 timmar med möjlig lätt rodnad och känslighet"
    },
    aftercare: [
      "Använd hög SPF (50+) dagligen i 2-3 veckor efter behandlingen",
      "Undvik intensiv fysisk aktivitet 48-72 timmar efter behandling",
      "Drick mycket vatten de första 72 timmarna",
      "Följ din personliga eftervårdsplan",
      "Återfuktande och lugnande produkter rekommenderas",
      "Uppföljning och utvärdering efter 4 veckor ingår"
    ],
    results: [
      "Första synliga resultat efter 2-4 veckor",
      "Gradvis förbättring under 4-16 veckor",
      "Optimal effekt efter 3-4 månader",
      "Skapar en ny utgångspunkt för hudens åldrande som varar långsiktigt",
      "Långvarig kollagenstimulering"
    ]
  }
];

const Hifu = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const [openTabs, setOpenTabs] = useState<number[]>([0]);
  const [selectedTreatment, setSelectedTreatment] = useState<number | null>(0);

  const toggleTab = (index: number) => {
    if (window.innerWidth < 768) {
      setOpenTabs(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setSelectedTreatment(selectedTreatment === index ? null : index);
    }
  };

  useEffect(() => {
    console.log('HiFU component mounted');
    
    setTimeout(() => {
      console.log('HiFU DOM after render:');
      
      const heroSection = document.querySelector('section');
      if (heroSection) {
        console.log('Found hero section:', heroSection);
        
        const consultationButtons = heroSection.querySelectorAll('a');
        console.log(`Found ${consultationButtons.length} links in hero section`);
        
        consultationButtons.forEach((btn, i) => {
          console.log(`Button ${i+1}:`, btn.textContent, btn.href);
        });
      } else {
        console.log('Could not find hero section');
      }
    }, 1000);
    
    return () => {
      console.log('HiFU component unmounted');
    };
  }, []);

  const scrollToContent = () => {
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
      answer: "HIFU-behandlingen skapar en ny utgångspunkt för hudens åldrande. Behandlingen ger en långvarig föryngring där resultatet inte 'försvinner', utan din hud fortsätter åldras från en ny, yngre utgångspunkt."
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
      <ServiceSchema
        name="HIFU Behandling"
        description="Upptäck kraften i HIFU-behandling - en revolutionerande metod för hudföryngring och uppstramning utan kirurgi. Kliniskt bevisad effekt med över 10 års dokumentation."
        image="/assets/images/treatments/hifu/hero.jpg"
        url="https://betterfeel.se/hifu"
        provider="BetterFeel"
        areaServed="Stockholm"
        price="1495"
        priceCurrency="SEK"
      />
      <ServiceSEO
        title="HIFU Behandling | Naturlig Hudföryngring | BetterFeel Vasastan"
        description="Upplev kraften i HIFU-behandling hos BetterFeel i Vasastan, Stockholm. FDA-godkänd teknologi för naturlig hudföryngring och uppstramning utan kirurgi. Från 1495 kr. Boka din kostnadsfria konsultation idag!"
        keywords="hifu, hudföryngring, ultraljud, ansiktsbehandling, kroppsbehandling, Stockholm, Vasastan, rynkbehandling, uppstramning"
        url="https://betterfeel.se/hifu"
        serviceName="HIFU Behandling"
        servicePrice="från 1495 kr"
        preloadImages={[
          '/assets/images/treatments/hifu/hero.webp',
          '/assets/images/treatments/hifu/hifu-treatment-preview.webp'
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Behandlingar", item: "/behandlingar" },
          { name: "HIFU", item: "/hifu" }
        ]}
      />
      <FAQSchema questions={faqs} />
      <AppointmentSchema
        serviceName="HIFU Behandling"
        serviceUrl="https://betterfeel.se/hifu"
        businessName="BetterFeel"
        businessUrl="https://betterfeel.se"
        description="Boka tid för HIFU behandling hos BetterFeel i Vasastan, Stockholm. FDA-godkänd teknologi för naturlig hudföryngring och uppstramning utan kirurgi."
        areaServed="Vasastan, Stockholm"
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/hifu-45-min-glow-touch-forfining-uppstramning-3189638"
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
        name="Glow Touch – Förfining & Uppstramning"
        description="En introduktionsbehandling med HIFU som ger en omedelbar förbättring av hudens elasticitet och lyster. Perfekt för dig som vill motverka första tecken på åldrande eller för specifika problemområden."
        url="https://betterfeel.se/hifu"
        image="/assets/images/treatments/hifu/hero.jpg"
        provider="BetterFeel"
        providerUrl="https://betterfeel.se"
        price="1495"
        priceCurrency="SEK"
        duration="PT45M"
        treatmentCategory="CosmeticProcedure"
        suitableFor={["Första tecken på åldrande", "Lätt hudfaskhet", "Fina linjer och rynkor", "Specifika problemområden"]}
        benefitsDescription="Omfattande hudåtstramning, definierad käklinje, naturligt resultat, förbättrad hudkvalitet"
        aftercare={["Använd hög SPF (50+) dagligen i 2 veckor", "Undvik extremt varma miljöer 48h", "Återfukta huden noggrant", "Undvik starka hudvårdsprodukter 2-3 dagar"]}
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/hifu-45-min-glow-touch-forfining-uppstramning-3189638"
      />
      <TreatmentSchema
        name="Supreme Sculpt – Kroppsformning & Lyft"
        description="En kraftfull kroppsformningsbehandling med HIFU, specifikt utvecklad för områden som behöver extra hjälp med uppstramning och konturering. Idealisk för både ansikte och kropp."
        url="https://betterfeel.se/hifu"
        image="/assets/images/treatments/hifu/hero.jpg"
        provider="BetterFeel"
        providerUrl="https://betterfeel.se"
        price="2350"
        priceCurrency="SEK"
        duration="PT1H10M"
        treatmentCategory="CosmeticProcedure"
        suitableFor={["Medelsvår till svår hudslapphet", "Synliga rynkor och linjer", "Områden med celluliter", "Dubbelhaka och slapp hals", "Överskottshud på armar och mage"]}
        benefitsDescription="Effektiv kroppskonturering, synlig uppstramning, långvariga resultat, minimal återhämtningstid"
        aftercare={["Använd hög SPF (50+) dagligen i 2 veckor", "Undvik intensiv fysisk aktivitet 24-48 timmar", "Drick mycket vatten de första 48 timmarna", "Använd fuktgivande produkter på behandlade områden"]}
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/hifu-70-min-supreme-sculpt-kroppsformning-lyft-3189639"
      />
      <TreatmentSchema
        name="Ultimate Harmony – Helhet & Total Transformation"
        description="Den mest omfattande HIFU-behandlingen, utvecklad för dig som önskar en total transformation. Denna premiumbehandling kombinerar alla fördelar med HIFU-teknologin för både ansikte och kropp."
        url="https://betterfeel.se/hifu"
        image="/assets/images/treatments/hifu/hero.jpg"
        provider="BetterFeel"
        providerUrl="https://betterfeel.se"
        price="4750"
        priceCurrency="SEK"
        duration="PT1H40M"
        treatmentCategory="CosmeticProcedure"
        suitableFor={["Kombinerade ålderstecken i ansikte och på kropp", "Omfattande hudslapphet", "Generell kroppskonturering", "Multipla problemområden"]}
        benefitsDescription="Komplett kroppsföryngring, omfattande hudåtstramning, helhetslösning, optimala resultat"
        aftercare={["Använd hög SPF (50+) dagligen i 2-3 veckor", "Undvik intensiv fysisk aktivitet 48-72 timmar", "Drick mycket vatten de första 72 timmarna", "Använd fuktgivande produkter på behandlade områden"]}
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/hifu-100-min-ultimate-harmony-helhet-total-transformation-3189640"
      />
      <ReviewSchema
        reviews={[
          {
            name: "Maria Andersson",
            date: "2025-01-05",
            text: "Jag är så nöjd med min HIFU-behandling! Resultatet överträffade verkligen mina förväntningar. Min hud känns fastare och ser mycket yngre ut. Personalen var professionell och tog väl hand om mig under hela processen.",
            rating: 5
          },
          {
            name: "Elsa Lindström",
            date: "2024-11-12",
            text: "Supreme Sculpt behandlingen gav fantastiska resultat på min dubbelhaka. Efter bara en behandling ser jag en märkbar skillnad. Förbättringen fortsätter och jag är mycket nöjd med hur min käklinje ser ut nu.",
            rating: 5
          },
          {
            name: "Henrik Johansson",
            date: "2024-10-18",
            text: "Som man var jag lite osäker på att testa HIFU, men jag är så glad att jag gjorde det. Behandlingen var effektiv för min käklinje och hals, och resultatet ser mycket naturligt ut. Kommer definitivt att återvända för fler behandlingar.",
            rating: 5
          },
          {
            name: "Amanda Karlsson",
            date: "2024-12-02",
            text: "Ultimate Harmony behandlingen var en fantastisk upplevelse! Personalen var kunnig och professionell, och resultaten efter 3 månader är otroliga. Min hud är fastare, rynkorna är mindre synliga, och jag känner mig så mycket självsäkrare.",
            rating: 5
          },
          {
            name: "Peter Bergman",
            date: "2024-09-30",
            text: "Testade Glow Touch behandlingen för första gångna. Är imponerad över både professionalism och resultat. Känner redan efter första behandlingen att huden är stramare och har bättre lyster. Rekommenderas!",
            rating: 5
          }
        ]}
        itemReviewed={{
          name: "HIFU Behandling",
          description: "FDA-godkänd HIFU-behandling för naturlig hudföryngring och uppstramning utan kirurgi.",
          image: "/assets/images/treatments/hifu/hero.jpg"
        }}
      />
      <main className="min-h-screen">
        {/* Hero Section - Enhanced for Conversion */}
        <section className="relative flex items-center min-h-screen py-8">
          <div className="absolute inset-0 z-0">
            <picture>
              <source
                srcSet="/assets/images/treatments/hifu/hero.webp"
                type="image/webp"
              />
              <OptimizedImage
                src="/assets/images/treatments/hifu/hero.jpg"
                alt="HIFU Behandling - Modern hudföryngring med ultraljud"
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
                  FDA-GODKÄND TEKNOLOGI
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6"
              >
                Naturlig Hudföryngring<br />
                <span className="text-[#10b981]">utan Kirurgi</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl"
              >
                Upplev kraften i modern HIFU-teknologi. Kliniskt bevisad effekt 
                med över 10 års dokumentation för naturlig hudföryngring.
              </motion.p>

              {/* Consultation Button Section */}
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
                            alt={`Nöjd HIFU Kund ${i}`}
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
                      Över 100+ nöjda HIFU-kunder senaste året
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
                  "HIFU-Teknologi",
                  "Hudföryngring",
                  "Ansiktslyft",
                  "Kroppskonturering",
                  "Kollagenstimulering"
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
                <div className="bg-white/90 rounded-xl p-6 shadow-sm">
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
                <div className="bg-white/90 rounded-xl p-6 shadow-sm">
                  <Shield className="w-8 h-8 text-[#064e3b] mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-purple-900">FDA-Godkänd</h3>
                  <p className="text-gray-600">Säker teknologi</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-white/90 rounded-xl p-6 shadow-sm">
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
                <div className="bg-white/90 rounded-xl p-6 shadow-sm">
                  <Heart className="w-8 h-8 text-[#064e3b] mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-purple-900">100% Nöjd</h3>
                  <p className="text-gray-600">Kundgaranti</p>
                  </div>
              </motion.div>
                  </div>
                  </div>
        </section>

        {/* What is HIFU Section */}
        <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-[1.5fr,1fr] gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl"
              >
                <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">Vad är HIFU?</h2>
                <div className="prose prose-lg prose-purple">
                  <p className="text-gray-700 mb-6">
                    HIFU (High-Intensity Focused Ultrasound) är en revolutionerande, icke-kirurgisk 
                    behandlingsmetod som använder fokuserat ultraljud för hudföryngring och uppstramning. 
                    Teknologin är FDA-godkänd och har över 10 års klinisk dokumentation.
                  </p>
                  <p className="text-gray-700">
                    Behandlingen fungerar genom att leverera koncentrerad ultraljudsenergi till specifika 
                    djup i huden, vilket stimulerar naturlig kollagenproduktion och ger en uppstramande effekt 
                    utan att skada hudens ytskikt.
                    </p>
                  </div>

                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                  <div className="bg-purple-50/50 rounded-xl p-6">
                    <Shield className="w-8 h-8 text-[#064e3b] mb-4" />
                    <h3 className="text-xl font-medium text-purple-900 mb-2">Kliniskt Bevisad</h3>
                    <p className="text-gray-600">FDA-godkänd teknologi med dokumenterad effekt</p>
                  </div>
                  <div className="bg-purple-50/50 rounded-xl p-6">
                    <Heart className="w-8 h-8 text-[#064e3b] mb-4" />
                    <h3 className="text-xl font-medium text-purple-900 mb-2">Naturliga Resultat</h3>
                    <p className="text-gray-600">Synliga resultat som utvecklas gradvis</p>
                  </div>
                </div>

                {/* Featured Quote */}
                <div className="mt-8 bg-purple-50/50 rounded-xl p-6">
                  <Quote className="w-8 h-8 text-[#064e3b] mb-4" />
                  <blockquote className="text-lg text-gray-700 italic">
                    "HIFU är en av de mest effektiva icke-kirurgiska metoderna för hudföryngring som finns tillgängliga idag."
                  </blockquote>
                  <p className="mt-4 text-sm text-gray-600">- Dr. Sarah Johnson, Dermatolog</p>
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
                    srcSet="/assets/images/treatments/hifu/hifu-treatment-preview.webp"
                    type="image/webp"
                  />
                  <OptimizedImage
                    src="/assets/images/treatments/hifu/hifu-treatment-preview.jpg"
                    alt="HIFU Behandlingsutrustning - Modern teknologi för optimal behandling"
                    className="w-full h-full"
                    objectFit="cover"
                    objectPosition="center"
                    quality={85}
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-medium mb-2">Modern HIFU-teknologi</h3>
                  <p className="text-lg opacity-90">Avancerad behandling för optimala resultat</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Packages Section */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                Skräddarsydda Behandlingar
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
                Välj Din Perfekta HIFU-behandling
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Vi erbjuder specialanpassade HIFU-behandlingar för att möta dina specifika behov. 
                Varje paket inkluderar kostnadsfri konsultation.
              </p>
            </div>

            {/* Treatment Tabs for Improved Layout */}
            <div className="mb-12">
              {/* Desktop layout - tabs at top, content below */}
              <div className="hidden md:grid md:grid-cols-3 gap-4">
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
                        <h3 className="text-2xl font-medium">{treatment.title.split('–')[0].trim()}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <p className={selectedTreatment === index ? 'text-white/80' : 'text-gray-600'}>
                            {treatment.price}
                          </p>
                        </div>
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
                          <h3 className="text-2xl font-medium">{treatment.title.split('–')[0].trim()}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <p className={openTabs.includes(index) ? 'text-white/80' : 'text-gray-600'}>
                              {treatment.price}
                            </p>
                          </div>
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
                        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl p-8">
                          <div className="grid md:grid-cols-[1fr,2fr] gap-8">
                            {/* Treatment content (same as original) */}
                            {/* Left Column - Visual Information */}
                            <div className="space-y-6">
                              {/* Treatment Tag and Duration */}
                              <div className="flex flex-col space-y-4">
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#064e3b]/10 text-[#064e3b] text-sm font-medium self-start">
                                  HIFU Behandling
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-5 h-5 text-[#064e3b]" />
                                  <span className="text-gray-700">{treatment.duration}</span>
                                </div>
                              </div>
                              
                              {/* Treatment Visualization */}
                              <div className="bg-purple-50/50 p-6 rounded-xl">
                                <p className="font-medium text-purple-900 mb-4">Huvudfördelar</p>
                                <ul className="space-y-3">
                                  {treatment.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                      <CheckCircle2 className="w-5 h-5 text-[#064e3b] mt-0.5 flex-shrink-0" />
                                      <span>{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              {/* Technology Info */}
                              <div className="bg-purple-50/50 rounded-xl p-4">
                                <p className="font-medium text-purple-900 mb-2">Teknologi:</p>
                                <div className="space-y-2 text-sm text-gray-600">
                                  <div className="flex items-start gap-2">
                                    <Shield className="w-4 h-4 text-[#064e3b] mt-0.5" />
                                    <p>{treatment.technology.name}</p>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <ZoomIn className="w-4 h-4 text-[#064e3b] mt-0.5" />
                                    <p>Behandlingsdjup: {treatment.technology.cartridges.join(', ')}</p>
                                  </div>
                                  <div className="flex items-start gap-2">
                                    <Activity className="w-4 h-4 text-[#064e3b] mt-0.5" />
                                    <p>Återhämtning: {treatment.technology.recovery}</p>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Sessions Info */}
                              <div className="space-y-4">
                                <motion.a
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  href={treatment.bookingUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#064e3b] hover:bg-[#043927] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                                >
                                  Boka {treatment.title.split('–')[0].trim()}
                                  <ArrowRight className="ml-2 h-5 w-5" />
                                </motion.a>
                              </div>
                            </div>
                            
                            {/* Right Column - Treatment Details */}
                            <div className="space-y-8">
                              <div>
                    <h3 className="text-2xl font-medium text-purple-900 mb-4">{treatment.title}</h3>
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="text-xl font-bold text-[#064e3b]">{treatment.price}</div>
                                  <div className="text-sm text-gray-500 px-3 py-1 bg-purple-50 rounded-full">
                                    {treatment.duration}
                                  </div>
                                </div>
                                <p className="text-gray-700 mb-6">
                                  {treatment.description}
                                </p>
                    </div>
                    
                              <div className="grid md:grid-cols-2 gap-6">
                                {/* Treatment Areas */}
                                <div>
                                  <p className="font-medium text-purple-900 mb-3">Behandlingsområden:</p>
                      <ul className="space-y-2">
                        {treatment.areas.map((area, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-600">
                                        <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                        <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                                {/* Suitable For */}
                                <div>
                                  <p className="font-medium text-purple-900 mb-3">Passar för:</p>
                      <ul className="space-y-2">
                                    {treatment.suitableFor.map((item, i) => (
                                      <li key={i} className="flex items-start gap-2 text-gray-600">
                                        <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              {/* Technology Description */}
                              <div>
                                <p className="font-medium text-purple-900 mb-3">Teknologi:</p>
                                <p className="text-gray-700 mb-4">{treatment.technology.description}</p>
                                
                                <div className="bg-purple-50/50 p-4 rounded-xl">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Shield className="w-5 h-5 text-[#064e3b]" />
                                    <p className="font-medium text-purple-900">Laxus 8D HIFU-teknologi</p>
                                  </div>
                                  <p className="text-gray-700 text-sm">Behandlar specifikt SMAS-lagret (muskel-aponeurotiska systemet) för ett resultat som liknar kirurgiskt lyft, men utan invasiva ingrepp eller återhämtningstid.</p>
                                </div>
                              </div>
                              
                              {/* Results */}
                              <div>
                                <p className="font-medium text-purple-900 mb-3">Förväntade resultat:</p>
                                <ul className="space-y-2">
                                  {treatment.results.map((result, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                      <CheckCircle2 className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                      <span>{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              {/* Aftercare */}
                              <div>
                                <p className="font-medium text-purple-900 mb-3">Eftervård:</p>
                                <ul className="space-y-2">
                                  {treatment.aftercare.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                      <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                      <span>{item}</span>
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
            </div>

            {/* Expanded Treatment Details - Desktop Only */}
            <div className="hidden md:block relative min-h-[1100px]">
              <div className="absolute inset-0">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={`content-desktop-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: selectedTreatment === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 ${selectedTreatment === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
                  >
                    {selectedTreatment === index && (
                      <div className="bg-white rounded-2xl overflow-hidden shadow-2xl p-8">
                        <div className="grid md:grid-cols-[1fr,2fr] gap-8">
                          {/* Left Column - Visual Information */}
                          <div className="space-y-6">
                            {/* Treatment Tag and Duration */}
                            <div className="flex flex-col space-y-4">
                              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#064e3b]/10 text-[#064e3b] text-sm font-medium self-start">
                                HIFU Behandling
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-5 h-5 text-[#064e3b]" />
                                <span className="text-gray-700">{treatment.duration}</span>
                              </div>
                            </div>
                            
                            {/* Treatment Visualization */}
                            <div className="bg-purple-50/50 p-6 rounded-xl">
                              <p className="font-medium text-purple-900 mb-4">Huvudfördelar</p>
                              <ul className="space-y-3">
                        {treatment.benefits.map((benefit, i) => (
                                  <li key={i} className="flex items-start gap-2 text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-[#064e3b] mt-0.5 flex-shrink-0" />
                                    <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                            {/* Technology Info */}
                            <div className="bg-purple-50/50 rounded-xl p-4">
                              <p className="font-medium text-purple-900 mb-2">Teknologi:</p>
                              <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-start gap-2">
                                  <Shield className="w-4 h-4 text-[#064e3b] mt-0.5" />
                                  <p>{treatment.technology.name}</p>
                          </div>
                                <div className="flex items-start gap-2">
                                  <ZoomIn className="w-4 h-4 text-[#064e3b] mt-0.5" />
                                  <p>Behandlingsdjup: {treatment.technology.cartridges.join(', ')}</p>
                        </div>
                                <div className="flex items-start gap-2">
                                  <Activity className="w-4 h-4 text-[#064e3b] mt-0.5" />
                                  <p>Återhämtning: {treatment.technology.recovery}</p>
                      </div>
                              </div>
                            </div>
                            
                            {/* Sessions Info */}
                            <div className="space-y-4">
                              <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                        href={treatment.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#064e3b] hover:bg-[#043927] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                      >
                        Boka {treatment.title.split('–')[0].trim()}
                        <ArrowRight className="ml-2 h-5 w-5" />
                              </motion.a>
                    </div>
                          </div>
                          
                          {/* Right Column - Treatment Details */}
                          <div className="space-y-8">
                            <div>
                              <h3 className="text-2xl font-medium text-purple-900 mb-4">{treatment.title}</h3>
                              <div className="flex items-center gap-3 mb-6">
                                <div className="text-xl font-bold text-[#064e3b]">{treatment.price}</div>
                                <div className="text-sm text-gray-500 px-3 py-1 bg-purple-50 rounded-full">
                                  {treatment.duration}
                                </div>
                              </div>
                              <p className="text-gray-700 mb-6">
                                {treatment.description}
                              </p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                              {/* Treatment Areas */}
                              <div>
                                <p className="font-medium text-purple-900 mb-3">Behandlingsområden:</p>
                                <ul className="space-y-2">
                                  {treatment.areas.map((area, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                      <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                      <span>{area}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Suitable For */}
                              <div>
                                <p className="font-medium text-purple-900 mb-3">Passar för:</p>
                                <ul className="space-y-2">
                                  {treatment.suitableFor.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                      <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Technology Description */}
                            <div>
                              <p className="font-medium text-purple-900 mb-3">Teknologi:</p>
                              <p className="text-gray-700 mb-4">{treatment.technology.description}</p>
                              
                              <div className="bg-purple-50/50 p-4 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                  <Shield className="w-5 h-5 text-[#064e3b]" />
                                  <p className="font-medium text-purple-900">Laxus 8D HIFU-teknologi</p>
                                </div>
                                <p className="text-gray-700 text-sm">Behandlar specifikt SMAS-lagret (muskel-aponeurotiska systemet) för ett resultat som liknar kirurgiskt lyft, men utan invasiva ingrepp eller återhämtningstid.</p>
                              </div>
                            </div>
                            
                            {/* Results */}
                            <div>
                              <p className="font-medium text-purple-900 mb-3">Förväntade resultat:</p>
                              <ul className="space-y-2">
                                {treatment.results.map((result, i) => (
                                  <li key={i} className="flex items-start gap-2 text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                    <span>{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Aftercare */}
                            <div>
                              <p className="font-medium text-purple-900 mb-3">Eftervård:</p>
                              <ul className="space-y-2">
                                {treatment.aftercare.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-gray-600">
                                    <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
                </div>
            </div>
          </div>
        </section>


        {/* Featured Testimonial Section */}
        <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#064e3b]/10 rounded-full"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <Quote className="w-12 h-12 text-[#064e3b] mb-6" />
                  <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
                    "Jag är så nöjd med min HIFU-behandling! Resultatet överträffade verkligen mina förväntningar. 
                    Min hud känns fastare och ser mycket yngre ut. Personalen var professionell och tog väl hand om mig 
                    under hela processen."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <picture>
                        <source 
                          srcSet="/assets/images/avatars/maria-andersson.webp" 
                          type="image/webp" 
                        />
                        <OptimizedImage
                          src="/assets/images/avatars/maria-andersson.jpg"
                          alt="Maria Andersson"
                          className="w-full h-full object-cover"
                          width={48}
                          height={48}
                        />
                      </picture>
                    </div>
                    <div>
                      <p className="font-medium text-purple-900">Maria Andersson</p>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                  Kundupplevelser
                </span>
                <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
                  Vad Våra Kunder Säger
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Vi är stolta över att ha hjälpt hundratals kunder att uppnå sina önskade resultat. 
                  Vårt engagemang för kvalitet och kundnöjdhet återspeglas i våra 5-stjärniga recensioner.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#064e3b]" />
                    <span className="text-gray-700">Över 100 nöjda HIFU-kunder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#064e3b]" />
                    <span className="text-gray-700">5.0 genomsnittligt betyg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#064e3b]" />
                    <span className="text-gray-700">98% rekommenderar oss</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg text-center"
            >
              <picture>
                <source srcSet="/assets/branding/logos/BetterFeel_Stamp_optimized.webp" type="image/webp" />
                <img
                  src="/assets/branding/logos/BetterFeel_Stamp_optimized.png"
                  alt="FDA-Godkänd Stämpel"
                  className="w-16 h-16 mx-auto mb-4"
                  width={64}
                  height={64}
                />
              </picture>
              <h2 className="text-2xl font-medium text-purple-900 mb-4">FDA-Godkänd HIFU Behandling i Stockholm</h2>
              <p className="text-gray-700">
                Vår HIFU-behandling är FDA-godkänd och CE-certifierad. Vi använder endast den senaste
                teknologin och följer strikta säkerhetsprotokoll för att garantera bästa möjliga resultat.
              </p>
            </motion.div>
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
                    "Kostnadsfri konsultation",
                    "Hudanalys och behandlingsplan",
                    "Förberedande hudvård"
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
                      <p className="text-gray-600">45-90 minuter</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Komfortnivå</p>
                      <p className="text-gray-600">Minimal värmekänsla</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Säkerhet</p>
                      <p className="text-gray-600">FDA-godkänd teknologi</p>
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
                    "Återfuktande kräm",
                    "SPF 50 solskydd",
                    "Undvik intensiv värme 48h",
                    "Återbesök vid behov"
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
                Resultatutveckling
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
                Din Väg till Föryngring
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Följ din kropps naturliga föryngringsprocess och se hur resultaten utvecklas över tid.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg"
              >
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Resultatutveckling</h3>
                <div className="space-y-6">
                  {[
                    { day: "Direkt efter", desc: "Lätt rodnad och minimal svullnad" },
                    { day: "Dag 1-3", desc: "Återgång till normal hudton" },
                    { day: "Vecka 1-2", desc: "Första synliga förbättringar" },
                    { day: "Månad 1-2", desc: "Tydlig huduppstramning" },
                    { day: "Månad 2-3", desc: "Optimalt resultat uppnått" }
                  ].map((phase, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-24">
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
                <h3 className="font-medium text-2xl text-purple-900 mb-6">Långsiktiga Resultat</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Timer className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Hållbarhet</p>
                      <p className="text-gray-600">Skapar en ny utgångspunkt för hudens åldrande som varar långsiktigt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Repeat className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Underhållsbehandling</p>
                      <p className="text-gray-600">Rekommenderas 1-2 gånger per år</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sun className="w-5 h-5 text-[#064e3b] mt-1" />
                    <div>
                      <p className="font-medium text-purple-900">Livsstilspåverkan</p>
                      <p className="text-gray-600">Solskydd och god hudvård förlänger resultatet</p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 p-6 bg-purple-50/50 rounded-xl">
                  <p className="text-purple-900 font-medium mb-4">
                    Vill du veta mer om hur HIFU kan hjälpa dig?
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/konsultation-telefon-3124094"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#064e3b] hover:bg-[#043927] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                  >
                    Boka Kostnadsfri Konsultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.a>
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
                Här hittar du svar på de vanligaste frågorna om HIFU-behandling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-medium text-purple-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            {/* Additional Questions CTA */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Har du fler frågor? Vi hjälper dig gärna!
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+46737140860"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#064e3b] text-[#064e3b] rounded-lg hover:bg-[#064e3b]/5 transition-all duration-300 text-lg font-medium"
              >
                <Phone className="mr-2 h-5 w-5" />
                Ring Oss
              </motion.a>
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
                      Gå med över 100+ nöjda kunder som redan har börjat sin resa mot föryngrad hud
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

export default Hifu;