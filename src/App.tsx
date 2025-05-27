import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import type { FC, ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import WebSiteSchema from './components/common/WebSiteSchema';
import { initializeFacebookPixel, trackPageView } from './utils/facebook-pixel';

// Lazy load routes
const Home = React.lazy(() => import('./pages/Home'));
const Hifu = React.lazy(() => import('./pages/Hifu'));
const FrequencyTherapy = React.lazy(() => import('./pages/FrequencyTherapy'));
const Plaxpot = React.lazy(() => import('./pages/Plaxpot'));
const Microneedling = React.lazy(() => import('./pages/Microneedling'));
const Hudvard = React.lazy(() => import('./pages/Hudvard'));
const Coaching = React.lazy(() => import('./pages/coaching'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const IntegrityPolicy = React.lazy(() => import('./pages/IntegrityPolicy'));
const TermsOfUse = React.lazy(() => import('./pages/TermsOfUse'));
const KnowledgeBase = React.lazy(() => import('./pages/knowledge'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Debug wrappers
const DebugHifu = (props: any) => {
  console.log('Hifu page is rendering');
  return <Hifu {...props} />;
};

// Debug wrapper for FrequencyTherapy
const DebugFrequencyTherapy = (props: any) => {
  console.log('FrequencyTherapy page is rendering');
  return <FrequencyTherapy {...props} />;
};

const DebugPlaxpot = (props: any) => {
  console.log('Plaxpot page is rendering');
  return <Plaxpot {...props} />;
};

// Route change handler component
const RouteChangeHandler: FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Reset title on route change if needed
    if (location.pathname === '/') {
      document.title = 'BetterFeel - Holistisk hälsa och välbefinnande i Stockholm';
    }
    // Track page view on route change
    trackPageView();
  }, [location]);

  return null;
};

// Error Fallback Component
interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => (
  <div role="alert" className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center p-8">
      <h2 className="text-2xl font-medium text-purple-900 mb-4">Något gick fel</h2>
      <p className="text-gray-600 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-[#064e3b] text-white rounded-lg hover:bg-[#043927] transition-all duration-300"
      >
        Försök igen
      </button>
    </div>
  </div>
);

const RedirectToFrekvens = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/frekvens', { replace: true });
  }, [navigate]);
  return null;
};

// Wrap the Routes component in the Layout
const AppRoutes = () => {
  return (
    <Layout>
      <WebSiteSchema />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
        </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hifu" element={<DebugHifu />} />
            <Route path="/frekvens" element={<DebugFrequencyTherapy />} />
            <Route path="/plaxpot" element={<DebugPlaxpot />} />
            <Route path="/microneedling" element={<Microneedling />} />
            <Route path="/hudvard" element={<Hudvard />} />
            <Route path="/ansiktsbehandlingar" element={<Navigate to="/hudvard" replace />} />
            <Route path="/frekvensterapi" element={<RedirectToFrekvens />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/integritetspolicy" element={<IntegrityPolicy />} />
            <Route path="/villkor" element={<TermsOfUse />} />
            <Route path="/kunskapsbank" element={<KnowledgeBase />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

// Main App component
const App = () => {
  useEffect(() => {
    // Initialize Facebook Pixel
    initializeFacebookPixel();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <RouteChangeHandler />
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
};

export default App;