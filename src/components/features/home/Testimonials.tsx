import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, ChevronDown, ChevronUp } from 'lucide-react';
import ReviewSchema from '../../common/ReviewSchema';

const formatDate = (dateString: string) => {
  const reviewDate = new Date(dateString);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - reviewDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  // Format date in Swedish
  const months = [
    'januari', 'februari', 'mars', 'april', 'maj', 'juni',
    'juli', 'augusti', 'september', 'oktober', 'november', 'december'
  ];
  
  if (diffDays === 0) {
    return 'idag';
  } else if (diffDays === 1) {
    return 'igår';
  } else if (diffDays < 7) {
    return `för ${diffDays} dagar sedan`;
  } else if (diffDays < 30) {
    return `för ${Math.floor(diffDays / 7)} veckor sedan`;
  } else {
    const day = reviewDate.getDate();
    const month = months[reviewDate.getMonth()];
    const year = reviewDate.getFullYear();
    return `${day} ${month} ${year}`;
  }
};

const testimonials = [
  {
    name: "Ulrika I.",
    date: "2024-12-20", // "för en dag sedan"
    text: "Irene är kunnig, noggrann, engagerad och omtänksam, fantastisk upplevelse",
    rating: 5
  },
  {
    name: "Anna B.",
    date: "2024-12-18", // "för 3 dagar sedan"
    text: "Irene var toppen, jättefin behandling med hifu utfördes. Kommer tillbaka snart igen.",
    rating: 5
  },
  {
    name: "Samira M.",
    date: "2024-12-12", // "för 9 dagar sedan"
    text: "Irene är en professional människa och inte nog med det! Hon är mycket generös och god hjärtat. Jag fick behandling 3 gånger. För varje gång kände jag mig mer energifyll, glad och frisk. Rekommenderar stark alla hennes behandlingar.",
    rating: 5
  },
  {
    name: "Margaretha A.",
    date: "2024-12-10", // "för 11 dagar sedan"
    text: "Ett tryggt och omhändertagande bemötande. Kände mig stabil efter behandlingen.",
    rating: 5
  },
  {
    name: "Catarina O.",
    date: "2024-12-06", // "för 15 dagar sedan"
    text: "Så otroligt nöjd med min hifu behandling, gjorde verkligen underverk med min haka/hals. En proffsig Irene som tog väl hand om mig. Kan vart rekommendera denna behandling och salong.",
    rating: 5
  },
  {
    name: "Mani H.",
    date: "2024-11-26", // "för 25 dagar sedan"
    text: "Fantastiskt och mycket trevlig",
    rating: 5
  },
  {
    name: "Camilla H.",
    date: "2024-11-15", // "för ungefär en månad sedan"
    text: "Har gjort en Hifu behandling och frekvens behandling. Skön upplevelse. Nerbäddad med fluffigt täcken och får information av Irene med stor kunskap. Älskar frekvens behandlingen för man blir varm och pigg. Smärtorna ger sig. Så härlig miljö💕",
    rating: 5
  },
  {
    name: "Suzane C.",
    date: "2024-10-17", // "för 2 månader sedan"
    text: "Så nöjd med min Hifu behandling och en massa extra lyx som ansiktsmassage, ansiktsmask av fantastiska Irene. Rekommenderas varmt!",
    rating: 5
  },
  {
    name: "Lina H.",
    date: "2024-08-14", // "för 4 månader sedan"
    text: "Om ni vill bli omhändertagen av ett proffs som även tänker holistiskt, tveka inte att boka in en behandling. Fem stjärnor! Hit kommer jag gå fler gånger.",
    rating: 5
  },
  {
    name: "Camilla H.",
    date: "2024-08-07", // "för 4 månader sedan"
    text: "Men det är så skönt och man känner sig lättare i kropp och själ. Värken ger med sig och bara det gör att allt blir lättare. Bästa Irene förklara på ett bra sätt vad man själv kan göra för att må bättre i sinnet. Men vekt att gå igenom. Men igenom ska jag. Tack bästa ❤️",
    rating: 5
  },
  {
    name: "magdalena p.",
    date: "2024-08-03", // "för 4 månader sedan"
    text: "Ett genuint bemötande, vänligt och mycket kunnig terapeut som tog sig tid. Intressant behandling. Jag mådde mycket bra efteråt. Rekommenderar varmt.",
    rating: 5
  },
  {
    name: "Ulrica A.",
    date: "2024-06-18", // "för 6 månader sedan"
    text: "Såå intressant och Irene är så kunnig och duktig. Jag är i trygga händer här Tack 🙏",
    rating: 5
  },
  {
    name: "Helena O.",
    date: "2024-05-23", // "för 7 månader sedan"
    text: "Väldigt intressant och givande! Gav många tankar… Väldigt trevligt bemötande av Irene som är väldigt kunnig inom området!",
    rating: 5
  },
  {
    name: "Åke G.",
    date: "2024-04-09", // "för 8 månader sedan"
    text: "Så avkopplande o så härligt. Absolut rekommenderar till alla. Tack 🙏🦋🪶",
    rating: 5
  },
  {
    name: "Emmelie W.",
    date: "2024-04-02", // "för 8 månader sedan"
    text: "Skönt och avslappnade besök. Första gången och jag var nyfiken. Jag kände mig vldigt lätt efteråt både tömd men fylld med energi. Verkligen balanserad helt enkelt. Fick hjälp med mina hormoner bland annat. Irene satte ord på sånt och problem jag själv inte berättat vilket var häftigt. Rekommenderar varmt!",
    rating: 5
  },
  {
    name: "marlene r.",
    date: "2024-03-28", // "för 9 månader sedan"
    text: "Har ME/CFS och fibromyalgi. Levt med kroppslig smärta sen 2010. Den kom och gick och förflyttades runt om olika delar i kroppen. Från 2015, blev det en ihållande smärta. Under behandlingen, var det en stund av ingen smärta, kände mig så \"lätt\" och fri. Var m��nga år sen sist. Smärtan kom dock tillbaka men ej lika grov som innan. (Skriver ca 5h efter behandlingen)T om min syn blev bättre, har läsglasögon efter optikerbesök men ME/CFS påverkar synen ytterligare. Den blir grumlig när kroppen/hjärnan upplever stress. Eftersom det är inte ett \"synfel\" hjälper inte glasögon. Summakardemumma - när jag kom till Irene, kunde jag knappt stå på benen, när jag lämnade var jag starkare. (Orkade t om gå en sväng i en butik) Kan ännu inte svara hur detta håller i längden och hur det kommer påverka mina sjukdomar men en väldigt imponerad start. Ger mig hopp i en annars som det känns hopplöst situation med mina diagnoser. Och behandlaren Irene är fantastisk. Kände mig trygg i att hon vill mitt bästa.",
    rating: 5
  },
  {
    name: "Camilla H.",
    date: "2024-03-15", // "för 9 månader sedan"
    text: "Härlig miljö med fantastiskt möte med lugn och kunnig terapeut. Frekvens terapi har gjort mig lättare, mer energi och tagit udden av min värk. Otroligt glad att jag kommit i kontakt med denna terapi.",
    rating: 5
  },
  {
    name: "Annelie S.",
    date: "2024-03-05", // "för 9 månader sedan"
    text: "Det här var precis vad jag sökte efter. Professionellt bemötande, en skön avslappning under arbetets gång och uppenbara resultat direkt. Två problemområden i min rygg t ex, de känns inte längre efter besöket. Kanonbra kontakt vid frågor som dök upp efteråt. Jag ska garanterar tillbaka. Rekommenderar varmt att gå till Irene på BetterFeel!",
    rating: 5
  },
  {
    name: "Sylva E.",
    date: "2024-02-12", // "för 10 månader sedan"
    text: "Iréne är toppen! Inlyssnande, mycket trevlig och brinner för det hon gör. Behandlingen var trygg och behaglig, somnade ganska omgående :) Utan att ha berättat för Irene om tidigare problem kunde hon under och efter behandlingen pricka in flera problemområden. Kände mig efter en vecka mer lugn och energifylld och sover bättre. Jag kommer absolut boka in ett återbesök. Rekommenderas varmt!",
    rating: 5
  }
];

