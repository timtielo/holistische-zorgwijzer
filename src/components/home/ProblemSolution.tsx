import React from 'react';
import { HeartCrack, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProblemSolution() {
  return (
    <div className="bg-white">
      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <HeartCrack className="h-12 w-12 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Herken je dit?
            </h2>
            <div className="mt-8 space-y-4 text-lg text-gray-600">
              <p>Je voelt je ziek, artsen zien dit, maar kunnen het probleem niet vinden.</p>
              <p>Medicatie verlicht symptomen, maar lost het onderliggende probleem niet op.</p>
              <p>Je weet dat er meer aan de hand is, maar hebt de juiste oplossing nog niet gevonden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agitation */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              De impact op je dagelijks leven
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-primary-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="font-semibold text-xl mb-4">Fysiek</h3>
                <ul className="space-y-3">
                  <li>• Vermoeidheid</li>
                  <li>• Buikpijn</li>
                  <li>• Moeite met slapen</li>
                  <li>• Huidproblemen</li>
                </ul>
              </div>
              <div className="bg-primary-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="font-semibold text-xl mb-4">Mentaal</h3>
                <ul className="space-y-3">
                  <li>• Burn-out</li>
                  <li>• Stress</li>
                  <li>• Angst</li>
                  <li>• Somberheid</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-12 w-12 text-primary-600 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-gray-900">
              Er is een betere weg
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Onze holistische aanpak kijkt naar het volledige plaatje
            </p>
            <div className="mt-8 space-y-4 text-lg text-gray-600">
              <p>✓ Persoonlijke advies voor lichaam én geest</p>
              <p>✓ Concrete adviezen die bij jou passen</p>
              <p>✓ Ondersteuning van ervaren zorgprofessionals</p>
            </div>
            <div className="mt-10">
              <Link
                to="/assessment"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                Ontdek Jouw Pad naar Herstel
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <div className="mt-6 relative inline-block">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-400 text-green-900 rounded-full text-sm font-bold shadow-lg border-2 border-green-500 transform hover:scale-105 transition-all duration-300">
                  <span className="mr-2 text-base">✨</span>
                  <span className="uppercase tracking-wide">Beperkt: 7 gratis trajecten over</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white text-xs font-bold">7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}