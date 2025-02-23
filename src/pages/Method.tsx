import React from 'react';
import { SEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schema';
import { Heart, Users, Sparkles, Target, ArrowRight, Brain, Activity, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function MethodSection({ title, description, icon: Icon }: { title: string; description: string; icon: React.ElementType }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <Icon className="h-12 w-12 text-primary-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

export function Method() {
  return (
    <>
      <SEO 
        title="Onze Methode"
        description="Ontdek hoe onze holistische aanpak chronische klachten aanpakt. Van rugpijn tot huidproblemen - wij kijken naar het complete plaatje voor een duurzame oplossing."
        canonicalUrl="https://hollistischezorgwijzer.nl/methode"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema(
            "Onze Holistische Behandelmethode",
            "Ontdek hoe onze holistische aanpak chronische klachten aanpakt. Van rugpijn tot huidproblemen - wij kijken naar het complete plaatje voor een duurzame oplossing.",
            "https://hollistischezorgwijzer.nl/methode"
          ))}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-primary-900 py-24">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000')] mix-blend-overlay opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Een Nieuwe Kijk op Gezondheid
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-primary-100">
                Waar reguliere zorg stopt, gaan wij verder met een complete aanpak
              </p>
            </div>
          </div>
        </section>

        {/* Problem Recognition */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Herken je dit?</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-primary-700">Terugkerende Klachten</h3>
                  <p className="text-gray-600">
                    Die rugpijn die elke 4 maanden terugkomt. Die huidproblemen die maar niet weggaan. 
                    Die hooikoorts waar je "mee moet leren leven". Je hebt gehoord dat het niet te genezen is, 
                    maar dat wil je niet accepteren.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-primary-700">Van Het Kastje Naar De Muur</h3>
                  <p className="text-gray-600">
                    Artsen verwijzen je door naar elkaar, willen je graag helpen, maar lijken de juiste oplossing 
                    niet te vinden. Je voelt dat er meer aan de hand is, maar krijgt geen antwoorden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Holistic Approach */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">De Holistische Aanpak</h2>
              <p className="mt-4 text-xl text-gray-600">
                Het lichaam is één geheel - alles staat met elkaar in verbinding
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mb-6">
                  <Activity className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Lichaam als Geheel</h3>
                <p className="text-gray-600">
                  Een lever die niet optimaal functioneert kan invloed hebben op je stemming - niet voor niets 
                  zeggen we "Wat heb je op je lever?" Wij kijken naar alle verbindingen.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mb-6">
                  <Brain className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Lichaam & Geest</h3>
                <p className="text-gray-600">
                  Stress, emoties en trauma kunnen zich uiten in fysieke klachten. Door beide aspecten te 
                  behandelen, werken we aan duurzaam herstel.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 mb-6">
                  <Leaf className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Natuurlijke Balans</h3>
                <p className="text-gray-600">
                  Het lichaam heeft een natuurlijk vermogen tot herstel. Wij helpen je lichaam weer in balans 
                  te komen, zodat het zichzelf kan helen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Hoe Wij Je Helpen</h2>
              <p className="mt-4 text-xl text-gray-600">
                De juiste behandelaar op het juiste moment
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-8">
                  "Naar welke therapeut moet ik gaan?" Dit is een vraag waar veel mensen mee zitten. Dat hangt af van jouw specifieke situatie. Bijvoorbeeld: bij een recente val is het belangrijk om eerst je lichaam weer in balans te brengen voordat we aan de interne systemen werken. Een goed uitgelijnd lichaam kan zichzelf beter helen.
                </p>
                <p className="text-gray-600">
                  Door onze holistische screening kunnen we precies bepalen welke aanpak voor jou het beste werkt 
                  en in welke volgorde behandelingen het meest effectief zijn.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Klaar voor een andere aanpak?
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Vul onze vragenlijst in en ontdek welke behandeling bij jou past
              </p>
              <Link
                to="/assessment"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-900 bg-white hover:bg-primary-50 transition-colors"
              >
                Voel Je Goed
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}