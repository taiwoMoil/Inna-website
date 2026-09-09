import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

const title = "Gut Health Nutrition Support | Central Texas";
const description = "Virtual gut health nutrition support for clients in Buda, Kyle, Austin, San Marcos, and Central Texas.";

export const metadata: Metadata = { title, description, alternates: { canonical: "/gut-health-nutrition" }, openGraph: { title, description, url: "/gut-health-nutrition" } };

export default function GutHealthNutritionPage() {
  return <ServicePage eyebrow="Gut health nutrition" title="Practical gut health nutrition support for Central Texas" intro="A personalized nutrition conversation for people who want to understand how food habits, routines, and their health goals may relate to digestive wellbeing." whoItsFor={["People seeking nutrition guidance for common digestive concerns.", "Clients who want a practical, sustainable food-first approach.", "People who want to prepare focused questions for their existing healthcare team."]} whatToExpect={["Discuss your goals, current routines, and relevant history in an initial conversation.", "Identify practical nutrition and lifestyle areas to focus on.", "Review progress and refine the plan through agreed follow-up support."]} faq={[{ question: "Can I work with Inna from Austin or San Marcos?", answer: "Yes. The service is offered virtually throughout the Central Texas core area, including Austin and San Marcos." }, { question: "Will I receive a medical diagnosis?", answer: "No. This service does not diagnose, treat, or replace medical care. Seek medical evaluation for persistent, severe, or concerning symptoms." }]} />;
}
