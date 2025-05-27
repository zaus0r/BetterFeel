import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';

// Schema Components
import ServiceSchema from '../components/common/ServiceSchema';
import ServiceSEO from '../components/common/ServiceSEO';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import FAQSchema from '../components/common/FAQSchema';
import TreatmentSchema from '../components/common/TreatmentSchema';

// Lazy load page components
const HeroSection = lazy(() => import('./frequencytherapy/components/HeroSection'));
const BenefitsSection = lazy(() => import('./frequencytherapy/components/BenefitsSection'));
const WhatIsSection = lazy(() => import('./frequencytherapy/components/WhatIsSection'));
const TreatmentOptions = lazy(() => import('./frequencytherapy/components/TreatmentOptions'));
const ProcessSection = lazy(() => import('./frequencytherapy/components/ProcessSection'));
const ResultsTimeline = lazy(() => import('./frequencytherapy/components/ResultsTimeline'));
const FaqSection = lazy(() => import('./frequencytherapy/components/FaqSection'));
const CtaSection = lazy(() => import('./frequencytherapy/components/CtaSection'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-10">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-600"></div>
  </div>
);

// Define types and data inline like in Hifu
interface TreatmentOption {
  id: string;
  title: string;
  price: string;
  duration: string;
  location: string;
  description: string;
  features: string[];
  benefits: string[];
  details: {
    preparation: string;
    process: string;
    aftercare: string;
  };
  bookingUrl: string;
  type: string;
  sessions: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// Define treatments inline like in Hifu
const treatmentOptions: TreatmentOption[] = [
  {
    id: "senso",
    title: "SENSO",
    price: "749 kr",
    duration: "60 minuter",
    location: "På kliniken",
    description: "En populär, lugn och avkopplande behandling som ger din kropp möjlighet att återställa balans och energi på djupet. Perfekt för dig som söker djup avslappning och förnyad energi.",
    features: [
      "Djup avslappning genom subtila vibrationer",
      "Balansering av kroppens energifält",
      "Stressreducering och energiökning",
      "Personlig vägledning under behandlingen"
    ],
    benefits: [
      "Minskad stress och ångest",
      "Förbättrad sömnkvalitet",
      "Ökad energi och vitalitet",
      "Stärkt immunförsvar"
    ],
    details: {
      preparation: "Kom i bekväma kläder. Undvik alkohol och koffein några timmar före behandlingen.",
      process: "Under behandlingen ligger du bekvämt medan utrustningen sänder subtila frekvenser till kroppen. De flesta upplever en djup avslappning, ibland med lätta stickningar eller värmekänsla.",
      aftercare: "Drick mycket vatten efter behandlingen. Vila om du känner behov av det. Full effekt kan upplevas 1-3 dagar efter behandlingen."
    },
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/frekvens-senso-2-3189643",
    type: "inperson",
    sessions: "Rekommendation: 3-5 sessioner för optimalt resultat"
  },
  {
    id: "harmoniq",
    title: "HarmoniQ",
    price: "995 kr",
    duration: "90 minuter",
    location: "På distans eller kliniken",
    description: "En skräddarsydd behandling som ger din kropp exakt det den behöver för att återfå balans och styrka. Perfekt för dig som vill ha en djupgående behandling i hemmets bekvämlighet eller på kliniken.",
    features: [
      "Personlig frekvensanalys",
      "Skräddarsydd behandling (distans eller på plats)",
      "Djupgående energibalansering",
      "Vägledning för optimal effekt"
    ],
    benefits: [
      "Ökad mental klarhet",
      "Djupare balansering av energisystem",
      "Förbättrad kroppslig funktion",
      "Personligt anpassad behandling"
    ],
    details: {
      preparation: "För distansbehandling: Säkerställ att du har en lugn plats där du kan vara ostörd i 90 minuter. För klinikbesök: Följ samma rekommendationer som för SENSO.",
      process: "Vi börjar med en djupgående analys av ditt energitillstånd. Baserat på detta skapas en personlig frekvensbehandling. Under behandlingen kan du ligga ner och slappna av, oavsett om det sker på distans eller på plats.",
      aftercare: "Du får personliga rekommendationer efter sessionen. Många upplever en djupare och mer långvarig effekt jämfört med standardbehandlingen."
    },
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/frekvens-harmoniq-distans-3189647",
    type: "both",
    sessions: "Rekommendation: 3-4 sessioner med 2-4 veckors mellanrum"
  },
  {
    id: "balance-mastery",
    title: "Balance Mastery",
    price: "1995 kr",
    duration: "120 minuter + uppföljning",
    location: "På distans eller kliniken",
    description: "En exklusiv premiumbehandling med djupgående analys, personlig rapport och uppföljning. Perfekt för dig som vill ha det allra bästa för din hälsa och välbefinnande.",
    features: [
      "Omfattande hälsoanalys",
      "Personlig behandlingsrapport",
      "Premium behandling (distans eller på plats)",
      "Uppföljningssamtal"
    ],
    benefits: [
      "Fullständig systemöversikt",
      "Långsiktig hälsoförbättring",
      "Personligt anpassad vårdplan",
      "Djupgående problemlösning"
    ],
    details: {
      preparation: "Du får specifika instruktioner baserade på din hälsoprofilering innan behandlingen. För bästa resultat, följ dessa rekommendationer noga.",
      process: "Behandlingen börjar med en djupgående hälsokartläggning. Därefter skapas en skräddarsydd premiumbehandling som adresserar dina specifika behov. Efter sessionen får du en detaljerad rapport med analys och rekommendationer.",
      aftercare: "En vecka efter behandlingen har vi ett uppföljningssamtal för att diskutera resultaten och eventuella justeringar. Du får även långsiktiga rekommendationer för att bibehålla och förbättra dina resultat."
    },
    bookingUrl: "https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/frekvens-balance-mastery-premium-paket-distans-3189646",
    type: "both",
    sessions: "Rekommendation: 1-3 sessioner med personligt anpassad frekvens"
  }
];

// FAQs defined inline
const faqs: FAQ[] = [
  {
    question: "Vad är frekvensterapi?",
    answer: "Frekvensterapi är en holistisk behandlingsmetod som använder specifika frekvenser för att balansera kroppens energifält och stödja naturlig läkning."
  },
  {
    question: "Hur känns en behandling?",
    answer: "De flesta upplever en djup avslappning under behandlingen. Ibland kan man känna subtila vibrationer, lätt värmekänsla eller stickningar, vilket är helt normalt och tecken på att kroppen reagerar positivt."
  },
  {
    question: "Vilka resultat kan jag förvänta mig?",
    answer: "Resultaten varierar från person till person, men vanliga effekter inkluderar ökad energi, bättre sömn, minskad stress, och en känsla av balans. Vissa upplever omedelbara förbättringar, medan andra märker gradvisa förändringar över tid."
  },
  {
    question: "Hur många behandlingar behöver jag?",
    answer: "För optimala resultat rekommenderar vi en serie på 3-5 behandlingar. Dock kan du känna positiva effekter redan efter första behandlingen. För underhåll rekommenderas månatliga eller kvartalsvisa behandlingar."
  },
  {
    question: "Är frekvensterapi vetenskapligt bevisat?",
    answer: "Det finns växande forskningsstöd för bioresonans och frekvensbaserade terapier. Modern forskning inom kvantfysik och biomedicin understödjer principerna bakom frekvensterapi, och flera kliniska studier har visat positiva resultat för olika tillstånd."
  },
  {
    question: "Fungerar distansbehandlingar?",
    answer: "Ja, distansbehandlingar är lika effektiva som behandlingar på plats. Enligt kvantfysiska principer är energi inte begränsad av tid och rum, vilket möjliggör behandling på distans. Många klienter rapporterar utmärkta resultat med våra distansalternativ."
  }
];

// Ensures page is fully loaded
const ensurePageIsLoaded = () => {
  if (typeof window !== 'undefined') {
    // Create a script element to add to the document
    const safetyScript = document.createElement('script');
    safetyScript.type = 'text/javascript';
    safetyScript.innerHTML = `
      // Safety net for refreshes
      window.onload = function() {
        console.log("Window fully loaded");
        // If the page is being refreshed
        if (performance.navigation.type === 1) {
          console.log("This page is being refreshed");
          // Force a re-render if needed
          setTimeout(() => {
            const mainContent = document.querySelector('main');
            if (mainContent && !mainContent.innerHTML) {
              console.log("Forcing re-render due to empty content");
              window.location.reload();
            }
          }, 1000);
        }
      };
    `;
    document.head.appendChild(safetyScript);
  }
};

const FrequencyTherapy: React.FC = () => {
  console.log("FrequencyTherapy render");
  const mainContentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  // On initial client-side render only
  useEffect(() => {
    // Run once to ensure page is fully loaded
    ensurePageIsLoaded();
  }, []);

  // Preload images
  useEffect(() => {
    console.log('FrequencyTherapy component mounted');
    setMounted(true);

    // Handle refresh specifically
    if (performance && performance.navigation && performance.navigation.type === 1) {
      console.log('This page is being refreshed');
    }

    // Explicitly preload all critical images
    const imagesToPreload = [
      '/assets/images/treatments/frequency/hero.jpg',
      '/assets/images/treatments/frequency/frequency_hero.jpg',
      '/assets/images/treatments/frequency/frequency_hero.webp',
      '/assets/images/treatments/frequency/what_is.jpg',
      '/assets/images/treatments/frequency/what_is.webp',
      '/assets/images/treatments/frequency/benefits.jpg',
      '/assets/images/treatments/frequency/benefits.webp'
    ];
    
    // Create Image objects and load them
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
      console.log(`Preloading image: ${src}`);
      img.onload = () => console.log(`Image loaded: ${src}`);
      img.onerror = () => console.error(`Failed to load image: ${src}`);
    });

    // Debug DOM after render
    setTimeout(() => {
      console.log('FrequencyTherapy DOM after render:');
      const heroSection = document.querySelector('section');
      if (heroSection) {
        console.log('Found hero section:', heroSection);
      }
    }, 100);

    // Add route change handler
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      console.log('FrequencyTherapy component unmounting');
      window.removeEventListener('popstate', handleRouteChange);
      setMounted(false);
    };
  }, []);

  const scrollToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Schema Components */}
      <ServiceSchema
        name="Frekvensbehandling"
        description="Holistisk frekvensbehandling för balans och välbefinnande. En modern behandlingsmetod som använder bioresonans för att stödja kroppens naturliga läkningsprocesser."
        url="https://betterfeel.se/frekvens"
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
        url="https://betterfeel.se/frekvens"
        serviceName="Frekvensterapi"
        preloadImages={[
          '/assets/images/treatments/frequency/frequency_hero.webp',
          '/assets/images/treatments/frequency/frequency_hero.jpg',
          '/assets/images/treatments/frequency/hero.jpg',
          '/assets/images/treatments/frequency/benefits.webp'
        ]}
        treatments={[
          {
            name: "SENSO Frekvensterapi",
            description: "En 60-minuters behandling som främjar djup avslappning genom subtila vibrationer och balansering.",
            duration: "PT60M",
            price: "749",
            url: "https://betterfeel.se/frekvens#senso"
          },
          {
            name: "HarmoniQ Distansbehandling",
            description: "En 90-minuters distansbehandling som ger exakt det din kropp behöver för att återfå balans och styrka.",
            duration: "PT90M",
            price: "995",
            url: "https://betterfeel.se/frekvens#harmoniq"
          },
          {
            name: "Balance Mastery Premium",
            description: "En omfattande 120-minuters premiumbehandling med personlig analys, rapport och uppföljning.",
            duration: "PT120M",
            price: "1995",
            url: "https://betterfeel.se/frekvens#balance-mastery"
          }
        ]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Behandlingar", item: "/behandlingar" },
          { name: "Frekvensterapi", item: "/frekvens" }
        ]}
      />
      <FAQSchema questions={faqs} />
      
      {/* Main Content */}
      <main className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <HeroSection scrollToContent={scrollToContent} />
        </Suspense>
        <div ref={mainContentRef}>
          <Suspense fallback={<LoadingSpinner />}>
            <BenefitsSection />
          </Suspense>
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <WhatIsSection />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <TreatmentOptions treatmentOptions={treatmentOptions} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <ProcessSection />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <ResultsTimeline />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <FaqSection faqs={faqs} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner />}>
          <CtaSection />
        </Suspense>
      </main>
    </>
  );
};

export default FrequencyTherapy;