import type { Metadata } from "next";
import { Hero } from "../components/hero";
import {
  BlogPreview,
  FAQ,
  FinalCTA,
  HowWeHelp,
  MyStory,
  QuickTips,
  Services,
  SocialProof,
  Testimonials,
} from "../components/landingSections";
import { ChatWidget } from "../components/ChatWidget";
import { ScrollProgress } from "../components/ScrollProgress";
import { BackToTop } from "../components/BackToTop";
import { StructuredData } from "../components/structuredData";
import { CentralTexasServiceArea } from "../components/CentralTexasServiceArea";

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
        <CentralTexasServiceArea />
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
