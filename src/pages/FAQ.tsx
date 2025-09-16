import React from 'react';
import { SEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schema';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Algemeen",
    question: "Wat is holistische gezondheidszorg?",
    answer: "Holistische gezondheidszorg kijkt naar de mens als geheel - lichaam, geest en leefomgeving. In plaats van alleen symptomen te behandelen, zoeken we naar de onderliggende oorzaken van gezondheidsklachten en werken we aan totaal herstel."
  },
  {
    category: "Algemeen",
    question: "Voor wie is de Hollistische Zorgwijzer geschikt?",
    answer: "De Zorgwijzer is geschikt voor iedereen die kampt met chronische klachten, onverklaarbare symptomen, of gewoon wil werken aan optimale gezondheid. Of je nu last hebt van vermoeidheid, stress, fysieke klachten of andere gezondheidsuitdagingen - wij helpen je de juiste weg te vinden."
  },
  {
    category: "Methode",
    question: "Hoe werkt de Zorgwijzer precies?",
    answer: "De Zorgwijzer begint met een uitgebreide vragenlijst die verschillende aspecten van je gezondheid in kaart brengt. Op basis van je antwoorden krijg je een persoonlijk gesprek waarin we je situatie bespreken en een behandelplan opstellen dat bij jou past."
  },
  {
    category: "Methode",
    question: "Werken jullie samen met reguliere zorg?",
    answer: "..."
  },
  {
    category: "Praktisch",
    question: "Wordt de behandeling vergoed?",
    answer: "...."
  },
  {
    category: "Praktisch",
    question: "Hoe lang duurt een behandeltraject?",
    answer: "..."
  },
  {
    category: "Praktisch",
    question: "Kan ik een proefgesprek aanvragen?",
    answer: "Ja, we bieden een vrijblijvend kennismakingsgesprek aan waarin we je situatie bespreken en uitleggen hoe we je kunnen helpen. Dit gesprek duurt ongeveer 30 minuten en is kosteloos."
  },
  {
    category: "Resultaten",
    question: "Wat kan ik verwachten van de behandeling?",
    answer: "..."
  },
  {
    category: "Resultaten",
    question: "Hoe snel zie ik resultaat?",
    answer: "..."
  }
];

export function FAQ() {
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <>
      <SEO 
        title="Veelgestelde Vragen - Holistische Gezondheidszorg"
        description="Antwoorden op veelgestelde vragen over holistische gezondheidszorg, natuurlijke genezing en onze behandelmethoden bij Holistische Zorgwijzer. Vind antwoord op jouw vragen."
        canonicalUrl="https://www.holistische-zorgwijzer.nl/faq"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema(
            "Veelgestelde Vragen - Holistische Gezondheidszorg",
            "Antwoorden op veelgestelde vragen over holistische gezondheidszorg, natuurlijke genezing en onze behandelmethoden bij Holistische Zorgwijzer.",
            "https://www.holistische-zorgwijzer.nl/faq"
          ))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-primary-900 py-24">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000')] mix-blend-overlay opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                Veelgestelde Vragen
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-primary-100">
                Vind antwoord op je vragen over holistische gezondheidszorg
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {categories.map((category) => (
                <div key={category}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    {category}
                  </h2>
                  <div className="space-y-6">
                    {faqs
                      .filter(faq => faq.category === category)
                      .map((faq, index) => (
                        <details
                          key={index}
                          className="group bg-white rounded-lg shadow-sm border border-gray-200"
                        >
                          <summary className="flex items-center justify-between cursor-pointer p-6">
                            <h3 className="text-lg font-medium text-gray-900 pr-8">
                              {faq.question}
                            </h3>
                            <Plus className="h-5 w-5 text-primary-600 transform transition-transform group-open:rotate-45" />
                          </summary>
                          <div className="px-6 pb-6">
                            <p className="text-gray-600">
                              {faq.answer}
                            </p>
                          </div>
                        </details>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Nog vragen?
              </h2>
              <p className="text-gray-600 mb-8">
                Neem gerust contact met ons op of start direct met de Zorgwijzer
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 transition-colors"
                >
                  Neem Contact Op
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/assessment"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                >
                  Start Zorgwijzer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}