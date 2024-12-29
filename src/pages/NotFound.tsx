import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '../components/common/SEO';

const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Sidan kunde inte hittas | BetterFeel"
        description="Sidan du söker kunde inte hittas. Gå tillbaka till startsidan för att fortsätta utforska BetterFeel."
        keywords="404, sidan kunde inte hittas, betterfeel"
        url="https://betterfeel.se/404"
      />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-purple-100">
        <div className="max-w-xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-medium text-purple-600 uppercase tracking-wide">404 error</p>
            <h1 className="mt-2 text-4xl font-serif text-purple-900 tracking-tight sm:text-5xl">
              Sidan kunde inte hittas
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Tyvärr kunde vi inte hitta sidan du söker.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
              >
                <Home className="h-5 w-5 mr-2" />
                Tillbaka till startsidan
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound; 