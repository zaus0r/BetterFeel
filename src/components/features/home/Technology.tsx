import React from 'react';
import { CircuitBoard, Cpu, Database } from 'lucide-react';

const Technology = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vår Teknologi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vi använder den senaste teknologin inom biofeedback och frekvensmedicin för att hjälpa dig uppnå optimal hälsa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <CircuitBoard className="h-12 w-12 text-[#0047AB] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Biofeedback Teknologi</h3>
            <p className="text-gray-600">
              Avancerad biofeedback-utrustning som hjälper dig förstå och optimera din kropps signaler
            </p>
          </div>

          <div className="text-center">
            <Cpu className="h-12 w-12 text-[#0047AB] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Frekvensbehandling</h3>
            <p className="text-gray-600">
              Skräddarsydda frekvensbehandlingar baserade på din kropps unika behov
            </p>
          </div>

          <div className="text-center">
            <Database className="h-12 w-12 text-[#0047AB] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Datadriven Analys</h3>
            <p className="text-gray-600">
              Omfattande analys och uppföljning av din behandling för optimala resultat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
