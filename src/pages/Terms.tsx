import React from 'react';
import { SEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schema';
import { Helmet } from 'react-helmet-async';

export function Terms() {
  return (
    <>
      <SEO 
        title="Algemene Voorwaarden - Holistische Zorgdiensten"
        description="Lees onze algemene voorwaarden voor het gebruik van de holistische zorgdiensten van Holistische Zorgwijzer. Voorwaarden voor behandeling en begeleiding."
        canonicalUrl="https://www.holistische-zorgwijzer.nl/algemene-voorwaarden"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema(
            "Algemene Voorwaarden - Holistische Zorgdiensten",
            "Lees onze algemene voorwaarden voor het gebruik van de holistische zorgdiensten van Holistische Zorgwijzer. Voorwaarden voor behandeling en begeleiding.",
            "https://www.holistische-zorgwijzer.nl/algemene-voorwaarden"
          ))}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-primary-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Algemene Voorwaarden
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Definities</h2>
                <p className="text-gray-600 mb-4">In deze algemene voorwaarden wordt verstaan onder:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Holistische Zorgwijzer:</strong> de dienstverlener</li>
                  <li><strong>Cliënt:</strong> de natuurlijke persoon die gebruik maakt van onze diensten</li>
                  <li><strong>Diensten:</strong> alle door Holistische Zorgwijzer aangeboden diensten</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Toepasselijkheid</h2>
                <p className="text-gray-600">
                  Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en 
                  dienstverlening van Holistische Zorgwijzer. Afwijkingen van deze voorwaarden zijn 
                  slechts geldig indien deze uitdrukkelijk schriftelijk zijn overeengekomen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Dienstverlening</h2>
                <p className="text-gray-600 mb-4">
                  Holistische Zorgwijzer biedt holistische gezondheidsadviezen en -diensten aan. 
                  Onze diensten omvatten:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Holistische gezondheidsscreening</li>
                  <li>Persoonlijk gezondheidsadvies</li>
                  <li>Doorverwijzing naar geschikte zorgverleners</li>
                  <li>Begeleiding bij gezondheidsoptimalisatie</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Verplichtingen van de cliënt</h2>
                <p className="text-gray-600 mb-4">De cliënt verplicht zich tot:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Het verstrekken van juiste en volledige informatie</li>
                  <li>Het tijdig verschijnen bij afspraken</li>
                  <li>Het naleven van gegeven adviezen op eigen verantwoordelijkheid</li>
                  <li>Het tijdig betalen van verschuldigde bedragen</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Aansprakelijkheid</h2>
                <p className="text-gray-600">
                  Holistische Zorgwijzer is niet aansprakelijk voor schade die voortvloeit uit het 
                  niet of niet juist opvolgen van adviezen. Onze adviezen vervangen geen reguliere 
                  medische zorg. Bij acute klachten dient u altijd uw huisarts te raadplegen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Betaling</h2>
                <p className="text-gray-600">
                  Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij anders 
                  overeengekomen. Bij niet-tijdige betaling zijn wij gerechtigd wettelijke rente 
                  en incassokosten in rekening te brengen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Herroepingsrecht</h2>
                <p className="text-gray-600">
                  Voor diensten die op afstand worden verleend heeft u een herroepingsrecht van 
                  14 dagen na het sluiten van de overeenkomst. Dit recht vervalt indien de 
                  dienstverlening met uw uitdrukkelijke toestemming is begonnen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Geschillen</h2>
                <p className="text-gray-600">
                  Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden 
                  voorgelegd aan de bevoegde rechter in Amsterdam, tenzij de wet dwingend anders bepaalt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
                <p className="text-gray-600">
                  Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen via 
                  info@holistischezorgwijzer.nl of +31 (0)20 123 4567.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}