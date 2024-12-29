import { Helmet } from 'react-helmet-async';

interface ServiceSEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url: string;
  serviceName: string;
  servicePrice?: string;
  preloadImages?: string[];
  treatments?: {
    name: string;
    description: string;
    duration: string;
    price: string;
    url: string;
  }[];
}

const ServiceSEO = ({
  title,
  description,
  keywords,
  image = '/assets/images/betterfeel-og.jpg',
  url,
  serviceName,
  servicePrice,
  preloadImages = [],
  treatments = []
}: ServiceSEOProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "serviceType": serviceName,
    "name": serviceName,
    "description": description,
    "url": url,
    "image": image,
    "provider": {
      "@type": "Organization",
      "name": "BetterFeel"
    },
    "areaServed": "Stockholm",
    "priceRange": servicePrice,
    "offers": treatments.map(treatment => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": treatment.name,
        "description": treatment.description,
        "price": treatment.price,
        "priceCurrency": "SEK",
        "duration": treatment.duration,
        "url": treatment.url
      }
    }))
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
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
      
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ServiceSEO; 