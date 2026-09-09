import Link from "next/link";
import { LOCAL_SERVICE_PAGE, SERVICE_AREAS, SITE } from "../lib/site";

export function CentralTexasServiceArea() {
  return (
    <section className="bg-[#183B10] py-16 text-white" aria-labelledby="central-texas-heading">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#FCAF15]">
            Central Texas virtual nutrition support
          </p>
          <h2 id="central-texas-heading" className="text-3xl font-bold leading-tight md:text-4xl">
            Serving Buda, Kyle, Austin, San Marcos, and Central Texas
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/85">
            {SITE.practitioner.name} offers virtual functional nutrition consultations for clients across the Central Texas corridor. Learn how appointments work, which services may fit your goals, and what to expect before booking.
          </p>
          <Link
            href={LOCAL_SERVICE_PAGE}
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[#183B10] transition hover:bg-[#FCAF15]"
          >
            Explore Central Texas support
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 text-base" aria-label="Cities served">
          {SERVICE_AREAS.map((area) => (
            <li key={area.name} className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 font-semibold">
              {area.name}, {area.region}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
