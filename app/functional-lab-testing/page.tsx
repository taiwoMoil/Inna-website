import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";

const title = "Functional Lab Testing Support | Central Texas";
const description = "Learn how functional lab testing support works for virtual nutrition clients in Buda, Kyle, Austin, San Marcos, and Central Texas.";

export const metadata: Metadata = { title, description, alternates: { canonical: "/functional-lab-testing" }, openGraph: { title, description, url: "/functional-lab-testing" } };

export default function FunctionalLabTestingPage() {
  return <ServicePage eyebrow="Functional lab testing support" title="A consultation-first approach to functional lab testing" intro="Discuss whether a nutrition-focused review of available testing may be useful for your goals before purchasing or interpreting any test." whoItsFor={["Clients who want to understand the role a test may or may not play in nutrition planning.", "People with existing results who want to discuss nutrition questions in context.", "Clients who will continue to use qualified medical professionals for diagnosis and treatment."]} whatToExpect={["Start with your goals and health context rather than assuming a test is necessary.", "Discuss appropriate next steps and the limitations of nutrition-focused testing support.", "Use any agreed findings to inform practical nutrition conversations and follow-up."]} faq={[{ question: "Can I discuss testing from Austin, Buda, Kyle, or San Marcos?", answer: "Yes. Initial discussions are available virtually to clients throughout the Central Texas service area." }, { question: "Does this service diagnose disease or replace my doctor?", answer: "No. Testing support is not medical diagnosis or treatment, and medical concerns should be evaluated by an appropriately licensed clinician." }]} />;
}
