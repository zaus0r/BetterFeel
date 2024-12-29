import React from 'react';
import { Sparkles, Brain, Zap, Activity } from 'lucide-react';

const InfoSection = () => {
  return (
    <section id="info" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Upptäck Kraften i Frekvens & Biofeedback
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0047AB] to-[#50C878] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vår avancerade teknologi kombinerar traditionell visdom med modern vetenskap
            för att hjälpa dig uppnå optimal hälsa och välbefinnande.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <Sparkles className="h-12 w-12 text-[#0047AB] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Frekvensbehandling</h3>
            <p className="text-gray-600 leading-relaxed">
              Varje cell i din kropp har sin egen unika frekvens. Genom att använda 
              specifika frekvenser kan vi hjälpa kroppen att återställa sin naturliga balans 
              och självläkande förmåga.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <Brain className="h-12 w-12 text-[#0047AB] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Biofeedback Teknologi</h3>
            <p className="text-gray-600 leading-relaxed">
              Vår avancerade biofeedback-utrustning läser av kroppens signaler i realtid, 
              vilket ger oss möjlighet att skapa individuellt anpassade behandlingar för 
              optimala resultat.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Vetenskaplig Grund</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Zap className="h-6 w-6 text-[#0047AB] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium mb-2">Kvantfysik & Hälsa</h4>
                <p className="text-gray-600">
                  Modern forskning visar att våra celler kommunicerar genom 
                  elektromagnetiska signaler, vilket ligger till grund för våra behandlingar.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Activity className="h-6 w-6 text-[#0047AB] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium mb-2">Framtidens Medicin</h4>
                <p className="text-gray-600">
                  Vi står i framkant av en ny era inom hälsovård, där teknologi och 
                  naturlig läkning möts för att skapa hållbara resultat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
