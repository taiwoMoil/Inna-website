import { Hero } from "../components/hero";
import { SocialProof } from "../components/SocialProof";
import { HowWeHelp } from "../components/HowWeHelp";
import { Services } from "../components/Services";
import { MyStory } from "../components/MyStory";
import { QuickTips } from "../components/QuickTips";
import { BlogPreview } from "../components/BlogPreview";
import { LeadMagnet } from "../components/LeadMagnet";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { ChatWidget } from "../components/ChatWidget";
import { ScrollProgress } from "../components/ScrollProgress";
import { BackToTop } from "../components/BackToTop";
import { CentralTexasServiceArea } from "../components/CentralTexasServiceArea";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="overflow-x-hidden">
        <Hero />
        <CentralTexasServiceArea />
        <SocialProof />
        <HowWeHelp />
        <Services />
        <MyStory />
        <QuickTips />
        <BlogPreview />
        <LeadMagnet />
        <FAQ />
        <FinalCTA />
      </div>
      <ChatWidget />
      <BackToTop />
    </>
  );
}
