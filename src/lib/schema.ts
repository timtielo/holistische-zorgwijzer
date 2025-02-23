interface WebPageSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  publisher: {
    '@type': string;
    name: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
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
    publisher: {
      '@type': 'Organization',
      name: 'Hollistische Zorgwijzer',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hollistischezorgwijzer.nl/logo.png'
      }
    }
  };
}