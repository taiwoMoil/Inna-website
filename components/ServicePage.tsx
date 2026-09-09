import Link from "next/link";
import { LOCAL_SERVICE_PAGE, SERVICE_AREAS, SITE } from "../lib/site";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  whoItsFor: string[];
  whatToExpect: string[];
  faq: Array<{ question: string; answer: string }>;
};

export function ServicePage({
  eyebrow,
  title,
  intro,
  whoItsFor,
  whatToExpect,
  faq,
}: ServicePageProps) {
  return (
    <article>
      <section className="bg-gradient-to-br from-[#f4fbf5] via-white to-[#e6f6eb] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#238b45]">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#183B10] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-700">{intro}</p>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-700">
            Virtual consultations are available for clients in {SERVICE_AREAS.map((area) => area.name).join(", ").replace(/, ([^,]*)$/, ", and $1")}, and throughout Central Texas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={SITE.bookingUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#238b45] px-6 py-3 font-semibold text-white transition hover:bg-[#183B10]">
              Book a complimentary call
            </a>
            <Link href={LOCAL_SERVICE_PAGE} className="rounded-full border border-[#183B10] px-6 py-3 font-semibold text-[#183B10] transition hover:bg-white">
              Central Texas service details
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-[#183B10]">Who this support may be for</h2>
          <ul className="mt-6 space-y-4 text-lg text-gray-700">
            {whoItsFor.map((item) => <li key={item} className="flex gap-3"><span className="font-bold text-[#238b45]">✓</span><span>{item}</span></li>)}
          </ul>
        </div>
        <div className="rounded-3xl bg-[#f4fbf5] p-8">
          <h2 className="text-3xl font-bold text-[#183B10]">What to expect</h2>
          <ol className="mt-6 space-y-5 text-lg text-gray-700">
            {whatToExpect.map((item, index) => <li key={item} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#238b45] font-bold text-white">{index + 1}</span><span>{item}</span></li>)}
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 py-20" aria-labelledby="service-faq-heading">
        <div className="mx-auto max-w-4xl px-6">
          <h2 id="service-faq-heading" className="text-3xl font-bold text-[#183B10]">Questions about this service</h2>
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-2xl bg-white p-6 shadow-sm">
                <summary className="cursor-pointer text-lg font-semibold text-[#183B10]">{item.question}</summary>
                <p className="mt-4 leading-relaxed text-gray-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
