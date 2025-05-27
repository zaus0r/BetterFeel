import { Helmet } from 'react-helmet-async';

interface TreatmentSchemaProps {
  name: string;
  description: string;
  url: string;
  image: string;
  provider: string;
  providerUrl: string;
  price: string;
  priceCurrency: string;
  duration: string;
  treatmentCategory: string;
  suitableFor?: string[];
  benefitsDescription?: string;
  aftercare?: string[];
  bookingUrl: string;
}

const TreatmentSchema = ({
  name,
  description,
  url,
  image,
  provider,
  providerUrl,
  price,
  priceCurrency,
  duration,
  treatmentCategory,
  suitableFor = [],
  benefitsDescription = "",
  aftercare = [],
  bookingUrl
}: TreatmentSchemaProps) => {
  // Helper function to format the price correctly
  const formatPrice = (price: string) => {
    // If price contains "från" or "-", extract just the number
    if (price.includes('från')) {
      return price.replace('från', '').trim();
    }
    if (price.includes('-')) {
      // Return the lower value in the range
      return price.split('-')[0].trim();
    }
    return price.trim();
  };

  const formattedPrice = formatPrice(price);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": name,
    "procedureType": "https://schema.org/CosmeticProcedure",
    "description": description,
    "url": url,
    "image": image,
    "howPerformed": {
      "@type": "Text",
      "text": `${name} är en ${treatmentCategory} utförd av professionella terapeuter.`
    },
    "preparation": {
      "@type": "Text",
      "text": "Ingen särskild förberedelse krävs för denna behandling."
    },
    "followup": {
      "@type": "Text",
      "text": aftercare.length > 0 
        ? aftercare.join(". ") 
        : "Specifika eftervårdsinstruktioner ges efter behandlingen."
    },
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": priceCurrency,
      "value": formattedPrice
    },
    "performedBy": {
      "@type": "HealthAndBeautyBusiness",
      "name": provider,
      "url": providerUrl
    },
    "benefitsHealthAspect": benefitsDescription,
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Cosmetic"
    },
    "typicalAgeRange": suitableFor.length > 0 ? suitableFor.join(", ") : "Vuxna",
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": bookingUrl
      },
      "result": {
        "@type": "Reservation",
        "name": `Bokning av ${name}`
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

export default TreatmentSchema; 