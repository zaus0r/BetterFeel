import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  // Add scroll to top function
  const scrollToTop = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Check if we're on a page that needs black text even when transparent
  const isPrivacyOrTerms = location.pathname === '/integritetspolicy' || location.pathname === '/villkor';

  // Determine if navbar should be solid
  const shouldBeSolid = isScrolled || isOpen || isPrivacyOrTerms;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll(); // Set initial scroll state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('treatments-dropdown');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTextColorClass = (isActive = false) => {
    // Always black on home page
    if (location.pathname === '/') {
      return isActive 
        ? 'text-black border-b-2 border-black' 
        : 'text-black hover:text-gray-600';
    }
    // Other pages follow the original logic
    if (shouldBeSolid) {
      return isActive 
        ? 'text-black border-b-2 border-black' 
        : 'text-black hover:text-gray-600';
    }
    return isActive 
      ? 'text-white border-b-2 border-white' 
      : 'text-white hover:text-white/80';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        shouldBeSolid ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Mobile Logo - Always black */}
          <Link to="/" className="md:hidden text-black" onClick={scrollToTop}>
            <Logo className="text-black" />
          </Link>
          
          {/* Desktop Logo - Changes color */}
          <Link to="/" className={`hidden md:block ${location.pathname === '/' || shouldBeSolid ? 'text-black' : 'text-white'}`} onClick={scrollToTop}>
            <Logo className={location.pathname === '/' || shouldBeSolid ? 'text-black' : 'text-white'} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <Link 
              to="/" 
              className={`transition-colors duration-200 font-medium ${getTextColorClass(location.pathname === '/')}`}
              onClick={scrollToTop}
            >
              Hem
            </Link>
            
            {/* Treatments Dropdown */}
            <div className="relative" id="treatments-dropdown">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center transition-colors duration-200 font-medium ${getTextColorClass(
                  ['/hifu', '/frekvensterapi', '/plaxpot'].includes(location.pathname)
                )}`}
              >
                Behandlingar
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/hifu"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      HIFU
                    </Link>
                    <Link
                      to="/frekvensterapi"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Frekvensbehandling
                    </Link>
                    <Link
                      to="/plaxpot"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Plaxpot
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/coaching" className={`transition-colors duration-200 font-medium ${getTextColorClass(location.pathname === '/coaching')}`}>
              Coaching
            </Link>
            <Link to="/kunskapsbank" className={`transition-colors duration-200 font-medium ${getTextColorClass(location.pathname === '/kunskapsbank')}`}>
              Kunskapsbank
            </Link>
            <Link to="/om-oss" className={`transition-colors duration-200 font-medium ${getTextColorClass(location.pathname === '/om-oss')}`}>
              Om Oss
            </Link>
            <Link to="/kontakt" className={`transition-colors duration-200 font-medium ${getTextColorClass(location.pathname === '/kontakt')}`}>
              Kontakt
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 text-black"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-x-0 top-16 transform transition-transform duration-200 ease-in-out ${
            isOpen ? 'translate-y-0 bg-white shadow-lg' : '-translate-y-full'
          }`}
          style={{ height: 'calc(100vh - 4rem)' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 overflow-y-auto h-full">
            <Link 
              to="/" 
              className="block px-2 py-2 text-black hover:text-gray-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Hem
            </Link>
            <div className="border-l-2 border-gray-200">
              <Link 
                to="/hifu" 
                className="block px-2 py-2 text-black hover:text-gray-600 font-medium pl-4"
                onClick={() => setIsOpen(false)}
              >
                HIFU
              </Link>
              <Link 
                to="/frekvensterapi" 
                className="block px-2 py-2 text-black hover:text-gray-600 font-medium pl-4"
                onClick={() => setIsOpen(false)}
              >
                Frekvensbehandling
              </Link>
              <Link 
                to="/plaxpot" 
                className="block px-2 py-2 text-black hover:text-gray-600 font-medium pl-4"
                onClick={() => setIsOpen(false)}
              >
                Plaxpot
              </Link>
            </div>
            <Link 
              to="/coaching" 
              className="block px-2 py-2 text-black hover:text-gray-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Coaching
            </Link>
            <Link 
              to="/kunskapsbank" 
              className="block px-2 py-2 text-black hover:text-gray-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Kunskapsbank
            </Link>
            <Link 
              to="/om-oss" 
              className="block px-2 py-2 text-black hover:text-gray-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Om Oss
            </Link>
            <Link 
              to="/kontakt" 
              className="block px-2 py-2 text-black hover:text-gray-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;