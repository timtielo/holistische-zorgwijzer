import React from 'react';
import { SEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schema';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AssessmentSuccess() {
  return (
    <>
      <SEO 
        title="Zorgwijzer Voltooid"
        description="Bedankt voor het invullen van de zorgwijzer. Plan nu een gesprek in om je resultaten te bespreken."
        canonicalUrl="https://hollistischezorgwijzer.nl/assessment/success"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema(
            "Zorgwijzer Voltooid - Hollistische Zorgwijzer",
            "Bedankt voor het invullen van de zorgwijzer. Plan nu een gesprek in om je resultaten te bespreken.",
            "https://hollistischezorgwijzer.nl/assessment/success"
          ))}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Bedankt voor het invullen!
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              We hebben je antwoorden ontvangen en gaan hier zorgvuldig mee aan de slag.
            </p>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Volgende Stappen
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Plan een Gesprek In
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Kies een moment dat jou uitkomt voor een persoonlijk gesprek waarin we je antwoorden bespreken.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Duur: 30 minuten
                    </h3>
                    <p className="mt-2 text-gray-600">
                      In een half uur bespreken we je situatie en geven we je persoonlijk advies over de beste vervolgstappen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Telefonisch of Online
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Kies zelf of je het gesprek telefonisch of via een videogesprek wilt voeren.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              to="/afspraak"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Plan Je Gesprek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Geen geschikte tijd gevonden? Neem dan contact met ons op via{' '}
              <a href="mailto:planning@hollistischezorgwijzer.nl" className="text-primary-600 hover:text-primary-700">
                planning@hollistischezorgwijzer.nl
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}