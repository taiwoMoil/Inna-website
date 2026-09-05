import type { Metadata } from "next";
import { Hero } from "../components/hero";
import { SocialProof } from "../components/SocialProof";
import { HowWeHelp } from "../components/HowWeHelp";
import { Services } from "../components/Services";
import { MyStory } from "../components/MyStory";
import { Testimonials } from "../components/Testimonials";
import { QuickTips } from "../components/QuickTips";
import { BlogPreview } from "../components/BlogPreview";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { ChatWidget } from "../components/ChatWidget";
import { ScrollProgress } from "../components/ScrollProgress";
import { BackToTop } from "../components/BackToTop";
import { StructuredData } from "../components/structuredData";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <ScrollProgress />
      <div className="overflow-x-hidden">
        <Hero />
        <SocialProof />
        <HowWeHelp />
        <Services />
        <MyStory />
        <Testimonials />
        <QuickTips />
        <BlogPreview />
        <FAQ />
        <FinalCTA />
      </div>
      <ChatWidget />
      <BackToTop />
    </>
  );
}
