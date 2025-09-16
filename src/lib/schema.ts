interface WebPageSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  publisher: {
    '@type': string;
    name: string;
    url: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
}

interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': string;
    addressCountry: string;
    addressLocality: string;
  };
  contactPoint: {
    '@type': string;
    telephone: string;
    email: string;
    contactType: string;
    availableLanguage: string;
  };
  sameAs: string[];
}

export function generateWebPageSchema(
  name: string,
  description: string,
  url: string
): WebPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    inLanguage: 'nl-NL',
    publisher: {
      '@type': 'Organization',
      name: 'Holistische Zorgwijzer',
      url: 'https://www.holistische-zorgwijzer.nl',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.holistische-zorgwijzer.nl/logo.png'
      }
    }
  };
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Holistische Zorgwijzer',
    url: 'https://www.holistische-zorgwijzer.nl',
    logo: 'https://www.holistische-zorgwijzer.nl/logo.png',
    description: 'Holistische gezondheidszorg en persoonlijk gezondheidsadvies voor optimaal welzijn. Wij bieden een complete aanpak voor lichaam en geest.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
      addressLocality: 'Amsterdam'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31-20-123-4567',
      email: 'info@holistische-zorgwijzer.nl',
      contactType: 'customer service',
      availableLanguage: 'Dutch'
    },
    sameAs: [
      'https://www.facebook.com/holistischezorgwijzer',
      'https://www.instagram.com/holistischezorgwijzer',
      'https://www.linkedin.com/company/holistischezorgwijzer'
    ]
  };
}