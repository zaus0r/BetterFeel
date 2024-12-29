import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams, Link } from 'react-router-dom';
import TreatmentSection from '../../components/features/knowledge/TreatmentSection';
import { frequencyTherapyData, hifuData, plaxpotData } from '../../components/features/faq/data/treatmentData';
import { motion } from 'framer-motion';
import SEO from '../../components/common/SEO';
import BreadcrumbSchema from '../../components/common/BreadcrumbSchema';
import ArticleSchema from '../../components/common/ArticleSchema';
import { ArrowRight, ChevronDown } from 'lucide-react';
import OptimizedImage from '../../components/common/OptimizedImage';

const KnowledgeBase = () => {
  const [activeTab, setActiveTab] = useState('frequency');
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const section = searchParams.get('section');
    const tab = searchParams.get('tab');
    
    if (section === 'frekvensterapi') {
      setActiveTab('frequency');
      // Scroll to the section after a short delay to ensure content is rendered
      setTimeout(() => {
        const element = document.getElementById('treatment-content');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, searchParams]);

  const scrollToContent = () => {
    const element = document.getElementById('treatment-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Kunskapsbank | BetterFeel"
        description="Utforska vår kunskapsbank om moderna behandlingsmetoder, hudvård och holistisk hälsa. Få djupgående insikter och expertråd."
        keywords="kunskapsbank, behandlingsguide, hudvård, hälsa, stockholm"
        url="https://betterfeel.se/kunskapsbank"
        preloadImages={['/assets/images/hero/knowledgebase_hero.webp']}
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Kunskapsbank", item: "/kunskapsbank" }
        ]}
      />
      {activeTab === 'frequency' && (
        <ArticleSchema
          headline="Vad är Frekvensterapi (Bioresonans) och hur fungerar det?"
          description="Upptäck hur frekvensterapi arbetar med kroppens energifält för att återställa balans och främja naturlig läkning. Lär dig om vetenskapen bakom bioresonans och dess fördelar för din hälsa."
          author="Irene Nilsson"
          publishedDate="2024-01-01"
          url="https://betterfeel.se/kunskapsbank?section=frekvensterapi"
          image="/assets/images/treatments/frequency/hero.jpg"
        />
      )}
      {activeTab === 'hifu' && (
        <ArticleSchema
          headline="HIFU Behandling - Modern Hudföryngring med Ultraljud"
          description="Fördjupa dig i hur HIFU-teknologin använder fokuserat ultraljud för hudföryngring och åtstramning. Förstå processen, fördelarna och vetenskapen bakom behandlingen."
          author="Irene Nilsson"
          publishedDate="2024-01-01"
          url="https://betterfeel.se/kunskapsbank?section=hifu"
          image="/assets/images/treatments/hifu/hero.jpg"
        />
      )}
      {activeTab === 'plaxpot' && (
        <ArticleSchema
          headline="Plaxpot Plasma - Innovativ Hudföryngring"
          description="Utforska hur Plaxpot använder plasmateknik för effektiv hudföryngring. Lär dig om behandlingsprocessen, fördelarna och den bakomliggande vetenskapen."
          author="Irene Nilsson"
          publishedDate="2024-01-01"
          url="https://betterfeel.se/kunskapsbank?section=plaxpot"
          image="/assets/images/treatments/plaxpot/hero.jpg"
        />
      )}
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen md:min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <picture>
              <source
                srcSet="/assets/images/hero/knowledge_hero.webp"
                type="image/webp"
              />
              <OptimizedImage
                src="/assets/images/hero/knowledge_hero.jpg"
                alt="BetterFeel Kunskapsbank - Fördjupa dig i modern behandling och hälsa"
                isBackground
                priority
                className="absolute inset-0 w-full h-full object-cover"
                width={1920}
                height={1280}
                quality={85}
              />
            </picture>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative z-10 w-full text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-16 md:pt-32 pb-12 sm:pb-20 mt-[-8rem] sm:mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center justify-center mb-6"
              >
                <div className="h-px w-8 bg-rose-300 mr-4"></div>
                <span className="text-rose-200 uppercase tracking-wider text-base sm:text-lg font-medium" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Kunskapsbank</span>
                <div className="h-px w-8 bg-rose-300 ml-4"></div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
              >
                Behandlingsguide
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg lg:text-xl text-purple-50 max-w-2xl mx-auto mb-8"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
              >
                Utforska våra avancerade estetiska behandlingar och få djupgående insikter 
                om moderna teknologier för hudföryngring och kroppsskulptering.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex justify-center"
              >
                <button
                  onClick={scrollToContent}
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white text-base rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                >
                  Läs mer
                  <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Treatment Tabs */}
        <section id="treatment-content" className="py-20 bg-gradient-to-b from-white to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-purple-50 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('frequency')}
                  className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
                    activeTab === 'frequency' 
                      ? 'bg-purple-900 text-white' 
                      : 'text-purple-900 hover:bg-purple-100'
                  }`}
                >
                  Frekvensbehandling
                </button>
                <button
                  onClick={() => setActiveTab('hifu')}
                  className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
                    activeTab === 'hifu' 
                      ? 'bg-purple-900 text-white' 
                      : 'text-purple-900 hover:bg-purple-100'
                  }`}
                >
                  HIFU
                </button>
                <button
                  onClick={() => setActiveTab('plaxpot')}
                  className={`px-6 py-2 rounded-lg transition-colors duration-300 ${
                    activeTab === 'plaxpot' 
                      ? 'bg-purple-900 text-white' 
                      : 'text-purple-900 hover:bg-purple-100'
                  }`}
                >
                  Plaxpot
                </button>
              </div>
            </div>

            {activeTab === 'frequency' && (
              <TreatmentSection 
                data={frequencyTherapyData} 
                searchQuery="" 
              />
            )}
            {activeTab === 'hifu' && (
              <TreatmentSection 
                data={hifuData} 
                searchQuery="" 
              />
            )}
            {activeTab === 'plaxpot' && (
              <TreatmentSection 
                data={plaxpotData} 
                searchQuery="" 
              />
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default KnowledgeBase;