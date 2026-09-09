import { SERVICE_AREAS, SITE } from '../lib/site';

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
        email: SITE.email,
        telephone: SITE.phone,
        areaServed: SERVICE_AREAS.map((area) => ({
          '@type': 'City',
          name: `${area.name}, ${area.region}`,
        })),
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
      {
        '@type': 'Person',
        '@id': `${SITE.origin}/#inna-benyukhis`,
        name: SITE.practitioner.name,
        jobTitle: SITE.practitioner.title,
        url: `${SITE.origin}${SITE.practitioner.path}`,
        worksFor: {
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
