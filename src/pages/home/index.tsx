import React from 'react';
import Hero from '../../components/features/home/Hero';
import TreatmentOverview from '../../components/features/home/TreatmentOverview';
import Testimonials from '../../components/features/home/Testimonials';
import Pricing from '../../components/features/home/Pricing';
import Certifications from '../../components/features/home/Certifications';
import CallToAction from '../../components/features/home/CallToAction';
import SEO from '../../components/common/SEO';
import BreadcrumbSchema from '../../components/common/BreadcrumbSchema';
import AppointmentSchema from '../../components/common/AppointmentSchema';

const Home = () => {
  return (
    <>
      <SEO
        title="BetterFeel - Holistisk hälsa och välbefinnande i Vasastan, Stockholm"
        description="Upptäck holistisk hälsa och välbefinnande hos BetterFeel i Vasastan, Stockholm. Vi erbjuder HIFU, Plaxpot, Microneedling, hudvård, frekvensterapi och coaching för optimal hälsa och balans."
        keywords="holistisk hälsa, HIFU behandling, Plaxpot, Microneedling, hudvård, frekvensterapi, coaching, välbefinnande, Stockholm, Vasastan"
        url="https://betterfeel.se"
        preloadImages={['/assets/images/hero/BetterFeel_Hero.webp']}
      />
      <BreadcrumbSchema
        items={[
          { name: "Hem", item: "/" }
        ]}
      />
      <AppointmentSchema
        serviceName="Holistisk Hälsa och Välbefinnande"
        serviceUrl="https://betterfeel.se"
        businessName="BetterFeel"
        businessUrl="https://betterfeel.se"
        description="Boka tid för konsultation hos BetterFeel i Vasastan, Stockholm. Vi erbjuder HIFU, Plaxpot, Microneedling, hudvård, frekvensterapi och holistisk coaching."
        areaServed="Vasastan, Stockholm"
        bookingUrl="https://www.bokadirekt.se/boka-tjanst/betterfeel-sverige-ab-56180/konsultation-telefon-3124094"
        telephoneNumber="+46737140860"
        address={{
          street: "Kungstensgatan 59",
          city: "Stockholm",
          region: "Stockholm",
          postalCode: "113 29",
          country: "SE"
        }}
      />
      <main className="min-h-screen">
        <Hero />
        <TreatmentOverview />
        <Testimonials />
        <Pricing />
        <Certifications />
        <CallToAction />
      </main>
    </>
  );
};

export default Home;
