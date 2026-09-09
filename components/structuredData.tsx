import {
  BUSINESS_NAME,
  PRACTITIONER_NAME,
  SERVICE_AREAS,
  SITE,
  SITE_URL,
} from "../lib/site";

export function StructuredData() {
  const areaServed = SERVICE_AREAS.map((area) => ({
    "@type": "City",
    name: `${area.name}, ${area.region}`,
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BUSINESS_NAME,
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: BUSINESS_NAME,
        url: SITE_URL,
        description: SITE.description,
        email: SITE.email,
        telephone: SITE.phone,
        areaServed,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/Empowered_SQ_logo.png`,
          width: 532,
          height: 427,
        },
        founder: { "@id": `${SITE_URL}/#inna-benyukhis` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#inna-benyukhis`,
        name: PRACTITIONER_NAME,
        url: `${SITE_URL}${SITE.practitioner.path}`,
        image: `${SITE_URL}/Inna.jpg`,
        jobTitle: "Certified Nutritional Therapy Practitioner",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        knowsAbout: [
          "Functional nutrition",
          "Gut health",
          "Hormone balance",
          "Functional lab testing",
          "Nutrition for women over 40",
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#functional-nutrition`,
        name: "Personalized Functional Nutrition",
        serviceType: "Functional nutrition coaching and lab testing",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed,
        audience: {
          "@type": "PeopleAudience",
          suggestedGender: "female",
          suggestedMinAge: 40,
        },
        description: SITE.description,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
