import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Newsletter from './Newsletter';
import ScrollToTop from '../common/ScrollToTop';
import CookieBanner from '../common/CookieBanner';
import LocalBusinessSchema from '../common/LocalBusinessSchema';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <LocalBusinessSchema />
      <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
        <Header />
        <main className="flex-grow overflow-x-hidden">
          {children}
        </main>
        <Newsletter />
        <Footer />
        <CookieBanner />
      </div>
    </>
  );
};

export default Layout; 