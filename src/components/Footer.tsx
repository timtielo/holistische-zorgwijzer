import React from 'react';
import { Heart, Instagram, Facebook, Youtube, Linkedin, Music2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-primary-600" />
              <span className="ml-2 text-lg font-semibold">Holistische Zorgwijzer</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Jouw reis naar holistisch welzijn begint hier.
            </p>
            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              <a 
                href="/" 
                className="text-gray-400 hover:text-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="/" 
                className="text-gray-400 hover:text-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="/" 
                className="text-gray-400 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="/" 
                className="text-gray-400 hover:text-primary-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="/" 
                className="text-gray-400 hover:text-primary-600 transition-colors"
                aria-label="Spotify"
              >
                <Music2 className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Snelle Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/assessment" className="text-base text-gray-600 hover:text-primary-600 transition-colors">
                  Start Zorgwijzer
                </a>
              </li>
              <li>
                <a href="/methode" className="text-base text-gray-600 hover:text-primary-600 transition-colors">
                  Onze Methode
                </a>
              </li>
              <li>
                <a href="/faq" className="text-base text-gray-600 hover:text-primary-600 transition-colors">
                  Veelgestelde vragen
                </a>
              </li>
              <li>
                <a href="/contact" className="text-base text-gray-600 hover:text-primary-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-600">
                E-mail: info@hollistischezorgwijzer.nl
              </li>
              <li className="text-base text-gray-600">
                Telefoon: +31 (0)20 123 4567
              </li>
              <li className="text-base text-gray-600">
                KvK: 12345678
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-base text-gray-500">
              © 2025 Holistische Zorgwijzer door{' '}
              <a 
                href="https://www.tielo-digital.nl/" 
                target="_blank" 
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Tielo Digital
              </a>
              . Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <a href="/privacy" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                Privacyverklaring
              </a>
              <a href="/algemene-voorwaarden" className="text-sm text-gray-500 hover:text-primary-600 transition-colors">
                Algemene Voorwaarden
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}