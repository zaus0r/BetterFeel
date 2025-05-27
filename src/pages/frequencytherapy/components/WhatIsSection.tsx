import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, Quote, Timer, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../../../components/common/OptimizedImage';

const WhatIsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content grid */}
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-purple-900 mb-6">Vad är Frekvensterapi?</h2>
            <div className="prose prose-lg prose-purple">
              <p className="text-gray-700 mb-6">
                Frekvensterapi (eller Bioresonans) är en kraftfull, naturlig behandling som hjälper din kropp att återfå balans genom att använda specifika frekvenser. Det här är en metod som arbetar med kroppens energifält för att återställa harmoni och stödja självläkning—utan att du behöver vara fysiskt närvarande.
              </p>
            </div>

            <h3 className="text-xl font-medium text-purple-900 mt-8 mb-4">Så fungerar det</h3>
            <p className="text-gray-700 mb-6">
              Frekvensterapi skickar specifika frekvenser till din kropp, som hjälper till att identifiera och åtgärda obalanser. Genom avancerad teknologi kan vi analysera din kropp och hjälpa den att återhålla sig, stärka immunförsvaret och lindra stress. Behandlingen är enkel, effektiv och kan göras på distans—från var du än är.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-purple-50/50 rounded-xl p-6">
                <Brain className="w-8 h-8 text-[#064e3b] mb-4" />
                <h3 className="text-xl font-medium text-purple-900 mb-2">Holistisk Metod</h3>
                <p className="text-gray-600">Behandlar hela kroppen på energinivå</p>
              </div>
              <div className="bg-purple-50/50 rounded-xl p-6">
                <Activity className="w-8 h-8 text-[#064e3b] mb-4" />
                <h3 className="text-xl font-medium text-purple-900 mb-2">Effektiv Balansering</h3>
                <p className="text-gray-600">Återställer kroppens naturliga frekvenser</p>
              </div>
            </div>

            {/* Featured Quote */}
            <div className="mt-8 bg-purple-50/50 rounded-xl p-6">
              <Quote className="w-8 h-8 text-[#064e3b] mb-4" />
              <blockquote className="text-lg text-gray-700 italic">
                "Frekvensterapi är en av de mest effektiva metoderna för att återställa kroppens naturliga balans och energi."
              </blockquote>
              <p className="mt-4 text-sm text-gray-600">- Dr. Maria Andersson, Holistisk Hälsoexpert</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl self-start">
              <div className="relative aspect-square w-full">
                <OptimizedImage 
                  src="/assets/images/location/clinic-odenplan-exterior_optimized.png"
                  alt="BetterFeel klinik vid Odenplan - Frekvensterapi behandling"
                  className="w-full h-full"
                  objectFit="cover"
                  objectPosition="center"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-medium mb-2">Välkommen till vår klinik</h3>
                  <p className="text-lg opacity-90">En oas av lugn och harmoni</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-medium text-purple-900 mb-4">Fördelar med Frekvensterapi</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#064e3b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-900">Ökad energi</h4>
                    <p className="text-gray-600 text-sm">Återställ kroppens naturliga flöde och känn dig mer vital</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-[#064e3b]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-900">Stressreducering</h4>
                    <p className="text-gray-600 text-sm">Upplev djup avslappning och inre balans</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Additional benefits and distance treatment cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-medium text-purple-900 mb-6">Fler fördelar med Frekvensterapi</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Timer className="w-6 h-6 text-[#064e3b]" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-purple-900">Bättre sömn</h4>
                  <p className="text-gray-600">Förbättra din sömnkvalitet och vakna upp utvilad</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#064e3b]" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-purple-900">Stärkt immunförsvar</h4>
                  <p className="text-gray-600">Hjälp kroppen att motverka infektioner och hålla sig frisk</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#064e3b]" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-purple-900">Friskvårdsberättigad</h4>
                  <p className="text-gray-600">Utnyttja ditt friskvårdsbidrag för frekvensbehandlingar hos oss</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-medium text-purple-900 mb-6">Distansbehandling – Enkelt och Bekvämt</h3>
            <p className="text-gray-700 mb-6">
              Du kan ta emot behandlingen var du än befinner dig. Oavsett om du är hemma eller på resande fot, 
              skickas frekvenserna till din kropp via energifältet. Du behöver bara slappna av och ta emot vi gör resten.
            </p>
            
            <div className="mt-6">
              <Link 
                to="/kunskapsbank" 
                className="inline-flex items-center text-[#064e3b] font-medium hover:underline"
              >
                Läs mer i kunskapsbanken <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection; 