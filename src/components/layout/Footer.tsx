import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#064e3b] text-white">
      {/* Quote Section */}
      <div className="border-b border-white/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <blockquote className="text-lg md:text-2xl font-light italic mb-4 md:whitespace-nowrap">
            "Hälsa är inte bara frånvaro av sjukdom, utan ett tillstånd av fullständigt fysiskt, mentalt och socialt välbefinnande."
          </blockquote>
          <cite className="text-sm uppercase tracking-wider">- Världshälsoorganisationen WHO</cite>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <div className="flex items-start space-x-4" itemScope itemType="http://schema.org/LocalBusiness">
            <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Besök oss</h3>
              <address itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="text-white/90 not-italic">
                <span itemProp="streetAddress">Kungstensgatan 59</span><br />
                <span itemProp="postalCode">113 29</span> <span itemProp="addressLocality">Stockholm</span>
              </address>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Ring oss</h3>
              <a 
                href="tel:+46737140860" 
                itemProp="telephone"
                className="text-white/90 hover:text-white transition-colors duration-200"
              >
                073-714 08 60
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Maila oss</h3>
              <a 
                href="mailto:info@betterfeel.se" 
                itemProp="email"
                className="text-white/90 hover:text-white transition-colors duration-200"
              >
                info@betterfeel.se
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-start space-x-4">
            <div>
              <h3 className="font-semibold mb-4">Följ oss</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61554186415765"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  aria-label="Följ oss på Facebook"
                  itemProp="sameAs"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/ubetterfeel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  aria-label="Följ oss på Instagram"
                  itemProp="sameAs"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4">
              <p className="text-sm text-white/70">
                © {new Date().getFullYear()} BetterFeel Sverige AB. Alla rättigheter förbehållna.
              </p>
              <div className="flex space-x-4 text-sm text-white/70">
                <Link to="/integritetspolicy" className="hover:text-white transition-colors duration-200">
                  Integritetspolicy
                </Link>
                <Link to="/villkor" className="hover:text-white transition-colors duration-200">
                  Användarvillkor
                </Link>
                <button
                  onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                  className="hover:text-white transition-colors duration-200"
                >
                  Cookie-inställningar
                </button>
              </div>
            </div>
            <p className="text-sm text-white/70 flex items-center whitespace-nowrap">
              Skapad med <Heart className="w-4 h-4 mx-1 text-white/70" /> i Stockholm
            </p>
          </div>
        </div>
      </div>

      {/* Schema.org Organization Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "BetterFeel Sverige AB",
          "url": "https://betterfeel.se",
          "logo": "https://betterfeel.se/assets/branding/logos/BetterFeel_Logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kungstensgatan 59",
            "addressLocality": "Stockholm",
            "postalCode": "113 29",
            "addressCountry": "SE"
          },
          "telephone": "+46737140860",
          "email": "info@betterfeel.se",
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61554186415765",
            "https://www.instagram.com/ubetterfeel"
          ]
        })}
      </script>
    </footer>
  );
};

export default Footer;
