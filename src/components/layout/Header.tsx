import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileHudforyngringOpen, setMobileHudforyngringOpen] = useState(false);
  const [mobileHalsaOpen, setMobileHalsaOpen] = useState(false);
  const location = useLocation();
  
  const treatmentsDropdownRef = useRef<HTMLDivElement>(null);

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
      if (treatmentsDropdownRef.current && !treatmentsDropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTextColorClass = (isActive = false) => {
    // Home page - white when transparent, black when scrolled
    if (location.pathname === '/') {
      if (shouldBeSolid) {
        return isActive 
          ? 'text-black border-b-2 border-black' 
          : 'text-black hover:text-gray-600';
      }
      return isActive 
        ? 'text-white border-b-2 border-white' 
        : 'text-white hover:text-white/80';
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
          {/* Mobile Logo - Changes based on scroll */}
          <Link to="/" className="md:hidden" onClick={scrollToTop}>
            <Logo 
              className={shouldBeSolid ? 'text-black' : 'text-white'} 
              isScrolled={shouldBeSolid}
            />
          </Link>
          
          {/* Desktop Logo - Changes based on scroll */}
          <Link to="/" className="hidden md:block" onClick={scrollToTop}>
            <Logo 
              className={shouldBeSolid ? 'text-black' : 'text-white'} 
              isScrolled={shouldBeSolid}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 font-medium ${getTextColorClass(
                location.pathname === '/'
              )}`}
            >
              Hem
            </Link>

            {/* Hudföryngring Dropdown */}
            <div ref={treatmentsDropdownRef} className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center transition-colors duration-200 font-medium ${getTextColorClass(
                  ['/hifu', '/plaxpot', '/microneedling'].includes(location.pathname)
                )}`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Hudföryngring
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg transform transition-all duration-150 ease-in-out origin-top-left ${
                  isDropdownOpen 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="rounded-md ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="bg-white py-1">
                    <Link
                      to="/hifu"
                      className="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-150"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="font-medium">HIFU</span>
                      <span className="ml-2 text-xs text-gray-500 group-hover:text-purple-600">Hudföryngring</span>
                    </Link>
                    <Link
                      to="/plaxpot"
                      className="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-150"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="font-medium">Plaxpot</span>
                      <span className="ml-2 text-xs text-gray-500 group-hover:text-purple-600">Huduppstramning</span>
                    </Link>
                    <Link
                      to="/microneedling"
                      className="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-150"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <span className="font-medium">Microneedling</span>
                      <span className="ml-2 text-xs text-gray-500 group-hover:text-purple-600">Hudstruktur</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/frekvens"
              className={`transition-colors duration-200 font-medium ${getTextColorClass(
                location.pathname === '/frekvens'
              )}`}
            >
              Hälsa & Välmående
            </Link>
            
            <Link 
              to="/hudvard" 
              className={`transition-colors duration-200 font-medium ${getTextColorClass(
                location.pathname === '/hudvard' || location.pathname === '/ansiktsbehandlingar'
              )}`}
            >
              Hudvård
            </Link>

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
            className="md:hidden z-50"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className={`h-8 w-8 ${shouldBeSolid ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`h-8 w-8 ${shouldBeSolid ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-x-0 top-16 bg-white shadow-lg z-40 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          } transition-opacity duration-150 ease-in-out`}
        >
          <div className="px-4 py-6">
            <div className="grid gap-y-4">
              <Link
                to="/"
                className="text-black hover:text-gray-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                Hem
              </Link>
              
              {/* Mobile Hudföryngring Dropdown */}
              <div>
                <button
                  onClick={() => setMobileHudforyngringOpen(!mobileHudforyngringOpen)}
                  className="flex items-center justify-between w-full text-black hover:text-gray-600 font-medium rounded-md px-3 py-2 bg-gray-50 border border-gray-200"
                >
                  <div className="flex items-center">
                    <span>Hudföryngring</span>
                    <span className="ml-2 text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full">Meny</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-150 ${
                      mobileHudforyngringOpen ? 'rotate-180 text-purple-600' : ''
                    }`}
                  />
                </button>
                
                <div className={`mt-1 overflow-hidden transition-all duration-200 ease-in-out ${
                  mobileHudforyngringOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-l-2 border-purple-300 pl-4 py-2 bg-gray-50 rounded-md mt-1">
                    <Link 
                      to="/hifu" 
                      className="block px-3 py-2 text-black hover:text-purple-700 font-medium rounded hover:bg-purple-50 transition-colors duration-150"
                      onClick={() => setIsOpen(false)}
                    >
                      HIFU
                    </Link>
                    <Link 
                      to="/plaxpot" 
                      className="block px-3 py-2 text-black hover:text-purple-700 font-medium rounded hover:bg-purple-50 transition-colors duration-150"
                      onClick={() => setIsOpen(false)}
                    >
                      Plaxpot
                    </Link>
                    <Link 
                      to="/microneedling" 
                      className="block px-3 py-2 text-black hover:text-purple-700 font-medium rounded hover:bg-purple-50 transition-colors duration-150"
                      onClick={() => setIsOpen(false)}
                    >
                      Microneedling
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Mobile Hälsa & Välmående Link */}
              <Link 
                to="/frekvens" 
                className="text-black hover:text-gray-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                Hälsa & Välmående
              </Link>
              
              <Link 
                to="/hudvard" 
                className="text-black hover:text-gray-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                Hudvård
              </Link>

              <Link 
                to="/coaching" 
                className="text-black hover:text-gray-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                Coaching
              </Link>
              <Link 
                to="/kunskapsbank" 
                className="text-black hover:text-gray-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                Kunskapsbank
              </Link>
              <Link 
                to="/om-oss" 
                className="text-black hover:text-gray-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                Om Oss
              </Link>
              <Link 
                to="/kontakt" 
                className="text-black hover:text-gray-600 font-medium py-2 px-3 hover:bg-gray-50 rounded-md transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;