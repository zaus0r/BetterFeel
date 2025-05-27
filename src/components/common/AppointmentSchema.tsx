import { Helmet } from 'react-helmet-async';

interface AppointmentSchemaProps {
  serviceName: string;
  serviceUrl: string;
  businessName: string;
  businessUrl: string;
  description: string;
  areaServed: string;
  bookingUrl: string;
  telephoneNumber: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
}

const AppointmentSchema = ({
  serviceName,
  serviceUrl,
  businessName,
  businessUrl,
  description,
  areaServed,
  bookingUrl,
  telephoneNumber,
  address
}: AppointmentSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": serviceName,
    "url": serviceUrl,
    "provider": {
      "@type": "HealthAndBeautyBusiness",
      "name": businessName,
      "url": businessUrl,
      "telephone": telephoneNumber,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": address.street,
        "addressLocality": address.city,
        "addressRegion": address.region,
        "postalCode": address.postalCode,
        "addressCountry": address.country
      },
      "areaServed": areaServed
    },
    "description": description,
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": bookingUrl,
        "inLanguage": "sv-SE",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": `Bokning av ${serviceName}`
      }
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

export default AppointmentSchema; 