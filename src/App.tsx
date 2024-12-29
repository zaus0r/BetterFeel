import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import type { FC, ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import WebSiteSchema from './components/common/WebSiteSchema';

// Lazy load routes
const Home = React.lazy(() => import('./pages/Home'));
const Hifu = React.lazy(() => import('./pages/Hifu'));
const FrequencyTherapy = React.lazy(() => import('./pages/FrequencyTherapy'));
const Plaxpot = React.lazy(() => import('./pages/Plaxpot'));
const Coaching = React.lazy(() => import('./pages/coaching'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));
const IntegrityPolicy = React.lazy(() => import('./pages/IntegrityPolicy'));
const TermsOfUse = React.lazy(() => import('./pages/TermsOfUse'));
const KnowledgeBase = React.lazy(() => import('./pages/knowledge'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Route change handler component
const RouteChangeHandler: FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Reset title on route change if needed
    if (location.pathname === '/') {
      document.title = 'BetterFeel - Holistisk hälsa och välbefinnande i Stockholm';
    }
  }, [location]);

  return null;
};

const App: FC = (): ReactElement => {
  return (
    <HelmetProvider>
      <Router>
        <RouteChangeHandler />
        <Layout>
          <WebSiteSchema />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
          </div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hifu" element={<Hifu />} />
              <Route path="/frekvensterapi" element={<FrequencyTherapy />} />
              <Route path="/plaxpot" element={<Plaxpot />} />
              <Route path="/coaching" element={<Coaching />} />
              <Route path="/om-oss" element={<About />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/integritetspolicy" element={<IntegrityPolicy />} />
              <Route path="/villkor" element={<TermsOfUse />} />
              <Route path="/kunskapsbank" element={<KnowledgeBase />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
};

export default App;