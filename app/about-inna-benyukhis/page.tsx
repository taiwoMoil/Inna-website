import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LOCAL_SERVICE_PAGE, SITE } from "../../lib/site";

const title = "About Inna Benyukhis, CNTP";
const description = "Meet Inna Benyukhis, Certified Nutritional Therapy Practitioner and founder of Empowered Wellness with Inna.";

export const metadata: Metadata = { title, description, alternates: { canonical: SITE.practitioner.path }, openGraph: { title, description, url: SITE.practitioner.path } };

export default function AboutInnaBenyukhisPage() {
  return <article className="bg-gradient-to-b from-[#f4fbf5] to-white py-24"><div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><Image src="/Inna.jpg" width={700} height={700} alt="Inna Benyukhis, Certified Nutritional Therapy Practitioner" className="rounded-3xl shadow-xl" priority /><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#238b45]">Meet your practitioner</p><h1 className="mt-4 text-4xl font-bold text-[#183B10] md:text-6xl">Inna Benyukhis, CNTP</h1><p className="mt-6 text-xl leading-relaxed text-gray-700">Inna is a Certified Nutritional Therapy Practitioner and the founder of Empowered Wellness with Inna.</p><p className="mt-5 leading-relaxed text-gray-700">Her work is informed by a family health journey and focused on helping clients develop practical, personalized nutrition habits. Consultations are offered virtually for clients in Buda, Kyle, Austin, San Marcos, and across Central Texas.</p><p className="mt-5 leading-relaxed text-gray-700">Nutrition support is educational and works alongside appropriate medical care. Inna does not diagnose disease or replace a licensed medical professional.</p><div className="mt-8 flex flex-wrap gap-4"><Link href={LOCAL_SERVICE_PAGE} className="rounded-full bg-[#238b45] px-6 py-3 font-semibold text-white">Central Texas services</Link><a href={SITE.bookingUrl} target="_blank" rel="noreferrer" className="rounded-full border border-[#183B10] px-6 py-3 font-semibold text-[#183B10]">Book a complimentary call</a></div></div></div></article>;
}
