// Declare global window interface with fbq
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// Facebook Pixel initialization
export const initializeFacebookPixel = () => {
  // Add Facebook Pixel script
  const script = document.createElement('script');
  script.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1443088312955104');
    fbq('track', 'PageView');
  `;
  document.head.appendChild(script);
};

// Function to track page views
export const trackPageView = () => {
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// Function to track custom events
export const trackCustomEvent = (eventName: string, params?: object) => {
  if (window.fbq) {
    window.fbq('track', eventName, params);
  }
}; 