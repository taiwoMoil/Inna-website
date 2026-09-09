import type { Metadata } from "next";

const title = "Medical Disclaimer";
const description = "Important information about the educational scope of Empowered Wellness with Inna's nutrition services and website content.";

export const metadata: Metadata = { title, description, alternates: { canonical: "/medical-disclaimer" } };

export default function MedicalDisclaimerPage() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#238b45]">Important information</p>
      <h1 className="mt-4 text-4xl font-bold text-[#183B10] md:text-5xl">Medical disclaimer</h1>
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-gray-700">
        <p>Content and services from Empowered Wellness with Inna are for general educational and wellness purposes. They are not medical advice and are not a substitute for care from a physician or other appropriately licensed healthcare professional.</p>
        <p>Nutrition support does not diagnose, treat, cure, or prevent disease. Do not disregard, delay, or stop medical advice, treatment, or medication because of information on this website or in a nutrition consultation.</p>
        <p>Seek prompt medical attention for urgent, severe, new, or worsening symptoms. If you believe you may be experiencing a medical emergency, call 911 or your local emergency number.</p>
        <p>Any nutrition, lifestyle, supplement, or testing discussion should be considered in the context of your individual circumstances and, where appropriate, discussed with your licensed healthcare team.</p>
      </div>
    </article>
  );
}
