import React from 'react';
import { SEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schema';
import { Helmet } from 'react-helmet-async';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/testimonials';

export function Reviews() {
  return (
    <>
      <SEO 
        title="Ervaringen & Succesverhalen - Holistische Genezing"
        description="Ontdek de inspirerende verhalen van mensen die hun weg naar herstel hebben gevonden met Holistische Zorgwijzer. Lees over hun reis van ziekte naar gezondheid en de resultaten van holistische behandeling."
        canonicalUrl="https://www.holistische-zorgwijzer.nl/ervaringen"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema(
            "Ervaringen & Succesverhalen - Holistische Genezing",
            "Ontdek de inspirerende verhalen van mensen die hun weg naar herstel hebben gevonden met Holistische Zorgwijzer. Lees over hun reis van ziekte naar gezondheid.",
            "https://www.holistische-zorgwijzer.nl/ervaringen"
          ))}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-primary-900 py-24">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000')] mix-blend-overlay opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Ervaringsverhalen
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-primary-100">
                Echte verhalen van mensen die hun weg naar herstel hebben gevonden
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-20 w-20 rounded-full object-cover"
                      />
                      <div>
                        <h2 className="text-2xl font-semibold text-gray-900">{testimonial.name}</h2>
                        <p className="text-primary-600">{testimonial.condition}</p>
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">De Impact</h3>
                        <p className="text-gray-600">{testimonial.impact}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Het Proces</h3>
                        <p className="text-gray-600">{testimonial.process}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Het Resultaat</h3>
                        <p className="text-gray-600">{testimonial.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                En jij bent de volgende
              </h2>
              <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
                Ook klaar om jouw gezondheidsreis te beginnen? Laten we onderzoeken wat bij je past.
              </p>
              <Link
                to="/assessment"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-md bg-white text-primary-900 hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Vul hier de vragenlijst in
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}