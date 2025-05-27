import React, { useState, useEffect, useRef } from 'react';
import { Zap, Waves, Sparkles, Check, ArrowRight, Heart, Shield, BookOpen, ChevronLeft, ChevronRight, Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Animation from '../../common/Animation';

// Import custom styles for the treatment carousel
import './treatmentOverview.css';

const treatments = [
  {
    icon: Waves,
    title: "HIFU Hudföryngring",
    description: "Naturlig hudföryngring utan kirurgi. Perfekt för dig som vill ha synliga resultat utan återhämtningstid. HIFU använder ultraljud för att lyfta och strama upp huden på ett skonsamt sätt.",
    benefits: [
      "Naturligt resultat utan kirurgi",
      "Ingen återhämtningstid behövs",
      "Synliga resultat direkt",
      "Stimulerar hudens egen kollagenproduktion"
    ],
    idealFor: [
      "Dig som vill ha ett naturligt lyft utan operation",
      "Dig mellan 30-65 år",
      "Dig som vill förebygga eller behandla ålderstecken"
    ],
    science: "Säker och beprövad metod med över 10 års klinisk erfarenhet",
    price: "1495 kr per behandling",
    link: "/hifu",
    color: "blue",
    image: "/assets/images/treatments/hifu/hifu_carousel_optimized.jpg"
  },
  {
    icon: Zap,
    title: "Frekvensterapi",
    description: "Holistisk behandling för inre balans och välmående. Perfekt för dig som upplever stress, sömnproblem eller vill öka din energi och vitalitet på ett naturligt sätt.",
    benefits: [
      "Minskar stress och oro",
      "Förbättrar sömn och återhämtning",
      "Ökar energi och välbefinnande",
      "Stärker kroppens självläkande förmåga"
    ],
    idealFor: [
      "Dig som känner dig stressad eller utmattad",
      "Dig som vill öka din energi naturligt",
      "Dig som söker balans i kropp och sinne"
    ],
    science: "Baserad på bioresonans och kvantfysikens principer",
    price: "749 kr per session",
    link: "/frekvens",
    color: "purple",
    image: "/assets/images/treatments/frequency/biofeedback_carousel_optimized.jpg"
  },
  {
    icon: Sparkles,
    title: "Plaxpot Ansiktslyft",
    description: "Intensiv hudföryngring för specifika områden. Perfekt för dig som vill behandla tydliga ålderstecken som rynkor runt ögon eller mun. Kräver några dagars återhämtning men ger dramatiska resultat.",
    benefits: [
      "Kraftfull behandling av specifika områden",
      "Dramatiska resultat efter en behandling",
      "Behandlar djupa rynkor och linjer",
      "Förbättrar hudens struktur och elasticitet"
    ],
    idealFor: [
      "Dig som vill se tydliga resultat snabbt",
      "Dig som kan ta några dagars återhämtning",
      "Dig med specifika problemområden"
    ],
    science: "Använder plasmateknik för precis och effektiv behandling",
    price: "995 kr per område",
    link: "/plaxpot",
    color: "amber",
    image: "/assets/images/treatments/plaxpot/plaxpot_carousel_optimized.jpg"
  },
  {
    icon: Shield,
    title: "Bio Pen Q2 Microneedling",
    description: "Avancerad hudföryngring med tre kraftfulla teknologier i en behandling. Förbättrar hudens struktur, reducerar rynkor och ger en strålande lyster med minimal återhämtningstid.",
    benefits: [
      "Kombinerar microneedling, EMS och LED-ljusterapi",
      "Stimulerar kollagenproduktion",
      "Förbättrar hudens textur och ton",
      "Minimal återhämtningstid"
    ],
    idealFor: [
      "Dig som vill ha effektiv hudföryngring",
      "Dig med fina linjer, ärr eller ojämn hudton",
      "Dig som vill ha resultat med minimal nedtid"
    ],
    science: "Trippelverkande teknologi för optimal hudföryngring",
    price: "1495 kr per behandling",
    link: "/microneedling",
    color: "green",
    image: "/assets/images/treatments/microneedling/biopen_optimized.jpg"
  },
  {
    icon: BookOpen,
    title: "Hudvård",
    description: "Skräddarsydda hudvårdsbehandlingar för alla hudtyper och behov. Från djuprengörande till lugnande och återfuktande behandlingar som ger din hud precis vad den behöver.",
    benefits: [
      "Personligt anpassad efter din hudtyp",
      "Djuprengöring och exfoliering",
      "Lugnande och återfuktande",
      "Ger omedelbar lyster och fräschör"
    ],
    idealFor: [
      "Dig som vill ha en skräddarsydd hudvårdsrutin",
      "Dig med specifika hudproblem",
      "Dig som vill ha en avkopplande upplevelse"
    ],
    science: "Kombinerar moderna tekniker med högkvalitativa produkter",
    price: "895 kr per behandling",
    link: "/hudvard",
    color: "rose",
    image: "/assets/images/location/hudvard_carousel2.jpeg"
  }
];

// Add a type for the treatment object
interface TreatmentType {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  benefits: string[];
  idealFor: string[];
  science: string;
  price: string;
  link: string;
  color: string;
  image: string;
  recoveryOrder?: number; // Add recovery order for sorting
}

interface Treatment {
  name: string;
  description: string;
  duration: string;
  price: string;
}

interface BaseResult {
  title: string;
  description: string;
  link: string;
}

interface TreatmentResult extends BaseResult {
  treatments: Treatment[];
}

type Result = BaseResult | TreatmentResult;

const questions = {
  initial: {
    question: "Vad vill du uppnå med din behandling?",
    options: [
      {
        id: "anti-aging",
        text: "Jag vill motverka ålderstecken",
        next: "anti-aging"
      },
      {
        id: "wellness",
        text: "Jag vill öka mitt välbefinnande",
        next: "wellness"
      },
      {
        id: "skin-problems",
        text: "Jag vill behandla specifika hudproblem",
        next: "skin-problems"
      }
    ]
  },
  // ... rest of the questions object
};

const results = {
  // ... results object
};

const getStepTitle = (questionId: string, optionId: string | null = null) => {
  // ... getStepTitle function
};

interface HistoryItem {
  questionId: string;
  optionId: string;
}

// Color mapping for treatment backgrounds
const colorMap: Record<string, string> = {
  blue: 'from-blue-500/10 to-blue-600/5 border-blue-200/30',
  purple: 'from-purple-500/10 to-purple-600/5 border-purple-200/30',
  amber: 'from-amber-500/10 to-amber-600/5 border-amber-200/30',
  green: 'from-green-500/10 to-green-600/5 border-green-200/30',
  rose: 'from-rose-500/10 to-rose-600/5 border-rose-200/30',
};

// Button color mapping
const buttonColorMap: Record<string, string> = {
  blue: 'bg-blue-600 hover:bg-blue-700',
  purple: 'bg-purple-600 hover:bg-purple-700',
  amber: 'bg-amber-600 hover:bg-amber-700',
  green: 'bg-green-600 hover:bg-green-700',
  rose: 'bg-rose-600 hover:bg-rose-700',
};

const TreatmentOverview = () => {
  const [currentQuestion, setCurrentQuestion] = useState('initial');
  const [result, setResult] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([{ questionId: 'initial', optionId: '' }]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: any) => {
    const newHistory = [...history];
    // Update the current step's optionId
    newHistory[newHistory.length - 1].optionId = option.id;
    
    if (option.result) {
      setResult(option.result);
      setHistory(newHistory);
    } else if (option.next) {
      setCurrentQuestion(option.next);
      // Add the next question to history
      setHistory([...newHistory, { questionId: option.next, optionId: '' }]);
    }
  };

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentQuestion(newHistory[newHistory.length - 1].questionId);
      setResult(null);
    }
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setActiveIndex((prev) => (prev === sortedTreatments.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? sortedTreatments.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Reset scroll position when changing treatments
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    // Close expanded details when changing treatments
    setShowDetails(false);
  }, [activeIndex]);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!showDetails) {
        nextSlide();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [showDetails]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // Sort treatments by recovery time to match the comparison table order
  const sortedTreatments = [...treatments].sort((a, b) => {
    // Assign recovery order values for sorting
    const getRecoveryOrder = (treatment: any) => {
      if (treatment.title.includes('Frekvensterapi') || treatment.title.includes('Hudvård')) {
        return 0; // No recovery time
      } else if (treatment.title.includes('HIFU') || treatment.title.includes('Microneedling')) {
        return 1; // Minimal recovery
      } else if (treatment.title.includes('Plaxpot')) {
        return 2; // Longest recovery
      }
      return 0;
    };
    return getRecoveryOrder(a) - getRecoveryOrder(b);
  });

  return (
    <section id="treatments" className="py-20 bg-gradient-to-b from-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Animation
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4"
          >
            Skräddarsydda Behandlingar
          </Animation>

          <Animation
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6 text-center">
              Vilken behandling passar dig?
            </h2>
          </Animation>

          <Animation
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Vi erbjuder fem unika vägar till föryngring och välmående. Varje behandling är skräddarsydd 
            för olika behov och önskemål. Utforska våra alternativ och hitta den perfekta lösningen för dig.
          </Animation>
        </div>

        {/* Interactive Treatment Showcase */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/95 backdrop-blur-sm border border-purple-200/30">
            {/* Main Carousel - Fixed Height */}
            <div className="relative h-[850px] md:h-[650px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      nextSlide();
                    } else if (swipe > swipeConfidenceThreshold) {
                      prevSlide();
                    }
                  }}
                  className="absolute inset-0"
                >
                  <div className={`h-full grid md:grid-cols-2 bg-gradient-to-br ${colorMap[sortedTreatments[activeIndex].color]}`}>
                    {/* Left Column - Image - Fixed size */}
                    <div className="relative hidden md:block h-full overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 z-10"></div>
                      <picture>
                        {/* WebP format with responsive sizes */}
                        <source
                          srcSet={`${sortedTreatments[activeIndex].image.replace('.jpg', '.webp').replace('.jpeg', '.webp')} 1200w, ${sortedTreatments[activeIndex].image.replace('.jpg', '_thumb.webp').replace('.jpeg', '_thumb.webp')} 600w`}
                          sizes="(max-width: 768px) 450px, 912px"
                          type="image/webp"
                        />
                        {/* JPEG format with responsive sizes */}
                        <source
                          srcSet={`${sortedTreatments[activeIndex].image} 1200w, ${sortedTreatments[activeIndex].image.replace('.jpg', '_thumb.jpg').replace('.jpeg', '_thumb.jpeg')} 600w`}
                          sizes="(max-width: 768px) 450px, 912px"
                          type="image/jpeg"
                        />
                        <img 
                          src={sortedTreatments[activeIndex].image} 
                          alt={sortedTreatments[activeIndex].title} 
                          className="w-full h-full object-cover"
                          style={{ objectPosition: 'center' }}
                        />
                      </picture>
                      <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                        <div className="text-sm font-medium text-purple-900">Från {sortedTreatments[activeIndex].price.split(' ')[0]} kr</div>
                      </div>
                    </div>

                    {/* Right Column - Content - Scrollable */}
                    <div className="p-6 md:p-10 flex flex-col h-full relative overflow-hidden">
                      {/* Mobile Image - Only visible on small screens */}
                      <div className="relative md:hidden w-full h-96 mb-6 overflow-hidden rounded-lg">
                        <div className="absolute inset-0 bg-black/20 z-10"></div>
                        <picture>
                          {/* WebP format with responsive sizes */}
                          <source
                            srcSet={`${sortedTreatments[activeIndex].image.replace('.jpg', '.webp').replace('.jpeg', '.webp')} 1200w, ${sortedTreatments[activeIndex].image.replace('.jpg', '_thumb.webp').replace('.jpeg', '_thumb.webp')} 600w`}
                            sizes="(max-width: 768px) 450px, 912px"
                            type="image/webp"
                          />
                          {/* JPEG format with responsive sizes */}
                          <source
                            srcSet={`${sortedTreatments[activeIndex].image} 1200w, ${sortedTreatments[activeIndex].image.replace('.jpg', '_thumb.jpg').replace('.jpeg', '_thumb.jpeg')} 600w`}
                            sizes="(max-width: 768px) 450px, 912px"
                            type="image/jpeg"
                          />
                          <img 
                            src={sortedTreatments[activeIndex].image} 
                            alt={sortedTreatments[activeIndex].title} 
                            className="w-full h-full object-cover"
                            style={{ objectPosition: sortedTreatments[activeIndex].image.includes('hudvard_carousel2') ? 'center 70%' : 'center' }}
                          />
                        </picture>
                        <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                          <div className="text-sm font-medium text-purple-900">Från {sortedTreatments[activeIndex].price.split(' ')[0]} kr</div>
                        </div>
                      </div>
                      
                      {/* Content Container */}
                      <div className="flex-1 overflow-hidden h-[calc(100%-420px)] md:h-[calc(100%-100px)]">
                        {/* Scrollable Content */}
                        <div 
                          ref={contentRef} 
                          className="h-full overflow-y-scroll hide-scrollbar pr-2" 
                          style={{ WebkitOverflowScrolling: 'touch' }}
                        >
                          <div className="mb-4 flex items-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-md">
                              {React.createElement(sortedTreatments[activeIndex].icon, { className: "h-6 w-6 text-purple-600" })}
                  </div>
                            <h3 className="text-2xl md:text-3xl font-medium text-purple-900 ml-4">
                              {sortedTreatments[activeIndex].title}
                  </h3>
                </div>

                          <p className="text-gray-600 text-lg mb-2">
                            {sortedTreatments[activeIndex].description}
                          </p>

                          {/* "Visa mer" button moved here, directly below description */}
                          <button
                            onClick={toggleDetails}
                            className="inline-flex items-center justify-center px-4 py-2 mb-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-300 text-sm font-medium"
                          >
                            {showDetails ? 'Visa mindre' : 'Visa mer'}
                          </button>

                          {/* Expandable Content */}
                          <AnimatePresence>
                            {showDetails && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mb-6 motion-div"
                              >
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Benefits */}
                                  <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                                    <h4 className="font-medium text-purple-900 mb-3 flex items-center">
                                      <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
                                      Fördelar
                                    </h4>
                  <ul className="space-y-2">
                                      {sortedTreatments[activeIndex].benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start text-gray-600">
                                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                                        </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                                  <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                                    <h4 className="font-medium text-purple-900 mb-3 flex items-center">
                                      <Heart className="w-5 h-5 text-rose-500 mr-2" />
                                      Passar för dig som
                                    </h4>
                  <ul className="space-y-2">
                                      {sortedTreatments[activeIndex].idealFor.map((ideal, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                                          <ArrowRight className="w-4 h-4 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                        <span>{ideal}</span>
                      </li>
                    ))}
                  </ul>
                                  </div>
                </div>

                                {/* Science */}
                                <div className="p-4 bg-white/80 rounded-lg shadow-sm">
                                  <h4 className="font-medium text-purple-900 mb-2 flex items-center">
                                    <Shield className="w-5 h-5 text-blue-500 mr-2" />
                                    Vetenskaplig grund
                                  </h4>
                                  <p className="text-gray-600">
                                    {sortedTreatments[activeIndex].science}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          
                          {/* Add extra padding at the bottom only when details are shown */}
                          {showDetails && <div className="h-32"></div>}
                        </div>
                      </div>

                      {/* Fixed Button Area - "Visa mer" button removed from here */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/95 to-white/0 pt-10">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Link
                            to={sortedTreatments[activeIndex].link}
                            className={`inline-flex items-center justify-center w-full px-6 py-3 mt-1 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base font-medium ${buttonColorMap[sortedTreatments[activeIndex].color]}`}
                          >
                            Läs mer om {sortedTreatments[activeIndex].title.includes("Bio Pen") ? "Microneedling" : sortedTreatments[activeIndex].title.split(' ')[0]}
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-6 h-6 text-purple-900" />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300"
                onClick={nextSlide}
              >
                <ChevronRight className="w-6 h-6 text-purple-900" />
              </button>
            </div>

            {/* Treatment Indicators - Now scrollable on mobile */}
            <div className="overflow-x-auto pb-4 relative" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}>
              {/* Remove gradient overlays completely as they cause the fade issue */}
              <div className="flex min-w-max justify-start md:justify-center items-center gap-6 md:gap-4 py-4 px-4 bg-white border-t border-purple-100">
                {sortedTreatments.map((treatment, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`flex flex-none flex-col items-center transition-all duration-300 px-4 py-2 rounded-lg ${
                      activeIndex === index ? 'bg-purple-50' : 'hover:bg-purple-50/50'
                    }`}
                    style={{ scrollSnapAlign: 'center', minWidth: treatment.title === "Bio Pen Q2 Microneedling" ? '110px' : '85px' }}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activeIndex === index ? 'bg-purple-100' : 'bg-gray-100'
                    }`}>
                      {React.createElement(treatment.icon, { 
                        className: `h-4 w-4 ${activeIndex === index ? 'text-purple-600' : 'text-gray-500'}` 
                      })}
                    </div>
                    <span className={`text-xs mt-1 font-medium whitespace-nowrap ${
                      activeIndex === index ? 'text-purple-900' : 'text-gray-500'
                    }`}>
                      {treatment.title.includes("Bio Pen") ? "Microneedling" : treatment.title.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            {/* Mobile scroll hint */}
            <div className="text-center text-xs text-gray-400 pb-2 md:hidden">
              ← Svep för fler behandlingar →
            </div>
                </div>
              </div>

        {/* Treatment Comparison Table */}
                <Animation
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-purple-200/30 shadow-lg overflow-hidden">
            <div className="p-6 border-b border-purple-100">
              <h3 className="text-xl font-medium text-purple-900">Jämför våra behandlingar</h3>
              <p className="text-gray-600">En översikt av våra fem behandlingsalternativ för att hjälpa dig hitta rätt val.</p>
            </div>
            
            {/* Desktop Table - Hidden on Mobile */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="px-6 py-4 text-left text-sm font-medium text-purple-900">Behandling</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-purple-900">Passar för</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-purple-900">Återhämtning</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-purple-900">Resultat</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-purple-900">Pris</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-purple-900"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-100">
                  {/* Sort treatments by recovery time for the comparison table only */}
                  {[...sortedTreatments].map((treatment, index) => (
                    <tr key={index} className="hover:bg-purple-50/50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-purple-100 mr-3">
                            {React.createElement(treatment.icon, { className: "h-4 w-4 text-purple-600" })}
                          </div>
                          <span className="font-medium text-purple-900">{treatment.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {treatment.idealFor[0].replace('Dig som ', '')}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {treatment.title.includes('HIFU') || treatment.title.includes('Microneedling') ? 
                          'Minimal' : 
                          treatment.title.includes('Plaxpot') ? 
                            '7-10 dagar' : 
                            'Ingen'
                        }
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex">
                          {[...Array(treatment.title.includes('Plaxpot') ? 5 : 
                                    treatment.title.includes('HIFU') || treatment.title.includes('Microneedling') ? 4 : 
                                    treatment.title.includes('Hudvård') ? 3 : 2)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-purple-900">
                        Från {treatment.price.split(' ')[0]} kr
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          to={treatment.link}
                          className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800"
                        >
                          Mer info
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile Card View - Visible only on Mobile */}
            <div className="md:hidden">
              {/* Sort treatments by recovery time for the mobile cards too */}
              {[...sortedTreatments].map((treatment, index) => (
                <div 
                  key={index} 
                  className={`p-5 border-b border-purple-100 last:border-b-0 bg-gradient-to-br ${colorMap[treatment.color]} hover:bg-white/50 transition-all duration-300`}
                >
                  {/* Treatment Header */}
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-md mr-3">
                      {React.createElement(treatment.icon, { className: "h-6 w-6 text-purple-600" })}
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-900 text-lg">{treatment.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Klicka för mer information</p>
                    </div>
                  </div>
                  
                  {/* Treatment Details as Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/80 p-3 rounded-lg shadow-sm">
                      <div className="text-xs font-medium text-gray-500 mb-1 flex items-center">
                        <Heart className="w-3 h-3 text-rose-500 mr-1" />
                        Passar för
                      </div>
                      <div className="text-sm text-gray-700">{treatment.idealFor[0].replace('Dig som ', '')}</div>
                    </div>
                    
                    <div className="bg-white/80 p-3 rounded-lg shadow-sm">
                      <div className="text-xs font-medium text-gray-500 mb-1 flex items-center">
                        <Shield className="w-3 h-3 text-blue-500 mr-1" />
                        Återhämtning
                      </div>
                      <div className="text-sm text-gray-700">
                        {treatment.title.includes('HIFU') || treatment.title.includes('Microneedling') ? 
                          'Minimal' : 
                          treatment.title.includes('Plaxpot') ? 
                            '7-10 dagar' : 
                            'Ingen'
                        }
                      </div>
                    </div>
                    
                    <div className="bg-white/80 p-3 rounded-lg shadow-sm">
                      <div className="text-xs font-medium text-gray-500 mb-1 flex items-center">
                        <Sparkles className="w-3 h-3 text-amber-500 mr-1" />
                        Resultat
                      </div>
                      <div className="flex">
                        {[...Array(treatment.title.includes('Plaxpot') ? 5 : 
                                  treatment.title.includes('HIFU') || treatment.title.includes('Microneedling') ? 4 : 
                                  treatment.title.includes('Hudvård') ? 3 : 2)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white/80 p-3 rounded-lg shadow-sm">
                      <div className="text-xs font-medium text-gray-500 mb-1 flex items-center">
                        <Zap className="w-3 h-3 text-purple-500 mr-1" />
                        Pris
                      </div>
                      <div className="text-sm font-medium text-purple-900">Från {treatment.price.split(' ')[0]} kr</div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <Link
                    to={treatment.link}
                    className={`inline-flex items-center justify-center w-full px-6 py-3 mt-1 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-base font-medium ${buttonColorMap[treatment.color]}`}
                  >
                    Läs mer om {treatment.title.includes("Bio Pen") ? "Microneedling" : treatment.title.split(' ')[0]}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
              </div>
          ))}
            </div>
          </div>
        </Animation>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Animation
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-purple-200/30 hover:shadow-xl transition-all duration-300">
              <div className="mb-4 bg-purple-100 p-4 rounded-full">
                <User className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-medium text-purple-900 mb-2">100+</div>
              <div className="text-gray-600 text-center">Nöjda Kunder</div>
            </div>
          </Animation>
          
          <Animation
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-purple-200/30 hover:shadow-xl transition-all duration-300">
              <div className="mb-4 bg-purple-100 p-4 rounded-full">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-medium text-purple-900 mb-2">5</div>
              <div className="text-gray-600 text-center">Unika Behandlingar</div>
            </div>
          </Animation>
          
          <Animation
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-purple-200/30 hover:shadow-xl transition-all duration-300">
              <div className="mb-4 bg-purple-100 p-4 rounded-full">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-medium text-purple-900 mb-2">98%</div>
              <div className="text-gray-600 text-center">Kundnöjdhet</div>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
};

export default TreatmentOverview;