// Add this interface for expanded state tracking
interface ExpandedState {
  [key: number]: boolean;
}

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [expandedCards, setExpandedCards] = useState<ExpandedState>({});

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 350;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      const container = scrollContainerRef.current;
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
      <ReviewSchema 
        reviews={testimonials}
        itemReviewed={{
          name: "BetterFeel",
          description: "BetterFeel erbjuder avancerade behandlingar inom hudföryngring och välbefinnande, inklusive HIFU, Plaxpot, frekvensterapi och coaching.",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Recensioner
          </span>
          <h2 className="text-4xl font-serif text-purple-900 mb-6">
            Vad Våra Kunder Säger
          </h2>
        </div>

        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-purple-50 p-3 rounded-full shadow-lg transition-all duration-200 opacity-90 hover:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-purple-50 p-3 rounded-full shadow-lg transition-all duration-200 opacity-90 hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>

          {/* Testimonials Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-8 px-4 snap-x snap-mandatory scrollbar-hide"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`flex-none w-[350px] bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 snap-start ${
                  !expandedCards[index] && 'h-[320px]'
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Top Section */}
                  <div className="flex-shrink-0">
                    <Quote className="w-8 h-8 text-purple-200 mb-2" />
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 min-h-0 relative">
                    <AnimatePresence mode="wait">
                      <motion.blockquote 
                        key={expandedCards[index] ? 'expanded' : 'collapsed'}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-700 text-sm leading-relaxed"
                      >
                        "{expandedCards[index] ? testimonial.text : truncateText(testimonial.text)}"
                      </motion.blockquote>
                    </AnimatePresence>
                  </div>

                  {/* Footer Section */}
                  <div className="flex-shrink-0 mt-4">
                    {testimonial.text.length > 120 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-purple-600 hover:text-purple-700 flex items-center text-sm font-medium mb-4"
                      >
                        {expandedCards[index] ? (
                          <>
                            Visa mindre <ChevronUp className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            Läs mer <ChevronDown className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    )}
                    
                    <div className="pt-4 border-t border-purple-100">
                      <p className="font-medium text-purple-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{formatDate(testimonial.date)}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            <div className="w-8 h-1 bg-purple-200 rounded-full"></div>
            <div className="w-8 h-1 bg-purple-400 rounded-full"></div>
            <div className="w-8 h-1 bg-purple-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
