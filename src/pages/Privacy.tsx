import React from 'react';
import { SEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schema';
import { Helmet } from 'react-helmet-async';

export function Privacy() {
  return (
    <>
      <SEO 
        title="Privacyverklaring - Gegevensbescherming"
        description="Lees onze privacyverklaring om te begrijpen hoe Holistische Zorgwijzer omgaat met uw persoonlijke gegevens en gezondheidsgegevens. GDPR-compliant gegevensbescherming."
        canonicalUrl="https://www.holistische-zorgwijzer.nl/privacy"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema(
            "Privacyverklaring - Gegevensbescherming",
            "Lees onze privacyverklaring om te begrijpen hoe Holistische Zorgwijzer omgaat met uw persoonlijke gegevens en gezondheidsgegevens. GDPR-compliant gegevensbescherming.",
            "https://www.holistische-zorgwijzer.nl/privacy"
          ))}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-primary-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Privacyverklaring
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-primary-100">
                Laatst bijgewerkt: januari 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Inleiding</h2>
                <p className="text-gray-600">
                  Holistische Zorgwijzer hecht veel waarde aan de bescherming van uw persoonlijke gegevens. 
                  In deze privacyverklaring leggen wij uit welke persoonsgegevens wij verzamelen, waarom wij 
                  deze gegevens verzamelen en hoe wij deze gebruiken.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Welke gegevens verzamelen wij?</h2>
                <p className="text-gray-600 mb-4">Wij verzamelen de volgende categorieën persoonsgegevens:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Contactgegevens (naam, e-mailadres, telefoonnummer)</li>
                  <li>Gezondheidsgegevens die u vrijwillig verstrekt via onze zorgwijzer</li>
                  <li>Communicatiegegevens (berichten via contactformulieren)</li>
                  <li>Technische gegevens (IP-adres, browsertype, bezoekgedrag)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Waarom verzamelen wij deze gegevens?</h2>
                <p className="text-gray-600 mb-4">Wij gebruiken uw persoonsgegevens voor:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Het verstrekken van persoonlijk gezondheidsadvies</li>
                  <li>Het beantwoorden van uw vragen en verzoeken</li>
                  <li>Het verbeteren van onze dienstverlening</li>
                  <li>Het naleven van wettelijke verplichtingen</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Hoe lang bewaren wij uw gegevens?</h2>
                <p className="text-gray-600">
                  Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor 
                  zij zijn verzameld. Gezondheidsgegevens worden maximaal 7 jaar bewaard conform de 
                  wettelijke bewaartermijnen voor medische dossiers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Uw rechten</h2>
                <p className="text-gray-600 mb-4">U heeft de volgende rechten betreffende uw persoonsgegevens:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Recht op inzage in uw persoonsgegevens</li>
                  <li>Recht op rectificatie van onjuiste gegevens</li>
                  <li>Recht op verwijdering van uw gegevens</li>
                  <li>Recht op beperking van de verwerking</li>
                  <li>Recht op dataportabiliteit</li>
                  <li>Recht van bezwaar tegen de verwerking</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Beveiliging</h2>
                <p className="text-gray-600">
                  Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens 
                  te beschermen tegen verlies, misbruik, ongeautoriseerde toegang, openbaarmaking, 
                  wijziging of vernietiging.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact</h2>
                <p className="text-gray-600">
                  Voor vragen over deze privacyverklaring of het uitoefenen van uw rechten kunt u 
                  contact met ons opnemen via info@holistischezorgwijzer.nl of +31 (0)20 123 4567.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}