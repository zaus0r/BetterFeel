import { Helmet } from 'react-helmet-async';

const WebSiteSchema = () => {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://betterfeel.se/#website",
    "url": "https://betterfeel.se",
    "name": "BetterFeel",
    "description": "Holistisk hälsa och välbefinnande i Stockholm. Vi erbjuder HIFU, Plaxpot, frekvensterapi och coaching för optimal hälsa.",
    "publisher": {
      "@type": "Organization",
      "@id": "https://betterfeel.se/#organization",
      "name": "BetterFeel Sverige AB",
      "url": "https://betterfeel.se",
      "logo": {
        "@type": "ImageObject",
        "url": "https://betterfeel.se/assets/branding/logos/BetterFeel_Logo.png"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61554186415765",
        "https://www.instagram.com/ubetterfeel/"
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://betterfeel.se/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "sv-SE"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema)}
      </script>
    </Helmet>
  );
};

export default WebSiteSchema; 