import React from 'react';
import { SEO } from '../lib/seo';
import { generateWebPageSchema, generateOrganizationSchema } from '../lib/schema';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { ProblemSolution } from '../components/home/ProblemSolution';
import { Features } from '../components/home/Features';
import { TrustIndicators } from '../components/home/TrustIndicators';
import { CallToAction } from '../components/home/CallToAction';

export function Home() {
  return (
    <>
      <SEO 
        title="Holistische Gezondheidszorg & Persoonlijk Gezondheidsadvies"
        description="Ontdek jouw weg naar volledig welzijn met Holistische Zorgwijzer. Persoonlijk gezondheidsadvies voor burnout, stress, chronische klachten en optimaal welzijn. Start vandaag je holistische gezondheidsreis."
        canonicalUrl="https://www.holistische-zorgwijzer.nl"
        type="website"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema(
            "Holistische Gezondheidszorg & Persoonlijk Gezondheidsadvies - Holistische Zorgwijzer",
            "Ontdek jouw weg naar volledig welzijn met Holistische Zorgwijzer. Persoonlijk gezondheidsadvies voor burnout, stress, chronische klachten en optimaal welzijn.",
            "https://www.holistische-zorgwijzer.nl"
          ))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateOrganizationSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Wat is holistische gezondheidszorg?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Holistische gezondheidszorg kijkt naar de mens als geheel - lichaam, geest en leefomgeving. In plaats van alleen symptomen te behandelen, zoeken we naar de onderliggende oorzaken van gezondheidsklachten."
                }
              },
              {
                "@type": "Question", 
                "name": "Voor wie is de Holistische Zorgwijzer geschikt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "De Zorgwijzer is geschikt voor iedereen die kampt met chronische klachten, burnout, stress, onverklaarbare symptomen, of gewoon wil werken aan optimale gezondheid en welzijn."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <ProblemSolution />
        <Features />
        <TrustIndicators />
        <CallToAction />
      </div>
    </>
  );
}