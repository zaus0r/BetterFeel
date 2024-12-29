import React from 'react';
import { Zap, Waves, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Animation from '../../common/Animation';

const treatments = [
  {
    icon: Waves,
    title: "HIFU",
    description: "High-Intensity Focused Ultrasound (HIFU) är en revolutionerande, icke-kirurgisk metod för hudåtstramning och föryngring som använder ultraljudets kraft för att stimulera naturlig kollagenproduktion.",
    benefits: [
      "Synlig hudåtstramning utan kirurgi",
     // "Långvariga resultat upp till 18 månader",
      "Minimal återhämtningstid",
      "Naturligt utseende"
    ],
    idealFor: [
      "Personer som önskar naturlig hudföryngring",
      "Åldrar: från 30 år",
      "De som vill undvika kirurgiska ingrepp"
    ],
    science: "Kliniskt beprövad teknologi med över 10 års forskning",
    price: "Från 1495 kr per behandling",
    link: "/hifu"
  },
  {
    icon: Zap,
    title: "Frekvensterapi",
    description: "Vår avancerade QUEX-ED biofeedback-teknologi analyserar och balanserar kroppens energifält för optimal hälsa och välbefinnande genom precisa frekvensbehandlingar.",
    benefits: [
      "Reducerad stress och ångest",
      "Förbättrad sömnkvalitet",
      "Ökad energi och vitalitet",
      "Stärkt immunförsvar"
    ],
    idealFor: [
      "Personer med stress och utmattning",
      "De som söker naturlig läkning",
      "Individer med kroniska besvär"
    ],
    science: "Baserad på kvantfysikens principer och bioresonans",
    price: "Från 749 kr per session",
    link: "/frekvensterapi"
  },
  {
    icon: Sparkles,
    title: "Plaxpot",
    description: "Plaxpot använder innovativ plasmateknik för skonsam hudföryngring och behandling av specifika hudtillstånd, perfekt för den som önskar målriktade resultat.",
    benefits: [
      "Effektiv behandling av överflödig hud",
      "Precisionsbehandling för specifika områden",
      "Snabb läkning",
      "Bestående resultat"
    ],
    idealFor: [
      "Personer som önskar målriktad hudbehandling",
      "De som söker alternativ till kirurgi",
      "Alla hudtyper"
    ],
    science: "CE-certifierad teknologi med dokumenterad effekt",
    price: "Från 1800 kr per behandling",
    link: "/plaxpot"
  }
];

const TreatmentOverview = () => {
  return (
    <section id="treatments" className="py-20 bg-gradient-to-b from-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4"
          >
            Våra Behandlingar
          </Animation>

          <Animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-serif text-purple-900 mb-6"
          >
            Innovativa Lösningar inom hudvård
          </Animation>

          <Animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Vi erbjuder evidensbaserade behandlingar som kombinerar det bästa från 
            modern teknologi och naturlig läkning.
          </Animation>
        </div>

        <Animation 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {treatments.map((treatment, index) => (
            <Animation 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-purple-200/30 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#064e3b]/0 to-[#064e3b]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex-1 relative">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 shadow-sm">
                    <treatment.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-serif text-purple-900 ml-4">
                    {treatment.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {treatment.description}
                </p>

                {/* Benefits */}
                <div className="mb-6 space-y-3">
                  <h4 className="font-medium text-purple-900 mb-3">Fördelar</h4>
                  <ul className="space-y-2">
                    {treatment.benefits.map((benefit, i) => (
                      <Animation 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start text-gray-600"
                      >
                        <Check className="w-5 h-5 text-sage-500 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </Animation>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="mb-6">
                  <h4 className="font-medium text-purple-900 mb-3">Passar för dig som</h4>
                  <ul className="space-y-2">
                    {treatment.idealFor.map((ideal, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <ArrowRight className="w-4 h-4 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                        <span>{ideal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Science & Price */}
                <div className="mb-6 p-4 bg-purple-50/80 rounded-lg border border-purple-100/50">
                  <p className="text-sm text-purple-900 mb-2">
                    <strong>Vetenskaplig grund:</strong> {treatment.science}
                  </p>
                  <p className="text-sm text-purple-900">
                    <strong>Pris:</strong> {treatment.price}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center">
                <Animation
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Link
                    to={treatment.link}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    Läs mer om {treatment.title}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Animation>
              </div>
            </Animation>
          ))}
        </Animation>
      </div>
    </section>
  );
};

export default TreatmentOverview;
