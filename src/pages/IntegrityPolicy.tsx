import React from 'react';
import SEO from '../components/common/SEO';
import BreadcrumbSchema from '../components/common/BreadcrumbSchema';
import { Mail, Phone } from 'lucide-react';

const IntegrityPolicy = () => {
  return (
    <>
      <SEO
        title="Integritetspolicy | BetterFeel"
        description="Läs om BetterFeels integritetspolicy och hur vi hanterar dina personuppgifter."
        url="https://betterfeel.se/integritetspolicy"
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" },
          { name: "Integritetspolicy", item: "/integritetspolicy" }
        ]}
      />
      <main className="min-h-screen bg-gradient-to-b from-white to-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-purple-200/30">
            <h1 className="text-3xl md:text-4xl font-serif text-purple-900 mb-6 text-center">Integritetspolicy</h1>
            
            <p className="text-gray-700 mb-12 text-lg">
              Din integritet är viktig för oss. Denna policy förklarar hur vi samlar in, använder, lagrar och skyddar dina personuppgifter, inklusive hur vi använder cookies, i enlighet med GDPR och gällande dataskyddslagstiftning.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-medium text-purple-900 mb-6">Personuppgiftsansvarig</h2>
                <p className="text-gray-700 mb-4">
                  BetterFeel Sverige AB är personuppgiftsansvarig för behandlingen av dina personuppgifter på denna webbplats.
                </p>
                <p className="text-gray-700 mb-6">Organisationsnummer: 559481-1951</p>
                
                <div className="bg-purple-50/50 rounded-xl p-6 space-y-4">
                  <h3 className="font-medium text-purple-900">Kontaktuppgifter:</h3>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">info@betterfeel.se</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">073-714 08 60</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-purple-900 mb-4">Vilka uppgifter samlar vi in?</h2>
                <p className="text-gray-700 mb-3">Vi samlar in och behandlar följande typer av information:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Kontaktinformation: Namn, e-postadress, telefonnummer</li>
                  <li>Bokningshistorik: Information om tidigare och framtida bokningar</li>
                  <li>Hälsoinformation: Endast information relevant för behandlingar (med ditt uttryckliga samtycke)</li>
                  <li>Teknisk information: IP-adress, webbläsartyp, och data om din användning av webbplatsen</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-purple-900 mb-4">Hur använder vi dina personuppgifter?</h2>
                <p className="text-gray-700 mb-3">Vi använder dina personuppgifter för att:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Tillhandahålla och förbättra våra tjänster</li>
                  <li>Hantera bokningar och utföra behandlingar</li>
                  <li>Kommunicera med dig om bokningar, erbjudanden och annan relevant information</li>
                  <li>Uppfylla våra rättsliga skyldigheter</li>
                </ul>
                <p className="text-gray-700">
                  Vi behandlar endast dina personuppgifter när vi har en rättslig grund, såsom ditt samtycke, ett avtal med dig, eller en laglig skyldighet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-purple-900 mb-4">Cookies och spårning</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-purple-900 mb-2">Vad är cookies?</h3>
                    <p className="text-gray-700">
                      Cookies är små textfiler som lagras på din enhet när du besöker vår webbplats. De används för att förbättra din upplevelse och hjälpa oss att analysera och optimera webbplatsens funktionalitet.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-purple-900 mb-2">Hur vi använder cookies</h3>
                    <p className="text-gray-700 mb-2">Vi använder cookies för att:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Komma ihåg dina inställningar och preferenser</li>
                      <li>Analysera hur webbplatsen används med hjälp av verktyg som Google Analytics</li>
                      <li>Anpassa innehåll och marknadsföring baserat på dina intressen (inklusive via HubSpot)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-purple-900 mb-2">Dina val gällande cookies</h3>
                    <p className="text-gray-700">
                      När du besöker vår webbplats första gången visas en cookie-banner som ber dig att acceptera eller hantera dina cookie-inställningar. Du kan när som helst ändra eller återkalla ditt samtycke via inställningarna i din webbläsare. Observera att vissa funktioner på webbplatsen kan påverkas om du väljer att avaktivera cookies.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-purple-900 mb-4">Lagring av dina uppgifter</h2>
                <p className="text-gray-700">
                  Vi lagrar dina personuppgifter så länge det är nödvändigt för att uppfylla de ändamål för vilka uppgifterna samlades in eller för att följa lagstadgade krav. När uppgifterna inte längre behövs raderar vi dem på ett säkert sätt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-purple-900 mb-4">Delning av personuppgifter</h2>
                <p className="text-gray-700 mb-3">Vi delar inte dina personuppgifter med tredje part utan ditt samtycke, förutom när det krävs för att:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Leverera våra tjänster (till exempel via bokningssystem eller analyspartners som Google och HubSpot)</li>
                  <li>Följa lagkrav eller rättsliga förpliktelser</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-purple-900 mb-4">Dina rättigheter</h2>
                <p className="text-gray-700 mb-3">Du har flera rättigheter enligt GDPR:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Rätt till insyn: Få tillgång till information om vilka personuppgifter vi har om dig</li>
                  <li>Rätt till rättelse: Begära att felaktiga eller ofullständiga uppgifter rättas</li>
                  <li>Rätt till radering: Begära att dina uppgifter raderas, under vissa omständigheter</li>
                  <li>Rätt till dataportabilitet: Få en kopia av dina personuppgifter i ett strukturerat format</li>
                  <li>Rätt att återkalla samtycke: Om du har gett ditt samtycke till behandling kan du när som helst återkalla det</li>
                  <li>Rätt att invända: Invända mot viss behandling av dina personuppgifter</li>
                </ul>
                <p className="text-gray-700">
                  För att utöva dina rättigheter, vänligen kontakta oss via info@betterfeel.se.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-purple-900 mb-4">Säkerhet för dina personuppgifter</h2>
                <p className="text-gray-700">
                  Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter från obehörig åtkomst, förlust eller missbruk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-purple-900 mb-4">Ändringar i integritetspolicyn</h2>
                <p className="text-gray-700">
                  Vi kan uppdatera denna policy vid behov för att återspegla förändringar i våra tjänster eller gällande lagstiftning. Den senaste versionen finns alltid tillgänglig på vår webbplats.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-purple-900 mb-4">Kontakta oss</h2>
                <p className="text-gray-700">
                  Vid frågor om denna integritetspolicy eller hur vi behandlar dina personuppgifter, vänligen kontakta oss via uppgifterna ovan.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default IntegrityPolicy;