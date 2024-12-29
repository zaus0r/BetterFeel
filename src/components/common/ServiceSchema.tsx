import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image: string;
  provider: string;
  areaServed: string;
  price: string;
  priceCurrency: string;
}

const ServiceSchema = ({
  name,
  description,
  url,
  image,
  provider,
  areaServed,
  price,
  priceCurrency
}: ServiceSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "serviceType": name,
    "name": name,
    "description": description,
    "url": url,
    "image": image,
    "provider": {
      "@type": "Organization",
      "name": provider
    },
    "areaServed": areaServed,
    "priceRange": `${price} ${priceCurrency}`,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": priceCurrency,
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ServiceSchema; 