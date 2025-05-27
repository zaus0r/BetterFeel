import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  preloadImages?: string[];
}

const SEO = ({ 
  title = 'BetterFeel - Holistisk hälsa och välbefinnande',
  description = 'Upptäck holistisk hälsa och välbefinnande med BetterFeel. Vi erbjuder frekvensbehandlingar, coaching och moderna behandlingsmetoder för optimal hälsa.',
  keywords = 'holistisk hälsa, frekvensbehandling, coaching, välbefinnande, biofeedback, Stockholm',
  image = '/assets/branding/og/betterfeel-og.png',
  url = 'https://betterfeel.se',
  type = 'website',
  preloadImages = []
}: SEOProps) => {
  // Create the organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "BetterFeel",
    "image": image,
    "description": description,
    "@id": "https://betterfeel.se",
    "url": "https://betterfeel.se",
    "telephone": "+46737140860",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kungstensgatan 59",
      "addressLocality": "Stockholm",
      "postalCode": "113 29",
      "addressRegion": "Stockholm",
      "addressCountry": "SE"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  };

  return (
    <Helmet defaultTitle="BetterFeel" titleTemplate="%s">
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="facebook-domain-verification" content="1443088312955104" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Swedish" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={url} />

      {/* Preload critical images */}
      {preloadImages.map((imgSrc) => (
        <link 
          key={imgSrc}
          rel="preload" 
          as="image" 
          href={imgSrc} 
          type="image/webp"
        />
      ))}

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEO; 