import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

const title = "Perimenopause Nutrition Support | Central Texas";
const description = "Virtual perimenopause nutrition support for clients in Buda, Kyle, Austin, San Marcos, and Central Texas.";

export const metadata: Metadata = { title, description, alternates: { canonical: "/perimenopause-nutrition-support" }, openGraph: { title, description, url: "/perimenopause-nutrition-support" } };

export default function PerimenopauseNutritionSupportPage() {
  return <ServicePage eyebrow="Perimenopause nutrition support" title="Nutrition support for the changing needs of perimenopause" intro="A thoughtful, individualized nutrition approach for Central Texas clients navigating perimenopause and looking for practical, sustainable support." whoItsFor={["People seeking a nutrition-focused conversation during perimenopause.", "Clients who want meal, routine, and lifestyle guidance that fits changing priorities.", "People who want support alongside—not instead of—their medical care."]} whatToExpect={["Talk through your goals, symptoms, routines, and any care already in place.", "Create nutrition and lifestyle priorities that are realistic for your day-to-day life.", "Use follow-up support to adjust based on your experience and goals."]} faq={[{ question: "Is this available to clients in Buda and Kyle?", answer: "Yes. Virtual support is available for clients in Buda, Kyle, Austin, San Marcos, and throughout Central Texas." }, { question: "Can nutrition support replace hormone or medical treatment?", answer: "No. Consult a qualified medical professional for diagnosis, treatment, and medication questions." }]} />;
}
