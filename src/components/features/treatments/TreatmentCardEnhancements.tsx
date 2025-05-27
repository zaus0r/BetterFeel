import React from 'react';
import { Check, Clock } from 'lucide-react';

// Interface for suitability indicators
export interface SuitabilityInfo {
  skinTypes: string[];
  concerns: string[];
  aftercare: string[];
}

// Suitability information for each treatment
export const treatmentSuitability: Record<string, SuitabilityInfo> = {
  "Anti Aging": {
    skinTypes: ["Normal", "Torr", "Mogen"],
    concerns: ["Fina linjer", "Rynkor", "Slapp hud", "Ojämn hudton"],
    aftercare: [
      "Använd solskydd SPF 30+ dagligen",
      "Undvik starka exfolierande produkter i 48 timmar",
      "Håll huden återfuktad med en rik fuktkräm",
      "Undvik makeup i 24 timmar för bästa resultat"
    ]
  },
  "Glass Skin (Maximal Återfuktning)": {
    skinTypes: ["Alla hudtyper", "Särskilt torr", "Uttorkad"],
    concerns: ["Torr hud", "Glåmig hy", "Ojämn hudton", "Fuktfattig hud"],
    aftercare: [
      "Fortsätt med intensiv återfuktning i 7 dagar",
      "Använd en återfuktande ansiktsmist under dagen",
      "Undvik uttorkande produkter och alkoholbaserade toners",
      "Drick extra vatten för att stödja hudens hydrering"
    ]
  },
  "Koreansk Kemisk Peeling": {
    skinTypes: ["Alla hudtyper", "Känslig (mild peeling)", "Fet", "Kombinerad"],
    concerns: ["Acne", "Pigmentfläckar", "Ojämn hudstruktur", "Fina linjer"],
    aftercare: [
      "Använd solskydd SPF 50 dagligen i minst 2 veckor",
      "Undvik direkt solexponering i 7-14 dagar",
      "Använd endast milda, återfuktande produkter",
      "Undvik exfoliering och retinolprodukter i 7 dagar"
    ]
  },
  "Premium/Skräddarsydd behandling": {
    skinTypes: ["Alla hudtyper"],
    concerns: ["Kombinerade hudproblem", "Specifika hudbekymmer", "Åldrande hud"],
    aftercare: [
      "Följ din skräddarsydda eftervårdsrutin från din hudterapeut",
      "Använd de rekommenderade produkterna för optimalt resultat",
      "Boka in din uppföljningsbehandling enligt rekommendation",
      "Använd solskydd dagligen för att bevara resultatet"
    ]
  }
};

// Function to visualize treatment duration
export const renderDurationVisual = (duration: string, inHeader = false) => {
  // Extract minutes from duration string (e.g., "70 min" -> 70)
  const minutes = parseInt(duration.split(' ')[0]);
  
  // For ranges like "15-30 min", use the average
  if (isNaN(minutes)) {
    const range = duration.split(' ')[0].split('-');
    if (range.length === 2) {
      const min = parseInt(range[0]);
      const max = parseInt(range[1]);
      if (!isNaN(min) && !isNaN(max)) {
        return renderSimpleDuration(duration, inHeader);
      }
    }
    return null;
  }
  
  return renderSimpleDuration(duration, inHeader);
};

// Helper function to render a simple duration indicator
const renderSimpleDuration = (duration: string, inHeader = false) => {
  const textColor = inHeader ? "text-white/90" : "text-gray-600";
  const iconColor = inHeader ? "text-white" : "text-[#064e3b]";
  
  return (
    <div className="mt-2 flex items-center">
      <Clock className={`w-4 h-4 ${iconColor} mr-1.5`} />
      <span className={`text-sm ${textColor}`}>
        {duration}
      </span>
    </div>
  );
};

// Component to render suitability indicators
export const SuitabilityIndicators: React.FC<{ treatmentTitle: string }> = ({ treatmentTitle }) => {
  const suitability = treatmentSuitability[treatmentTitle];
  
  if (!suitability) return null;
  
  return (
    <div className={`mb-6 border-b border-gray-200 pb-4 ${
      treatmentTitle.includes("Premium") || treatmentTitle.includes("Anti Aging") || treatmentTitle.includes("Glass Skin") ? 'mb-4 pb-2' : ''
    }`}>
      <h4 className="font-medium text-purple-900 mb-3">Passar för:</h4>
      
      {/* Skin Types */}
      <div className="mb-3">
        <h5 className={`text-sm font-medium text-gray-700 mb-2 ${
          treatmentTitle.includes("Premium") || treatmentTitle.includes("Anti Aging") || treatmentTitle.includes("Glass Skin") ? 'mb-1' : ''
        }`}>Hudtyp:</h5>
        <div className="flex flex-wrap gap-2">
          {suitability.skinTypes.map((type, i) => (
            <span key={i} className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">
              {type}
            </span>
          ))}
        </div>
      </div>
      
      {/* Concerns */}
      <div>
        <h5 className={`text-sm font-medium text-gray-700 mb-2 ${
          treatmentTitle.includes("Premium") || treatmentTitle.includes("Anti Aging") || treatmentTitle.includes("Glass Skin") ? 'mb-1' : ''
        }`}>Hudproblem:</h5>
        <div className="flex flex-wrap gap-2">
          {suitability.concerns.map((concern, i) => (
            <span key={i} className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">
              {concern}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Component to render aftercare information
export const AftercareInfo: React.FC<{ treatmentTitle: string }> = ({ treatmentTitle }) => {
  const suitability = treatmentSuitability[treatmentTitle];
  
  if (!suitability) return null;
  
  return (
    <div className="mt-6 pt-4 border-t border-gray-200">
      <h4 className="font-medium text-purple-900 mb-3">Eftervård:</h4>
      <ul className={`space-y-2 ${
        treatmentTitle.includes("Premium") || treatmentTitle.includes("Anti Aging") || treatmentTitle.includes("Glass Skin") ? 'grid grid-cols-2 gap-x-2 gap-y-1 space-y-0' : ''
      }`}>
        {suitability.aftercare.map((tip, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-600">
            <Check className="w-4 h-4 text-[#064e3b] mt-1 flex-shrink-0" />
            <span className={`text-sm ${
              treatmentTitle.includes("Premium") || treatmentTitle.includes("Anti Aging") || treatmentTitle.includes("Glass Skin") ? 'text-xs' : ''
            }`}>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}; 