import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import ReviewSchema from '../../common/ReviewSchema';
import Animation from '../../common/Animation';

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

// Add CSS for hiding scrollbar and marquee animation
const customStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  @keyframes marquee {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  .marquee-container {
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  
  .marquee-content {
    display: flex;
    animation: marquee 90s linear infinite;
    width: max-content;
  }
  
  .marquee-content:hover {
    animation-play-state: paused;
  }
`;

const testimonials = [
  {
    name: "Carina O.",
    date: "2024-12-23", // "för 3 dagar sedan"
    text: "Mycket proffsigt & lyxiga behandlingar av Irené som direkt ger synliga resultat - fantastiskt!!",
    rating: 5
  },
  {
    name: "Alexandra K.",
    date: "2024-12-09", // "för 17 dagar sedan"
    text: "Irene erbjuder en fantastisk ansiktsbehandling som verkligen gör underverk för huden. Hennes 1000 % engagemang och passion för sitt hantverk lyser igenom i varje detalj. Med en varm och personlig atmosfär gör hon varje besök till en verklig upplevelse. Rekommenderas varmt!",
    rating: 5
  },
  {
    name: "Elisabeth E.",
    date: "2024-12-08", // "för 18 dagar sedan"
    text: "Irene var oerhört kunnig, kändes väldigt trygg och mycket trevlig. Rekommenderar henne varmt",
    rating: 5
  },
  {
    name: "Camilla H.",
    date: "2024-11-29", // "för 27 dagar sedan"
    text: "Så härligt att bli ompysslad och tillsnyggad av skickliga Irene. Så härlig miljö. Älskar att få komma dit och komma ut med fint resultat💖",
    rating: 5
  },
  {
    name: "Jennica J.",
    date: "2024-11-26", // "för ungefär en månad sedan"
    text: "Otroligt varmt person som gjorde underverk för min hud",
    rating: 5
  },
  {
    name: "Annelie L.",
    date: "2024-10-26", // "för 2 månader sedan"
    text: "Irene är så proffsig och supertrevlig, så nöjd med resultatet. Annelie",
    rating: 5
  },
  {
    name: "Anneli H.",
    date: "2024-10-26", // "för 2 månader sedan"
    text: "Irene är som alltid proffsig och engagerad. Denna fuktstimulerande ansiktsbehandling gav bra resultat",
    rating: 5
  },
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
    text: "Har ME/CFS och fibromyalgi. Levt med kroppslig smärta sen 2010. Den kom och gick och förflyttades runt om olika delar i kroppen. Från 2015, blev det en ihållande smärta. Under behandlingen, var det en stund av ingen smärta, kände mig så \"lätt\" och fri. Var många år sen sist. Smärtan kom dock tillbaka men ej lika grov som innan. (Skriver ca 5h efter behandlingen)T om min syn blev bättre, har läsglasögon efter optikerbesök men ME/CFS påverkar synen ytterligare. Den blir grumlig när kroppen/hjärnan upplever stress. Eftersom det är inte ett \"synfel\" hjälper inte glasögon. Summakardemumma - när jag kom till Irene, kunde jag knappt stå på benen, när jag lämnade var jag starkare. (Orkade t om gå en sväng i en butik) Kan ännu inte svara hur detta håller i längden och hur det kommer påverka mina sjukdomar men en väldigt imponerad start. Ger mig hopp i en annars som det känns hopplöst situation med mina diagnoser. Och behandlaren Irene är fantastisk. Kände mig trygg i att hon vill mitt bästa.",
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
  [key: number | string]: boolean;
}

const Testimonials = () => {
  const [expandedCards, setExpandedCards] = useState<ExpandedState>({});

  const toggleExpand = (index: number | string) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  // Create a duplicate array of testimonials for the infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <ReviewSchema 
        reviews={testimonials}
        itemReviewed={{
          name: "BetterFeel",
          description: "BetterFeel erbjuder avancerade behandlingar inom hudföryngring och välbefinnande, inklusive HIFU, Plaxpot, frekvensterapi och coaching.",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Animation
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4"
          >
            Kundupplevelser
          </Animation>

          <Animation
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-medium text-purple-900 mb-6">
              Vad Våra Kunder Säger
            </h2>
          </Animation>

          <Animation
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Upptäck hur våra behandlingar har hjälpt hundratals kunder att uppnå sina mål för hälsa och välbefinnande.
          </Animation>

          {/* Overall Rating Display */}
          <div className="flex items-center justify-center mt-8 mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-purple-200/30">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-serif text-purple-900">5.0</div>
                <div className="flex flex-col items-start">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Baserat på över 100 recensioner</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Testimonials Container */}
        <div className="marquee-container mb-12">
          <div className="marquee-content">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.05 }}
                className={`flex-none w-[350px] mx-3 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200/30 ${
                  !expandedCards[index] && 'h-[320px]'
                }`}
              >
                <div className="flex flex-col h-full">
                  {/* Top Section */}
                  <div className="flex-shrink-0">
                    <Quote className="w-8 h-8 text-[#064e3b] mb-2" />
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
                        className="text-[#064e3b] hover:text-[#043927] flex items-center text-sm font-medium mb-4"
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Animation
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <a
              href="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/konsultation-telefon-3124094"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
            >
              Boka Din Kostnadsfria Konsultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Animation>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
