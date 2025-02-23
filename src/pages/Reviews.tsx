import React from 'react';
import { SEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schema';
import { Helmet } from 'react-helmet-async';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DetailedTestimonial {
  name: string;
  age: number;
  image: string;
  problem: string;
  impact: string;
  process: string;
  result: string;
}

const testimonials: DetailedTestimonial[] = [
  {
    name: "Lisa van der Berg",
    age: 34,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    problem: "Chronische vermoeidheid en brain fog",
    impact: "Ik kon mijn werk niet meer aan, mijn sociale leven leed eronder, en ik voelde me constant uitgeput. Zelfs simpele taken zoals boodschappen doen werden een uitdaging.",
    process: "Via de holistische screening werd ontdekt dat mijn darmen uit balans waren, wat leidde tot ontstekingen en voedingstekorten. We begonnen met het herstellen van mijn darmflora en het aanpakken van voedingsintoleranties.",
    result: "Na 6 maanden voelde ik me als herboren. Mijn energie kwam terug, ik kan weer sporten, en mijn concentratie is beter dan ooit."
  },
  {
    name: "Mark de Vries",
    age: 42,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    problem: "Terugkerende rugpijn en stressklachten",
    impact: "Ik kon niet meer sporten, had moeite met slapen, en de stress op werk werd steeds erger. Pijnstillers hielpen tijdelijk, maar de klachten kwamen altijd terug.",
    process: "De holistische aanpak liet zien dat mijn rugpijn verbonden was met opgeslagen spanning. We combineerden fysieke therapie met stressmanagement en ademhalingstechnieken.",
    result: "Voor het eerst in 10 jaar ben ik pijnvrij. Ik heb geleerd hoe ik stress kan hanteren en mijn lichaam beter kan 'lezen'."
  },
  {
    name: "Emma Jansen",
    age: 28,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop",
    problem: "Chronische huidproblemen en angstklachten",
    impact: "Mijn zelfvertrouwen was op een dieptepunt. Ik vermeed sociale situaties en was constant bezig met het verbergen van mijn huidproblemen.",
    process: "We ontdekten dat stress en darmgezondheid een grote rol speelden. Door een combinatie van voedingsaanpassingen, stressreductie en natuurlijke huidverzorging zagen we verbetering.",
    result: "Mijn huid is rustiger dan ooit, en ik voel me veel zekerder. Ik begrijp nu hoe mijn emotionele welzijn en fysieke gezondheid samenhangen."
  },
  {
    name: "Tim Tielkemeijer",
    age: 22,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    problem: "Onverklaarbare vermoeidheid",
    impact: "Ik ging van elke dag wedstrijdzwemmen en middelbare school naar slapen-school-slapen. Ik voelde mij onverschillig en zou het nu beschrijven als enorme brain fog. Vergeetachtig, moe, niet helemaal aanwezig zijn. Daarnaast was ik enorm vaak verkouden.",
    process: "Bij de eerste behandeling was ik enorm sceptisch. De behandelaar was enorm lief en vriendelijk. Toch vond ik het allemaal redelijk vaag en had ik er niet enorm veel vertrouwen in.",
    result: "Na enkele weken begon ik mij beter te voelen. Mijn energie kwam merkbaar terug. Na 3 maanden voelde ik mij beter dan ooit tevoren, energie was terug, ik was lang niet meer zo verkouden en ik werd ineens een stuk leniger in mijn spieren."
  }
];

export function Reviews() {
  return (
    <>
      <SEO 
        title="Ervaringen"
        description="Ontdek de verhalen van mensen die hun weg naar herstel hebben gevonden met Hollistische Zorgwijzer. Lees over hun reis en resultaten."
        canonicalUrl="https://hollistischezorgwijzer.nl/ervaringen"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema(
            "Ervaringen met Hollistische Zorgwijzer",
            "Ontdek de verhalen van mensen die hun weg naar herstel hebben gevonden met Hollistische Zorgwijzer. Lees over hun reis en resultaten.",
            "https://hollistischezorgwijzer.nl/ervaringen"
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
                        <p className="text-primary-600">{testimonial.problem}</p>
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