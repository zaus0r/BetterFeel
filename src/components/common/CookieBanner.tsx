import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { setAnalyticsConsent } from '../../utils/analytics';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsOpen(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }

    // Listen for cookie settings button click
    const handleOpenSettings = () => {
      setIsOpen(true);
      setShowPreferences(true);
    };
    window.addEventListener('openCookieSettings', handleOpenSettings);

    return () => {
      window.removeEventListener('openCookieSettings', handleOpenSettings);
    };
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(newPreferences);
  };

  const handleRejectAll = () => {
    const newPreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(newPreferences);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    setPreferences(prefs);
    setIsOpen(false);
    setShowPreferences(false);
    
    // Enable/disable analytics based on user consent
    setAnalyticsConsent(prefs.analytics);
    
    if (prefs.marketing) {
      // Enable HubSpot
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-white/70 backdrop-blur-md border-t border-gray-200/30 shadow-lg">
        {!showPreferences ? (
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-gray-700 mb-2">
                  Vi använder cookies för att förbättra din upplevelse på vår webbplats. Vissa cookies är nödvändiga för webbplatsens funktion, medan andra hjälper oss att förstå hur webbplatsen används och förbättra våra tjänster.
                </p>
                <Link to="/integritetspolicy" className="inline-block text-gray-600 hover:text-gray-900 underline transition-colors">
                  Läs mer i vår integritetspolicy
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-6 py-2.5 text-gray-600 bg-white/80 backdrop-blur border border-gray-200 rounded-xl hover:bg-white transition-colors text-sm font-medium"
                >
                  Anpassa inställningar
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-2.5 text-gray-600 bg-white/80 backdrop-blur border border-gray-200 rounded-xl hover:bg-white transition-colors text-sm font-medium"
                >
                  Avvisa alla
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2.5 text-white bg-gray-900/90 backdrop-blur rounded-xl hover:bg-gray-900 transition-colors text-sm font-medium"
                >
                  Acceptera alla
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-medium text-gray-900">Cookie-inställningar</h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="flex items-start justify-between p-4 bg-white/80 backdrop-blur rounded-xl border border-gray-100">
                <div className="pr-4">
                  <h4 className="font-medium text-gray-900 mb-1">Nödvändiga cookies</h4>
                  <p className="text-sm text-gray-500">Krävs för webbplatsens grundläggande funktioner</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.essential}
                  disabled
                  className="h-5 w-5 rounded border-gray-300 text-gray-900 mt-1"
                />
              </div>
              
              <div className="flex items-start justify-between p-4 bg-white/80 backdrop-blur rounded-xl border border-gray-100">
                <div className="pr-4">
                  <h4 className="font-medium text-gray-900 mb-1">Analys cookies</h4>
                  <p className="text-sm text-gray-500">Hjälper oss förstå hur webbplatsen används</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="h-5 w-5 rounded border-gray-300 text-gray-900 mt-1"
                />
              </div>
              
              <div className="flex items-start justify-between p-4 bg-white/80 backdrop-blur rounded-xl border border-gray-100">
                <div className="pr-4">
                  <h4 className="font-medium text-gray-900 mb-1">Marknadsföring cookies</h4>
                  <p className="text-sm text-gray-500">Används för att visa relevant marknadsföring</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="h-5 w-5 rounded border-gray-300 text-gray-900 mt-1"
                />
              </div>
            </div>
            
            <div className="flex justify-end border-t border-gray-200/30 pt-6">
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2.5 text-white bg-gray-900/90 backdrop-blur rounded-xl hover:bg-gray-900 transition-colors text-sm font-medium"
              >
                Spara inställningar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner; 