import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ChatProvider } from "../components/chatProvider";
import { LeadMagnet } from "../components/LeadMagnet";
import { BUSINESS_NAME, PRACTITIONER_NAME, SITE, SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: {
    default:
      "Functional Nutrition for Central Texas | Empowered Wellness with Inna",
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    SITE.description,
  keywords: [
    "functional nutrition",
    "functional nutrition Buda TX",
    "functional nutrition Kyle TX",
    "functional nutrition Austin TX",
    "functional nutrition San Marcos TX",
    "gut health specialist",
    "chronic fatigue nutrition support",
    "functional medicine testing",
    "GI-MAP testing",
    "DUTCH hormone testing",
    "digestive health",
    "women's health nutrition",
    "perimenopause support",
    "anxiety nutrition therapy",
    "brain fog nutrition support",
    "IBS functional nutrition",
  ],
  authors: [{ name: PRACTITIONER_NAME, url: SITE_URL }],
  creator: PRACTITIONER_NAME,
  publisher: BUSINESS_NAME,
  metadataBase: new URL(SITE_URL),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Functional Nutrition for Central Texas | Empowered Wellness with Inna",
    description: SITE.description,
    url: "/",
    siteName: BUSINESS_NAME,
    images: [
      {
        url: "/Inna.jpg",
        width: 2048,
        height: 2048,
        alt: "Inna Benyukhis, Certified Nutritional Therapy Practitioner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Functional Nutrition for Central Texas",
    description: SITE.description,
    images: ["/Inna.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
  classification: "Functional Nutrition and Health Services",
  other: {
    "practice.type": "Functional Nutrition",
    specialization: "Women's Health, Gut Health, Hormone Balance",
    certification: "CNTP Certified",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="theme-color" content="#315f52" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased">
        <ChatProvider>
          <div className="flex flex-col min-h-screen">
            {/* <PromoBanner /> */}
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <LeadMagnet autoOpen={true} />
          </div>
        </ChatProvider>
      </body>
    </html>
  );
}
