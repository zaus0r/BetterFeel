import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Clock, MapPin, Globe, Info, Check, Heart, Shield, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TreatmentOptionsProps {
  treatmentOptions: {
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
  }[];
}

const TreatmentOptions: React.FC<TreatmentOptionsProps> = ({ treatmentOptions }) => {
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

  return (
    <section id="treatments" className="py-20 bg-gradient-to-b from-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            Våra Behandlingar
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">
            Skräddarsydda Frekvensbehandlingar
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Välj den behandling som passar dina behov bäst. Alla behandlingar inkluderar kostnadsfri konsultation.
          </p>
        </div>

        {/* Treatment Tabs for Improved Layout */}
        <div className="mb-12">
          {/* Desktop layout - tabs at top, content below */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {treatmentOptions.map((treatment, index) => (
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
                    <div className="flex items-center gap-2 mt-1">
                      <p className={selectedTreatment === index ? 'text-white/80' : 'text-gray-600'}>
                        {treatment.price}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {treatment.type === "inperson" && (
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            selectedTreatment === index ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-600'
                          }`}>
                            På kliniken
                          </span>
                        )}
                        {treatment.type === "both" && (
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            selectedTreatment === index ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-600'
                          }`}>
                            Distans/Kliniken
                          </span>
                        )}
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          selectedTreatment === index ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700'
                        }`}>
                          Friskvårdsberättigad
                        </span>
                      </div>
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
            {treatmentOptions.map((treatment, index) => (
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
                      <div className="flex items-center gap-2 mt-1">
                        <p className={openTabs.includes(index) ? 'text-white/80' : 'text-gray-600'}>
                          {treatment.price}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {treatment.type === "inperson" && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              openTabs.includes(index) ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-600'
                            }`}>
                              På kliniken
                            </span>
                          )}
                          {treatment.type === "both" && (
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              openTabs.includes(index) ? 'bg-white/20 text-white' : 'bg-purple-100 text-purple-600'
                            }`}>
                              Distans/Kliniken
                            </span>
                          )}
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            openTabs.includes(index) ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700'
                          }`}>
                            Friskvårdsberättigad
                          </span>
                        </div>
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
                    <TreatmentDetail treatment={treatment} />
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Expanded Treatment Details for Desktop */}
        <div className="hidden md:block relative min-h-[800px]">
          <div className="absolute inset-0">
            {treatmentOptions.map((treatment, index) => (
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
                  <TreatmentDetail treatment={treatment} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Treatment Detail Component to avoid duplicate code
const TreatmentDetail: React.FC<{ treatment: TreatmentOptionsProps['treatmentOptions'][0] }> = ({ treatment }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl p-8">
      <div className="grid md:grid-cols-[1fr,2fr] gap-8">
        {/* Left Column - Visual Information */}
        <div className="space-y-6">
          {/* Treatment Tag and Duration */}
          <div className="flex flex-col space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#064e3b]/10 text-[#064e3b] text-sm font-medium self-start">
              Frekvensbehandling
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#064e3b]" />
              <span className="text-gray-700">{treatment.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              {treatment.type === "inperson" ? (
                <>
                  <MapPin className="w-5 h-5 text-[#064e3b]" />
                  <span className="text-gray-700">Endast på kliniken</span>
                </>
              ) : (
                <>
                  <Globe className="w-5 h-5 text-[#064e3b]" />
                  <span className="text-gray-700">På kliniken eller distans</span>
                </>
              )}
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
          
          {/* Sessions Info */}
          <div className="space-y-4">
            <div className="bg-purple-50/50 rounded-xl p-4">
              <p className="font-medium text-purple-900 mb-2">Information:</p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#064e3b] mt-0.5" />
                  <p>{treatment.sessions}</p>
                </div>
              </div>
            </div>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={treatment.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
            >
              Boka {treatment.title}
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
          
          <div className="grid md:grid-cols-1 gap-6">
            {/* Treatment Details */}
            <div>
              <p className="font-medium text-purple-900 mb-3">Detta ingår:</p>
              <ul className="space-y-2">
                {treatment.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Treatment Process */}
          <div className="space-y-4">
            <h4 className="text-xl font-medium text-purple-900">Behandlingsprocess</h4>
            
            <div className="space-y-4">
              <div className="bg-purple-50/50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-[#064e3b]" />
                  <p className="font-medium text-purple-900">Förberedelse</p>
                </div>
                <p className="text-gray-700 text-sm">{treatment.details.preparation}</p>
              </div>
              
              <div className="bg-purple-50/50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-[#064e3b]" />
                  <p className="font-medium text-purple-900">Under behandlingen</p>
                </div>
                <p className="text-gray-700 text-sm">{treatment.details.process}</p>
              </div>
              
              <div className="bg-purple-50/50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-[#064e3b]" />
                  <p className="font-medium text-purple-900">Efter behandlingen</p>
                </div>
                <p className="text-gray-700 text-sm">{treatment.details.aftercare}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentOptions; 