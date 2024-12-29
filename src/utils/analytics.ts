// Declare global window interface with dataLayer
declare global {
  interface Window {
    dataLayer: Array<unknown>;
  }
}

// Google Analytics initialization with IP anonymization
export const initializeAnalytics = () => {
  // Add Google Analytics script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag with IP anonymization
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
    anonymize_ip: true, // Enable IP anonymization
    send_page_view: false // We'll handle page views manually
  });
};

// Function to enable/disable analytics based on user consent
export const setAnalyticsConsent = (hasConsent: boolean) => {
  if (hasConsent) {
    initializeAnalytics();
  } else {
    // Remove Google Analytics if user withdraws consent
    const scripts = document.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].src.includes('googletagmanager')) {
        scripts[i].remove();
        break;
      }
    }
    // Clear any existing dataLayer
    window.dataLayer = [];
  }
}; 