import React from 'react';
import { SEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schema';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function About() {
  return (
    <>
      <SEO 
        title="Over Ons"
        description="Leer meer over Hollistische Zorgwijzer. Ontdek onze missie, visie en het team van professionals dat klaar staat om jou te helpen."
        canonicalUrl="https://hollistischezorgwijzer.nl/over-ons"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema(
            "Over Hollistische Zorgwijzer",
            "Leer meer over Hollistische Zorgwijzer. Ontdek onze missie, visie en het team van professionals dat klaar staat om jou te helpen.",
            "https://hollistischezorgwijzer.nl/over-ons"
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
                Over Hollistische Zorgwijzer
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-primary-100">
                Wij geloven in een complete aanpak van gezondheid, waarbij we kijken naar alle aspecten die invloed hebben op jouw welzijn.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Onze Missie</h2>
                <p className="text-lg text-gray-600">
                  Wij streven ernaar om mensen te helpen hun optimale gezondheid te bereiken door een holistische benadering die lichaam, geest en leefstijl integreert. Onze missie is om toegankelijke, effectieve gezondheidszorg te bieden die verder kijkt dan symptoombestrijding.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Onze Visie</h2>
                <p className="text-lg text-gray-600">
                  We zien een toekomst waarin gezondheidszorg persoonlijk, preventief en holistisch is. Waar mensen de tools en ondersteuning krijgen om de beste versie van zichzelf te worden, zowel fysiek als mentaal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Ons Team</h2>
              <p className="mt-4 text-xl text-gray-600">
                Ervaren professionals die klaar staan om jou te helpen
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <img
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop"
                  alt="Dr. Sarah Johnson"
                />
                <h3 className="text-xl font-semibold">Dr. Sarah Johnson</h3>
                <p className="text-primary-600">Holistisch Arts</p>
              </div>
              <div className="text-center">
                <img
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop"
                  alt="Michael Brown"
                />
                <h3 className="text-xl font-semibold">Michael Brown</h3>
                <p className="text-primary-600">Voedingsdeskundige</p>
              </div>
              <div className="text-center">
                <img
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop"
                  alt="Emma Davis"
                />
                <h3 className="text-xl font-semibold">Emma Davis</h3>
                <p className="text-primary-600">Gezondheidscoach</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">
                Wil je meer weten over onze aanpak?
              </h2>
              <Link
                to="/methode"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-900 bg-white hover:bg-primary-50 transition-colors"
              >
                Ontdek Onze Methode
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}