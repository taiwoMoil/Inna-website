import { SITE } from '../lib/site';

export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE.origin}/#organization`,
        name: SITE.name,
        url: SITE.origin,
        description: SITE.description,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE.origin}/Empowered_SQ_logo.png`,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE.origin}/#website`,
        url: SITE.origin,
        name: SITE.name,
        description: SITE.description,
        inLanguage: SITE.language,
        publisher: {
          '@id': `${SITE.origin}/#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
