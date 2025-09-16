import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CallToAction() {
  return (
    <section className="bg-primary-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Klaar om je gezondheid te verbeteren?</span>
          <span className="block text-primary-200 mt-3">Zet vandaag nog je eerste stap.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="mb-4 lg:mb-0 lg:mr-6">
            <div className="relative">
              <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-yellow-900 rounded-full text-sm font-bold shadow-xl border-2 border-yellow-500 transform hover:scale-105 transition-all duration-300">
                <span className="mr-2 text-base animate-pulse">🔥</span>
                <span className="uppercase tracking-wide">Nog 7 gratis plekken!</span>
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>
          </div>
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/assessment"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-primary-900 bg-white hover:bg-primary-50 transition-colors"
            >
              Begin Nu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}