import React from 'react';
import SEO from '../components/common/SEO';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import { FileText, AlertCircle, Scale, Shield, Cookie } from 'lucide-react';

const TermsOfUse = () => {
  return (
    <>
      <SEO
        title="Användarvillkor | BetterFeel"
        description="Läs om BetterFeels användarvillkor och bokningsregler."
        url="https://betterfeel.se/anvandarvillkor"
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Användarvillkor", item: "/anvandarvillkor" }
        ]}
      />
      <main className="min-h-screen bg-gradient-to-b from-white to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-purple-200/30">
            <h1 className="text-3xl md:text-4xl font-serif text-purple-900 mb-6 text-center">Användarvillkor</h1>
            
            <p className="text-gray-700 mb-12 text-lg">
              Genom att använda vår webbplats och våra tjänster godkänner du dessa villkor. Vi rekommenderar att du läser dem noggrant innan du använder våra tjänster.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-serif text-purple-900 mb-4">Allmänna Villkor</h2>
                <p className="text-gray-700">
                  Dessa användarvillkor reglerar din användning av BetterFeels webbplats och tjänster. Genom att använda våra tjänster accepterar du att följa dessa villkor. Om du inte accepterar villkoren, vänligen avstå från att använda våra tjänster.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-purple-900 mb-4">Cookies och Spårning</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-serif text-purple-900 mb-2">Vad är cookies?</h3>
                    <p className="text-gray-700">
                      Cookies är små textfiler som lagras på din enhet när du besöker vår webbplats. De används för att förbättra din upplevelse och hjälpa oss att förstå hur webbplatsen används.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-purple-900 mb-2">Hur vi använder cookies</h3>
                    <p className="text-gray-700 mb-2">Vi använder cookies för att:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Komma ihåg dina inställningar och preferenser</li>
                      <li>Analysera hur webbplatsen används och förbättra våra tjänster</li>
                      <li>Möjliggöra vissa funktioner på webbplatsen</li>
                      <li>Anpassa innehåll och marknadsföring efter dina intressen</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-purple-900 mb-2">Dina val gällande cookies</h3>
                    <p className="text-gray-700">
                      Du kan hantera eller inaktivera cookies i din webbläsare. Observera att vissa funktioner på webbplatsen kan begränsas om du väljer att inaktivera cookies. För mer information, se vår Cookiepolicy.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-purple-900 mb-4">Bokningsvillkor</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-serif text-purple-900 mb-2">Avbokning</h3>
                    <p className="text-gray-700">
                      Avbokning ska ske senast 24 timmar före bokad tid. Vid senare avbokning eller uteblivet besök debiteras full behandlingskostnad.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif text-purple-900 mb-2">Betalning</h3>
                    <p className="text-gray-700 mb-2">Betalning sker i samband med behandlingen. Vi accepterar följande betalningsmetoder:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Kortbetalning</li>
                      <li>Swish</li>
                      <li>Kontant betalning</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-purple-900 mb-4">Ansvarsbegränsning</h2>
                <p className="text-gray-700">
                  BetterFeel ansvarar inte för indirekta skador eller förluster som kan uppstå i samband med användning av våra tjänster. Vi förbehåller oss rätten att när som helst ändra eller avbryta tjänster utan föregående meddelande.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-purple-900 mb-4">Immateriella Rättigheter</h2>
                <p className="text-gray-700">
                  Allt innehåll på webbplatsen, inklusive men inte begränsat till text, bilder, logotyper och design, är skyddat av upphovsrätt och andra immateriella rättigheter som tillhör BetterFeel eller våra licensgivare. Det är förbjudet att kopiera, distribuera, ändra eller reproducera innehåll utan skriftligt medgivande från oss.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-purple-900 mb-4">Ändringar i Villkoren</h2>
                <p className="text-gray-700">
                  Vi förbehåller oss rätten att när som helst ändra dessa villkor. Väsentliga ändringar kommer att meddelas via webbplatsen. Fortsatt användning av tjänsterna efter sådana ändringar utgör ett godkännande av de nya villkoren.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsOfUse;