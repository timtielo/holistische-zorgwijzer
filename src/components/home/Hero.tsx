import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-700 to-primary-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000')] mix-blend-overlay opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center relative z-10">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl animate-fade-in">
            Ontdek Jouw Weg naar Welzijn
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-primary-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl animate-slide-in">
            Ervaar onze holistische zorgwijzer en ontvang persoonlijk advies zodat jij weer goed in je vel zit.
          </p>
          <div className="mt-8 relative">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 rounded-full text-sm font-bold shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce">
              <span className="mr-2 text-lg">🎯</span>
              <span className="uppercase tracking-wide">PROMO: nog 7 gratis adviestrajecten</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          </div>
          <div className="mt-6 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link
              to="/assessment"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl md:text-lg md:px-10 group"
            >
              Start Zorgwijzer
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}