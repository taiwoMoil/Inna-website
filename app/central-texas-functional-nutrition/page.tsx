import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_AREAS, SITE } from "../../lib/site";

const title = "Functional Nutrition in Buda, Kyle, Austin & San Marcos";
const description = "Virtual functional nutrition consultations for clients in Buda, Kyle, Austin, San Marcos, and throughout Central Texas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/central-texas-functional-nutrition" },
  openGraph: { title, description, url: "/central-texas-functional-nutrition" },
  twitter: { card: "summary_large_image", title, description },
};

const services = [
  ["Functional nutrition consultations", "/functional-nutrition-consultations", "Personalized nutrition guidance built around your goals, history, and daily life."],
  ["Gut health nutrition", "/gut-health-nutrition", "Nutrition support for people seeking a more informed approach to digestive concerns."],
  ["Perimenopause nutrition support", "/perimenopause-nutrition-support", "Practical nutrition and lifestyle support for changing needs through perimenopause."],
  ["Functional lab testing", "/functional-lab-testing", "A consultation-first approach to discussing whether appropriate testing may be useful."],
] as const;

export default function CentralTexasFunctionalNutritionPage() {
  const areaNames = SERVICE_AREAS.map((area) => area.name).join(", ").replace(/, ([^,]*)$/, ", and $1");
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
      { "@type": "ListItem", position: 2, name: "Central Texas functional nutrition", item: `${SITE.origin}/central-texas-functional-nutrition` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <article>
        <section className="bg-gradient-to-br from-[#183B10] via-[#1e5528] to-[#238b45] py-24 text-white">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FCAF15]">Central Texas virtual consultations</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">Functional nutrition support for Buda, Kyle, Austin, and San Marcos</h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/90">
              {SITE.practitioner.name} provides virtual nutrition consultations for people in {areaNames} and throughout Central Texas who want practical, individualized support for their health goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={SITE.bookingUrl} target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 font-semibold text-[#183B10] transition hover:bg-[#FCAF15]">Book a complimentary call</a>
              <Link href="/contact" className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10">Contact Inna</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold text-[#183B10]">How Central Texas clients can work with Inna</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 p-7"><h3 className="text-xl font-bold text-[#183B10]">1. Start with a conversation</h3><p className="mt-3 text-gray-700">Use the complimentary call to share your goals and decide whether the service is an appropriate fit.</p></div>
            <div className="rounded-3xl border border-gray-200 p-7"><h3 className="text-xl font-bold text-[#183B10]">2. Meet virtually</h3><p className="mt-3 text-gray-700">Consultations are designed to be accessible for clients across the Buda–Kyle–Austin–San Marcos corridor.</p></div>
            <div className="rounded-3xl border border-gray-200 p-7"><h3 className="text-xl font-bold text-[#183B10]">3. Follow a personalized plan</h3><p className="mt-3 text-gray-700">When appropriate, nutrition guidance and follow-up support are tailored to the goals discussed in consultation.</p></div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold text-[#183B10]">Services available across Central Texas</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {services.map(([serviceTitle, path, serviceDescription]) => (
                <Link key={path} href={path} className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-xl font-bold text-[#183B10]">{serviceTitle}</h3>
                  <p className="mt-3 text-gray-700">{serviceDescription}</p>
                  <span className="mt-5 inline-block font-semibold text-[#238b45]">Learn about this service →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold text-[#183B10]">Communities served</h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-700">The current core service area is Buda, Kyle, Austin, and San Marcos. If you live nearby in Central Texas, use the consultation call to confirm whether virtual support is a fit for your circumstances.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_AREAS.map((area) => <li key={area.name} className="rounded-2xl bg-[#f4fbf5] px-5 py-4 text-center font-semibold text-[#183B10]">{area.name}, {area.region}</li>)}
          </ul>
          <p className="mt-10 text-sm leading-relaxed text-gray-600">Functional nutrition support is educational and does not replace diagnosis or treatment by a licensed medical professional. Discuss urgent, new, or worsening symptoms with an appropriate clinician.</p>
        </section>
      </article>
    </>
  );
}
