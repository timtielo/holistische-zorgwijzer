import React from 'react';
import { SEO } from '../lib/seo';
import { generateWebPageSchema } from '../lib/schema';
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
        title="Holistische Zorgwijzer"
        description="Ontdek jouw weg naar volledig welzijn met Hollistische Zorgwijzer. Wij bieden een unieke, holistische benadering voor jouw gezondheid."
        canonicalUrl="https://hollistischezorgwijzer.nl"
        type="website"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema(
            "Hollistische Zorgwijzer - Holistische Gezondheidszorg",
            "Ontdek jouw weg naar volledig welzijn met Hollistische Zorgwijzer. Wij bieden een unieke, holistische benadering voor jouw gezondheid.",
            "https://hollistischezorgwijzer.nl"
          ))}
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