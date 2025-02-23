import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

export function Navigation() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      if (Math.abs(prevScrollPos - currentScrollPos) > 10) {
        setVisible(isScrollingUp || currentScrollPos < 10);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/methode', label: 'Onze Methode' },
    { path: '/ervaringen', label: 'Ervaringen' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed w-full backdrop-blur-md bg-white/90 transition-all duration-300 z-50 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <div className="relative">
              <Heart className="h-8 w-8 text-primary-600 transition-all duration-300 transform group-hover:scale-110 animate-pulse" />
              <div className="absolute -inset-2 rounded-full bg-primary-100/50 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <span className="ml-3 text-xl font-semibold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Hollistische Zorgwijzer
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive(path)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            ))}

            <Link
              to="/assessment"
              className={`
                px-6 py-2.5 rounded-full text-sm font-medium
                transition-all duration-200 transform hover:scale-105
                ${isActive('/assessment')
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
                  : 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg'
                }
              `}
            >
              Start Zorgwijzer
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(path)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/assessment"
              className="block w-full text-center px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700 transition-colors mt-4"
            >
              Start Zorgwijzer
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}