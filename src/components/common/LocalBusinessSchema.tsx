import React from 'react';

const LocalBusinessSchema: React.FC = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'BetterFeel',
    image: 'https://betterfeel.se/assets/branding/logos/BetterFeel_Logo.png',
    '@id': 'https://betterfeel.se',
    url: 'https://betterfeel.se',
    telephone: '+46737140860',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kungstensgatan 59',
      addressLocality: 'Stockholm',
      addressRegion: 'Vasastan',
      postalCode: '113 29',
      addressCountry: 'SE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 59.34275,
      longitude: 18.05091
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=61554186415765',
      'https://www.instagram.com/ubetterfeel/'
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Stockholm',
      containsPlace: [
        {
          '@type': 'Neighborhood',
          name: 'Vasastan',
          description: 'Centralt beläget i Vasastan, nära Sabbatsbergs Sjukhus och Wasahallen'
        }
      ]
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Kollektivtrafik',
        value: 'Tunnelbana och pendeltåg vid Odenplan (5 min promenad). Busshållplatser vid både Odenplan och Sabbatsbergs sjukhus'
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Parkering',
        value: 'Gatuparkering tillgänglig direkt utanför salongen på Kungstensgatan'
      }
    ],
    publicAccess: true,
    isAccessibleForFree: false,
    description: 'BetterFeel erbjuder avancerade behandlingar inom hudföryngring och välbefinnande, inklusive HIFU, Plaxpot, frekvensterapi och coaching. Centralt beläget i Vasastan, Stockholm, nära Sabbatsbergs Sjukhus, Wasahallen, Drottninggatan, och Observatorielunden.',
    hasMap: 'https://www.google.com/maps?q=59.34275,18.05091',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Närliggande Landmärken',
        value: 'Sabbatsbergs Sjukhus, Wasahallen, Drottninggatan, Swedenborgskyrkan vid Tegnérlunden, Observatorielunden'
      }
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'HIFU Behandling',
        description: 'High-Intensity Focused Ultrasound för hudföryngring'
      },
      {
        '@type': 'Offer',
        name: 'Plaxpot Behandling',
        description: 'Innovativ plasmabehandling för hudföryngring'
      },
      {
        '@type': 'Offer',
        name: 'Frekvensterapi',
        description: 'Holistisk behandling för välbefinnande'
      },
      {
        '@type': 'Offer',
        name: 'Coaching',
        description: 'Personlig coaching för optimal hälsa och välbefinnande'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default LocalBusinessSchema; 