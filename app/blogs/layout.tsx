import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Health Blog",
    template: "%s | Empowered Wellness with Inna",
  },
  description:
    "Evidence-informed articles about functional nutrition, gut health, stress, and women's wellbeing.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Health Blog",
    description:
      "Evidence-informed articles about functional nutrition, gut health, stress, and women's wellbeing.",
    url: "/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Blog",
    description:
      "Evidence-informed articles about functional nutrition, gut health, stress, and women's wellbeing.",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
