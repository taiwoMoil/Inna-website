import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

const title = "Functional Nutrition Consultations | Central Texas";
const description = "Virtual functional nutrition consultations for clients in Buda, Kyle, Austin, San Marcos, and Central Texas.";

export const metadata: Metadata = { title, description, alternates: { canonical: "/functional-nutrition-consultations" }, openGraph: { title, description, url: "/functional-nutrition-consultations" } };

export default function FunctionalNutritionConsultationsPage() {
  return <ServicePage eyebrow="Functional nutrition consultations" title="Personalized functional nutrition support for Central Texas clients" intro="A consultation-led approach for people who want nutrition guidance that accounts for their goals, routines, health history, and preferences." whoItsFor={["People who want individualized nutrition guidance rather than a generic plan.", "Clients seeking practical support for energy, digestion, food habits, or life-stage changes.", "People ready to discuss their goals and determine whether this approach is a fit."]} whatToExpect={["Begin with a complimentary conversation about your goals and the service scope.", "If you move forward, share relevant history and priorities in a structured intake.", "Work through practical nutrition and lifestyle recommendations with follow-up support as agreed."]} faq={[{ question: "Are appointments available in Buda, Kyle, Austin, and San Marcos?", answer: "Yes. Consultations are offered virtually for clients in these Central Texas communities." }, { question: "Does functional nutrition replace medical care?", answer: "No. Nutrition support is educational and should complement—not replace—care from appropriately licensed clinicians." }]} />;
}
