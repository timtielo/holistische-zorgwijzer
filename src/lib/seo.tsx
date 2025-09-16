import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  image?: string;
  type?: string;
}

export function SEO({ 
  title, 
  description, 
  canonicalUrl, 
  image = 'https://www.holistische-zorgwijzer.nl/og-image.jpg',
  type = 'website'
}: SEOProps) {
  const siteTitle = 'Holistische Zorgwijzer';
  const fullTitle = `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Standard Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="holistische zorg, natuurlijke genezing, alternatieve geneeskunde, gezondheidsadvies, burnout behandeling, stress vermindering, voeding en gezondheid, mentale gezondheid, fysieke klachten, Nederland" />
      <meta name="author" content="Holistische Zorgwijzer" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="nl_NL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="geo.region" content="NL" />
      <meta name="geo.placename" content="Nederland" />
      <meta name="language" content="nl" />
    </Helmet>
  );
}